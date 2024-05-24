<?php

namespace App\Http\Requests\ProgramacionTorneo;  

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
 
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
    $id = $this->route('programacionTorneo');  
    return [
        'HoraPartido' => 'required',
        'fk_jornadaPartido' => [
            'required',
            Rule::unique('programacion_torneos')->where(function ($query) {
                return $query->where('fk_jornadaPartido', $this->input('fk_jornadaPartido'))
                             ->where(function ($q) {
                                 $q->where('posicion_local', $this->input('posicion_local'))
                                   ->orWhere('posicion_visitante', $this->input('posicion_local'));
                             })
                             ->orWhere(function ($q) {
                                 $q->where('posicion_local', $this->input('posicion_visitante'))
                                   ->orWhere('posicion_visitante', $this->input('posicion_visitante'));
                             });
            })->ignore($id, 'id'),
        ],
        'fk_lugarPartido' => 'required',
        'posicion_local' => 'required|different:posicion_visitante|not_in:' . $this->input('posicion_visitante'),
        'posicion_visitante' => 'required|different:posicion_local|not_in:' . $this->input('posicion_local'),
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
            'HoraPartido.required' => 'Por favor, ingresa la hora del partido.',            
            'fk_jornadaPartido.required' => 'La jornada del partido es requerida.',
            'fk_jornadaPartido.unique' => 'Revisar Jornada Equipo Local y visitante alguno se esta repitiendo.',
            'fk_lugarPartido.required' => 'El lugar del partido es requerido.',
            'posicion_local.required' => 'Por favor, selecciona el equipo local.',
            'posicion_local.different' => 'El equipo local y el equipo visitante deben ser diferentes.',
            'posicion_local.not_in' => 'El equipo local no puede ser el mismo que el equipo visitante.',
            'posicion_visitante.required' => 'Por favor, selecciona el equipo visitante.',
            'posicion_visitante.different' => 'El equipo local y el equipo visitante deben ser diferentes.',
            'posicion_visitante.not_in' => 'El equipo visitante no puede ser el mismo que el equipo local.',
        ];
    }
}
