<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{ 
    use HasFactory;

    protected $table = 'galleries';

    protected $fillable = [
        'largeUrl',   
        'width',
        'height',
        'fk_fase',
    ];

    public function fase()
    {
        return $this->belongsTo(Fases::class, 'fk_fase');
    }
}
