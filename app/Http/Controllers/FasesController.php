<?php

namespace App\Http\Controllers;

use App\Models\Fases;
use Illuminate\Http\Request;
use App\Models\torneo;
use App\Http\Requests\Fases\StoreRequest;
use App\Http\Requests\Fases\UpdateRequest;
use Inertia\Inertia;

class FasesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //id del torneo
        $torneo_id = $request->input('torneo_id');
       if($torneo_id){
            $torneo = torneo::where('id' ,$torneo_id)
                ->select('torneo.nombreTorneo', 'torneo.id', 'torneo.fechaInicio', 'torneo.fechaFin')
                ->get();
            $fases = Fases::where('fk_torneo', $torneo_id)
                ->orderBy('nombreFase')
                ->get();
        } else {
            $torneo = null;
            $fases = null;
        }
        
        return Inertia::render('Fases/Index', [
            'fases' => $fases, 
            'torneo' => $torneo,
            'fk_torneo' => $torneo_id]);
        
    }

    public function store(StoreRequest $request)
    {
        $data = $request->all();
        $data['fk_torneo'] = $request->input('fk_torneo');
        Fases::create($data);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, $id)
    {
        $data = $request->all();
        $data['fk_torneo'] = $request->input('fk_torneo');
        $fases = Fases::find($id);
        $fases->update($data);       
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $fases = Fases::find($id);
        
        $fases->delete();
    }
}
