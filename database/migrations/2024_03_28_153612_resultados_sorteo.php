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
            $table->string('grupoPosicion',50)->nullable(false);
            $table->unsignedBigInteger('fk_equipo')->nullable(false);
            $table->foreign('fk_equipo')->references('id')->on('equipos');            
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
