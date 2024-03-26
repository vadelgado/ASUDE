<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class lugarPartido extends Model
{
    use HasFactory;
    protected $table = 'lugar_partidos';
    protected $fillable = ['nomLugar', 'geolocalizacion', 'direccion', 'fotoLugar'];
    public $timestamps = false;
    
    public function programacionTorneo()
    {
        return $this->hasMany(programacionTorneo::class, 'fk_lugarPartido');
    }
}
