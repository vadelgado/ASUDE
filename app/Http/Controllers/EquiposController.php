<?php

namespace App\Http\Controllers;
use App\Models\Categorias;
use App\Models\Equipos;
use Illuminate\Support\Facades\Auth;   

use Illuminate\Http\Request;

use Inertia\Inertia;

class EquiposController extends Controller
{
    public function index()
    {
        $equipos = Equipos::join('categoria_equipo', 'equipos.fk_categoria_equipo', '=', 'categoria_equipo.id')
            ->where('equipos.fk_user', Auth::user()->id)
            ->select('equipos.*', 'categoria_equipo.descripcion as categoria_descripcion')
            ->get();

        return Inertia::render('Equipos/Index', [
            'equipos' => $equipos
        ]);
    }
}
