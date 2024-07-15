<?php

namespace App\Http\Controllers; 

use App\Models\torneo;
use App\Models\lugarPartido;
use App\Models\ResultadoSorteo;
use App\Models\Equipos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class TablasGruposController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $request->validate([
            'torneo_id' => 'required|integer|exists:torneo,id',
        ]);

        $torneo_id = $request->input('torneo_id');

        $tablasGrupos = ResultadoSorteo::join('equipos', 'resultado_sorteos.fk_equipo', '=', 'equipos.id')
            ->join('torneo', 'resultado_sorteos.fk_torneo', '=', 'torneo.id')
            ->where('torneo.id', $torneo_id)
            ->select(
            'equipos.id',
            'equipos.nombreEquipo',
            'equipos.escudoEquipo' , 
            'resultado_sorteos.puesto')
            ->orderBy('resultado_sorteos.puesto', 'asc')
            ->get();        
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
        //dd($torneo);  
        $resultadosGoles = DB::table('resultados_partidos as rs')
        ->join('jugadores as j', 'rs.fk_jugador_id', '=', 'j.id')
        ->join('equipos as e', 'j.fk_equipo', '=', 'e.id')
        ->join('resultado_sorteos as rso', 'e.id', '=', 'rso.fk_equipo')
        ->join('torneo as t', 'rso.fk_torneo', '=', 't.id')
        ->where('t.id', $torneo_id)
        ->select(
    'j.nombreCompleto', 
            'j.foto',
          'e.nombreEquipo', 
          'e.escudoEquipo',
          DB::raw('SUM(rs.goles) as goles')
          )
        ->groupBy('j.nombreCompleto', 'e.nombreEquipo','j.foto','e.escudoEquipo'
        )
        ->havingRaw('SUM(rs.goles) >= 1')
        ->orderBy('goles', 'desc')
        ->limit(10)
        ->get();
        return Inertia::render('ResultadoSorteo/ShouwTablaGrupos', 
        ['tablasGrupos' => $tablasGrupos, 
        /*'programacionTorneo' => $programacionTorneo*/
        'torneo' => $torneo,
        'resultadosGoles' => $resultadosGoles]); 
    }
    public function Equipo($id)
    {
        $equipo = Equipos::where('equipos.id', $id)
            ->leftJoin('jugadores as j', 'equipos.id', '=', 'j.fk_equipo')
            ->leftJoin('resultados_partidos as rs', 'j.id', '=', 'rs.fk_jugador_id')
            ->select(
                'equipos.nombreEquipo',
                'equipos.escudoEquipo',
                'j.nombreCompleto',
                'j.foto',
                DB::raw('COALESCE(SUM(rs.goles), 0) as golesTotales'),
                DB::raw('COALESCE(SUM(rs.tarjetas_amarillas), 0) as tarjetasAmarillasTotales'),
                DB::raw('COALESCE(SUM(rs.tarjetas_rojas), 0) as tarjetasRojasTotales')
            )
            ->groupBy(
                'equipos.nombreEquipo', 
                'equipos.escudoEquipo', 
                'j.nombreCompleto', 
                'j.foto'
            )
            ->orderBy('golesTotales', 'desc')
            ->get();
    
        return Inertia::render('Team', ['equipo' => $equipo]);
    }
    
    
    


}
