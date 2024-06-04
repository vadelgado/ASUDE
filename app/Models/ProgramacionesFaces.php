<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProgramacionesFaces extends Model
{
    use HasFactory;

    protected $table = 'programaciones_faces';
    protected $primaryKey = 'id';
    protected $fillable = ['fk_fase', 'fk_equipo_local', 'fk_equipo_visitante','FechaPartido','HoraPartido', 'fk_lugarPartido'  ];
    public $timestamps = false;

    public function fase()
    {
        return $this->belongsTo(Fases::class, 'fk_fase');
    }

    public function equipoLocal()
    {
        return $this->belongsTo(Equipos::class, 'fk_equipo_local');
    }

    public function equipoVisitante()
    {
        return $this->belongsTo(Equipos::class, 'fk_equipo_visitante');
    }

    public function lugarPartido()
    {
        return $this->belongsTo(lugarPartido::class, 'fk_lugarPartido');
    }
}
