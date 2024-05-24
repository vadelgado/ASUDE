<?php

namespace App\Http\Requests\Sorteo;

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
     */
    public function rules(): array
    {
        $id = $this->route('resultadoSorteo');

        return [
            'fk_torneo' => 'required',
            'puesto' => 'required',
            'fk_equipo' => [
                'required',
                Rule::unique('resultado_sorteos')->ignore($id)->where(function ($query) {
                    return $query->where('fk_equipo', $this->input('fk_equipo'))
                                 ->where('fk_torneo', $this->input('fk_torneo'))
                                 ->where('puesto', $this->input('puesto'));
                }),
                Rule::unique('resultado_sorteos')->ignore($id)->where(function ($query) {
                    return $query->where('fk_equipo', $this->input('fk_equipo'))
                                 ->where('fk_torneo', $this->input('fk_torneo'));
                }),
            ],
            'puesto' => [
                'required',
                Rule::unique('resultado_sorteos')->ignore($id)->where(function ($query) {
                    return $query->where('fk_torneo', $this->input('fk_torneo'))
                                 ->where('puesto', $this->input('puesto'));
                }),
            ],
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
            'fk_equipo.required' => 'Es obligatorio seleccionar un equipo.',
            'fk_equipo.unique' => [
                'La combinación del equipo, torneo y puesto ya existe. Por favor, elija otra.',
                'El equipo ya ha sido sorteado en este torneo. Por favor, elija otro equipo.',
            ],
            'puesto.required' => 'Es obligatorio especificar el puesto.',
            'puesto.unique' => 'El puesto ya ha sido asignado en este torneo. Por favor, elija otro puesto.',
        ];
    }
}
