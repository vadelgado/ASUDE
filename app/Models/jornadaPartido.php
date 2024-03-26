<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\belogsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class jornadaPartido extends Model
{
    use HasFactory;
    protected $table = 'jornada_partidos';
    protected $fillable = ['fechaJornada','jornada','fk_torneo'];
    public $timestamps = false;    

    public function torneo()
    {
        return $this->belongsTo(torneo::class, 'fk_torneo');
    }

    public function programacionTorneo()
    {
        return $this->hasMany(programacionTorneo::class, 'fk_jornadaPartido');
    }


} 
