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
        Schema::create('inscripciones', function (Blueprint $table) {
            $table->id();
            $table->foreign('fk_user')
            ->references('id')
            ->on('users')
            ->onDelete('cascade');
            $table->foreign('fk_torneo')
            ->references('id')
            ->on('torneo')
            ->onDelete('cascade');
            $table->foreign('fk_equipo')
            ->references('id')
            ->on('equipos')
            ->onDelete('cascade');
            $table->enum('estadoInscripcion', ['Aceptada', 'Rechazada', 'Pendiente']);
            $table->text('observacion')->nullable();
            $table->timestamps();
        });
    }
    
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('equipos');
    }
};
