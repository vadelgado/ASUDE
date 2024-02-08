<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\belongsTo;


class Comprobantes extends Model
{
    protected $table = 'comprobantes';
    
    protected $fillable = [
        'fk_user',
        'fk_alumno',
        'fecha',
        'secureUrl',
        'valor',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'fk_user');
    }

    public function alumno()
    {
        return $this->belongsTo(Alumno::class, 'fk_alumno');
    }
}
