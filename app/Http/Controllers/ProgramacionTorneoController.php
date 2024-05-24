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
            $jornadas = jornadaPartido::where('fk_torneo', $team_id)
            ->orderBy('jornada', 'asc')
            ->get();
            //lugares de los partidos disponibles
            $lugares = lugarPartido::where('fk_torneo', $team_id)
            ->orderBy('nomLugar', 'asc')
            ->get();


            $cantidadEquipos = Torneo::where('id', $team_id)
            ->value('cantidadEquiposParticipantes');

            $programacionTorneo = programacionTorneo::join('jornada_partidos', 'programacion_torneos.fk_jornadaPartido', '=', 'jornada_partidos.id')
            ->join('lugar_partidos', 'programacion_torneos.fk_lugarPartido', '=', 'lugar_partidos.id')
            ->join('torneo', 'jornada_partidos.fk_torneo', '=', 'torneo.id') 
            ->where('jornada_partidos.fk_torneo', $team_id)
            ->select('programacion_torneos.*', 'jornada_partidos.jornada', 'lugar_partidos.nomLugar')
            ->orderBy('fk_jornadaPartido', 'asc')
            ->orderBy('HoraPartido', 'asc')
            ->get();         
        } else {
            $jornadas = null;
            $lugares = null;
            $resultadoSorteos = null;
            $programacionTorneo = null;
            $cantidadEquipos = null;
        }
        //dd($programacionTorneo, $jornadas, $lugares,'Equipos', $cantidadEquipos);
        return Inertia::render('ProgramacionTorneo/Index', [
            'jornadas' => $jornadas,
            'lugares' => $lugares,            
            'programacionTorneo' => $programacionTorneo,
            'fk_torneo' => $team_id,
            'cantidadEquipos' => $cantidadEquipos
        ]);
    }

    public function store(StoreRequest $request)
    {        
        $data = $request->only('HoraPartido',
                                'fk_jornadaPartido',
                                'fk_lugarPartido',
                                'posicion_local',
                                'posicion_visitante');
        programacionTorneo::create($data);        
    }

    public function update(UpdateRequest $request, $id)
    {
        //
        $data = $request->only('HoraPartido',                                 
                               'fk_jornadaPartido', 
                               'fk_lugarPartido', 
                               'posicion_local', 
                               'posicion_visitante');
        $programacionTorneo = programacionTorneo::find($id);
        $programacionTorneo->update($data);        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $programacionTorneo = programacionTorneo::find($id);
        $programacionTorneo->delete();       
    }
}
