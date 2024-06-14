<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResultadosPartidos extends Model
{
    protected $table = 'resultados_partidos';

    protected $fillable = [
        'fk_programaciones_faces_id',
        'fk_jugador_id',
        'goles',
        'tarjetas_amarillas',
        'tarjetas_rojas',
        'observaciones'
    ];

    public function programacionFace()
    {
        return $this->belongsTo(ProgramacionesFaces::class, 'fk_programaciones_faces_id');
    }

    public function jugador()
    {
        return $this->belongsTo(Jugadores::class, 'fk_jugador_id');
    }
}
    

