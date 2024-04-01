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
        return Inertia::render('Torneo/RegistrarEquipo');
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
        $data = $request->only('fk_user', 'nombreTorneo', 'flayer', 'caracteristicas', 'premiacion', 'fk_sistema_juegos', 'fk_categoria_equipo', 'estadoTorneo', 'inscripcion', 'procesoInscripcion', 'reglamentacion', 'fechaInicio', 'fechaFin');

        if ($request->hasFile('flayer'))
        {
            $file = $request->file('flayer');
            $routeImage = $file->store('flayer', ['disk' => 'public']);
            $data['flayer'] = $routeImage;
        }

        torneo::create($data);

        return redirect()->route('torneo.index');
    }

    public function update(UpdateRequest $request, $id)
    {
        $data = $request->only('fk_user', 'nombreTorneo', 'flayer', 'caracteristicas', 'premiacion', 'fk_sistema_juegos', 'fk_categoria_equipo', 'estadoTorneo', 'inscripcion', 'procesoInscripcion', 'reglamentacion', 'fechaInicio', 'fechaFin');
        $torneo = torneo::find($id);

        if ($request->hasFile('flayer'))
        {
            $file = $request->file('flayer');
            $routeImage = $file->store('flayer', ['disk' => 'public']);
            $data['flayer'] = $routeImage;

            if ($torneo->flayer)
            {
                Storage::disk('public')
                    ->delete($torneo->flayer);
            }
        }
        else
        {
            if ($torneo->flayer)
            {
                $data['flayer'] = $torneo->flayer;
            }
            else
            {
                unset($data['flayer']);
            }
        }

        $torneo->update($data);

        return redirect()->route('torneo.index', $torneo);

    }

    public function destroy(torneo $torneo)
    {
        if ($torneo->flayer)
        {
            Storage::disk('public')
                ->delete($torneo->flayer);
        }

        $torneo->delete();

        return redirect()
            ->route('torneo.index');
    }
}

