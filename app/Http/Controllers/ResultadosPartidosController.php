<?php

namespace App\Http\Controllers;

use App\Models\Jugadores;
use App\Models\ResultadosPartidos;
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
        $programacion_id = $request->input('partido');
        if ($programacion_id) {
            $resultados = ResultadosPartidos::where('fk_programaciones_faces_id', $programacion_id)
                ->join('jugadores', 'resultados_partidos.fk_jugador_id', '=', 'jugadores.id')
                ->select('resultados_partidos.*', 'jugadores.id','jugadores.nombreCompleto')
                ->get();
        // Consulta para obtener jugadores del equipo local
        $jugadoresLocal = DB::table('programaciones_faces as pf')
            ->join('resultado_sorteos as rs_local', 'pf.posicion_local', '=', 'rs_local.puesto')
            ->join('equipos as e_local', 'rs_local.fk_equipo', '=', 'e_local.id')
            ->join('jugadores as j', 'e_local.id', '=', 'j.fk_equipo')
            ->where('pf.id', $programacion_id)
            ->select(DB::raw("'Local' as equipo"), 'j.nombreCompleto', 'j.numeroIdentificacion')
            ->get();
            $jugadoresVisitante = DB::table('programaciones_faces as pf')
            ->join('resultado_sorteos as rs_visitante', 'pf.posicion_visitante', '=', 'rs_visitante.puesto')
            ->join('equipos as e_visitante', 'rs_visitante.fk_equipo', '=', 'e_visitante.id')
            ->join('jugadores as j', 'e_visitante.id', '=', 'j.fk_equipo')
            ->where('pf.id', $programacion_id)
            ->select(DB::raw("'Visitante' as equipo"), 'j.nombreCompleto', 'j.numeroIdentificacion')
            ->get();

        // Combinar resultados
        $jugadores = $jugadoresLocal->merge($jugadoresVisitante);
            
        } else {
            $resultados = null;
        }
        dd($resultados,$jugadoresLocal, $jugadoresVisitante, $jugadores);
        return Inertia::render('ResultadosPartidos/Index', [
            'resultados' => $resultados,
            'programacion_id' => $programacion_id,
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ResultadosPartidos $resultadosPartidos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ResultadosPartidos $resultadosPartidos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ResultadosPartidos $resultadosPartidos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ResultadosPartidos $resultadosPartidos)
    {
        //
    }
}
