<?php 

namespace App\Http\Controllers;

use App\Models\ResultadoSorteo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Equipos;
use App\Models\torneo;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;



class ResultadoSorteoController extends Controller
{

    public function index(Request $request)
    {
        $team_id = $request->input('team_id');

        if ($team_id) {
            // los equipos que perteneces al torno con id = $team_id            
            $equipos = Equipos::where('fk_torneo', $team_id)->get();

            //Cantidad equipos participantes

            $cantidadEquiposParticipantes = torneo::find($team_id)->cantidadEquiposParticipantes;
            //dd($cantidadEquiposParticipantes);
            //los resultados de los sorteos de los equipos que pertenecen al torneo con id = $team_id y sus respectivos equipos nombre del equipo de la tabla equipos
            $resultadoSorteos = DB::table('resultado_sorteos')
                ->join('equipos', 'resultado_sorteos.fk_equipo', '=', 'equipos.id')
                ->where('equipos.fk_torneo', $team_id)              
                ->select('resultado_sorteos.*', 'equipos.nombreEquipo', 'equipos.escudoEquipo')
                ->orderBy('resultado_sorteos.grupoPosicion')
                ->get();           
        } else {

            $equipos = Equipos::all();
            $resultadoSorteos = ResultadoSorteo::all();
        }   
        return Inertia::render('ResultadoSorteo/Index', [
            'resultadoSorteos' => $resultadoSorteos,
            'equipos' => $equipos,   
            'cantidadEquiposParticipantes' => $cantidadEquiposParticipantes,         
        ]);    
    }
    

    public function store(Request $request)
    {
        $rules = [
            'grupoPosicion' => 'required',
            'fk_equipo' => 'required|unique:resultado_sorteos',
        ];
    
        $messages = [
            'grupoPosicion.required' => 'El Grupo y Posición es obligatorio.',
            'fk_equipo.required' => 'El campo Equipo es obligatorio.',
            'fk_equipo.unique' => 'El Equipo ya tiene un resultado asignado.',
        ];
    
        $validator = Validator::make($request->all(), $rules, $messages);
    
        $validator->after(function ($validator) use ($request) {
            $equipo = Equipos::find($request->fk_equipo);
            if ($equipo) {
                $exists = ResultadoSorteo::where('grupoPosicion', $request->grupoPosicion)
                    ->whereHas('equipo', function ($query) use ($equipo) {
                        $query->where('fk_torneo', $equipo->fk_torneo);
                    })
                    ->exists();
    
                if ($exists) {
                    $validator->errors()->add('grupoPosicion', 'El Grupo y Posición ya están asignados en el torneo.');
                }
            } else {
                $validator->errors()->add('fk_equipo', 'El Equipo especificado no existe.');
            }
        });
    
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }
        
        
    
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
                Rule::unique('resultado_sorteos')
                    ->where(function ($query) use ($request) {
                        $equipo = Equipos::find($request->fk_equipo);
                        if ($equipo) {
                            // Hacemos una subconsulta para obtener el torneo y luego filtramos
                            $query->where('resultado_sorteos.grupoPosicion', $request->grupoPosicion)
                                  ->where('resultado_sorteos.fk_equipo', function ($subQuery) use ($equipo) {
                                      $subQuery->select('id')
                                               ->from('equipos')
                                               ->where('fk_torneo', $equipo->fk_torneo)
                                               ->limit(1);
                                  });
                        } else {
                            // Manejar el caso donde el equipo no se encuentra
                            $query->whereRaw('1 = 0'); // Siempre falso
                        }
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
