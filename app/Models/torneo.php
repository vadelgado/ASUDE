<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\belogsTo;

class torneo extends Model
{
    protected $table = 'torneo';

    protected $fillable = [
        'fk_user',
        'nombreTorneo',
        'flayer',
        'caracteristicas',
        'premiacion',
        'sistemaJuego',
        'procesoInscripcion',
        'reglamentacion',
        'fechaInicio'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'fk_user');
    }

    use HasFactory;
}
