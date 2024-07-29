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
            $table->foreign('fk_user')->references('id')->on('users')->onDelete('cascade');
            $table->text('nombreTorneo')->nullable(false);
            $table->text('flayer')->nullable(true);
            $table->text('imgBannerSuperior')->nullable(true);
            $table->text('imgBannerInferiorIz')->nullable(true);
            $table->text('imgBannerInferiorDe')->nullable(true);
            $table->text('Aval')->nullable(true);
            $table->text('ApoyoPrincipal')->nullable(true);
            $table->unsignedInteger('cantidadGrupos')->nullable(false);
            $table->unsignedInteger('cantidadEquiposParticipantes')->nullable(false);
            $table->text('caracteristicas')->nullable(false);
            $table->text('premiacion')->nullable(false);            
            $table->unsignedBigInteger('fk_sistema_juegos')->nullable(false);
            $table->foreign('fk_sistema_juegos')->references('id')->on('sistema_juegos')->onDelete('cascade');            
            $table->unsignedBigInteger('fk_categoria_equipo')->nullable(false);
            $table->foreign('fk_categoria_equipo')->references('id')->on('categoria_equipo')->onDelete('cascade');
            $table->enum('estadoTorneo', ['Por Iniciar', 'En Juego', 'Finalizado'])->nullable(false);
            $table->enum('inscripcion', ['Abierta', 'Cerrada'])->nullable(false);
            $table->text('procesoInscripcion')->nullable(false);
            $table->text('reglamentacion')->nullable(false);
            $table->date('fechaInicio')->nullable(true);
            $table->date('fechaFin')->nullable(true);    
            $table->timestamps();        
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
