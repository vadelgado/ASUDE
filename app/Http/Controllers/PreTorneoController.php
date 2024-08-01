<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\torneo;
use App\Models\SistemaJuego;
use App\Models\Categorias;


class PreTorneoController extends Controller
{
    public function index()
    {

        $sistemaJuegos = SistemaJuego::all();
        $categoriaEquipos = Categorias::all();
        $torneos = torneo::all();
        return Inertia::render('PreTorneo/Index', ['torneos' => $torneos, 'sistemaJuegos' => $sistemaJuegos, 'categoriaEquipos' => $categoriaEquipos]);
    }

}
