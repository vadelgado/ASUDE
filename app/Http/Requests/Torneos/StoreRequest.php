<?php

namespace App\Http\Requests\Torneos;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nombreTorneo' => 'required|text|max:65535',
            'flayer' => 'image|mimes:jpeg,png,jpg,gif,webp|max:2048',
            'caracteristicas' => 'required|text|max:65535',
            'premiacion' => 'required|text|max:65535',
            'sistemaJuego' => 'required|text|max:65535',
            'procesoInscripcion' => 'required|text|max:65535',
            'reglamentacion' => 'required|text|max:65535',
            'fechaInicio' => 'required|date',

        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'nombreTorneo.required' => 'El nombre del torneo es obligatorio.',
            'nombreTorneo.text' => 'El nombre del torneo debe ser una cadena de texto.',
            'nombreTorneo.max' => 'El nombre del torneo no puede exceder los 65535 caracteres.',
            'flayer.image' => 'El flayer debe ser una imagen.',
            'flayer.mimes' => 'El flayer debe ser un archivo de tipo: jpeg, png, jpg, gif, webp.',
            'flayer.max' => 'El flayer no puede exceder los 2048 kilobytes.',
            'caracteristicas.required' => 'Las características del torneo son obligatorias.',
            'caracteristicas.text' => 'Las características del torneo deben ser una cadena de texto.',
            'caracteristicas.max' => 'Las características del torneo no pueden exceder los 65535 caracteres.',
            'premiacion.required' => 'La premiación del torneo es obligatoria.',
            'premiacion.text' => 'La premiación del torneo debe ser una cadena de texto.',
            'premiacion.max' => 'La premiación del torneo no puede exceder los 65535 caracteres.',
            'sistemaJuego.required' => 'El sistema de juego del torneo es obligatorio.',
            'sistemaJuego.text' => 'El sistema de juego del torneo debe ser una cadena de texto.',
            'sistemaJuego.max' => 'El sistema de juego del torneo no puede exceder los 65535 caracteres.',
            'procesoInscripcion.required' => 'El proceso de inscripción del torneo es obligatorio.',
            'procesoInscripcion.text' => 'El proceso de inscripción del torneo debe ser una cadena de texto.',
            'procesoInscripcion.max' => 'El proceso de inscripción del torneo no puede exceder los 65535 caracteres.',
            'reglamentacion.required' => 'La reglamentación del torneo es obligatoria.',
            'reglamentacion.text' => 'La reglamentación del torneo debe ser una cadena de texto.',
            'reglamentacion.max' => 'La reglamentación del torneo no puede excede los 65535 caracteres.',
            'fechaInicio.required' => 'La fecha de inicio del torneo es obligatoria.',
            'fechaInicio.date' => 'La fecha de inicio del torneo debe ser una fecha válida.',
            

        ];
    }
}
