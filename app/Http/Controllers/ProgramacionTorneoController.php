<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProgramacionTorneo\StoreRequest;
use App\Http\Requests\ProgramacionTorneo\UpdateRequest;

use App\Models\programacionTorneo;
use App\Models\jornadaPartido;
use App\Models\lugarPartido;
use App\Models\resultadoSorteo;
use App\Models\equipos;
use App\Models\torneo;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProgramacionTorneoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //id del torneo
        $team_id = $request->input('team_id');        

        if ($team_id) {
            // jornadas de los partidos del torneo con id = $team_id
            $jornadas = jornadaPartido::where('fk_torneo', $team_id)->get();
            //lugares de los partidos disponibles
            $lugares = lugarPartido::all();
            //los resultados de los sorteos de los equipos que pertenecen al torneo con id = $team_id y sus respectivos equipos nombre del equipo de la tabla equipos
            $resultadoSorteos = DB::table('resultado_sorteos')
                ->join('equipos', 'resultado_sorteos.fk_equipo', '=', 'equipos.id')
                ->where('equipos.fk_torneo', $team_id)
                ->orderBy('grupoPosicion', 'asc')                
                ->select('resultado_sorteos.*', 'equipos.nombreEquipo', 'equipos.escudoEquipo')
                ->get();
            //programacion de los partidos del torneo con id = $team_id relacion 
            // con jornadaPartido,sesutadoSorteo y lugarPartido
            $programacionTorneo = DB::table('programacion_torneos')
                //->join('jornada_partidos', 'programacion_torneos.fk_jornadaPartido', '=', 'jornada_partidos.id')
                ->join('jornada_partidos', 'programacion_torneos.fk_jornadaPartido', '=', 'jornada_partidos.id')
                ->join('lugar_partidos', 'programacion_torneos.fk_lugarPartido', '=', 'lugar_partidos.id')
                ->join('equipos as equipoLocal', 'programacion_torneos.fk_equipoLocal', '=', 'equipoLocal.id')
                ->join('equipos as equipoVisitante', 'programacion_torneos.fk_equipoVisitante', '=', 'equipoVisitante.id')
                ->join('resultado_sorteos as resultadoSorteoLocal', 'equipoLocal.id', '=', 'resultadoSorteoLocal.fk_equipo')
                ->join('resultado_sorteos as resultadoSorteoVisitante', 'equipoVisitante.id', '=', 'resultadoSorteoVisitante.fk_equipo')
                ->where('jornada_partidos.fk_torneo', $team_id)
                ->select('programacion_torneos.*', 
                         'jornada_partidos.jornada', 
                         'lugar_partidos.nomLugar', 
                         'equipoLocal.nombreEquipo as nombreEquipoLocal', 
                         'equipoLocal.escudoEquipo as escudoEquipoLocal', 
                         'equipoVisitante.nombreEquipo as nombreEquipoVisitante',
                         'equipoVisitante.escudoEquipo as escudoEquipoVisitante', 
                         'resultadoSorteoLocal.grupoPosicion as grupoPosicionLocal', 
                         'resultadoSorteoVisitante.grupoPosicion as grupoPosicionVisitante')
                ->orderBy('jornada_partidos.jornada', 'asc')
                ->get();  
                //dd($programacionTorneo);         
            
        } else {
            $jornadas = jornadaPartido::all();
            $lugares = lugarPartido::all();
            $resultadoSorteos = resultadoSorteo::all();
            $programacionTorneo = programacionTorneo::all();
        }


        return Inertia::render('ProgramacionTorneo/Index', [
            'jornadas' => $jornadas,
            'lugares' => $lugares,
            'resultadoSorteos' => $resultadoSorteos,
            'programacionTorneo' => $programacionTorneo,
        ]);
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
    public function store(StoreRequest $request)
    {
        //
        $data = $request->only('HoraPartido', 'fk_jornadaPartido', 'fk_lugarPartido', 'fk_equipoLocal', 'fk_equipoVisitante');
        programacionTorneo::create($data);
        return redirect()->route('programacionTorneo.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(programacionTorneo $programacionTorneo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(programacionTorneo $programacionTorneo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, $id)
    {
        //
        $data = $request->only('HoraPartido', 
                               'fk_jornadaPartido', 
                               'fk_lugarPartido', 
                               'fk_equipoLocal', 
                               'fk_equipoVisitante');
        $programacionTorneo = programacionTorneo::find($id);
        $programacionTorneo->update($data);        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(programacionTorneo $programacionTorneo)
    {
        $programacionTorneo->delete();       
    }
}
