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
                                 $q->where('fk_equipoLocal', $this->input('fk_equipoLocal'))
                                   ->orWhere('fk_equipoVisitante', $this->input('fk_equipoLocal'));
                             })
                             ->orWhere(function ($q) {
                                 $q->where('fk_equipoLocal', $this->input('fk_equipoVisitante'))
                                   ->orWhere('fk_equipoVisitante', $this->input('fk_equipoVisitante'));
                             });
            })->ignore($id, 'id'),
        ],
        'fk_lugarPartido' => 'required',
        'fk_equipoLocal' => 'required|different:fk_equipoVisitante|not_in:' . $this->input('fk_equipoVisitante'),
        'fk_equipoVisitante' => 'required|different:fk_equipoLocal|not_in:' . $this->input('fk_equipoLocal'),
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
            'fk_equipoLocal.required' => 'Por favor, selecciona el equipo local.',
            'fk_equipoLocal.different' => 'El equipo local y el equipo visitante deben ser diferentes.',
            'fk_equipoLocal.not_in' => 'El equipo local no puede ser el mismo que el equipo visitante.',
            'fk_equipoVisitante.required' => 'Por favor, selecciona el equipo visitante.',
            'fk_equipoVisitante.different' => 'El equipo local y el equipo visitante deben ser diferentes.',
            'fk_equipoVisitante.not_in' => 'El equipo visitante no puede ser el mismo que el equipo local.',
        ];
    }
}
