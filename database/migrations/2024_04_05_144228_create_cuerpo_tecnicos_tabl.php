<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
 
return new class extends Migration 
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cuerpo_tecnico', function (Blueprint $table) {
            $table->id();            
            $table->foreignId('fk_equipo')->constrained('equipos');
            $table->string('fotoCuerpoTecnico')->nullable();
            $table->enum('cargo', ['D.L.', 'D.T.', 'A.T.', 'P.F.', 'P.S.', 'U.T.', 'T.N.']);
            $table->string('nombreCompleto');            
            $table->enum('tipoIdentificacion', ['TI', 'CC', 'CE', 'PA']);
            $table->string('numeroIdentificacion', 11);
            $table->string('telefonoFijo', 11)->nullable();
            $table->string('telefonoCelular', 11);
            $table->string('correoElectronico')->unique();
            $table->boolean('estadoCuerpoTecnico')->default(true)->comment('1 para activo, 0 para inactivo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cuerpo_tecnico');
    }
};
