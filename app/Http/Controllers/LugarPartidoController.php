<?php 

namespace App\Http\Controllers;

use App\Http\Requests\LugarPartido\StoreRequest;
use App\Http\Requests\LugarPartido\UpdateRequest;
use Illuminate\Support\Facades\Storage;

use App\Models\lugarPartido;

use Illuminate\Http\Request;

use Inertia\Inertia;

use Illuminate\Validation\Rule;

class LugarPartidoController extends Controller
{

    public function index()
    {
        return Inertia::render('LugarPartido/Index', [
            'lugarPartidos' => lugarPartido::all()
        ]);   
    }

    public function store(StoreRequest $request)
    {
        $data = $request->only('nomLugar', 'geolocalizacion', 'direccion');

        if($request->hasFile('fotoLugar')) {
            $file = $request->file('fotoLugar');
            $routeImage = $file->store('fotoLugar', ['disk' => 'public']);
            $data['fotoLugar'] = $routeImage;
        }

        LugarPartido::create($data);

        return redirect()->route('lugarPartido.index');
    }

    public function update(UpdateRequest $request, $id)
    {
        
        $data = $request->only('nomLugar', 'geolocalizacion', 'direccion');
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

        return redirect()->route('lugarPartido.index', $lugarPartido);
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
