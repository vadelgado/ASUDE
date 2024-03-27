<?php 

namespace App\Models; 

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\belogsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

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
    public function sistemaJuego()
    {
        return $this->belongsTo(SistemaJuego::class, 'sistemaJuego');
    }



    public function equipos()
    {
        return $this->hasMany(Equipos::class, 'fk_torneo');
    }

    public function jornadaPartidos()
    {
        return $this->hasMany(jornadaPartido::class, 'fk_torneo');
    }

    use HasFactory;
}
