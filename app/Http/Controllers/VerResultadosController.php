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
            ->select('torneo.nombreTorneo', 'torneo.cantidadGrupos', 'torneo.cantidadEquiposParticipantes', 'torneo.imgBannerSuperior')
            ->get();
    
        $resultados = DB::table('resultados_partidos as rs')
            ->join('jugadores as j', 'rs.fk_jugador_id', '=', 'j.id')
            ->join('equipos as e', 'j.fk_equipo', '=', 'e.id')
            ->join('resultado_sorteos as rso', 'e.id', '=', 'rso.fk_equipo')
            ->join('torneo as t', 'rso.fk_torneo', '=', 't.id')
            ->where('t.id', $torneo_id)
            ->select('e.nombreEquipo',
                DB::raw('SUM(rs.goles) as GF'),
                DB::raw('SUM(rs.tarjetas_amarillas) as TA'),
                DB::raw('SUM(rs.tarjetas_rojas) as TR'),
                DB::raw('COUNT(DISTINCT rs.fk_programaciones_faces_id) as PJ'),
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
                )
            )
            ->groupBy('e.id', 'e.nombreEquipo')
            ->get();
    
        dd($resultados);
        return Inertia::render('VerResultados/Index', [
            'torneo' => $torneo,
            'resultados' => $resultados,
        ]);
    }
    
    
    
    
    


    

    
}
