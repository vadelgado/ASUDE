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
            $table->foreignId('fk_user')->constrained('users')->onDelete('cascade');
            $table->foreignId('fk_torneo')->constrained('torneo')->onDelete('cascade');
            $table->foreignId('fk_equipo')->constrained('equipos')->onDelete('cascade');
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
