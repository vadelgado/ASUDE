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
            $table->unsignedBigInteger('fk_fase');
            $table->foreign('fk_fase')
            ->references('id')
            ->on('fases')
            ->onDelete('cascade');
            $table->unsignedTinyInteger('posicion_local');
            $table->unsignedTinyInteger('posicion_visitante');
            $table->date('FechaPartido');
            $table->time('HoraPartido');
            $table->unsignedBigInteger('fk_lugarPartido');
            $table->foreign('fk_lugarPartido')
            ->references('id')
            ->on('lugar_partidos')
            ->onDelete('cascade');
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
