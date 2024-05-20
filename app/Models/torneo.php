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
        'imgBannerSuperior',
        'imgBannerInferiorIz',
        'imgBannerInferiorDe',
        'Aval',
        'ApoyoPrincipal',
        'cantidadGrupos',
        'cantidadEquiposParticipantes', 
        'caracteristicas',
        'premiacion',
        'fk_sistema_juegos',
        'fk_categoria_equipo',
        'estadoTorneo',
        'inscripcion',
        'procesoInscripcion',
        'reglamentacion',
        'fechaInicio',
        'fechaFin',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'fk_user');
    }

    public function sistemaJuego()
    {
        return $this->belongsTo(SistemaJuego::class, 'fk_sistema_juegos');
    }

    public function categoriaEquipo()
    {
        return $this->belongsTo(CategoriaEquipo::class, 'fk_categoria_equipo');
    }

    


    public function equipos()
    {
        return $this->hasMany(Equipos::class, 'fk_torneo');
    }

    public function jornadaPartidos()
    {
        return $this->hasMany(jornadaPartido::class, 'fk_torneo');
    }

    public function programaTorneo()
    {
        return $this->hasMany(programacionTorneo::class, 'fk_torneo');
    }

    use HasFactory;
}
