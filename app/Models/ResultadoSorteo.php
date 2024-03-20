<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResultadoSorteo extends Model
{
    use HasFactory;
    protected $table = 'resultado_sorteos';
    protected $fillable = ['grupo','posicion','fk_equipo'];
    public $timestamps = true;
    
    public function equipo()
    {
        return $this->belongsTo(Equipos::class,'fk_equipo');
    }
}