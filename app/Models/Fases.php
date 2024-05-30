<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fases extends Model
{
    
    use HasFactory;

    protected $table = 'fases';
    protected $primaryKey = 'id';
    protected $fillable = ['nombreFase', 'fk_torneo'];
    public $timestamps = false;

    public function torneo()
    {
        return $this->belongsTo(Torneo::class, 'fk_torneo');
    }
}
