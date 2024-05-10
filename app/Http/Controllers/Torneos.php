<?php

namespace App\Http\Controllers;

use App\Http\Requests\Torneos\StoreRequest;
use App\Http\Requests\Torneos\UpdateRequest;
 
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\torneo;
use App\Models\SistemaJuego;
use App\Models\Categorias;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

class Torneos extends Controller
{
    public function index()
    {

        $sistemaJuegos = SistemaJuego::all();
        $categoriaEquipos = Categorias::all();
        $torneos = torneo::all();
        return Inertia::render('Torneo/Index', ['torneos' => $torneos, 'sistemaJuegos' => $sistemaJuegos, 'categoriaEquipos' => $categoriaEquipos]);
    }
    //Listar los Torneos en la vista Todos
    public function listarTorneos()
    {

        $sistemaJuegos = SistemaJuego::all();
        $categoriaEquipos = Categorias::all();
        $torneos = torneo::all();
        return Inertia::render('Torneo/ListarTorneos', ['torneos' => $torneos, 'sistemaJuegos' => $sistemaJuegos, 'categoriaEquipos' => $categoriaEquipos]);
    }

    public function registrarEquipo()
    {
        return Inertia::render('AuthEquipo/Register');
    }

    public function show($id)
    {
        try
        {
            $torneo = torneo::find($id);

            if (!$torneo)
            {
                return redirect()->route('torneo.index')
                    ->with('error', 'Torneo no encontrado');
            }
            return Inertia::render('Torneo/Show', ['torneo' => $torneo]);
        }
        catch(\Exception $e)
        {
            return redirect()->route('torneo.index')
                ->with('error', 'Error al mostrar el torneo');
        }
    }

    public function store(StoreRequest $request)
    {
        $data = $request->only('fk_user', 'nombreTorneo', 'flayer','imgBannerSuperior','imgBannerInferiorIz','imgBannerInferiorDe','Aval','ApoyoPrincipal', 'cantidadEquiposParticipantes', 'caracteristicas', 'premiacion', 'fk_sistema_juegos', 'fk_categoria_equipo', 'estadoTorneo', 'inscripcion', 'procesoInscripcion', 'reglamentacion', 'fechaInicio', 'fechaFin');



        $files = ['flayer', 'imgBannerSuperior', 'imgBannerInferiorIz', 'imgBannerInferiorDe'];

        foreach ($files as $file) {
            if ($request->hasFile($file)) {
                $fileInstance = $request->file($file);
                $routeImage = $fileInstance->store($file, ['disk' => 'public']);
                $data[$file] = $routeImage;
            }
        }



        torneo::create($data); 

        return redirect()->route('torneo.index');
    }

    public function update(UpdateRequest $request, $id)
    {
        $data = $request->only('fk_user', 'nombreTorneo', 'flayer','imgBannerSuperior','imgBannerInferiorIz','imgBannerInferiorDe','Aval', 'ApoyoPrincipal', 'cantidadEquiposParticipantes', 'caracteristicas', 'premiacion', 'fk_sistema_juegos', 'fk_categoria_equipo', 'estadoTorneo', 'inscripcion', 'procesoInscripcion', 'reglamentacion', 'fechaInicio', 'fechaFin');
        $torneo = torneo::find($id);

        $files = ['flayer', 'imgBannerSuperior', 'imgBannerInferiorIz', 'imgBannerInferiorDe'];

        foreach ($files as $file) {
            if ($request->hasFile($file)) {
                $fileInstance = $request->file($file);
                $routeImage = $fileInstance->store($file, ['disk' => 'public']);
                $data[$file] = $routeImage;
        
                if ($torneo->$file) {
                    Storage::disk('public')->delete($torneo->$file);
                }
            } else {
                if ($torneo->$file) {
                    $data[$file] = $torneo->$file;
                } else {
                    unset($data[$file]);
                }
            }
        }

        $torneo->update($data);

        return redirect()->route('torneo.index', $torneo);

    }

    public function destroy(torneo $torneo)
    {
        
        $files = ['flayer', 'imgBannerSuperior', 'imgBannerInferiorIz', 'imgBannerInferiorDe'];
        
        foreach ($files as $file) {
            if ($torneo->$file) {
                Storage::disk('public')->delete($torneo->$file);
            }
        }
        $torneo->delete();

        return redirect()
            ->route('torneo.index');
    }
}

