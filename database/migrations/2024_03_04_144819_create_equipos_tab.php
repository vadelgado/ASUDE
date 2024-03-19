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
        Schema::create('equipos', function (Blueprint $table) {
            $table->id();
            $table->string('nombreEquipo')->nullable(false);
            $table->unsignedBigInteger('fk_categoria_equipo')->nullable(false);
            $table->foreign('fk_categoria_equipo')->references('id')->on('categoria_equipo');
            $table->string('escudoEquipo')->nullable(false);
            $table->string('numeroWhatsapp', 13)->nullable(false);
            $table->string('correoElectronico')->nullable(false)->email();;
            $table->unsignedBigInteger('fk_user')->nullable(false);
            $table->foreign('fk_user')->references('id')->on('users');
            $table->unsignedBigInteger('fk_torneo')->nullable(false);   
            $table->foreign('fk_torneo')->references('id')->on('torneo');
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
