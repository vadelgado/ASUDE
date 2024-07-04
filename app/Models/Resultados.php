<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resultados extends Model
{
    use HasFactory;
    protected $table = 'resultados';
    protected $fillable = [
        'categoria', 
        'resultado', 
        'fk_torneo'
    ];

    public function torneo()
    {
        return $this->belongsTo(Torneo::class, 'fk_torneo');
    }


}
