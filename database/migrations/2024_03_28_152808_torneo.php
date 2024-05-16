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
        Schema::create('torneo', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('fk_user')->nullable(false);
            $table->foreign('fk_user')->references('id')->on('users');
            $table->text('nombreTorneo')->nullable(false);
            $table->text('flayer')->nullable(true);
            $table->text('imgBannerSuperior')->nullable(true);
            $table->text('imgBannerInferiorIz')->nullable(true);
            $table->text('imgBannerInferiorDe')->nullable(true);
            $table->text('Aval')->nullable(true);
            $table->text('ApoyoPrincipal')->nullable(true);
            $table->unsignedInteger('cantidadGrupos')->nullable(false);
            $table->unsignedInteger('cantidadEquiposParticipantes')->nullable(false);
            $table->text('caracteristicas')->nullable(false)->default('próximamente');
            $table->text('premiacion')->nullable(false)->default('próximamente');            
            $table->unsignedBigInteger('fk_sistema_juegos')->nullable(false);
            $table->foreign('fk_sistema_juegos')->references('id')->on('sistema_juegos');            
            $table->unsignedBigInteger('fk_categoria_equipo')->nullable(false);
            $table->foreign('fk_categoria_equipo')->references('id')->on('categoria_equipo');
            $table->enum('estadoTorneo', ['Por Iniciar', 'En Juego', 'Finalizado'])->nullable(false)->default('Por Iniciar');
            $table->enum('inscripcion', ['Abierta', 'Cerrada'])->nullable(false)->default('Abierta');
            $table->text('procesoInscripcion')->nullable(false)->default('próximamente');
            $table->text('reglamentacion')->nullable(false)->default('próximamente');
            $table->date('fechaInicio')->nullable(true);
            $table->date('fechaFin')->nullable(true);            
            $table->timestamps(false);
            });
    } 

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('torneo');
    }
};
