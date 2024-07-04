<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FaltasCuerpoTecnico extends Model
{
    use HasFactory;

    protected $table = 'faltas_cuerpo_tecnicos';

    protected $fillable = [
        'id',
        'fk_programaciones_faces_id',
        'fk_cuerpo_tecnico_id',
        'fk_amonestaciones_t_c_s_id',
        'observaciones'
    ];

}
