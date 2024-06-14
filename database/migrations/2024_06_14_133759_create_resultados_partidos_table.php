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
        Schema::create('resultados_partidos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('fk_programaciones_faces_id')->constrained('programaciones_faces');
            $table->foreignId('fk_jugador_id')->constrained('jugadores');
            $table->integer('goles')->nullable();
            $table->integer('tarjetas_amarillas')->nullable();
            $table->integer('tarjetas_rojas')->nullable();
            $table->text('observaciones')->nullable();
            $table->timestamps(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resultados_partidos');
    }
};
