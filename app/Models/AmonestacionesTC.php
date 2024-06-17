<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AmonestacionesTC extends Model
{    
    protected $table = 'amonestaciones_tc';
    protected $fillable = [
        'value',
        'description'
    ];
    public $timestamps = false;

}
