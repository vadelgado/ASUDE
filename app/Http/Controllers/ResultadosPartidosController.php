<?php

namespace App\Http\Controllers;

use App\Models\Jugadores;
use App\Models\ResultadosPartidos;
use App\Http\Requests\ResultadosPartidos\StoreRequest;
use App\Http\Requests\ResultadosPartidos\UpdateRequest;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ResultadosPartidosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)    
    {
        //id de la ProgramacionesFaces
        $fk_programaciones_faces_id = $request->input('partido');
        $torneo_id = $request->input('torneo');
        if ($fk_programaciones_faces_id) {
            /*$resultados = ResultadosPartidos::where('fk_programaciones_faces_id', $programacion_id)
                ->join('jugadores', 'resultados_partidos.fk_jugador_id', '=', 'jugadores.id')
                ->select('resultados_partidos.*', 'jugadores.id','jugadores.nombreCompleto')
                ->get();*/
                $resultados = DB::table('resultados_partidos')
                ->join('jugadores', 'resultados_partidos.fk_jugador_id', '=', 'jugadores.id')
                ->join('equipos', 'jugadores.fk_equipo', '=', 'equipos.id')
                ->select('resultados_partidos.*', 'jugadores.nombreCompleto', 'equipos.nombreEquipo')
                ->where('resultados_partidos.fk_programaciones_faces_id', $fk_programaciones_faces_id)
                ->get();

                $idPartido = DB::table('programaciones_faces as pf')
                ->where('pf.id', $fk_programaciones_faces_id)
                ->select('pf.id')
                ->get();

                $jugadores = DB::table('programaciones_faces as pf')
                ->join('resultado_sorteos as rs_local', 'pf.posicion_local', '=', 'rs_local.puesto')
                ->join('equipos as e_local', 'rs_local.fk_equipo', '=', 'e_local.id')
                ->join('jugadores as j', 'e_local.id', '=', 'j.fk_equipo')
                ->join('torneo as t', 'rs_local.fk_torneo', '=', 't.id')
                ->where('pf.id', $fk_programaciones_faces_id)
                ->where('t.id', $torneo_id)
                ->select(DB::raw("'Local' as equipo"), 'j.nombreCompleto', 'j.id', 'e_local.nombreEquipo')
                ->unionAll(
                    DB::table('programaciones_faces as pf')
                        ->join('resultado_sorteos as rs_visitante', 'pf.posicion_visitante', '=', 'rs_visitante.puesto')
                        ->join('equipos as e_visitante', 'rs_visitante.fk_equipo', '=', 'e_visitante.id')
                        ->join('jugadores as j', 'e_visitante.id', '=', 'j.fk_equipo')
                        ->join('torneo as t', 'rs_visitante.fk_torneo', '=', 't.id')                        
                        ->where('pf.id', $fk_programaciones_faces_id)
                        ->where('t.id', $torneo_id)                        
                        ->select(DB::raw("'Visitante' as equipo"), 'j.nombreCompleto', 'j.id', 'e_visitante.nombreEquipo')
                )
                ->where('j.estado', 1)
                ->get();
            
        } else {
            $resultados = null;
        }
      //dd($jugadores);
        return Inertia::render('ResultadosPartidos/Index', [
            'jugadores' => $jugadores,
            '$fk_programaciones_faces_id' => $fk_programaciones_faces_id,
            'idPartido' => $idPartido,
            'resultados' => $resultados
        ]);
        
    }

    public function store(StoreRequest $request)
    {
        $data = $request->validated();        
        ResultadosPartidos::create($data);   
    }

    public function update(UpdateRequest $request, $id)
    {
        $data = $request->all();
        $resultadosPartidos = ResultadosPartidos::find($id);
        $resultadosPartidos->update($data);
    }

    public function destroy($id)
    {
        $resultadosPartidos = ResultadosPartidos::find($id);
        $resultadosPartidos->delete();
    }
}
