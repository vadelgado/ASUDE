<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorias extends Model
{
    use HasFactory;

    protected $table = 'categoria_equipo';

    protected $fillable = [
        'descripcion'
    ];

    public function equipos()
    {
        return $this->hasMany(Equipos::class, 'fk_categoria_equipo');
    }
}
