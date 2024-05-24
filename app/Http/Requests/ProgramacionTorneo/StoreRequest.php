<?php

namespace App\Http\Requests\ProgramacionTorneo;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth; 
use Illuminate\Validation\Rule;

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
            'fk_jornadaPartido' => [
                'required',
                Rule::unique('programacion_torneos')->where(function ($query) {
                    return $query->where('fk_jornadaPartido', $this->input('fk_jornadaPartido'))
                                 ->where(function ($q) {
                                     $q->where('fk_equipoLocal', $this->input('fk_equipoLocal'))
                                       ->orWhere('fk_equipoVisitante', $this->input('fk_equipoLocal'));
                                 })
                                 ->orWhere(function ($q) {
                                     $q->where('fk_equipoLocal', $this->input('fk_equipoVisitante'))
                                       ->orWhere('fk_equipoVisitante', $this->input('fk_equipoVisitante'));
                                 });
                })->ignore($this->route('id'), 'id'),
            ],
            'fk_lugarPartido' => 'required',
            'fk_equipoLocal' => 'required|different:fk_equipoVisitante|not_in:fk_equipoVisitante',
            'fk_equipoVisitante' => 'required|different:fk_equipoLocal|not_in:fk_equipoLocal',
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
            'fk_jornadaPartido.unique' => 'Favor revisar las llaves de juego',
            'fk_lugarPartido.required' => 'El lugar del partido es requerido',
            'fk_equipoLocal.required' => 'El equipo local es requerido',
            'fk_equipoLocal.different' => 'El equipo visitante y local no pueden ser iguales',
            'fk_equipoLocal.not_in' => 'El equipo local y visitante no pueden ser iguales',
            'fk_equipoVisitante.different' => 'El equipo local y visitante no pueden ser iguales',
            'fk_equipoVisitante.not_in' => 'El equipo local y visitante no pueden ser iguales',
            'fk_equipoVisitante.required' => 'El equipo visitante es requerido',
        ];
    }
}
