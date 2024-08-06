<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProgramacionesFaces;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class TournamentSchedule extends Controller
{
        
    public function index(Request $request)
    {
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
            ->leftJoin('resultados_partidos as rp_local', function ($join) {
                $join->on('pf.id', '=', 'rp_local.fk_programaciones_faces_id')
                    ->on('el.id', '=', 'rp_local.fk_jugador_id');
            })
            ->leftJoin('resultados_partidos as rp_visitante', function ($join) {
                $join->on('pf.id', '=', 'rp_visitante.fk_programaciones_faces_id')
                    ->on('ev.id', '=', 'rp_visitante.fk_jugador_id');
            })
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
                't.id as torneo',
                'pf.id as partido',
                DB::raw('COALESCE(SUM(rp_local.goles), 0) as golesLocal'),
                DB::raw('COALESCE(SUM(rp_visitante.goles), 0) as golesVisitante')
            )
            ->whereIn('t.estadoTorneo', ['Por Iniciar', 'En Juego'])
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
                't.id',
                'pf.id'
            )
            ->get();
    
        return Inertia::render('DashBoard/TournamentSchedule', [
            'programaciones_faces' => $programaciones_faces
        ]);
    }
    
        
}
