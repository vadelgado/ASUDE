<?php

namespace App\Http\Controllers; 

use App\Models\torneo;
use App\Models\programacionTorneo;
use App\Models\jornadaPartido;
use App\Models\lugarPartido;
use App\Models\ResultadoSorteo;
use App\Models\Equipos;
use Illuminate\Http\Request;
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
            ->join('torneo', 'equipos.fk_torneo', '=', 'torneo.id')
            ->where('torneo.id', $torneo_id)
            ->select('equipos.nombreEquipo','equipos.escudoEquipo' , 'resultado_sorteos.grupoPosicion')
            ->orderBy('resultado_sorteos.grupoPosicion')
            ->get();

        $programacionTorneo = programacionTorneo::join('torneo', 'programacion_torneos.fk_torneo', '=', 'torneo.id')
            ->join('jornada_partidos', 'programacion_torneos.fk_jornadaPartido', '=', 'jornada_partidos.id')
            ->join('lugar_partidos', 'programacion_torneos.fk_lugarPartido', '=', 'lugar_partidos.id')
            ->join('resultado_sorteos as local', 'programacion_torneos.fk_equipoLocal', '=', 'local.id')
            ->join('resultado_sorteos as visitante', 'programacion_torneos.fk_equipoVisitante', '=', 'visitante.id')
            ->join('equipos as elocal', 'local.fk_equipo', '=', 'elocal.id')
            ->join('equipos as evisitante', 'visitante.fk_equipo', '=', 'evisitante.id')
            ->select('evisitante.nombreEquipo as visitante','lugar_partidos.nomLugar','elocal.nombreEquipo as local','jornada_partidos.jornada','programacion_torneos.HoraPartido', 'torneo.nombreTorneo')
            ->where('torneo.id', $torneo_id)
            ->get();
        
        $torneo = torneo::where('id', $torneo_id)
            ->select('torneo.nombreTorneo','torneo.cantidadGrupos','torneo.cantidadEquiposParticipantes')
            ->get();
        //dd($torneo);  
        return Inertia::render('ResultadoSorteo/ShouwTablaGrupos', 
        ['tablasGrupos' => $tablasGrupos, 
        'programacionTorneo' => $programacionTorneo
        ,'torneo' => $torneo]); 
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(TablasGrupos $tablasGrupos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TablasGrupos $tablasGrupos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TablasGrupos $tablasGrupos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TablasGrupos $tablasGrupos)
    {
        //
    }
}
