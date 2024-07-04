<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\belogsTo;
use Illuminate\Database\Eloquent\Relations\hasOne;
use App\Models\Equipos;
use App\Models\formatoFotos;
 




class Jugadores extends Model
{
    protected $table = 'jugadores';
 
    protected $fillable = [
        'nombreCompleto',
        'foto',
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
        'estadoEPS',
        'nombreEPS',
        'lugarAtencionEPS',
        'estado',
    ]; 

    public function equipo()
    {
        return $this->belongsTo(Equipos::class, 'fk_equipo');
    }


}
