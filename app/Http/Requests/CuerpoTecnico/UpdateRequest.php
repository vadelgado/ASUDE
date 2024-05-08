<?php

namespace App\Http\Requests\CuerpoTecnico; 

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
            'fk_equipo' => 'required|integer',
            'fotoCuerpoTecnico' => 'nullable',
            'nombreCompleto' => 'required|string|max:255',
            'tipoIdentificacion' => 'required|string|in:TI,CC,CE,PA',
            'numeroIdentificacion' => 'required|string|max:11',
            'telefonoFijo' => 'nullable|string|max:11',
            'telefonoCelular' => 'required|string|max:11',
            'correoElectronico' => 'required|email|max:255'
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
            'fk_equipo.required' => 'El campo fk_equipo es obligatorio.',
            'fk_equipo.integer' => 'El campo fk_equipo debe ser un número entero.',
            'fotoCuerpoTecnico.string' => 'El campo fotoCuerpoTecnico debe ser una cadena de texto.',
            'fotoCuerpoTecnico.max' => 'El campo fotoCuerpoTecnico no debe ser mayor a 255 caracteres.',
            'nombreCompleto.required' => 'El campo nombreCompleto es obligatorio.',
            'nombreCompleto.string' => 'El campo nombreCompleto debe ser una cadena de texto.',
            'nombreCompleto.max' => 'El campo nombreCompleto no debe ser mayor a 255 caracteres.',
            'tipoIdentificacion.required' => 'El campo tipoIdentificacion es obligatorio.',
            'tipoIdentificacion.string' => 'El campo tipoIdentificacion debe ser una cadena de texto.',
            'tipoIdentificacion.in' => 'El campo tipoIdentificacion debe ser uno de los siguientes tipos: TI, CC, CE, PA.',
            'numeroIdentificacion.required' => 'El campo numeroIdentificacion es obligatorio.',
            'numeroIdentificacion.string' => 'El campo numeroIdentificacion debe ser una cadena de texto.',
            'numeroIdentificacion.max' => 'El campo numeroIdentificacion no debe ser mayor a 11 caracteres.',
            'telefonoFijo.string' => 'El campo telefonoFijo debe ser una cadena de texto.',
            'telefonoFijo.max' => 'El campo telefonoFijo no debe ser mayor a 11 caracteres.',
            'telefonoCelular.required' => 'El campo telefonoCelular es obligatorio.',
            'telefonoCelular.string' => 'El campo telefonoCelular debe ser una cadena de texto.',
            'telefonoCelular.max' => 'El campo telefonoCelular no debe ser mayor a 11 caracteres.',
            'correoElectronico.required' => 'El campo correoElectronico es obligatorio.',
            'correoElectronico.email' => 'El campo correoElectronico debe ser un correo electrónico válido.',
            'correoElectronico.max' => 'El campo correoElectronico no debe ser mayor a 255 caracteres.'
        ];
    }
    
}
