<?php

namespace App\Http\Requests\Jugadores;

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
            'nombreCompleto' => 'required|string|max:255',
            'foto'=> 'nullable',
            'tipoIdentificacion' => 'required|in:TI,CC,CE,PA,RC',
            'numeroIdentificacion' => 'required|digits_between:10,11',
            'numeroSerie' => 'required|digits_between:5,11',
            'fechaNacimiento' => 'required|date',
            'lugarNacimiento' => 'required|string|max:255',
            'institucionEducativa' => 'required|string|max:255',
            'grado' => 'required',
            'ciudadInstitucionEducativa' => 'required|string|max:255',
            'telefonoInstitucionEducativa' => 'required|string|max:255',
            'fk_equipo' => 'required|exists:equipos,id|integer',
            'estadoEPS' => 'required|boolean|in:0,1',
            'nombreEPS' => 'required|string|max:255',
            'lugarAtencionEPS' => 'required|string|max:255',


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
            'nombreCompleto.required' => 'El campo nombre completo es requerido',
            'nombreCompleto.string' => 'El campo nombre completo debe ser de tipo texto',
            'nombreCompleto.max' => 'El campo nombre completo debe tener máximo 255 caracteres',
            'tipoIdentificacion.required' => 'El campo tipo de identificación es requerido',
            'tipoIdentificacion.in' => 'El campo tipo de identificación debe ser TI, CC, CE, PA o RC',
            'numeroIdentificacion.required' => 'El campo número de identificación es requerido',
            'numeroIdentificacion.digits' => 'El campo número de identificación debe tener 11 dígitos',
            'numeroSerie.required' => 'El campo número de serie es requerido',
            'numeroSerie.digits' => 'El campo número de serie debe tener 11 dígitos',
            'fechaNacimiento.required' => 'El campo fecha de nacimiento es requerido',
            'fechaNacimiento.date' => 'El campo fecha de nacimiento debe ser de tipo fecha',
            'lugarNacimiento.required' => 'El campo lugar de nacimiento es requerido',
            'lugarNacimiento.string' => 'El campo lugar de nacimiento debe ser de tipo texto',
            'lugarNacimiento.max' => 'El campo lugar de nacimiento debe tener máximo 255 caracteres',
            'institucionEducativa.required' => 'El campo institución educativa es requerido',
            'institucionEducativa.string' => 'El campo institución educativa debe ser de tipo texto',
            'institucionEducativa.max' => 'El campo institución educativa debe tener máximo 255 caracteres',
            'grado.required' => 'El campo grado es requerido',
            'ciudadInstitucionEducativa.required' => 'El campo ciudad de la institución educativa es requerido',
            'ciudadInstitucionEducativa.string' => 'El campo ciudad de la institución educativa debe ser de tipo texto',
            'ciudadInstitucionEducativa.max' => 'El campo ciudad de la institución educativa debe tener máximo 255 caracteres',
            'telefonoInstitucionEducativa.required' => 'El campo teléfono de la institución educativa es requerido',
            'telefonoInstitucionEducativa.string' => 'El campo teléfono de la institución educativa debe ser de tipo texto',
            'telefonoInstitucionEducativa.max' => 'El campo teléfono de la institución educativa debe tener máximo 255 caracteres',
            'fk_equipo.required' => 'El campo equipo es requerido',
            'fk_equipo.exists' => 'El campo equipo no existe',
            'fk_equipo.integer' => 'El campo equipo debe ser de tipo entero',  
            'estadoEPS.required' => 'El campo estado EPS es requerido',
            'nombreEPS.required' => 'El campo nombre EPS es requerido',
            'lugarAtencionEPS.required' => 'El campo lugar de atención EPS es requerido',

        ];
    }	
}
