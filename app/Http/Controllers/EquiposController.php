<?php

namespace App\Http\Controllers;
use App\Models\Categorias;
use App\Models\Equipos;
use App\Models\torneo;
use Illuminate\Support\Facades\Auth;   

use Illuminate\Http\Request;

use Inertia\Inertia;

class EquiposController extends Controller
{
    public function index()
    {
        $torneos = torneo::all();  

        $categorias = Categorias::all();

        $equipos = Equipos::join('torneo', 'equipos.fk_torneo', '=', 'torneo.id')
            ->join('categoria_equipo', 'equipos.fk_categoria_equipo', '=', 'categoria_equipo.id')
            ->where('equipos.fk_user', Auth::user()->id)
            ->select('equipos.*', 'torneo.nombreTorneo', 'categoria_equipo.descripcion')
            ->get();

        return Inertia::render('Equipos/Index', [
            'equipos' => $equipos,
            'torneos' => $torneos,
            'categorias' => $categorias
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombreEquipo' => 'required',
            'fk_categoria_equipo' => 'required',
            'escudoEquipo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'numeroWhatsapp' => 'required',
            'correoElectronico' => 'required',
            'fk_torneo' => 'required',
        ],[
            'nombreEquipo.required' => 'El campo nombre del equipo es obligatorio.',
            'fk_categoria_equipo.required' => 'El campo categoría del equipo es obligatorio.',
            'escudoEquipo.required' => 'El campo escudo del equipo es obligatorio.',
            'numeroWhatsapp.required' => 'El campo número de whatsapp es obligatorio.',
            'correoElectronico.required' => 'El campo correo electrónico es obligatorio.',
            'fk_torneo.required' => 'El campo torneo es obligatorio.',
        ]);

        try {
            $escudoEquipoPath = $request->file('escudoEquipo')->store('public/escudos');
            $escudoEquipoPath = str_replace('public/', '', $escudoEquipoPath);


            Equipos::create([
                'nombreEquipo' => $request->input('nombreEquipo'),
                'fk_categoria_equipo' => $request->input('fk_categoria_equipo'),
                'escudoEquipo' => $escudoEquipoPath,
                'numeroWhatsapp' => $request->input('numeroWhatsapp'),
                'correoElectronico' => $request->input('correoElectronico'),
                'fk_user' => Auth::user()->id,
                'fk_torneo' => $request->input('fk_torneo'),
            ]);
            return redirect()->route('preregistro.listarEquipos')->with('success', 'Equipo creado correctamente');
        } catch (\Exception $e) {
            return redirect()->route('preregistro.listarEquipos')->with('error', 'Error al crear el equipo');
        }

    }

}
