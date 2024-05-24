<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory; 
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\belogsTo;

class ProgramacionTorneo extends Model 
{
    use HasFactory;

    protected $table = 'programacion_torneos'; 
    protected $fillable = [
        'HoraPartido',     
        'fk_jornadaPartido', 
        'fk_lugarPartido', 
        'posicion_local', 
        'posicion_visitante'
    ];
    public $timestamps = false;

    public function jornadaPartido()
    {
        return $this->belongsTo(JornadaPartido::class, 'fk_jornadaPartido');
    }

    public function lugarPartido()
    {
        return $this->belongsTo(LugarPartido::class, 'fk_lugarPartido');
    }

    public function localEquipo()
    {
        return $this->belongsTo(Equipo::class, 'posicion_local');
    }

    public function visitanteEquipo()
    {
        return $this->belongsTo(Equipo::class, 'posicion_visitante');
    }
}
