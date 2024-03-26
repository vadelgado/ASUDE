<?php

namespace App\Http\Requests\LugarPartido;

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
            'nomLugar' => 'required|string|max:255',
            'geolocalizacion' => 'required|max:255',
            'direccion' => 'required|max:255',
            'fotoLugar' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
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
            'nomLugar.required' => 'El nombre del lugar es requerido',
            'nomLugar.string' => 'El nombre del lugar debe ser una cadena de texto',
            'nomLugar.max' => 'El nombre del lugar no puede exceder los 255 caracteres',
            'geolocalizacion.required' => 'La geolocalización es requerida',
            'geolocalizacion.max' => 'La geolocalización no puede exceder los 255 caracteres',
            'direccion.required' => 'La dirección es requerida',
            'direccion.max' => 'La dirección no puede exceder los 255 caracteres',
            'fotoLugar.image' => 'El archivo debe ser una imagen',
            'fotoLugar.mimes' => 'El archivo debe ser de tipo: jpeg, png, jpg, gif, webp',
            'fotoLugar.max' => 'El archivo no puede exceder los 2048 KB',
        ];
    }
}
