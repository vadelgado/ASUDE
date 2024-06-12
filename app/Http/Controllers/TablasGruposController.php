<?php

namespace App\Http\Controllers; 

use App\Models\torneo;
use App\Models\lugarPartido;
use App\Models\ResultadoSorteo;
use App\Models\Equipos;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TablasGruposController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $request->validate([
            'torneo_id' => 'required|integer|exists:torneo,id',
        ]);

        $torneo_id = $request->input('torneo_id');

        $tablasGrupos = ResultadoSorteo::join('equipos', 'resultado_sorteos.fk_equipo', '=', 'equipos.id')
            ->join('torneo', 'resultado_sorteos.fk_torneo', '=', 'torneo.id')
            ->where('torneo.id', $torneo_id)
            ->select('equipos.nombreEquipo','equipos.escudoEquipo' , 'resultado_sorteos.puesto')
            ->orderBy('resultado_sorteos.puesto', 'asc')
            ->get();        
        $torneo = torneo::where('id', $torneo_id)
            ->select('torneo.nombreTorneo','torneo.cantidadGrupos','torneo.cantidadEquiposParticipantes',
            'torneo.imgBannerSuperior')
            ->get();
        //dd($torneo);  
        return Inertia::render('ResultadoSorteo/ShouwTablaGrupos', 
        ['tablasGrupos' => $tablasGrupos, 
        /*'programacionTorneo' => $programacionTorneo*/
        'torneo' => $torneo]); 
    }


}
