<?php

namespace App\Http\Controllers;

use App\Models\FaltasCuerpoTecnico;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class FaltasCuerpoTecnicoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $fk_programaciones_faces_id = $request->input('partido');
        if($fk_programaciones_faces_id){
            $faltasCuerpoTecnico = FaltasCuerpoTecnico::where('fk_programaciones_faces_id', $fk_programaciones_faces_id)
                ->join('amonestaciones_t_c_s as amon', 'faltas_cuerpo_tecnicos.fk_amonestaciones_t_c_s_id', '=', 'amon.id')
                ->join('cuerpo_tecnico as ct', 'faltas_cuerpo_tecnicos.fk_cuerpo_tecnico_id', '=', 'ct.id')
                ->join('programaciones_faces as pf', 'faltas_cuerpo_tecnicos.fk_programaciones_faces_id', '=', 'pf.id')
                ->join('equipos as e', 'ct.fk_equipo', '=', 'e.id')
                ->select('faltas_cuerpo_tecnicos.*', 'amon.*', 
                'ct.nombreCompleto', 
                'pf.FechaPartido','pf.HoraPartido',
                'e.nombreEquipo')
                ->get();
            $cuerpoTecnico = DB::table('cuerpo_tecnico as ct')
                ->join('equipos as e', 'ct.fk_equipo', '=', 'e.id')
                ->unionAll(
                    DB::table('programaciones_faces as pf')
->join('resultado_sorteos as rs_local', 'pf.posicion_local', '=', 'rs_local.puesto')
                        ->join('equipos as e_local', 'rs_local.fk_equipo', '=', 'e_local.id')
                    )

                //->join('faltas_cuerpo_tecnicos as fct', 'ct.id', '=', 'fct.fk_cuerpo_tecnico_id')
                //->join('programaciones_faces as pf', 'fct.fk_programaciones_faces_id', '=', 'pf.id')
                //->where('fct.fk_programaciones_faces_id', $fk_programaciones_faces_id)
                ->select('ct.id', 'ct.nombreCompleto', 'e.nombreEquipo')

                ->get();
                $fk_programaciones_faces_id = DB::table('programaciones_faces as pf')
                ->where('pf.id', $fk_programaciones_faces_id)
                ->select('pf.id')
                ->get();

        } else {
            $faltasCuerpoTecnico = null;
        }
        dd($faltasCuerpoTecnico, $fk_programaciones_faces_id, $cuerpoTecnico);
        return Inertia::render('FaltasCuerpoTecnico/Index', [
            'faltas_cuerpo_tecnicos' => $faltasCuerpoTecnico,
            'fk_programaciones_faces_id' => $fk_programaciones_faces_id,
            'cuerpo_tecnico' => $cuerpoTecnico
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
    public function show(FaltasCuerpoTecnico $faltasCuerpoTecnico)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FaltasCuerpoTecnico $faltasCuerpoTecnico)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FaltasCuerpoTecnico $faltasCuerpoTecnico)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FaltasCuerpoTecnico $faltasCuerpoTecnico)
    {
        //
    }
}
