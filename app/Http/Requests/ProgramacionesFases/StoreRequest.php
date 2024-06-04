<?php

namespace App\Http\Requests\ProgramacionesFases;

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
            'fk_equipo_local' => 'required|integer',
            'fk_equipo_visitante' => 'required|integer',
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
            'fk_equipo_local.required' => 'El equipo local es requerido',
            'fk_equipo_local.integer' => 'El equipo local debe ser un número entero',
            'fk_equipo_visitante.required' => 'El equipo visitante es requerido',
            'fk_equipo_visitante.integer' => 'El equipo visitante debe ser un número entero',
            'FechaPartido.required' => 'La fecha del partido es requerida',
            'FechaPartido.date' => 'La fecha del partido debe ser una fecha',
            'HoraPartido.required' => 'La hora del partido es requerida',
            'fk_lugarPartido.required' => 'El lugar del partido es requerido',
            'fk_lugarPartido.integer' => 'El lugar del partido debe ser un número entero',
        ];
    }
}
