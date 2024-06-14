<?php

namespace App\Http\Controllers;

use App\Models\Jugadores;
use App\Models\ResultadosPartidos;
use Illuminate\Http\Request;
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
            $jugadores = Jugadores::all();
        } else {
            $resultados = null;
        }
        dd($resultados,$jugadores);
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
