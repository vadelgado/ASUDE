<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AmonestacionesTC extends Model
{    
    protected $table = 'amonestaciones_t_c_s';
    protected $fillable = [
        'value',
        'description',
        'active'

    ];
    public $timestamps = false;

}
