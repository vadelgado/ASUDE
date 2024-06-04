<?php

namespace App\Http\Requests\ProgramacionesFases;

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
            'fk_equipo_local' => 'required|integer',
            'fk_equipo_visitante' => 'required|integer',
            'FechaPartido' => 'required|date',
            'HoraPartido' => 'required',
            'fk_lugarPartido' => 'required|integer',
        ];
    }
}
