<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\belogsTo;

class programacionTorneo extends Model
{
    use HasFactory;
    protected $table = 'programacion_torneos';
    protected $fillable = ['HoraPartido', 'fk_jornadaPartido', 'fk_lugarPartido', 'fk_equipoLocal', 'fk_equipoVisitante'];
    public $timestamps = false;

    public function jornadaPartido()
    {
        return $this->belongsTo(jornadaPartido::class, 'fk_jornadaPartido');
    }

    public function lugarPartido()
    {
        return $this->belongsTo(lugarPartido::class, 'fk_lugarPartido');
    }

    public function equipoLocal()
    {
        return $this->belongsTo(equipos::class, 'fk_equipoLocal');
    }

    public function equipoVisitante()
    {
        return $this->belongsTo(equipos::class, 'fk_equipo');
    }

    

}
