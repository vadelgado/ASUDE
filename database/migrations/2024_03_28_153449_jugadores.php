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
            $table->string('fotoJugador')->nullable();
            $table->string('nombreCompleto');
            $table->string('autografo')->nullable();
            $table->enum('tipoIdentificacion', ['TI', 'CC', 'CE', 'PA'])->default('TI');
            $table->string('numeroIdentificacion', 11);
            $table->string('numeroSerie', 11)->nullable();
            $table->date('fechaNacimiento');
            $table->string('lugarNacimiento');
            $table->string('institucionEducativa');
            $table->string('grado');
            $table->string('ciudadInstitucionEducativa');
            $table->string('telefonoInstitucionEducativa');
            $table->foreignId('fk_equipo')->constrained('equipos');
            $table->boolean('estado')->default(true)->comment('true para activo, false para inactivo');
            $table->timestamps(false);
            
            // Additional columns can be added here
            
            $table->softDeletes(); 
            $table->index('fotoJugador')->nullable();
            $table->index('nombreCompleto'); 
            $table->index('autografo')->nullable();
            $table->index('tipoIdentificacion');
            $table->index('numeroIdentificacion');
            $table->index('numeroSerie');
            $table->index('fechaNacimiento');
            $table->index('lugarNacimiento');
            $table->index('institucionEducativa');
            $table->index('grado');
            $table->index('ciudadInstitucionEducativa');
            $table->index('telefonoInstitucionEducativa');
            $table->index('fk_equipo');
            $table->index('estado');

            

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
