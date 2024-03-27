<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SistemaJuego extends Model
{
    use HasFactory;
    protected $table = 'sistema_juegos';
    protected $fillable = [
        'nombreSistema',
        'descripcionSistema'
    ];
    public $timestamps = false;

    public function torneos()
    {
        return $this->hasMany(Torneo::class, 'sistemaJuego');
    }
}
