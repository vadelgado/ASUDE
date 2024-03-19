<?php

namespace App\Http\Controllers;

use App\Models\ResultadoSorteo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Equipos;
use App\Models\torneo;
use Illuminate\Validation\Rule;



use Inertia\Inertia;



class ResultadoSorteoController extends Controller
{

    public function index(Request $request)
    {
        $team_id = $request->input('team_id');

        if ($team_id) {
            // los equipos que perteneces al torno con id = $team_id

            
            $equipos = Equipos::where('fk_torneo', $team_id)->get();

            //los resultados de los sorteos de los equipos que pertenecen al torneo con id = $team_id y sus respectivos equipos nombre del equipo de la tabla equipos
            $resultadoSorteos = DB::table('resultado_sorteos')
                ->join('equipos', 'resultado_sorteos.fk_equipo', '=', 'equipos.id')
                ->where('equipos.fk_torneo', $team_id)
                ->orderBy('grupo', 'asc')
                ->orderBy('posicion', 'asc')
                ->select('resultado_sorteos.*', 'equipos.nombreEquipo')
                ->get();

            //$resultadoSorteos = ResultadoSorteo::whereHas('equipo', function ($query) use ($team_id) {
            //    $query->where('fk_torneo', $team_id);
            //})->get();


            
        } else {

            $equipos = Equipos::all();
            $resultadoSorteos = ResultadoSorteo::all();
        }
    
        
    
        return Inertia::render('ResultadoSorteo/Index', [
            'resultadoSorteos' => $resultadoSorteos,
            'equipos' => $equipos,            
        ]);    
    }
    

    public function store(Request $request)
    {
        $request->validate([
            'grupo' => 'required',
            'posicion' => [
                'required',
                Rule::unique('resultado_sorteos')->where(function ($query) use ($request) {
                    return $query->where('grupo', $request->grupo)
                                 ->where('posicion', $request->posicion);
                }),
            ],
            'fk_equipo' => 'required|unique:resultado_sorteos'
        ], [
            'grupo.required' => 'El campo Grupo es obligatorio.',
            'posicion.required' => 'El campo Posición es obligatorio.',
            'posicion.unique' => 'La combinación de Grupo y Posición ya existe.',
            'fk_equipo.required' => 'El campo Equipo es obligatorio.',
            'fk_equipo.unique' => 'El Equipo ya existe.',
        ]);

        $grupo = $request->input('grupo');
        $posicion = $request->input('posicion');   

        $resultadoSorteo = new ResultadoSorteo($request->input());
        $resultadoSorteo->save(); 

        
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'grupo' => 'required',
            'posicion' => [
                'required',
                Rule::unique('resultado_sorteos')->ignore($id)->where(function ($query) use ($request) {
                    return $query->where('grupo', $request->grupo)
                                 ->where('posicion', $request->posicion);
                }),
            ],
            'fk_equipo' => ['required', Rule::unique('resultado_sorteos', 'fk_equipo')->ignore($id)]
        ], [
            'grupo.required' => 'El campo Grupo es obligatorio.',
            'posicion.required' => 'El campo Posición es obligatorio.',
            'posicion.unique' => 'La combinación de Grupo y Posición ya existe.',
            'fk_equipo.required' => 'El campo Equipo es obligatorio.',
            'fk_equipo.unique' => 'El Equipo ya existe.',
        ]);
    
        $resultadoSorteo = ResultadoSorteo::find($id);
        $resultadoSorteo->fill($request->input())->saveOrFail();        
    }


}
