<?php 

namespace App\Http\Controllers;

use App\Models\cuerpoTecnico;
use App\Models\Equipos;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use App\Http\Requests\CuerpoTecnico\StoreRequest;
use App\Http\Requests\CuerpoTecnico\UpdateRequest;
use Illuminate\Support\Facades\Storage;

use Inertia\Inertia;



class CuerpoTecnicoController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index(Request $request)
    {
        $request->validate([
            'equipo_id' => 'required|integer|exists:equipos,id',
        ]);
    
        $equipo_id = $request->input('equipo_id');
        $userRole = Auth::user()->role;
    
        if($equipo_id){
            $equipo = Equipos::find($equipo_id)->nombreEquipo;
    
            $cuerpoTecnico = cuerpoTecnico::join('equipos', 'cuerpo_tecnico.fk_equipo', '=', 'equipos.id')
                ->when($userRole !== 'admin', function ($query) {
                    return $query->where('equipos.fk_user', Auth::user()->id);
                })
                ->when($equipo_id, function ($query) use ($equipo_id) {
                    return $query->where('equipos.id', $equipo_id);
                })
                ->select('cuerpo_tecnico.*', 'equipos.nombreEquipo')
                ->get();
            return Inertia::render('CuerpoTecnico/Index', [
                'cuerposTecnicos' => $cuerpoTecnico,
                'equipo_id' => $equipo_id,
                'equipo' => $equipo,
                'userRole' => $userRole,
            ]);
        } else {
            return Inertia::render('Dashboard');
        }
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
    public function store(StoreRequest $request)
    {
        $data = $request->only(
            'fk_equipo',
            'fotoCuerpoTecnico',
            'nombreCompleto',
            'tipoIdentificacion',
            'numeroIdentificacion',
            'telefonoFijo',
            'telefonoCelular',
            'correoElectronico'
        );

        $data['estado'] = true;

        if($request->hasFile('fotoCuerpoTecnico')) {
            $request->validate([
                'fotoCuerpoTecnico' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);

            $file = $request->file('fotoCuerpoTecnico');
            $routeImage = $file->store('cuerpoTecnico', ['disk' => 'public']);
            $data['fotoCuerpoTecnico'] = $routeImage;
        }

        cuerpoTecnico::create($data);
        
    }

    /**
     * Display the specified resource.
     */
    public function show(cuerpoTecnico $cuerpoTecnico)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, $id)
    {
        $data = $request->only(
            'fk_equipo',
            'fotoCuerpoTecnico',
            'nombreCompleto',
            'tipoIdentificacion',
            'numeroIdentificacion',
            'telefonoFijo',
            'telefonoCelular',
            'correoElectronico'
        );

        $cuerpoTecnico = cuerpoTecnico::find($id);

        if($request->hasFile('fotoCuerpoTecnico')) {
            $request->validate([
                'fotoCuerpoTecnico' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);

            $file = $request->file('fotoCuerpoTecnico');
            $routeImage = $file->store('cuerpoTecnico', ['disk' => 'public']);
            $data['fotoCuerpoTecnico'] = $routeImage;

            if($cuerpoTecnico->fotoCuerpoTecnico) {
                Storage::disk('public')->delete($cuerpoTecnico->fotoCuerpoTecnico);
            }
        } else {
            if($cuerpoTecnico->fotoCuerpoTecnico) {
                $data['fotoCuerpoTecnico'] = $cuerpoTecnico->fotoCuerpoTecnico;
            } else {
                unset($data['fotoCuerpoTecnico']);
            }
        }

        $cuerpoTecnico->update($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(cuerpoTecnico $cuerpoTecnico)
    {
        //
    }

    public function toggleCuerpoTecnico($id)
    {
        $cuerpoTecnico = cuerpoTecnico::find($id);

        if($cuerpoTecnico){
            $cuerpoTecnico->estadoCuerpoTecnico = !$cuerpoTecnico->estadoCuerpoTecnico;
            $cuerpoTecnico->save();
        }else{
            return response()->json(['message' => 'No se encontró el cuerpo técnico'], 404);
        }

    }
}
