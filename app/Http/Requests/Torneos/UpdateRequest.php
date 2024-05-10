<?php

namespace App\Http\Requests\Torneos;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UpdateRequest extends FormRequest
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
            'nombreTorneo' => 'required|string|max:65535',
            'flayer' => 'nullable',
            'imgBannerSuperior' => 'nullable',
            'imgBannerInferiorIz' => 'nullable',
            'imgBannerInferiorDe' => 'nullable',
            'Aval' => 'nullable|string|max:65535',            
            'ApoyoPrincipal' => 'nullable|string|max:65535',
            'cantidadEquiposParticipantes' => 'required|integer|min:2',
            'caracteristicas' => 'required|string|max:65535',
            'premiacion' => 'required|string|max:65535',
            'fk_sistema_juegos' => 'required|exists:sistema_juegos,id',
            'fk_categoria_equipo' => 'required|exists:categoria_equipo,id',
            'estadoTorneo' => 'required|in:Por Iniciar,En Juego,Finalizado',
            'inscripcion' => 'required|in:Abierta,Cerrada',
            'procesoInscripcion' => 'required|string|max:65535',
            'reglamentacion' => 'required|string|max:65535',
            'fechaInicio' => 'required|date',
            'fechaFin' => 'nullable|date', 
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return[
            'nombreTorneo.required' => 'El nombre del torneo es obligatorio.',
            'nombreTorneo.string' => 'El nombre del torneo debe ser una cadena de texto.',
            'nombreTorneo.max' => 'El nombre del torneo no puede exceder los 65535 caracteres.',
            'Aval.string' => 'El Aval debe ser una cadena de texto.',
            'Aval.max' => 'El Aval no puede exceder los 65535 caracteres.',            
            'ApoyoPrincipal.string' => 'El Apoyo Principal debe ser una cadena de texto.',
            'ApoyoPrincipal.max' => 'El Apoyo Principal no puede exceder los 65535 caracteres.',            
            'cantidadEquiposParticipantes.required' => 'La cantidad de equipos participantes es obligatoria.',
            'cantidadEquiposParticipantes.integer' => 'La cantidad de equipos participantes debe ser un número entero.',
            'cantidadEquiposParticipantes.min' => 'La cantidad de equipos participantes debe ser Mayor 2.',            
            'caracteristicas.required' => 'Las características del torneo son obligatorias.',
            'caracteristicas.string' => 'Las características del torneo deben ser una cadena de texto.',
            'caracteristicas.max' => 'Las características del torneo no pueden exceder los 65535 caracteres.',
            'premiacion.required' => 'La premiación del torneo es obligatoria.',
            'premiacion.string' => 'La premiación del torneo debe ser una cadena de texto.',
            'premiacion.max' => 'La premiación del torneo no puede exceder los 65535 caracteres.',
            'fk_sistema_juegos.required' => 'El sistema de juego es obligatorio.',
            'fk_sistema_juegos.exists' => 'El sistema de juego no existe.',
            'fk_categoria_equipo.required' => 'La categoría de equipo es obligatoria.',
            'fk_categoria_equipo.exists' => 'La categoría de equipo no existe.',
            'estadoTorneo.required' => 'El estado del torneo es obligatorio.',
            'estadoTorneo.in' => 'El estado del torneo debe ser: Por Iniciar, En Juego, Finalizado.',
            'inscripcion.required' => 'El estado de inscripción es obligatorio.',
            'inscripcion.in' => 'El estado de inscripción debe ser: Abierta, Cerrada.',
            'procesoInscripcion.required' => 'El proceso de inscripción es obligatorio.',
            'procesoInscripcion.string' => 'El proceso de inscripción debe ser una cadena de texto.',
            'procesoInscripcion.max' => 'El proceso de inscripción no puede exceder los 65535 caracteres.',
            'reglamentacion.required' => 'La reglamentación es obligatoria.',
            'reglamentacion.string' => 'La reglamentación debe ser una cadena de texto.',
            'reglamentacion.max' => 'La reglamentación no puede exceder los 65535 caracteres.',
            'fechaInicio.required' => 'La fecha de inicio es obligatoria.',
            'fechaInicio.date' => 'La fecha de inicio debe ser una fecha.',
            'fechaFin.date' => 'La fecha de fin debe ser una fecha.',
        ];
    }
}
