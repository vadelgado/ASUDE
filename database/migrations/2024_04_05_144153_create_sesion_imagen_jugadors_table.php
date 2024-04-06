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
        Schema::create('sesion_imagen_jugadors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('fk_jugador')->constrained('jugadores');
            $table->string('nombreAcudiente');
            $table->string('firmaAcudiente')->nullable();
            $table->string('cedulaAcudiente',11);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sesion_imagen_jugadors');
    }
};
