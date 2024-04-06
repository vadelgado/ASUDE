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
        Schema::create('inf_extra_jugadors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('fk_jugador')->constrained('jugadores');
            $table->string('posicionHabitualCancha');
            $table->string('peso');
            $table->string('estatura');
            $table->boolean('esCapitan')->default(false)->comment('true para capitan, false para no capitan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inf_extra_jugadors');
    }
};
