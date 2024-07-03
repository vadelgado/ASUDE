<?php 

namespace App\Http\Controllers;

use App\Http\Requests\LugarPartido\StoreRequest;
use App\Http\Requests\LugarPartido\UpdateRequest;
use Illuminate\Support\Facades\Storage; 
use App\Models\torneo;

use App\Models\lugarPartido;

use Illuminate\Http\Request;

use Inertia\Inertia;

use Illuminate\Validation\Rule;

class LugarPartidoController extends Controller
{

    public function index( Request $request) 
    {
        //id del torneo
        $torneo_id = $request->input('torneo_id');
        $torneo = torneo::where('id' ,$torneo_id)
            ->select('torneo.nombreTorneo', 'torneo.id', 'torneo.fechaInicio', 'torneo.fechaFin')
            ->get();
        $lugarPartidos = lugarPartido::join('torneo', 'lugar_partidos.fk_torneo', '=', 'torneo.id')
            ->where('fk_torneo', $torneo_id)
            ->select('lugar_partidos.*', 'torneo.nombreTorneo')
            ->orderBy('lugar_partidos.nomLugar')            
            ->get();
        return Inertia::render('LugarPartido/Index', [
            'lugarPartidos' => $lugarPartidos, 
            'torneo' => $torneo]);   
    }

    public function store(StoreRequest $request)
    {
        
        $data = $request->only('nomLugar', 'geolocalizacion', 'direccion', 'fk_torneo');

        if($request->hasFile('fotoLugar')) {
            $file = $request->file('fotoLugar');
            $routeImage = $file->store('fotoLugar', ['disk' => 'public']);
            $data['fotoLugar'] = $routeImage;
        }

        LugarPartido::create($data);
    }

    public function update(UpdateRequest $request, $id)
    {
        
        $data = $request->only('nomLugar', 'geolocalizacion', 'direccion', 'fk_torneo');
        $lugarPartido = LugarPartido::find($id);

        if($request->hasFile('fotoLugar')) {
            $file = $request->file('fotoLugar');
            $routeImage = $file->store('fotoLugar', ['disk' => 'public']);
            $data['fotoLugar'] = $routeImage;

            if($lugarPartido->fotoLugar) {
                Storage::disk('public')->delete($lugarPartido->fotoLugar);
            }
        } else {
            
            if ($lugarPartido->fotoLugar) {
                $data['fotoLugar'] = $lugarPartido->fotoLugar; 
            } else {
                unset($data['fotoLugar']);
            }
        }

        $lugarPartido->update($data);

    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(LugarPartido $lugarPartido)
    {
        if($lugarPartido->fotoLugar) {
            Storage::disk('public')->delete($lugarPartido->fotoLugar);
        }

        $lugarPartido->delete();

        
    }

}
