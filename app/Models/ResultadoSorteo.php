<?php 

namespace App\Models;
 
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\belogsTo;

class ResultadoSorteo extends Model
{
    use HasFactory;
    protected $table = 'resultado_sorteos';
    protected $fillable = ['fk_equipo','fk_torneo', 'puesto'];
    public $timestamps = true;
    
    public function equipo()
    {
        return $this->belongsTo(Equipos::class,'fk_equipo');
    }

    public function torneo()
    {
        return $this->belongsTo(torneo::class,'fk_torneo');
    }
}
