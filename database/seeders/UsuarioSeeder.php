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
            'name' => 'acudiente',
            'email' => 'acudiente@correo.com',
            'password' => Hash::make('padre1234'),
            'celular' => '3104557906',
            'role' => 'acudiente'
        ],
            ['identificacion'=>'765432109',   
            'name' => 'Equipo',
            'email' => 'Equipo@correo.com',
            'password' => Hash::make('equipo1234'),
            'celular' => '3104557906',
            'role' => 'equipo'
        ],
        ['identificacion'=>'123456789',   
        'name' => 'Admin2',
        'email' => 'admin2@correo.com',
        'password' => Hash::make('admin1234'),
        'celular' => '3104557906',
        'role' => 'admin'
    ],
        ['identificacion'=>'987654321',   
            'name' => 'acudiente2',
            'email' => 'acudiente2@correo.com',
            'password' => Hash::make('padre1234'),
            'celular' => '3104557906',
            'role' => 'acudiente'
        ],
            ['identificacion'=>'765432109',   
            'name' => 'Equipo2',
            'email' => 'Equipo2@correo.com',
            'password' => Hash::make('equipo1234'),
            'celular' => '3104557906',
            'role' => 'equipo'
    ],            ['identificacion'=>'123456789',   
    'name' => 'Admin3',
    'email' => 'admin3@correo.com',
    'password' => Hash::make('admin1234'),
    'celular' => '3104557906',
    'role' => 'admin'
    ],
    ['identificacion'=>'987654321',   
    'name' => 'acudiente3',
    'email' => 'acudiente3@correo.com',
    'password' => Hash::make('padre1234'),
    'celular' => '3104557906',
    'role' => 'acudiente'
    ],
    ['identificacion'=>'765432109',   
    'name' => 'Equipo3',
    'email' => 'Equipo3@correo.com',
    'password' => Hash::make('equipo1234'),
    'celular' => '3104557906',
    'role' => 'equipo'
    ],

        ];
        DB::table('users')->insert($datos);
    }
}
