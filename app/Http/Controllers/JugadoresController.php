<?php

namespace App\Http\Controllers;

use App\Models\Jugadores;
use App\Models\Equipos;

use Illuminate\Support\Facades\Auth;
use PDF;
use App\Http\Requests\Jugadores\StoreRequest;
use App\Http\Requests\Jugadores\UpdateRequest;
use Illuminate\Support\Facades\Storage;

use Inertia\Inertia;
 
use Illuminate\Http\Request;

class JugadoresController extends Controller
{
    public function index(Request $request)
    {
        $request->validate([
            'equipo_id' => 'required|integer|exists:equipos,id',
        ]);

        $equipo_id = $request->input('equipo_id');

        if ($equipo_id) {
            //Nombre del equipo
            $equipo = Equipos::find($equipo_id)->nombreEquipo;
            $userRole = Auth::user()->role;

            $jugadores = Jugadores::join('equipos', 'jugadores.fk_equipo', '=', 'equipos.id')
                ->when($userRole !== 'admin', function ($query) {
                    return $query->where('equipos.fk_user', Auth::user()->id);
                })
                ->when($equipo_id, function ($query) use ($equipo_id) {
                    return $query->where('equipos.id', $equipo_id);
                })
                ->select('jugadores.*', 'equipos.nombreEquipo')
                ->get();
            return Inertia::render('Jugadores/Index', [
                'jugadores' => $jugadores,
                'equipo_id' => $equipo_id,
                'equipo' => $equipo,
                'userRole' => $userRole,
            ]);
        } else {
            return Inertia::render('Dashboard');
        }
    }

    public function generatePDF(Request $request)
    {
        $request->validate([
            'equipo_id' => 'required|integer|exists:equipos,id',
        ]);
    
        $equipo_id = $request->input('equipo_id');
    
        if ($equipo_id) {
            // Nombre del equipo
            $equipo = Equipos::find($equipo_id);
            $userRole = Auth::user()->role;
    
            $jugadores = Jugadores::join('equipos', 'jugadores.fk_equipo', '=', 'equipos.id')
                ->when($userRole !== 'admin', function ($query) {
                    return $query->where('equipos.fk_user', Auth::user()->id);
                })
                ->when($equipo_id, function ($query) use ($equipo_id) {
                    return $query->where('equipos.id', $equipo_id);
                })
                ->select('jugadores.nombrecompleto', 'jugadores.*', 'equipos.nombreEquipo')
                ->get();
    
            $pdf = PDF::loadView('pdf.jugadores', compact('jugadores', 'equipo'));
            $pdf->setPaper([0, 0, 612.283, 935.433], 'landscape'); // Set the paper size to 216mm x 330mm
            return response()->streamDownload(function () use ($pdf) {
                echo $pdf->output();
            }, 'jugadores.pdf', [
                'Content-Type' => 'application/pdf',
            ]);
        } else {
            return Inertia::render('Dashboard');
        }
    }



    public function store(StoreRequest $request)
    {
        $data = $request->only(
            'nombreCompleto',
            'tipoIdentificacion',
            'numeroIdentificacion',
            'numeroSerie',
            'fechaNacimiento',
            'lugarNacimiento',
            'institucionEducativa',
            'grado',
            'ciudadInstitucionEducativa',
            'telefonoInstitucionEducativa',
            'fk_equipo',
            'estadoEPS',
            'nombreEPS',
            'lugarAtencionEPS',
        );

        $data['estado'] = true;

        if ($request->hasFile('foto')) {
            $request->validate([
                'foto' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);
            $file = $request->file('foto');
            $routeImage = $file->store('jugadores', ['disk' => 'public']);
            $data['foto'] = $routeImage;
        }

        Jugadores::create($data);
    }

    public function update(UpdateRequest $request, $id)
    {
        $data = $request->only(
            'nombreCompleto',
            'tipoIdentificacion',
            'numeroIdentificacion',
            'numeroSerie',
            'fechaNacimiento',
            'lugarNacimiento',
            'institucionEducativa',
            'grado',
            'ciudadInstitucionEducativa',
            'telefonoInstitucionEducativa',
            'fk_equipo',
            'estadoEPS',
            'nombreEPS',
            'lugarAtencionEPS',
        );

        $jugador = Jugadores::find($id);

        if ($request->hasFile('foto')) {
            $request->validate([
                'foto' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);

            $file = $request->file('foto');
            $routeImage = $file->store('jugadores', ['disk' => 'public']);
            $data['foto'] = $routeImage;

            if ($jugador->foto) {
                Storage::disk('public')->delete($jugador->foto);
            }
        } else {
            if ($jugador->foto) {
                $data['foto'] = $jugador->foto;
            } else {
                unset($data['foto']);
            }
        }

        $jugador->update($data);
    }

    public function toggleJugador($id)
    {
        $jugador = Jugadores::find($id);

        if ($jugador) {
            $jugador->estado = !$jugador->estado;
            $jugador->save();
        } else {
            return response()->json(['message' => 'Jugador no encontrado'], 404);
        }
    }
}
