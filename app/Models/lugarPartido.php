<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class lugarPartido extends Model
{
    use HasFactory;
    protected $table = 'lugar_partidos';
    protected $fillable = ['nomLugar', 'geolocalizacion', 'direccion', 'fotoLugar', 'fk_torneo'];
    public $timestamps = false;
    
    public function programacionTorneo()
    {
        return $this->hasMany(programacionTorneo::class, 'fk_lugarPartido');
    } 

    public function torneo()
    {
        return $this->belongsTo(torneo::class, 'fk_torneo');
    }

    public function programacionFase()
    {
        return $this->hasMany(ProgramacionesFaces::class, 'fk_lugarPartido');
    }
}
