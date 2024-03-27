<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class SistemaJuegoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $datos = [
            ['nombreSistema'=>'Fútbol 11',   
            'descripcionSistema' => '(también conocido como fútbol estándar o fútbol asociación): Este es el formato tradicional del fútbol, donde cada equipo tiene 11 jugadores en el campo, incluido un portero.'
        ],
        ['nombreSistema'=>'Fútbol 9',   
            'descripcionSistema' => 'Este sistema es comúnmente utilizado en ligas juveniles. Cada equipo tiene 9 jugadores en el campo, incluido un portero.'
        ],
            ['nombreSistema'=>'Fútbol 7',
            'descripcionSistema' => 'Este sistema es comúnmente utilizado en ligas juveniles. Cada equipo tiene 7 jugadores en el campo, incluido un portero.'
        ],
            ['nombreSistema'=>'Fútbol 5',
            'descripcionSistema' => 'También conocido como fútbol sala, es un juego más rápido y se juega en un campo más pequeño. Cada equipo tiene 5 jugadores en el campo, incluido un portero.']
        ];
        DB::table('sistema_juegos')->insert($datos);
    }
}
