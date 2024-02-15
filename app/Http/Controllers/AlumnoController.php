<?php

namespace App\Http\Controllers;
use App\Models\Alumno;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;

class AlumnoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $alumnos = Alumno::where('fk_user', Auth::user()->id)->get();
        return Inertia::render('Alumno/Index', [
            'alumnos' => $alumnos
        ]);
    }

    public function indexAdmin()
    {
        $alumnos = Alumno::all();
        return Inertia::render('Alumno/Index', [
            'alumnos' => $alumnos
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'identificacion' => 'required',
            'nombres' => 'required',
            'apellidos' => 'required',
            'fecha_nacimiento' => 'required|date', 
            'genero' => 'required',
            'direccion' => 'required',
            'barrio' => 'required',
            'celular' => 'required',
            'sedeEntrenamiento' => 'required',
        ],[
            'identificacion.required' => 'El campo identificación es obligatorio.',
            'nombres.required' => 'El campo nombres es obligatorio.',
            'apellidos.required' => 'El campo apellidos es obligatorio.',
            'fecha_nacimiento.required' => 'El campo fecha de nacimiento es obligatorio.',
            'fecha_nacimiento.date' => 'El campo fecha de nacimiento debe ser una fecha válida.',
            'genero.required' => 'El campo género es obligatorio.',
            'direccion.required' => 'El campo dirección es obligatorio.',
            'barrio.required' => 'El campo barrio es obligatorio.',
            'celular.required' => 'El campo celular es obligatorio.',
            'sedeEntrenamiento.required' => 'El campo sede de entrenamiento es obligatorio.',
        ]);
    
        try {
            Alumno::create([
                'identificacion' => $request->input('identificacion'),
                'nombres' => $request->input('nombres'),
                'apellidos' => $request->input('apellidos'),
                'fecha_nacimiento' => $request->input('fecha_nacimiento'),
                'genero' => $request->input('genero'),
                'direccion' => $request->input('direccion'),
                'barrio' => $request->input('barrio'),
                'celular' => $request->input('celular'),
                'sedeEntrenamiento' => $request->input('sedeEntrenamiento'),
                'fk_user' => Auth::user()->id,
            ]);
    
            return redirect('alumno')->with('success', 'Alumno agregado exitosamente.');
        } catch (\Illuminate\Database\QueryException $e) {
            Log::error('Error de base de datos: ' . $e->getMessage());
            return response()->json(['error' => 'Error de base de datos: ' . $e->getMessage()], 500);
        } catch (\Exception $e) {
            Log::error('Error inesperado: ' . $e->getMessage());
            return response()->json(['error' => 'Error inesperado: ' . $e->getMessage()], 500);
        }
    }
    
    

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $alumno = Alumno::find($id);
    
        if (!$alumno) {
            return response()->json(['error' => 'Alumno no encontrado'], 404);
        }
    
        if ($request->hasAny(['identificacion', 'nombres', 'apellidos', /*...otros campos...*/])) {
            $alumno->fill($request->input())->saveOrFail();
        } else {
            return response()->json(['error' => 'No se proporcionaron datos para actualizar'], 400);
        }
    
        return redirect('alumno');
    }
    
    
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $alumno = Alumno::find($id);
        $alumno->delete();
        return redirect('alumno');
    }
}
