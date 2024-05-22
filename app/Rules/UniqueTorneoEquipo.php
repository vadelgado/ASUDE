<?php
namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\DB;

class UniqueTorneoEquipo implements Rule
{
    private $torneoId;
    private $equipoId;
    private $inscripcionId; 

    public function __construct($torneoId, $equipoId, $inscripcionId) // Añade un parámetro al constructor
    {
        $this->torneoId = $torneoId;
        $this->equipoId = $equipoId;
        $this->inscripcionId = $inscripcionId; 
    }

    public function passes($attribute, $value)
    {
        return DB::table('inscripciones')
            ->where('fk_torneo', $this->torneoId)
            ->where('fk_equipo', $this->equipoId)
            ->where('id', '!=', $this->inscripcionId)
            ->count() == 0;
    }

    public function message()
    {
        return 'La combinación de torneo y equipo debe ser única.';
    }
}
?>