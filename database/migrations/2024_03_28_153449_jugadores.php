<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('jugadores', function (Blueprint $table) {
            $table->id();
            $table->string('fotoJugador', 100)->nullable(true);
            $table->string('tipoDocIdentidad', 2)->default('1')->nullable(false);
            $table->string('documentoIdentidad', 20)->nullable(false);
            $table->string('nombreJugador', 50)->nullable(false);
            $table->string('segundoNombreJugador', 50)->nullable(true);
            $table->string('apellidoJugador', 50)->nullable(false);
            $table->string('segundoApellidoJugador', 50)->nullable(true);
            $table->date('fechaNacimiento')->nullable(false);
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
        Schema::dropIfExists('jugadores');
    }
};
