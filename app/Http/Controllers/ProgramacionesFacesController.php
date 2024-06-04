<?php

namespace App\Http\Controllers;

use App\Models\ProgramacionesFaces;
use App\Models\Fases;
use App\Models\Equipos;
use App\Models\lugarPartido;
use Illuminate\Http\Request;
use App\Http\Requests\ProgramacionesFases\StoreRequest;
use App\Http\Requests\ProgramacionesFases\UpdateRequest;
use Inertia\Inertia;

class ProgramacionesFacesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //id de la fase
        $fase_id = $request->input('fase_id');
        if ($fase_id) {
            $fase = Fases::where('id', $fase_id)
                ->select('fases.nombreFase', 'fases.id', 'fases.fk_torneo')
                ->get();
            $programaciones = ProgramacionesFaces::where('fk_fase', $fase_id)
                ->join('equipos as local', 'programaciones_faces.fk_equipo_local', '=', 'local.id')
                ->join('equipos as visitante', 'programaciones_faces.fk_equipo_visitante', '=', 'visitante.id')
                ->join('lugar_partidos', 'programaciones_faces.fk_lugarPartido', '=', 'lugar_partidos.id')
                ->select('programaciones_faces.*', 'local.nombreEquipo as equipoLocal', 'visitante.nombreEquipo as equipoVisitante', 'FechaPartido', 'HoraPartido', 'lugar_partidos.nomLugar')
                ->orderBy('FechaPartido')
                ->get();
            $equipos = Equipos::join('inscripciones', 'equipos.id', '=', 'inscripciones.fk_equipo')
                ->join('torneo', 'inscripciones.fk_torneo', '=', 'torneo.id')
                ->join('fases', 'torneo.id', '=', 'fases.fk_torneo')
                ->where('fases.id', $fase_id)
                ->select('equipos.id', 'equipos.nombreEquipo')
                ->get();
            $lugares = lugarPartido::join('torneo', 'lugar_partidos.fk_torneo', '=', 'torneo.id')
                ->join('fases', 'torneo.id', '=', 'fases.fk_torneo')
                ->where('fases.id', $fase_id)
                ->select('lugar_partidos.id', 'lugar_partidos.nomLugar')
                ->get();
                //dd($programaciones, $equipos, $lugares, $fase);
        } else {
            $fase = null;
            $programaciones = null;
            $equipos = null;
            $lugares = null;            
        }
        return Inertia::render('ProgramacionesFaces/Index', [
            'programaciones' => $programaciones,
            'fase' => $fase,
            'fk_fase' => $fase_id,
            'equipos' => $equipos,
            'lugares' => $lugares
        ]);
    }

    public function store(StoreRequest $request)
    {
        $data = $request->all();
        $data['fk_fase'] = $request->input('fk_fase');
        ProgramacionesFaces::create($data);
    }

    public function update(UpdateRequest $request,  $id)
    {
        $data = $request->all();
        $data['fk_fase'] = $request->input('fk_fase');
        $programacionesFaces = ProgramacionesFaces::find($id);
        $programacionesFaces->update($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $programacionesFaces = ProgramacionesFaces::find($id);
        $programacionesFaces->delete();
    }
}
