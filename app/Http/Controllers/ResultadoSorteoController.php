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
                ->orderBy('grupoPosicion', 'asc')                
                ->select('resultado_sorteos.*', 'equipos.nombreEquipo', 'equipos.escudoEquipo')
                ->get();           
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
            'grupoPosicion' => [
                'required',
                Rule::unique('resultado_sorteos')->where(function ($query) use ($request) {
                    return $query->where('grupoPosicion', $request->grupoPosicion);
                }),
            ],
            'fk_equipo' => 'required|unique:resultado_sorteos',
        ], [
            'grupoPosicion.required' => 'El Grupo y Posición es obligatorio.',
            'grupoPosicion.unique' => 'El Grupo y Posición ya están asignados.',
            'fk_equipo.required' => 'El campo Equipo es obligatorio.',
            'fk_equipo.unique' => 'El Equipo ya tiene un resultado asignado.',
        ]); 
    
        try {
            $resultadoSorteo = new ResultadoSorteo($request->all());
            $resultadoSorteo->save();            
        } catch (\Exception $e) {
            return response()->json(['message' => 'Hubo un error al crear el resultado de sorteo'], 500);
        }
    }
    

    public function update(Request $request, $id)
    {
        $request->validate([
            'grupoPosicion' => [
                'required',
                Rule::unique('resultado_sorteos')->ignore($id)->where(function ($query) use ($request) {
                    return $query->where('grupoPosicion', $request->grupoPosicion);
                }),
            ],
            'fk_equipo' => ['required', Rule::unique('resultado_sorteos', 'fk_equipo')->ignore($id)],
        ], [
            'grupoPosicion.required' => 'El Grupo y Posición es obligatorio.',
            'grupoPosicion.unique' => 'El Grupo y Posición ya está asignado.',
            'fk_equipo.required' => 'El campo Equipo es obligatorio.',
            'fk_equipo.unique' => 'El Equipo ya tiene un resultado asignado.',
        ]);
    
        try {
            $resultadoSorteo = ResultadoSorteo::findOrFail($id);
            $resultadoSorteo->fill($request->all())->saveOrFail();            
        } catch (\Exception $e) {
            return response()->json(['message' => 'Hubo un error al actualizar el resultado de sorteo'], 500);
        }
    }
    

    public function destroy($id)
    {
        try {
            $resultadoSorteo = ResultadoSorteo::findOrFail($id);
            $resultadoSorteo->delete();            
        } catch (\Exception $e) {
            return response()->json(['message' => 'Hubo un error al eliminar el resultado de sorteo'], 500);
        }
    }
    


}
