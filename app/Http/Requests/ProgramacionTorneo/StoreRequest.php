<?php

namespace App\Http\Requests\ProgramacionTorneo;  

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
            'HoraPartido' => 'required|date_format:H:i',
            'fk_jornadaPartido' => 'required|exists:jornada_partidos,id',
            'fk_lugarPartido' => 'required|exists:lugar_partidos,id',
            'fk_equipoLocal' => 'required',
            'fk_equipoVisitante' => 'required',
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
            'HoraPartido.required' => 'La hora del partido es requerida',
            'HoraPartido.date_format' => 'La hora del partido debe tener el formato HH:MM',
            'fk_jornadaPartido.required' => 'La jornada del partido es requerida',
            'fk_jornadaPartido.exists' => 'La jornada del partido no existe',
            'fk_lugarPartido.required' => 'El lugar del partido es requerido',
            'fk_lugarPartido.exists' => 'El lugar del partido no existe',
            'fk_equipoLocal.required' => 'El equipo local es requerido',
            'fk_equipoLocal.exists' => 'El equipo local no existe',
            'fk_equipoVisitante.required' => 'El equipo visitante es requerido',
            'fk_equipoVisitante.exists' => 'El equipo visitante no existe',
        ];
    }
}
