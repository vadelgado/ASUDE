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
            $table->unsignedBigInteger('fk_programaciones_faces_id');
            $table->foreign('fk_programaciones_faces_id')
            ->references('id')
            ->on('programaciones_faces')
            ->onDelete('cascade');
            $table->unsignedBigInteger('fk_jugador_id');
            $table->foreign('fk_jugador_id')
            ->references('id')
            ->on('jugadores')
            ->onDelete('cascade');
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
