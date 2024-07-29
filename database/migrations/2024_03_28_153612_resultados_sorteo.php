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
        Schema::create('resultado_sorteos', function (Blueprint $table) {
            $table->id();     
            $table->foreignId('fk_equipo')->constrained('equipos')->onDelete('cascade');      
            $table->foreignId('fk_torneo')->constrained('torneo')->onDelete('cascade');
            $table->unsignedTinyInteger('puesto');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resultado_sorteos');
    }
};
