<?php

namespace App\Http\Controllers;
use App\Models\Jugadores;
use App\Models\Equipos;
use Illuminate\Support\Facades\Auth;

use Inertia\Inertia;

use Illuminate\Http\Request;

class JugadoresController extends Controller
{  
    public function index()
    {
        $equipos = Equipos::where('fk_user', Auth::user()->id)->get();
        $jugadores = Jugadores::join('equipos', 'jugadores.fk_equipo', '=', 'equipos.id')
            ->where('equipos.fk_user', Auth::user()->id)
            ->select('jugadores.*', 'equipos.nombreEquipo')
            ->get();

        return Inertia::render('Jugadores/Index', [
            'jugadores' => $jugadores,
            'equipos' => $equipos
        ]);
    }
 
    public function store(Request $request)
    {
        try {
            $request->validate([
                'fotoJugador' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
                'tipoDocIdentidad' => 'required',
                'documentoIdentidad' => 'required',
                'nombreJugador' => 'required',
                'apellidoJugador' => 'required',
                'fechaNacimiento' => 'required',
                'fk_equipo' => 'required',
            ], [
                'fotoJugador.required' => 'El campo foto del jugador es obligatorio.',
                'tipoDocIdentidad.required' => 'El campo tipo de documento de identidad es obligatorio.',
                'documentoIdentidad.required' => 'El campo documento de identidad es obligatorio.',
                'nombreJugador.required' => 'El campo nombre del jugador es obligatorio.',
                'apellidoJugador.required' => 'El campo apellido del jugador es obligatorio.',
                'fechaNacimiento.required' => 'El campo fecha de nacimiento es obligatorio.',
                'fk_equipo.required' => 'El campo equipo es obligatorio.',
            ]);
    
            $imageName = time() . '_' . $request->file('fotoJugador')->getClientOriginalName();
            $request->file('fotoJugador')->move(public_path('fotos'), $imageName);
    
            Jugadores::create([
                'fotoJugador' => $imageName,
                'tipoDocIdentidad' => $request->input('tipoDocIdentidad'),
                'documentoIdentidad' => $request->input('documentoIdentidad'),
                'nombreJugador' => $request->input('nombreJugador'),
                'segundoNombreJugador' => $request->input('segundoNombreJugador'),
                'apellidoJugador' => $request->input('apellidoJugador'),
                'segundoApellidoJugador' => $request->input('segundoApellidoJugador'),
                'fechaNacimiento' => $request->input('fechaNacimiento'),
                'fk_equipo' => $request->input('fk_equipo'),
            ]);
    
            return Inertia::render('Jugadores/Index', [
                'jugadores' => Jugadores::all(),
                'equipos' => Equipos::all()
            ])->with('success', 'Jugador creado correctamente.');
        } catch (\Exception $e) {
            return Inertia::render('Jugadores/Index', [
                'jugadores' => Jugadores::all(),
                'equipos' => Equipos::all()
            ])->with('error', 'Error al crear el jugador.');
        }
    }


}
