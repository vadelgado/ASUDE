<?php 

namespace App\Http\Requests\Equipos;

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
        return[
            'nombreEquipo' => 'required|string|max:255',
            'fk_categoria_equipo' => 'required',
            'escudoEquipo' => 'nullable',
            'numeroWhatsapp' => 'required|digits:10',
            'correoElectronico' => 'required',
            
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
            'nombreEquipo.required' => 'El campo nombre del equipo es obligatorio.',
            'nombreEquipo.string' => 'El campo nombre del equipo debe ser una cadena de texto.',
            'nombreEquipo.max' => 'El campo nombre del equipo no puede exceder los 255 caracteres.',
            'fk_categoria_equipo.required' => 'El campo categoría del equipo es obligatorio.',
            'escudoEquipo.image' => 'El archivo debe ser una imagen.',
            'escudoEquipo.mimes' => 'El archivo debe ser de tipo: jpeg, png, jpg, gif, webp.',
            'escudoEquipo.max' => 'El archivo no puede exceder los 2048 KB.',
            'numeroWhatsapp.required' => 'El campo número de WhatsApp es obligatorio.',
            'numeroWhatsapp.digits' => 'El campo número de WhatsApp debe tener 10 dígitos.',
            'correoElectronico.required' => 'El campo correo electrónico es obligatorio.',
            
        ];
    }
}
