<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $datos = [
            ['identificacion'=>'123456789',   
            'name' => 'Admin',
            'email' => 'admin@correo.com',
            'password' => Hash::make('admin1234'),
            'celular' => '3104557906',
            'role' => 'admin'
        ],
        ['identificacion'=>'987654321',   
            'name' => 'acudiante',
            'email' => 'acudiante@correo.com',
            'password' => Hash::make('padre1234'),
            'celular' => '3104557906',
            'role' => 'acudiante'
        ],
            ['identificacion'=>'765432109',   
            'name' => 'Equipo',
            'email' => 'Equipo@correo.com',
            'password' => Hash::make('equipo1234'),
            'celular' => '3104557906',
            'role' => 'equipo'
        ],
        ];
        DB::table('users')->insert($datos);
    }
}
