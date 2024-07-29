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
            $table->unsignedBigInteger('fk_equipo');
            $table->foreign('fk_equipo')
            ->references('id')
            ->on('equipos')
            ->onDelete('cascade');     
            $table->unsignedBigInteger('fk_torneo'); 
            $table->foreign('fk_torneo')
            ->references('id')
            ->on('torneo')
            ->onDelete('cascade');
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
