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
            $table->foreign('fk_categoria_equipo')
            ->references('id')
            ->on('categoria_equipo')
            ->onDelete('cascade');
            $table->string('escudoEquipo')->nullable(true);
            $table->string('numeroWhatsapp', 13);
            $table->string('correoElectronico')->email();
            $table->foreign('fk_user')
            ->references('id')
            ->on('users')
            ->onDelete('cascade');

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
