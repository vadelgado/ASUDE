<?php

namespace App\Http\Controllers;

use App\Http\Requests\Equipos\StoreRequest;
use App\Http\Requests\Equipos\UpdateRequest;
use Illuminate\Support\Facades\Storage;
use App\Models\Categorias;
use App\Models\Equipos;
use App\Models\torneo;

use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

use Inertia\Inertia;

class EquiposController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $userRole = Auth::user()->role; 
        $torneos = torneo::all();
        $categorias = Categorias::all();

        $equipos = Equipos::join("categoria_equipo", "equipos.fk_categoria_equipo", "=", "categoria_equipo.id")
            ->select("equipos.*", "categoria_equipo.descripcion");

        if ($userRole === 'admin') {            
            $equipos = $equipos->get();
            
        } else if ($userRole === 'equipo') {
            $equipos = $equipos->where("equipos.fk_user", Auth::user()->id)->get();
        } else {
            return redirect()->route("dashboard");
        }
        
        //DD($equipos);
        return Inertia::render("Equipos/Index", [
            "equipos" => $equipos,
            "torneos" => $torneos,
            "categorias" => $categorias,
            "userRole" => $userRole
        ]);
    }

/**
 * Store a newly created resource in storage.
 *
 * @param  \App\Http\Requests\Equipos\StoreRequest  $request
 * @return \Illuminate\Http\RedirectResponse
 */
public function store(StoreRequest $request)
{
    $userRole = Auth::user()->role;

    if ($userRole !== 'equipo' && $userRole !== 'admin') {
        return redirect()->route("dashboard");
    }

    $data = $request->only(
        "nombreEquipo",
        "fk_categoria_equipo",
        "escudoEquipo",
        "numeroWhatsapp",
        "correoElectronico",
        
    );

    if ($request->hasFile("escudoEquipo")) {
        $file = $request->file("escudoEquipo");
        $routeImage = $file->store("escudoEquipo", ["disk" => "public"]);
        $data["escudoEquipo"] = $routeImage;
    }

    $data["fk_user"] = Auth::user()->id;

    Equipos::create($data);

    return redirect()->back()->withSuccess("El equipo ha sido guardado.");
}

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Equipos\UpdateRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateRequest $request, $id)
    {
        $data = $request->only(
            "nombreEquipo",
            "fk_categoria_equipo",
            "escudoEquipo",
            "numeroWhatsapp",
            "correoElectronico",   
        );
        $equipo = Equipos::find($id);

        if ($request->hasFile("escudoEquipo")) {
            $file = $request->file("escudoEquipo");
            $routeImage = $file->store("escudoEquipo", ["disk" => "public"]);
            $data["escudoEquipo"] = $routeImage;

            if ($equipo->escudoEquipo) {
                Storage::disk("public")->delete($equipo->escudoEquipo);
            }
        } else {            
            if ($equipo->escudoEquipo) {
                $data["escudoEquipo"] = $equipo->escudoEquipo; 
            } else {
                $data["escudoEquipo"] = null; 
            }
        }

        $equipo->update($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Equipos  $equipo
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Equipos $equipo)
    {
        if ($equipo->escudoEquipo) {
            Storage::disk("public")->delete($equipo->escudoEquipo);
        }

        $equipo->delete();

        return redirect()->route("equipos.index");
    }
}
