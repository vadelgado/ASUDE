<?php

namespace App\Http\Requests\Fases;

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
            'nombreFase' => 'required|string|max:255',
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
            'nombreFase.required' => 'El nombre de la fase es requerido',
            'nombreFase.string' => 'El nombre de la fase debe ser una cadena de texto',
            'nombreFase.max' => 'El nombre de la fase no puede exceder los 255 caracteres',
        ];
    }
}
