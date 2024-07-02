<?php

namespace App\Http\Controllers;

use App\Models\torneo;
use App\Models\programacionTorneo;
use App\Models\jornadaPartido;
use App\Models\lugarPartido;
use App\Models\ResultadoSorteo;
use App\Models\Equipos;

use Illuminate\Support\Facades\DB;


use Illuminate\Http\Request;
use Inertia\Inertia;

class TablasJuego extends Controller
{
    public function index(Request $request)
    {
        $request->validate([
            'torneo_id' => 'required|integer|exists:torneo,id',
        ]);
    
        $torneo_id = $request->input('torneo_id');
    
        $torneo = torneo::where('id', $torneo_id)
            ->select(
                'torneo.nombreTorneo',
                'torneo.caracteristicas',
                'torneo.fechaInicio',
                'torneo.fechaFin',
                'torneo.cantidadGrupos',
                'torneo.cantidadEquiposParticipantes',
                'torneo.imgBannerSuperior',
                'torneo.imgBannerInferiorIz',
                'torneo.imgBannerInferiorDe',
                'torneo.Aval',
                'torneo.ApoyoPrincipal',
                'torneo.reglamentacion'
            )
            ->first();
    
            $programaciones_faces = DB::table('programaciones_faces as pf')
            ->join('fases as f', 'pf.fk_fase', '=', 'f.id')
            ->join('torneo as t', 'f.fk_torneo', '=', 't.id')
            ->join('lugar_partidos as lp', 'pf.fk_lugarPartido', '=', 'lp.id')
            ->leftJoin('resultado_sorteos as rs_local', function ($join) {
                $join->on('pf.posicion_local', '=', 'rs_local.puesto')
                    ->on('rs_local.fk_torneo', '=', 'f.fk_torneo');
            })
            ->leftJoin('resultado_sorteos as rs_visitante', function ($join) {
                $join->on('pf.posicion_visitante', '=', 'rs_visitante.puesto')
                    ->on('rs_visitante.fk_torneo', '=', 'f.fk_torneo');
            })
            ->leftJoin('equipos as el', 'rs_local.fk_equipo', '=', 'el.id')
            ->leftJoin('equipos as ev', 'rs_visitante.fk_equipo', '=', 'ev.id')
            ->leftJoin('resultados_partidos as rp', 'pf.id', '=', 'rp.fk_programaciones_faces_id')
            ->select(
                'f.nombreFase',
                'pf.posicion_local',
                'pf.posicion_visitante',
                'pf.FechaPartido',
                'pf.HoraPartido',
                'lp.nomLugar',
                'lp.geolocalizacion',
                'el.nombreEquipo as nombreEquipoLocal',
                'el.escudoEquipo as escudoEquipoLocal',
                'rs_local.puesto as puestoLocal',
                'ev.nombreEquipo as nombreEquipoVisitante',
                'ev.escudoEquipo as escudoEquipoVisitante',
                'rs_visitante.puesto as puestoVisitante',
                DB::raw('COALESCE(SUM(CASE WHEN rp.fk_jugador_id IN (SELECT id FROM jugadores WHERE fk_equipo = el.id) THEN rp.goles ELSE 0 END), 0) AS GolesLocal'),
                DB::raw('COALESCE(SUM(CASE WHEN rp.fk_jugador_id IN (SELECT id FROM jugadores WHERE fk_equipo = ev.id) THEN rp.goles ELSE 0 END), 0) AS GolesVisitante')
            )
            ->where('t.id', $torneo_id)
            ->groupBy(
                'f.nombreFase',
                'pf.posicion_local',
                'pf.posicion_visitante',
                'pf.FechaPartido',
                'pf.HoraPartido',
                'lp.nomLugar',
                'lp.geolocalizacion',
                'el.nombreEquipo',
                'el.escudoEquipo',
                'rs_local.puesto',
                'ev.nombreEquipo',
                'ev.escudoEquipo',
                'rs_visitante.puesto',
                'el.id',
                'ev.id'

            )
            ->get();
        
              //dd($programaciones_faces);
        return Inertia::render('TablasJuego/Index', [
            'torneo_id' => $torneo_id,
            'torneo' => $torneo,
            'programaciones_faces' => $programaciones_faces,
        ]);
    }
    
    
    
    
}
