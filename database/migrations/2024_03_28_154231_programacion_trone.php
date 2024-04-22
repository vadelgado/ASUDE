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
        Schema::create('programacion_torneos', function (Blueprint $table) {
            $table->id();
            $table->Time('HoraPartido');

            $table->unsignedBigInteger('fk_torneo')->nullable(false);
            $table->foreign('fk_torneo')->references('id')->on('torneo');
            
            $table->unsignedBigInteger('fk_jornadaPartido')->nullable(false);
            $table->foreign('fk_jornadaPartido')->references('id')->on('jornada_partidos');
            
            $table->unsignedBigInteger('fk_lugarPartido')->nullable(false);
            $table->foreign('fk_lugarPartido')->references('id')->on('lugar_partidos');
            
            $table->unsignedBigInteger('fk_equipoLocal')->nullable(false);
            $table->foreign('fk_equipoLocal')->references('id')->on('resultado_sorteos');

            $table->unsignedBigInteger('fk_equipoVisitante')->nullable(false);
            $table->foreign('fk_equipoVisitante')->references('id')->on('resultado_sorteos');

            $table->timestamps();
        });
    

    Schema::table('programacion_torneos', function (Blueprint $table) {
        $table->index('fk_torneo');
        $table->index('fk_jornadaPartido');
        $table->index('fk_lugarPartido');
        $table->index('fk_equipoLocal');
        $table->index('fk_equipoVisitante');
    });

}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('programacion_torneos');
    }
};
