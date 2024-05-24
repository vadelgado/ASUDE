<?php

namespace App\Http\Controllers;

use App\Models\Inscripciones;
use Illuminate\Http\Request;
use App\Models\torneo;
use App\Models\Equipos;
use App\Models\User;
use App\Http\Requests\Inscripciones\StoreRequest;
use App\Http\Requests\Inscripciones\UpdateRequest;
use Illuminate\Support\Facades\Auth;
use App\Rules\UniqueTorneoEquipo;
use Inertia\Inertia;

class InscripcionesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        //id del equipo
        $equipo_id = $request->input('equipo_id');
        if ($equipo_id) {

            if(Auth::user()->role == 'admin'){
                $torneo = torneo::all();
                $equipo = Equipos::find($equipo_id);
                   
                $inscripciones = Inscripciones::join('torneo', 'inscripciones.fk_torneo', '=', 'torneo.id')
                ->join('equipos', 'inscripciones.fk_equipo', '=', 'equipos.id')
                ->select('inscripciones.*', 'torneo.nombreTorneo', 'equipos.nombreEquipo', 'equipos.escudoEquipo')
                ->where('fk_equipo', $equipo_id)->get();
                //DD($inscripciones, $equipo, $torneo);
            } else if(Auth::user()->role == 'equipo'){
                $torneo = torneo::all();
                $equipo = Equipos::where('fk_user', Auth::user()->id)->get();
                $inscripciones = Inscripciones::join('torneo', 'inscripciones.fk_torneo', '=', 'torneo.id')
                ->join('equipos', 'inscripciones.fk_equipo', '=', 'equipos.id')
                ->select('inscripciones.*', 'torneo.nombreTorneo', 'equipos.nombreEquipo', 'equipos.escudoEquipo')
                ->where('fk_equipo', $equipo_id)->get();
                
                //DD($inscripciones, $equipo, $torneo);
            } else {
                return redirect()->route('dashboard');
            }
        } else {
            return redirect()->route('dashboard');
        }

        return Inertia::render('Inscripciones/Index', [
            'torneo' => $torneo,
            'equipo' => $equipo,
            'inscripciones' => $inscripciones,
            'fk_equipo' => $equipo_id,
            'userRole' => Auth::user()->role,
        ]);   
    }
     
     public function store(StoreRequest $request)
     {
         $userRole = Auth::user()->role;  
     
         if ($userRole !== 'equipo' && $userRole !== 'admin') {
             return redirect()->route('dashboard');
         }     
         if($userRole === 'admin'){
             $data = $request->all();
             $data['fk_user'] = Auth::user()->id;
             $data['fk_equipo'] = $request->input('fk_equipo'); 
     
         } else if($userRole === 'equipo'){   


            
            $data['fk_torneo'] = $request->input('fk_torneo');            
            $data['estadoInscripcion'] = 'Pendiente';
            $data['fk_user'] = Auth::user()->id;
            $data['fk_equipo'] = $request->input('fk_equipo');             
         }
         Inscripciones::create($data);       
     }

    public function update(UpdateRequest $request, $id)
    {
        $userRole = Auth::user()->role;
        $equipo_id = $request->input('fk_equipo');
        
        if ($userRole !== 'equipo' && $userRole !== 'admin') {
            return redirect()->route('dashboard');
        }

        if($userRole === 'admin'){
            $data = $request->all();            
            $data['fk_equipo'] = $request->input('fk_equipo');
            $data['estadoInscripcion'] = $request->input('estadoInscripcion');

            //dd($data);

        } else if($userRole === 'equipo'){
            $data = $request->only(
                'fk_torneo',                
            );
            $data['fk_equipo'] = $request->input('fk_equipo');
            $data['fk_user'] = Auth::user()->id;
            
        }

        $inscripciones = Inscripciones::find($id);
        $inscripciones->update($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $inscripciones = Inscripciones::find($id);
        $inscripciones->delete();
    }
    
}
