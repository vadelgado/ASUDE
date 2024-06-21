<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\torneo;
use Inertia\Inertia;

class VerResultadosController extends Controller
{
    public function index(Request $request)
    {

        $request->validate([
            'torneo_id' => 'required|integer|exists:torneo,id',
        ]);
        $torneo_id = $request->input('torneo_id');
        $torneo = torneo::where('id', $torneo_id)
        ->select('torneo.nombreTorneo','torneo.cantidadGrupos','torneo.cantidadEquiposParticipantes',
        'torneo.imgBannerSuperior')
        ->get();

        return Inertia::render('VerResultados/Index',
        [ 'torneo' => $torneo]);
    }
}
