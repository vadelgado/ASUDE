<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\torneo;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class VerResultadosController extends Controller
{
    public function index(Request $request)
    {
        $request->validate([
            'torneo_id' => 'required|integer|exists:torneo,id',
        ]);
    
        $torneo_id = $request->input('torneo_id');
    
        $torneo = torneo::where('id', $torneo_id)
            ->select('torneo.nombreTorneo','torneo.cantidadGrupos','torneo.cantidadEquiposParticipantes',
            'torneo.imgBannerSuperior',
            'torneo.imgBannerInferiorIz',
            'torneo.imgBannerInferiorDe',
            'torneo.fechaInicio',
            'torneo.fechaFin',
            'torneo.caracteristicas',
            'torneo.ApoyoPrincipal',
            'torneo.Aval',)
            ->get();
    
        $resultados = DB::table('resultados_partidos as rs')
            ->join('jugadores as j', 'rs.fk_jugador_id', '=', 'j.id')
            ->join('equipos as e', 'j.fk_equipo', '=', 'e.id')
            ->join('resultado_sorteos as rso', 'e.id', '=', 'rso.fk_equipo')
            ->join('torneo as t', 'rso.fk_torneo', '=', 't.id')


            ->where('t.id', $torneo_id)
            ->select(
              DB::raw('COUNT(DISTINCT rs.fk_programaciones_faces_id) as PJ'),
              'e.nombreEquipo',
              DB::raw('(SELECT COUNT(*) 
              FROM (SELECT rp.fk_programaciones_faces_id, j.fk_equipo, SUM(rp.goles) as goles_equipo
                    FROM resultados_partidos rp 
                    JOIN jugadores j ON rp.fk_jugador_id = j.id 
                    GROUP BY rp.fk_programaciones_faces_id, j.fk_equipo) as subquery 
              WHERE subquery.fk_equipo = e.id 
                AND subquery.goles_equipo > 
                  (SELECT SUM(rp2.goles) 
                   FROM resultados_partidos rp2 
                   JOIN jugadores j2 ON rp2.fk_jugador_id = j2.id 
                   WHERE rp2.fk_programaciones_faces_id = subquery.fk_programaciones_faces_id 
                     AND j2.fk_equipo != e.id)) as PG'
    ),
    DB::raw('(SELECT COUNT(*) 
              FROM (SELECT rp.fk_programaciones_faces_id, j.fk_equipo, SUM(rp.goles) as goles_equipo
                    FROM resultados_partidos rp 
                    JOIN jugadores j ON rp.fk_jugador_id = j.id 
                    GROUP BY rp.fk_programaciones_faces_id, j.fk_equipo) as subquery 
              WHERE subquery.fk_equipo = e.id 
                AND subquery.goles_equipo = 
                  (SELECT SUM(rp2.goles) 
                   FROM resultados_partidos rp2 
                   JOIN jugadores j2 ON rp2.fk_jugador_id = j2.id 
                   WHERE rp2.fk_programaciones_faces_id = subquery.fk_programaciones_faces_id 
                     AND j2.fk_equipo != e.id)) as PE'
    ),
    DB::raw('(SELECT COUNT(*) 
              FROM (SELECT rp.fk_programaciones_faces_id, j.fk_equipo, SUM(rp.goles) as goles_equipo
                    FROM resultados_partidos rp 
                    JOIN jugadores j ON rp.fk_jugador_id = j.id 
                    GROUP BY rp.fk_programaciones_faces_id, j.fk_equipo) as subquery 
              WHERE subquery.fk_equipo = e.id 
                AND subquery.goles_equipo < 
                  (SELECT SUM(rp2.goles) 
                   FROM resultados_partidos rp2 
                   JOIN jugadores j2 ON rp2.fk_jugador_id = j2.id 
                   WHERE rp2.fk_programaciones_faces_id = subquery.fk_programaciones_faces_id 
                     AND j2.fk_equipo != e.id)) as PP'
    ),

              DB::raw('COALESCE(SUM(rs.goles)) as GF'),
              DB::raw('(SELECT SUM(rp.goles)
              FROM resultados_partidos rp
              JOIN jugadores j ON rp.fk_jugador_id = j.id
              WHERE j.fk_equipo != e.id
              AND rp.fk_programaciones_faces_id IN (
                  SELECT DISTINCT rs.fk_programaciones_faces_id
                  FROM resultados_partidos rs
                  JOIN jugadores j2 ON rs.fk_jugador_id = j2.id
                  WHERE j2.fk_equipo = e.id
              )) as GC'),
              DB::raw('COALESCE(SUM(rs.goles), 0) - (SELECT SUM(rp.goles)
              FROM resultados_partidos rp
              JOIN jugadores j ON rp.fk_jugador_id = j.id
              WHERE j.fk_equipo != e.id
              AND rp.fk_programaciones_faces_id IN (
                  SELECT DISTINCT rs.fk_programaciones_faces_id
                  FROM resultados_partidos rs
                  JOIN jugadores j2 ON rs.fk_jugador_id = j2.id
                  WHERE j2.fk_equipo = e.id
              )) as DG'),
              DB::raw('COALESCE(SUM(rs.tarjetas_amarillas), 0) as TA'),
              DB::raw('COALESCE(SUM(rs.tarjetas_rojas), 0) as TR'),        
              DB::raw('COALESCE(SUM(rs.tarjetas_amarillas)*5, 0) + COALESCE(SUM(rs.tarjetas_rojas)*10, 0)  as JL'),
              DB::raw('(3 * 
              (SELECT COUNT(*) 
               FROM (SELECT rp.fk_programaciones_faces_id, j.fk_equipo, SUM(rp.goles) as goles_equipo
                     FROM resultados_partidos rp 
                     JOIN jugadores j ON rp.fk_jugador_id = j.id 
                     GROUP BY rp.fk_programaciones_faces_id, j.fk_equipo) as subquery 
               WHERE subquery.fk_equipo = e.id 
                 AND subquery.goles_equipo > 
                   (SELECT SUM(rp2.goles) 
                    FROM resultados_partidos rp2 
                    JOIN jugadores j2 ON rp2.fk_jugador_id = j2.id 
                    WHERE rp2.fk_programaciones_faces_id = subquery.fk_programaciones_faces_id 
                      AND j2.fk_equipo != e.id)) + 
              1 * 
              (SELECT COUNT(*) 
               FROM (SELECT rp.fk_programaciones_faces_id, j.fk_equipo, SUM(rp.goles) as goles_equipo
                     FROM resultados_partidos rp 
                     JOIN jugadores j ON rp.fk_jugador_id = j.id 
                     GROUP BY rp.fk_programaciones_faces_id, j.fk_equipo) as subquery 
               WHERE subquery.fk_equipo = e.id 
                 AND subquery.goles_equipo = 
                   (SELECT SUM(rp2.goles) 
                    FROM resultados_partidos rp2 
                    JOIN jugadores j2 ON rp2.fk_jugador_id = j2.id 
                    WHERE rp2.fk_programaciones_faces_id = subquery.fk_programaciones_faces_id 
                      AND j2.fk_equipo != e.id))) as Pts'
    ),


            )
            ->groupBy('e.nombreEquipo', 'e.id')
            ->orderBy('Pts', 'desc')
            ->orderBy('JL')
            ->orderBy('PG', 'desc')
            ->orderBy('DG', 'desc')
            ->orderBy('GF', 'desc')
            ->get();

            $resultadosGoles = DB::table('resultados_partidos as rs')
            ->join('jugadores as j', 'rs.fk_jugador_id', '=', 'j.id')
            ->join('equipos as e', 'j.fk_equipo', '=', 'e.id')
            ->join('resultado_sorteos as rso', 'e.id', '=', 'rso.fk_equipo')
            ->join('torneo as t', 'rso.fk_torneo', '=', 't.id')
            ->select(
        'j.nombreCompleto', 
              'e.nombreEquipo', 
              DB::raw('SUM(rs.goles) as goles')
              )
            ->groupBy('j.nombreCompleto', 'e.nombreEquipo',
            )
            ->havingRaw('SUM(rs.goles) >= 1')
            ->orderBy('goles', 'desc')
            ->get();

            $tablaJuegoLimpio = DB::table('resultados_partidos as rs')
            ->join('jugadores as j', 'rs.fk_jugador_id', '=', 'j.id')
            ->join('equipos as e', 'j.fk_equipo', '=', 'e.id')
            ->join('resultado_sorteos as rso', 'e.id', '=', 'rso.fk_equipo')
            ->join('torneo as t', 'rso.fk_torneo', '=', 't.id')
            ->select(
            'j.nombreCompleto', 
            'e.nombreEquipo', 
            DB::raw('SUM(rs.tarjetas_amarillas) as tarjetas_amarillas'), 
            DB::raw('SUM(rs.tarjetas_rojas) as tarjetas_rojas'))
            ->groupBy(
            'j.nombreCompleto', 
            'e.nombreEquipo'
            )
            ->havingRaw('SUM(rs.tarjetas_amarillas) >= 1')
            ->orHavingRaw('SUM(rs.tarjetas_rojas) >= 1')
            ->orderBy('tarjetas_amarillas', 'desc')
            ->orderBy('tarjetas_rojas', 'desc')
            ->get();

            //dd($resultadosGoles);
    
        //dd($tablaJuegoLimpio);
        return Inertia::render('VerResultados/Index', [
            'torneo' => $torneo,
            'resultados' => $resultados,
            'resultadosGoles' => $resultadosGoles,
            'tablaJuegoLimpio' => $tablaJuegoLimpio
        ]);
    }
    
 
    
    
    
    
    
    
    
    
    
    
    
    


    

    
}
