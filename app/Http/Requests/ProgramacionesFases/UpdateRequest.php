<?php

namespace App\Http\Requests\ProgramacionesFases;

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
            'posicion_visitante' => 'required|integer',
            'posicion_local' => 'required|integer',
            'FechaPartido' => 'required|date',
            'HoraPartido' => 'required',
            'fk_lugarPartido' => 'required|integer',
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
            'posicion_local.required' => 'Es obligatorio indicar la posición del equipo local.',
            'posicion_local.integer' => 'La posición del equipo local debe ser un número entero.',
            'posicion_visitante.required' => 'Es obligatorio indicar la posición del equipo visitante.',
            'posicion_visitante.integer' => 'La posición del equipo visitante debe ser un número entero.',
            'FechaPartido.required' => 'Es obligatorio indicar la fecha del partido.',
            'FechaPartido.date' => 'La fecha del partido debe ser una fecha válida.',
            'HoraPartido.required' => 'Es obligatorio indicar la hora del partido.',
            'fk_lugarPartido.required' => 'Es obligatorio indicar el lugar del partido.',
            'fk_lugarPartido.integer' => 'El lugar del partido debe ser un número entero.',
        ];
    }
}
