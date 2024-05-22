<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\belogsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Inscripciones extends Model
{
    
    protected $table = 'inscripciones';

    protected $fillable = [        
        'fk_user',
        'fk_torneo',
        'fk_equipo',  
        'estadoInscripcion',
        'observacion',
    ];  

    public function user()
    {
        return $this->belongsTo(User::class, 'fk_user');
    }

    public function torneo()
    {
        return $this->belongsTo(Torneo::class, 'fk_torneo');
    }

    public function equipo()
    {
        return $this->belongsTo(Equipos::class, 'fk_equipo');
    }

    public function resultados_sorteo()
    {
        return $this->hasMany(ResultadoSorteo::class, 'fk_inscripcion');
    }

}
