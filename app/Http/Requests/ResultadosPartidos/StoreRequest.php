<?php

namespace App\Http\Requests\ResultadosPartidos;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

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
            'fk_programaciones_faces_id' => 'nullable|integer|exists:programaciones_faces,id',
            'fk_jugador_id' => 'required|integer|exists:jugadores,id',
            'goles' => 'nullable|integer|min:0',
            'tarjetas_amarillas' => 'nullable|integer|min:0',
            'tarjetas_rojas' => 'nullable|integer|min:0',
            'observaciones' => 'nullable|string|max:255',
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
            'fk_programaciones_faces_id.required' => 'El campo de programación es obligatorio.',
            'fk_programaciones_faces_id.integer' => 'El campo de programación debe ser un número entero.',
            'fk_programaciones_faces_id.exists' => 'La programación seleccionada no es válida.',
            
            'fk_jugador_id.required' => 'El campo del jugador es obligatorio.',
            'fk_jugador_id.integer' => 'El campo del jugador debe ser un número entero.',
            'fk_jugador_id.exists' => 'El jugador seleccionado no es válido.',
            
            'goles.integer' => 'El campo de goles debe ser un número entero.',
            'goles.min' => 'El campo de goles no puede ser un valor negativo.',
            
            'tarjetas_amarillas.integer' => 'El campo de tarjetas amarillas debe ser un número entero.',
            'tarjetas_amarillas.min' => 'El campo de tarjetas amarillas no puede ser un valor negativo.',
            
            'tarjetas_rojas.integer' => 'El campo de tarjetas rojas debe ser un número entero.',
            'tarjetas_rojas.min' => 'El campo de tarjetas rojas no puede ser un valor negativo.',
            
            'observaciones.string' => 'El campo de observaciones debe ser una cadena de texto.',
            'observaciones.max' => 'El campo de observaciones no puede exceder los 255 caracteres.',
        ];
    }
    
}
