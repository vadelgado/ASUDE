<?php

namespace App\Http\Requests\SistemaJuego;

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
            'nombreSistema' => 'required|string|max:255',
            'descripcionSistema' => 'required|string|max:255',
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
            'nombreSistema.required' => 'El nombre del sistema es requerido',
            'nombreSistema.string' => 'El nombre del sistema debe ser una cadena de texto',
            'nombreSistema.max' => 'El nombre del sistema no puede exceder los 255 caracteres',
            'descripcionSistema.required' => 'La descripción del sistema es requerida',
            'descripcionSistema.string' => 'La descripción del sistema debe ser una cadena de texto',
            'descripcionSistema.max' => 'La descripción del sistema no puede exceder los 255 caracteres',
        ];
    }
}
