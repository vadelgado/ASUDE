<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class formatoFotos extends Model
{
    protected $table = 'formato_fotos';

    protected $fillable = [
        'foto',
        'fk_jugador',
    ];

    public function jugador()
    {
        return $this->belongsTo(Jugadores::class, 'fk_jugador');
    }
}
