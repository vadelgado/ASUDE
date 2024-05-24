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
            
            $table->foreignId('fk_jornadaPartido')->constrained('jornada_partidos');

            $table->foreignId('fk_lugarPartido')->constrained('lugar_partidos');
            
            $table->unsignedTinyInteger('posicion_local');

            $table->unsignedTinyInteger('posicion_visitante');
            $table->timestamps();
        });
    

    Schema::table('programacion_torneos', function (Blueprint $table) {        
        $table->index('fk_jornadaPartido');
        $table->index('fk_lugarPartido');
        $table->index('posicion_local');
        $table->index('posicion_visitante');
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
