<?php

namespace App\Http\Controllers;

use App\Models\ProgramacionesFaces;
use App\Models\Fases;
use App\Models\Equipos;
use App\Models\lugarPartido;
use App\Models\torneo;
use Illuminate\Http\Request;
use App\Http\Requests\ProgramacionesFases\StoreRequest;
use App\Http\Requests\ProgramacionesFases\UpdateRequest;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProgramacionesFacesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // id de la fase
        $fase_id = $request->input('fase_id');
        if ($fase_id) {
            $fase = Fases::where('id', $fase_id)
                ->select('fases.nombreFase', 'fases.id', 'fases.fk_torneo')
                ->get();
            $torneo_id = Fases::where('id', $fase_id)
                ->value('fases.fk_torneo');
            $programaciones = DB::table('programaciones_faces as pf')
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
                    't.id as torneo_id',
                    'pf.id',
                    'pf.fk_fase', // Asegurarse de incluir fk_fase
                    'pf.fk_lugarPartido', // Asegurarse de incluir fk_lugarPartido
                    DB::raw('COALESCE(SUM(CASE WHEN rp.fk_jugador_id IN (SELECT id FROM jugadores WHERE fk_equipo = el.id) THEN rp.goles ELSE 0 END), 0) AS GolesLocal'),
                    DB::raw('COALESCE(SUM(CASE WHEN rp.fk_jugador_id IN (SELECT id FROM jugadores WHERE fk_equipo = ev.id) THEN rp.goles ELSE 0 END), 0) AS GolesVisitante')
                )
                ->where('fk_fase', $fase_id)
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
                    'pf.id',
                    'el.id',
                    'ev.id',
                    'pf.fk_fase', // Asegurarse de incluir fk_fase en el group by
                    'pf.fk_lugarPartido' // Asegurarse de incluir fk_lugarPartido en el group by
                )
                ->get();

            $cantidadEquipos = Torneo::join('fases', 'torneo.id', '=', 'fases.fk_torneo')
                ->where('fases.id', $fase_id)
                ->value('torneo.cantidadEquiposParticipantes');
            $equipos = Equipos::join('inscripciones', 'equipos.id', '=', 'inscripciones.fk_equipo')
                ->join('resultado_sorteos', 'equipos.id', '=', 'resultado_sorteos.fk_equipo')
                ->join('torneo', 'inscripciones.fk_torneo', '=', 'torneo.id')
                ->join('fases', 'torneo.id', '=', 'fases.fk_torneo')
                ->where('fases.id', $fase_id)
                ->select('equipos.id', 'equipos.nombreEquipo', 'resultado_sorteos.puesto')
                ->get();
            $lugares = lugarPartido::join('torneo', 'lugar_partidos.fk_torneo', '=', 'torneo.id')
                ->join('fases', 'torneo.id', '=', 'fases.fk_torneo')
                ->where('fases.id', $fase_id)
                ->select('lugar_partidos.id', 'lugar_partidos.nomLugar')
                ->get();
        } else {
            $fase = null;
            $programaciones = null;
            $equipos = null;
            $lugares = null;            
            $cantidadEquipos = null;
        }
        return Inertia::render('ProgramacionesFaces/index', [
            'programaciones' => $programaciones,
            'fase' => $fase,
            'fk_fase' => $fase_id,
            'equipos' => $equipos,
            'lugares' => $lugares,
            'cantidadEquipos' => $cantidadEquipos,
            'torneo_id' => $torneo_id,
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
