<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\belogsTo;

class Equipos extends Model
{
    protected $table = 'equipos';

    protected $fillable = [
        'nombreEquipo',
        'fk_categoria_equipo',
        'escudoEquipo',
        'numeroWhatsapp',
        'correoElectronico',
        'fk_user',
        'fk_torneo'
    ];  
    
    public function categoria_equipo()
    {
        return $this->belongsTo(Categorias::class, 'fk_categoria_equipo');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'fk_user');
    }

    public function torneo()
    {
        return $this->belongsTo(Torneo::class, 'fk_torneo');
    }

    public function jugadores()
    {
        return $this->hasMany(Jugadores::class, 'fk_equipo');
    }

}