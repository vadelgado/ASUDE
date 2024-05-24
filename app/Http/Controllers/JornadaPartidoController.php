<?php

namespace App\Http\Controllers;

use App\Models\jornadaPartido;
use App\Models\torneo;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class JornadaPartidoController extends Controller
{

    public function index(Request $request)
    {
        //id del torneo
        $torneo_id = $request->input('torneo_id');
        $torneo = torneo::where('id' ,$torneo_id)
            ->select('torneo.nombreTorneo', 'torneo.id', 'torneo.flayer', 'torneo.fechaInicio', 'torneo.fechaFin')
            ->get();
        $jornadaPartidos = jornadaPartido::join('torneo', 'jornada_partidos.fk_torneo', '=', 'torneo.id')
            ->where('fk_torneo', $torneo_id)
            ->select('jornada_partidos.*', 'torneo.nombreTorneo')
            ->orderBy('jornada_partidos.fechaJornada')
            
            ->get();
        //dd($torneo, $jornadaPartidos  );
        return Inertia::render('JornadaPartido/Index', [
            'jornadaPartidos' => $jornadaPartidos, 
            'torneo' => $torneo]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'fechaJornada' => ['required', 'date'],
            'jornada' => ['required', 'max:100',
                Rule::unique('jornada_partidos')->where(function ($query) use ($request) {
                    return $query->where('jornada', $request->jornada)
                        ->where('fk_torneo', $request->fk_torneo);
                }),
            ],
            'fk_torneo' => ['required', 'exists:torneo,id'],
        ], [
            'fechaJornada.required' => 'La fecha de la jornada es requerida',
            'fechaJornada.date' => 'La fecha de la jornada no es válida',
            'jornada.required' => 'La jornada es requerida',
            'jornada.max' => 'La jornada no puede tener más de 100 caracteres',
            'jornada.unique' => 'La jornada ya existe para el torneo seleccionado',
            'fk_torneo.required' => 'El torneo es requerido',
            'fk_torneo.exists' => 'El torneo no existe',
        ]);
        try {
            jornadaPartido::create($request->all());
        } catch (\Exception $e) {
            return response()->json(['message' => 'Hubo un error al crear la jornada'], 500);
        }
    }
    


    public function update(Request $request, $id)
    {

        $request->validate([
            'fechaJornada' => ['required', 'date'],
            'jornada' => ['required', 'max:100',
                Rule::unique('jornada_partidos')->ignore($id)->where(function ($query) use ($request) {
                    return $query->where('jornada', $request->jornada)
                        ->where('fk_torneo', $request->fk_torneo);
                }),
            ],
            'fk_torneo' => ['required', 'exists:torneo,id'],
        ], [
            'fechaJornada.required' => 'La fecha de la jornada es requerida',
            'fechaJornada.date' => 'La fecha de la jornada no es válida',
            'jornada.required' => 'La jornada es requerida',
            'jornada.max' => 'La jornada no puede tener más de 100 caracteres',
            'jornada.unique' => 'La jornada ya existe para el torneo seleccionado',
            'fk_torneo.required' => 'El torneo es requerido',
            'fk_torneo.exists' => 'El torneo no existe',
        ]);
    
        try {
            $jornadaPartido = jornadaPartido::findOrFail($id);
            $jornadaPartido->fill($request->all())->saveOrFail();            
        } catch (\Exception $e) {
            return response()->json(['message' => 'Hubo un error al actualizar la jornada'], 500);
        }
    }
    
 
    public function destroy($id)
    {
        try {
            $jornadaPartido = jornadaPartido::findOrFail($id);
            $jornadaPartido->delete();            
        } catch (\Exception $e) {
            return response()->json(['message' => 'Hubo un error al eliminar la jornada'], 500);
        }        
    }
}
