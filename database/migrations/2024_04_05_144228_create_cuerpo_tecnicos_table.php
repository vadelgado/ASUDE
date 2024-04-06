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
        Schema::create('cuerpo_tecnicos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('fk_equipo')->constrained('equipos');
            $table->string('fotoCuerpoTecnico')->nullable();
            $table->string('nombreCompleto');
            $table->string('autografo')->nullable();            
            $table->enum('tipoIdentificacion', ['TI', 'CC', 'CE', 'PA'])->default('CC');
            $table->string('numeroIdentificacion', 11);
            $table->string('telefonoFijo', 11)->nullable();
            $table->string('telefonoCelular', 11);
            $table->string('correoElectronico')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cuerpo_tecnicos');
    }
};
