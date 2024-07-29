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
            $table->foreignId('fk_categoria_equipo')->constrained('categoria_equipo')->onDelete('cascade');
            $table->string('escudoEquipo')->nullable(true);
            $table->string('numeroWhatsapp', 13);
            $table->string('correoElectronico')->email();
            $table->foreignId('fk_user')->constrained('users')->onDelete('cascade');
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
