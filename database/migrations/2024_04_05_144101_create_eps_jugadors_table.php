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
        Schema::create('eps_jugadors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('fk_jugador')->constrained('jugadores');
            $table->is_boolean('afiliadoEPS');
            $table->string('nombreEPS')->nullable();
            $table->string('lugarAtencionEmergenciaEPS')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('eps_jugadors');
    }
};
