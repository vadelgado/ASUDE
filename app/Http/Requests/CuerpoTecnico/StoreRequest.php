<?php

namespace App\Http\Requests\CuerpoTecnico; 

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
            'fk_equipo' => 'required|integer',
            'fotoCuerpoTecnico' => 'nullable',
            'cargo' => 'required|string|in:D.L.,D.T.,A.T.,P.F.,P.S.,U.T.',
            'nombreCompleto' => 'required|string|max:255',
            'tipoIdentificacion' => 'required|string|in:TI,CC,CE,PA',
            'numeroIdentificacion' => 'required|string|max:11',
            'telefonoFijo' => 'nullable|string|max:11',
            'telefonoCelular' => [
            'required',
            'regex:/^[30][0-9]{9}$/'],
            'correoElectronico' => 'required|email|unique:cuerpo_tecnico,correoElectronico|max:255'
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
            'cargo.required' => 'El campo cargo es obligatorio.',
            'cargo.string' => 'El campo cargo debe ser una cadena de texto.',
            'cargo.in' => 'El campo cargo debe ser uno de los siguientes cargos: D.L., D.T., A.T., P.F., P.S., U.T.',            
            'nombreCompleto.required' => 'El campo nombreCompleto es obligatorio.',
            'nombreCompleto.string' => 'El campo nombreCompleto debe ser una cadena de texto.',
            'nombreCompleto.max' => 'El campo nombreCompleto no debe ser mayor a 255 caracteres.',
            'tipoIdentificacion.required' => 'El campo tipoIdentificacion es obligatorio.',
            'tipoIdentificacion.string' => 'El campo tipoIdentificacion debe ser una cadena de texto.',
            'tipoIdentificacion.in' => 'El campo tipoIdentificacion debe ser uno de los siguientes tipos: TI, CC, CE, PA.',
            'numeroIdentificacion.required' => 'El campo numeroIdentificacion es obligatorio.',
            'numeroIdentificacion.string' => 'El campo numeroIdentificacion debe ser una cadena de texto.',
            'numeroIdentificacion.max' => 'El campo numeroIdentificacion no debe ser mayor a 11 caracteres.',
            'telefonoFijo.string' => 'El campo teléfono Fijo debe ser una cadena de texto.',
            'telefonoFijo.max' => 'El campo teléfono Fijo no debe ser mayor a 11 caracteres.',
            'telefonoCelular.required' => 'El campo telefonoCelular es obligatorio.',
            'telefonoCelular.regex' => 'El campo telefono Celular debe ser un número de teléfono válido.',


            'correoElectronico.required' => 'El campo correoElectronico es obligatorio.',
            'correoElectronico.email' => 'El campo correoElectronico debe ser una dirección de correo electrónico válida.',
            'correoElectronico.unique' => 'El campo correoElectronico ya ha sido tomado.',
            'correoElectronico.max' => 'El campo correoElectronico no debe ser mayor a 255 caracteres.'
        ];
    }
}
