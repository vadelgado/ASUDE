<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cuerpoTecnico extends Model 
{
    
    use HasFactory;

    protected $table = 'cuerpo_tecnico';

    protected $fillable = [
        'fk_equipo',
        'fotoCuerpoTecnico',
        'cargo',
        'nombreCompleto',
        'tipoIdentificacion',
        'numeroIdentificacion',
        'telefonoFijo',
        'telefonoCelular',
        'correoElectronico'
    ];

    public function equipo()
    {
        return $this->belongsTo(Equipos::class, 'fk_equipo', 'id');
    }

}
