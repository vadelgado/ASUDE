<?php

namespace App\Http\Controllers;

use App\Models\formatoFotos;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class FormatoFotosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $request->validate([
            'equipo_id' => 'required|integer|exists:equipos,id,fk_user,' . Auth::user()->id,
        ]);

        $equipo_id = $request->input('equipo_id');

        $fotos = formatoFotos::whereHas('jugador', function ($query) use ($equipo_id) {
            $query->where('fk_equipo', $equipo_id);
        })->get();

        

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
    public function show(formatoFotos $formatoFotos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(formatoFotos $formatoFotos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, formatoFotos $formatoFotos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(formatoFotos $formatoFotos)
    {
        //
    }
}
