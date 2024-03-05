<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\torneo;
use Illuminate\Support\Facades\Auth;

class Torneos extends Controller
{
    public function index()
    {
        $torneos = torneo::all();
        return Inertia::render('Torneo/Index', [
            'torneos' => $torneos
        ]);
    }

    public function listarTorneos()
    {
        $torneos = torneo::all();
        return Inertia::render('Torneo/ListarTorneos', [
            'torneos' => $torneos
        ]);
    }
    
    public function show($id)
    {
        try{
           $torneo = torneo::find($id); 

              if(!$torneo) {
                return redirect()->route('torneo.index')->with('error', 'Torneo no encontrado');
              }
                return Inertia::render('Torneo/Show', [
                    'torneo' => $torneo
                ]);
        } catch (\Exception $e) {
            return redirect()->route('torneo.index')->with('error', 'Error al mostrar el torneo');
        }
        


    }

    public function store(Request $request)
    {
        $request->validate([
            'nombreTorneo' => 'required',
            'flayer' => 'required',
            'caracteristicas' => 'required',
            'premiacion' => 'required',
            'sistemaJuego' => 'required',
            'procesoInscripcion' => 'required',
            'reglamentacion' => 'required',
            'fechaInicio' => 'required',
        ],[
            'nombreTorneo.required' => 'El campo nombre del torneo es obligatorio.',
            'flayer.required' => 'El campo flayer es obligatorio.',
            'caracteristicas.required' => 'El campo características es obligatorio.',
            'premiacion.required' => 'El campo premiación es obligatorio.',
            'sistemaJuego.required' => 'El campo sistema de juego es obligatorio.',
            'procesoInscripcion.required' => 'El campo proceso de inscripción es obligatorio.',
            'reglamentacion.required' => 'El campo reglamentación es obligatorio.',
            'fechaInicio.required' => 'El campo fecha de inicio es obligatorio.',
        ]);
    
        try {
            torneo::create([
                'nombreTorneo' => $request->input('nombreTorneo'),
                'flayer' => $request->input('flayer'),
                'caracteristicas' => $request->input('caracteristicas'),
                'premiacion' => $request->input('premiacion'),
                'sistemaJuego' => $request->input('sistemaJuego'),
                'procesoInscripcion' => $request->input('procesoInscripcion'),
                'reglamentacion' => $request->input('reglamentacion'),
                'fechaInicio' => date('Y-m-d', strtotime($request->input('fechaInicio'))),
                'fk_user' => Auth::user()->id,
            ]);
            return redirect()->route('torneo.index')->with('success', 'Torneo creado correctamente');
        } catch (\Exception $e) {
            return redirect()->route('torneo.index')->with('error', 'Error al crear el torneo');
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $torneo = torneo::find($id);
            $request->validate([
                'nombreTorneo' => 'required',
                'flayer' => 'required',
                'caracteristicas' => 'required',
                'premiacion' => 'required',
                'sistemaJuego' => 'required',
                'procesoInscripcion' => 'required',
                'reglamentacion' => 'required',
                'fechaInicio' => 'required',
            ], [
                'nombreTorneo.required' => 'El campo nombre del torneo es obligatorio.',
                'flayer.required' => 'El campo flayer es obligatorio.',
                'caracteristicas.required' => 'El campo características es obligatorio.',
                'premiacion.required' => 'El campo premiación es obligatorio.',
                'sistemaJuego.required' => 'El campo sistema de juego es obligatorio.',
                'procesoInscripcion.required' => 'El campo proceso de inscripción es obligatorio.',
                'reglamentacion.required' => 'El campo reglamentación es obligatorio.',
                'fechaInicio.required' => 'El campo fecha de inicio es obligatorio.',
            ]);

            if ($request->hasAny(['nombreTorneo', 'flayer', 'caracteristicas', 'premiacion', 'sistemaJuego', 'procesoInscripcion', 'reglamentacion', 'fechaInicio'])) {
                $torneo->fill($request->input())->saveOrFail();
                return redirect()->route('torneo.index')->with('success', 'Torneo actualizado correctamente');
            } else {
                return response()->json(['error' => 'Error al actualizar el torneo'], 400);
            }
        } catch (\Exception $e) {
            return redirect()->route('torneo.index')->with('error', 'Error al actualizar el torneo');
        }
    }

    public function destroy($id)
    {
        $torneo = torneo::find($id);

        if(!$torneo) {
            return redirect()->route('torneo.index')->with('error', 'Torneo no encontrado');
        }

        $torneo->delete();
        return redirect()->route('torneo.index')->with('success', 'Torneo eliminado correctamente');
    }

    public function registrarEquipo()
    {
        return Inertia::render('AuthEquipo/Register');
    }

}
