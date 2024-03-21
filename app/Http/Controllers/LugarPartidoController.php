<?php

namespace App\Http\Controllers;

use App\Models\lugarPartido;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\Exception\FileNotFoundException;
use Symfony\Component\HttpFoundation\File\Exception\ServerErrorException;

class LugarPartidoController extends Controller
{

    public function index()
    {
        return Inertia::render('LugarPartido/Index', [
            'lugarPartidos' => lugarPartido::all()
        ]);   
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'nomLugar' => 'required|unique:lugarPartidos,nomLugar',
                'geolocalizacion' => 'required|unique:lugarPartidos,geolocalizacion',
                'direccion' => 'required|unique:lugarPartidos,direccion',
                'fotoLugar' => 'required|unique:lugarPartidos,fotoLugar|image|mimes:jpeg,png,jpg,gif|max:2048',
            ], [
                'nomLugar.required' => 'El campo nombre del lugar es obligatorio.',
                'nomLugar.unique' => 'El campo nombre del lugar ya existe.',
                'geolocalizacion.required' => 'El campo geolocalización es obligatorio.',
                'geolocalizacion.unique' => 'El campo geolocalización ya existe.',
                'direccion.required' => 'El campo dirección es obligatorio.',
                'direccion.unique' => 'El campo dirección ya existe.',
                'fotoLugar.required' => 'El campo foto del lugar es obligatorio.',
                'fotoLugar.unique' => 'El campo foto del lugar ya existe.',
                'fotoLugar.image' => 'El campo foto del lugar debe ser una imagen.',
                'fotoLugar.mimes' => 'El campo foto del lugar debe ser un archivo de tipo: jpeg, png, jpg, gif.',
                'fotoLugar.max' => 'El campo foto del lugar no debe exceder los 2048 kilobytes (2MB).',
            ]);

            $imageName = time() . '_' . $request->file('fotoLugar')->getClientOriginalName();
            $request->file('fotoLugar')->move(public_path('fotosLugar'), $imageName);

            lugarPartido::create([
                'nomLugar' => $request->input('nomLugar'),
                'geolocalizacion' => $request->input('geolocalizacion'),
                'direccion' => $request->input('direccion'),
                'fotoLugar' => $imageName,
            ]);
            
        } catch (FileNotFoundException $e) {
            return response()->json(['error' => 'No se encontró el archivo.'], 500);
        } catch (FileException $e) {
            return response()->json(['error' => 'Error al procesar el archivo.'], 500);
        } catch (ServerErrorException $e) {
            return  response()->json(['error' => 'Error en el servidor.'], 500);
        } catch (\Exception $e) {
            return  response()->json(['error' => 'Error inesperado.'], 500);
        }
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nomLugar' => 'required|unique:lugarPartidos,nomLugar,' . $id,
            'geolocalizacion' => 'required|unique:lugarPartidos,geolocalizacion,' . $id,
            'direccion' => 'required|unique:lugarPartidos,direccion,' . $id,
            'fotoLugar' => 'required|unique:lugarPartidos,fotoLugar,' . $id . '|image|mimes:jpeg,png,jpg,gif|max:2048',
        ], [
            'nomLugar.required' => 'El campo nombre del lugar es obligatorio.',
            'nomLugar.unique' => 'El campo nombre del lugar ya existe.',
            'geolocalizacion.required' => 'El campo geolocalización es obligatorio.',
            'geolocalizacion.unique' => 'El campo geolocalización ya existe.',
            'direccion.required' => 'El campo dirección es obligatorio.',
            'direccion.unique' => 'El campo dirección ya existe.',
            'fotoLugar.required' => 'El campo foto del lugar es obligatorio.',
            'fotoLugar.unique' => 'El campo foto del lugar ya existe.',
            'fotoLugar.image' => 'El campo foto del lugar debe ser una imagen.',
            'fotoLugar.mimes' => 'El campo foto del lugar debe ser un archivo de tipo: jpeg, png, jpg, gif.',
            'fotoLugar.max' => 'El campo foto del lugar no debe exceder los 2048 kilobytes (2MB).',
        ]);

        try {
            $lugarPartido = lugarPartido::findOrFail($id);
            $lugarPartido->fill($request->all())->saveOrFail();
        } catch (FileNotFoundException $e) {
            return response()->json(['error' => 'No se encontró el archivo.'], 500);
        } catch (FileException $e) {
            return response()->json(['error' => 'Error al procesar el archivo.'], 500);
        } catch (ServerErrorException $e) {
            return response()->json(['error' => 'Error en el servidor.'], 500);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error inesperado.'], 500);
        }


    }

    public function destroy($id)
    {
        try {
            $lugarPartido = lugarPartido::findOrFail($id);
            $lugarPartido->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error inesperado.'], 500);
        }
    }
}
