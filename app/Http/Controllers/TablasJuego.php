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
            ->join()
    
       /* $programacionTorneos = DB::table('programacion_torneos as p')
            ->join('jornada_partidos as jp', 'p.fk_jornadaPartido', '=', 'jp.id')
            ->leftJoin('resultado_sorteos as rs', function ($join) {
                $join->on('p.posicion_local', '=', 'rs.puesto')
                    ->on('rs.fk_torneo', '=', 'jp.fk_torneo');
            })
            ->leftJoin('resultado_sorteos as rs2', function ($join) {
                $join->on('p.posicion_visitante', '=', 'rs2.puesto')
                    ->on('rs2.fk_torneo', '=', 'jp.fk_torneo');
            })
            ->leftJoin('equipos as e1', 'rs.fk_equipo', '=', 'e1.id')
            ->leftJoin('equipos as e2', 'rs2.fk_equipo', '=', 'e2.id')
            ->where('jp.fk_torneo', $torneo_id)
            ->select(
                'p.id',
                'p.HoraPartido',
                'jp.jornada',
                'p.fk_lugarPartido',
                'e1.nombreEquipo as local',
                'e2.nombreEquipo as visitante',
                'e1.escudoEquipo as local_escudo',
                'e2.escudoEquipo as visitante_escudo',
                'rs.puesto as local_puesto',
                'rs2.puesto as visitante_puesto',
                'p.posicion_local',
                'p.posicion_visitante',

            )
            ->orderBy('jp.jornada')
            ->orderBy('p.HoraPartido')
            ->get();*/

        //dd($programacionTorneos);
        // Convertir hora a formato AM/PM y agrupar por jornada
        /*$programacionTorneos = $programacionTorneos->map(function ($item) {
            $item->HoraPartido = date('h:i A', strtotime($item->HoraPartido));
            return $item;
        })->groupBy('jornada')->toArray();*/
    
        return Inertia::render('TablasJuego/Index', [
            'torneo_id' => $torneo_id,
            'torneo' => $torneo,
            /*'programacionTorneos' => $programacionTorneos,*/
        ]);
    }
    
}
