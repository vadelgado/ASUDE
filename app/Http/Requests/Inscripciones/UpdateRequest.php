<?php 

namespace App\Http\Requests\Inscripciones;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Illuminate\Contracts\Validation\Validator;

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
        $id = $this->route('inscripcione');
        return[
            
            'fk_torneo' => ['required', 'integer', 
            Rule::unique('inscripciones')->where(function ($query) {
                return $query->where('fk_torneo', $this->input('fk_torneo'))
                             ->where('fk_equipo', $this->input('fk_equipo'));
            })->ignore($id, 'id'),
            ],
            'fk_equipo' => 'required|integer',

            'observacion' => 'nullable|string|max:65534',
            
            ];
    }


    /**
     * Get the validation messages that apply to the request.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'fk_user.required' => 'El campo usuario es obligatorio.',
            'fk_user.integer' => 'El campo usuario debe ser un número entero.',
            'fk_torneo.required' => 'El campo torneo es obligatorio.',
            'fk_torneo.integer' => 'El campo torneo debe ser un número entero.',
            'fk_equipo.required' => 'El campo equipo es obligatorio.',
            'fk_equipo.integer' => 'El campo equipo debe ser un número entero.',
            'estadoInscripcion.required' => 'El campo estado es obligatorio.',
            'estadoInscripcion.string' => 'El campo estado debe ser una cadena de texto.',
            'estadoInscripcion.in' => 'El campo estado solo puede ser: Pendiente, Aceptada, Rechazado.',
            'observacion.string' => 'El campo observación debe ser una cadena de texto.',
            'observacion.max' => 'El campo observación no puede exceder los 65534 caracteres.',
            
        ];
    }
}
