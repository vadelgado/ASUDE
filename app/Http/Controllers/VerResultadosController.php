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
        'torneo.imgBannerSuperior')
        ->get();

        $resultados = DB::table('resultados_partidos as rs')
        ->join('jugadores as j', 'rs.fk_jugador_id', '=', 'j.id')
        ->join('equipos as e', 'j.fk_equipo', '=', 'e.id')
        ->join('resultado_sorteos as rso', 'e.id', '=', 'rso.fk_equipo')
        ->join('torneo as t', 'rso.fk_torneo', '=', 't.id')
        ->where('t.id', $torneo_id)
        ->select('e.nombreEquipo', DB::raw('SUM(rs.goles) as totalGoles'),
        DB::raw('SUM(rs.tarjetas_amarillas) as tarjetasAmarillas'),
        DB::raw('SUM(rs.tarjetas_rojas) as tarjetasRojas'))
        ->groupBy('e.nombreEquipo')
        ->get();
        
        dd($resultados, $torneo);
        return Inertia::render('VerResultados/Index',
        [ 'torneo' => $torneo],
        ['resultados' => $resultados]);
    }
}
