<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\belogsTo;



class Jugadores extends Model
{
    protected $table = 'jugadores';

    protected $fillable = [
        'fotoJugador',
        'nombreCompleto',
        'autografo',
        'tipoIdentificacion',
        'numeroIdentificacion',
        'numeroSerie',
        'fechaNacimiento',
        'lugarNacimiento',
        'institucionEducativa',
        'grado',
        'ciudadInstitucionEducativa',
        'telefonoInstitucionEducativa',
        'fk_equipo',
        'estado',
    ];

    public function equipo()
    {
        return $this->belongsTo(Equipos::class, 'fk_equipo');
    }

}
