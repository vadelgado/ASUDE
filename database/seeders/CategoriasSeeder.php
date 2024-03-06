<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Desactivar restricciones de clave externa
DB::statement('SET FOREIGN_KEY_CHECKS=0');

// Truncar la tabla
DB::table('categoria_equipo')->truncate();

// Volver a activar restricciones de clave externa
DB::statement('SET FOREIGN_KEY_CHECKS=1');

        $categorias = [
            ['descripcion'=>'Sub-6'],
            ['descripcion'=>'Sub-7'],
            ['descripcion'=>'Sub-8'],
            ['descripcion'=>'Sub-9'],
            ['descripcion'=>'Sub-10'],
            ['descripcion'=>'Sub-11'],
            ['descripcion'=>'Sub-12'],
            ['descripcion'=>'Sub-13'],
            ['descripcion'=>'Sub-14'],
            ['descripcion'=>'Sub-15'],
            ['descripcion'=>'Sub-16'],
        ];
        DB::table('categoria_equipo')->insert($categorias);
    }
}
