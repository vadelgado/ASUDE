<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class lugarPartido extends Model
{
    use HasFactory;
    protected $table = 'lugar_partidos';
    protected $fillable = ['nomLugar', 'geolocalizacion', 'direccion', 'fotoLugar'];
    public $timestamps = false;
    
}
