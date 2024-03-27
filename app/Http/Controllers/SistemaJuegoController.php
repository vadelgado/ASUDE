<?php

namespace App\Http\Controllers;

use App\Models\SistemaJuego;
use App\Http\Requests\SistemaJuego\UpdateRequest;
use App\Http\Requests\SistemaJuego\StoreRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SistemaJuegoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('SistemaJuego/Index', [
            'sistemaJuegos' => SistemaJuego::all()
        ]);   
    }

    public function store(StoreRequest $request)
    {
        $data = $request->validated();
        SistemaJuego::create($data);
    }

    public function update(UpdateRequest $request, $id)
    {
        $data = $request->only('nombreSistema','descripcionSistema');
        $sistemaJuego = SistemaJuego::find($id);
        $sistemaJuego->update($data);
    }



    public function destroy(SistemaJuego $sistemaJuego)
    {
        $sistemaJuego->delete();   
    }
}
