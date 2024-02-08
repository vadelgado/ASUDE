<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\belongsTo;

class Alumno extends Model
{
    protected $table = 'alumnos';
    
    protected $fillable = [
        'identificacion',
        'nombres',
        'apellidos',
        'fecha_nacimiento',
        'genero',
        'direccion',
        'barrio',
        'celular',
        'sedeEntrenamiento',
        'fk_user',
        
        
    ];

    public $timestamps = false;
    public function user()
    {
        return $this->belongsTo(User::class, 'fk_user');
    }
}
