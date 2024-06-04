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
        Schema::create('programaciones_faces', function (Blueprint $table) {
            $table->id();
            $table->foreignId('fk_fase')->constrained('fases');
            $table->foreignId('fk_equipo_local')->constrained('equipos');
            $table->foreignId('fk_equipo_visitante')->constrained('equipos');
            $table->date('FechaPartido');
            $table->time('HoraPartido');
            $table->foreignId('fk_lugarPartido')->constrained('lugar_partidos');            
            $table->timestamps(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('programaciones_faces');
    }
};
