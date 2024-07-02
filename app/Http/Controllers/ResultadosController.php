<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Resultados;
use App\Models\torneo;
use Inertia\Inertia;

class ResultadosController extends Controller
{

    public function index(Request $request)
    {
        $torneo_id = $request->input('torneo_id');


        if ($torneo_id) {                    
            $resultados = Resultados::where('fk_torneo', $torneo_id)
                
                ->get();
            $torneo = torneo::where('id' ,$torneo_id)
                ->select('torneo.nombreTorneo', 'torneo.id', 'torneo.fechaInicio', 'torneo.fechaFin')
                ->get();
        } else {
            $resultados = null;
        }

        return Inertia::render('Resultados/Index', [
            'resultados' => $resultados,
            'torneo' => $torneo,
        ]);

        
    }

    public function store(Request $request)
    {
        $request->validate([
            'categoria' => 'required|max:255',
            'resultado' => 'required|max:1000', 
            'fk_torneo' => 'required|exists:torneo,id'
        ], [
            'categoria.required' => 'La categoría es obligatoria.', // Mensaje de error si la categoría no se proporciona.
            'categoria.max' => 'La categoría no puede exceder los 255 caracteres.', // Mensaje de error si la categoría excede los 255 caracteres.
            'resultado.required' => 'El resultado es obligatorio.', // Mensaje de error si el resultado no se proporciona.
            'resultado.max' => 'El resultado no puede exceder los 1000 caracteres.', // Mensaje de error si el resultado excede los 1000 caracteres.
            'fk_torneo.required' => 'El torneo es obligatorio.', // Mensaje de error si el torneo no se proporciona.
            'fk_torneo.exists' => 'El torneo seleccionado no es válido.' // Mensaje de error si el torneo no existe en la tabla 'torneos'.
        ]);

        $data = $request->all();
        $data['fk_torneo'] = $request->input('fk_torneo');

        Resultados::create($data);  
    }

   

    public function update(Request $request, $id)
    {
        $request->validate([
            'categoria' => 'required|max:255',
            'resultado' => 'required|max:1000', 
            'fk_torneo' => 'required|exists:torneo,id'
        ], [
            'categoria.required' => 'La categoría es obligatoria.', // Mensaje de error si la categoría no se proporciona.
            'categoria.max' => 'La categoría no puede exceder los 255 caracteres.', // Mensaje de error si la categoría excede los 255 caracteres.
            'resultado.required' => 'El resultado es obligatorio.', // Mensaje de error si el resultado no se proporciona.
            'resultado.max' => 'El resultado no puede exceder los 1000 caracteres.', // Mensaje de error si el resultado excede los 1000 caracteres.
            'fk_torneo.required' => 'El torneo es obligatorio.', // Mensaje de error si el torneo no se proporciona.
            'fk_torneo.exists' => 'El torneo seleccionado no es válido.' // Mensaje de error si el torneo no existe en la tabla 'torneos'.
        ]);

        $resultado = Resultados::findOrFail($id);
        $resultado->update($request->all());

    }

    public function destroy($id)
    {
        $resultado = Resultados::findOrFail($id);
        $resultado->delete();       

    }
    
  
}
