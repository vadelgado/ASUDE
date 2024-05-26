<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema; 

return new class extends Migration
{ 
    public function up(): void
    {
        Schema::create('jugadores', function (Blueprint $table) {
            $table->id();            
            $table->string('nombreCompleto');    
            $table->string('foto')->nullable();        
            $table->enum('tipoIdentificacion', ['TI', 'CC', 'CE', 'PA', 'RC']);
            $table->string('numeroIdentificacion', 11);
            $table->string('numeroSerie', 11);
            $table->date('fechaNacimiento');
            $table->string('lugarNacimiento');
            $table->string('institucionEducativa');
            $table->string('grado',2);
            $table->string('ciudadInstitucionEducativa');
            $table->string('telefonoInstitucionEducativa');
            $table->foreignId('fk_equipo')->constrained('equipos');
            $table->boolean('estadoEPS')->default(true)->comment('1 para activo, 0 para inactivo');
            $table->string('nombreEPS');
            $table->string('lugarAtencionEPS');
            $table->boolean('estado')->default(true)->comment('1 para activo, 0 para inactivo');
            $table->timestamps(false); 
   

        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jugadores');
    }
};
