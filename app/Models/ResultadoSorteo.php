<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\belogsTo;

class ResultadoSorteo extends Model
{
    use HasFactory;
    protected $table = 'resultado_sorteos';
    protected $fillable = ['grupoPosicion','fk_equipo'];
    public $timestamps = true;
    
    public function equipo()
    {
        return $this->belongsTo(Equipos::class,'fk_equipo');
    }

    public function torneo()
    {
        return $this->belongsTo(torneo::class,'fk_torneo');
    }

    public function programacionTorneoLocal()
    {
        return $this->hasMany(programacionTorneo::class,'fk_equipoLocal');
    }

    public function programacionTorneoVisitante()
    {
        return $this->hasMany(programacionTorneo::class,'fk_equipoVisitante');
    }


}
