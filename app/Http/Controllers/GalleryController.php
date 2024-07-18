<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage; 
use App\Models\Fases;
use App\Models\Gallery;

use Inertia\Inertia;
 
class GalleryController extends Controller
{
    public function index( Request $request) 
    {
        //id de la fase
        $fase_id = $request->input('fase_id');
        $fase = Fases::where('id' ,$fase_id)
            ->select('fases.nombreFase', 'fases.id')
            ->get();

        $galleries = Gallery::join('fases', 'galleries.fk_fase', '=', 'fases.id')
            ->where('fk_fase', $fase_id)
            ->select('galleries.*', 'fases.nombreFase')
            ->orderBy('galleries.largeUrl')            
            ->get();
        return Inertia::render('Gallery/Index', [
            'galleries' => $galleries, 
            'fase' => $fase]);

  
    }

    public function store(Request $request)
    {
        $request->validate(
            [
                'largeUrl' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048',                
                'width' => 'required|integer',
                'height' => 'required|integer',
                'fk_fase' => 'required|exists:fases,id'
            ],
            [
                'largeUrl.required' => 'La Imagen es obligatoria.',
                'largeUrl.max' => 'La URL grande no puede exceder los 255 caracteres.', // Mensaje de error si la URL grande excede los 255 caracteres.
                'width.required' => 'El ancho es obligatorio.', // Mensaje de error si el ancho no se proporciona.
                'width.integer' => 'El ancho debe ser un número entero.', // Mensaje de error si el ancho no es un número entero.
                'height.required' => 'La altura es obligatoria.', // Mensaje de error si la altura no se proporciona.
                'height.integer' => 'La altura debe ser un número entero.', // Mensaje de error si la altura no es un número entero.
                'fk_fase.required' => 'La fase es obligatoria.', // Mensaje de error si la fase no se proporciona.
                'fk_fase.exists' => 'La fase seleccionada no es válida.' // Mensaje de error si la fase no existe en la tabla 'fases'.
            ]
        );
        
        $data = $request->all(  );

        if($request->hasFile('largeUrl')) {
            $file = $request->file('largeUrl');
            $routeImage = $file->store('largeUrl', ['disk' => 'public']);
            $data['largeUrl'] = $routeImage;
        }

        Gallery::create($data);
    }

    public function update(Request $request, $id)
    {
        $request->validate(
            [
                'largeUrl' => 'nullable',                
                'width' => 'required|integer',
                'height' => 'required|integer',
                'fk_fase' => 'required|exists:fases,id'
            ],
            [
                'width.required' => 'El ancho es obligatorio.', // Mensaje de error si el ancho no se proporciona.
                'width.integer' => 'El ancho debe ser un número entero.', // Mensaje de error si el ancho no es un número entero.
                'height.required' => 'La altura es obligatoria.', // Mensaje de error si la altura no se proporciona.
                'height.integer' => 'La altura debe ser un número entero.', // Mensaje de error si la altura no es un número entero.
                'fk_fase.required' => 'La fase es obligatoria.', // Mensaje de error si la fase no se proporciona.
                'fk_fase.exists' => 'La fase seleccionada no es válida.' // Mensaje de error si la fase no existe en la tabla 'fases'.
            ] );

            $data = $request->all();
            $gallery = Gallery::find($id);

            if($request->hasFile('largeUrl')) {
                $file = $request->file('largeUrl');
                $routeImage = $file->store('largeUrl', ['disk' => 'public']);
                $data['largeUrl'] = $routeImage;

                if($gallery->largeUrl) {
                    Storage::disk('public')->delete($gallery->largeUrl);
                }
            } else {
                if ($gallery->largeUrl) {
                    $data['largeUrl'] = $gallery->largeUrl; 
                } else {
                    unset($data['largeUrl']);
                }
            }

            $gallery->update($data);      

    }

    public function destroy($id)
    {
        $gallery = Gallery::findOrFail($id);
        if($gallery->largeUrl) {
            Storage::disk('public')->delete($gallery->largeUrl);
        }

        $gallery->delete();
    }

    
}
