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
        Schema::create('firma_sello_formatos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('fk_equipo')->constrained('equipos');
            $table->string('firmaSelloAlcalde')->nullable();
            $table->string('firmaSelloGerenteDeporte')->nullable();
            $table->string('firmaSelloPresidenteJAC')->nullable();
            $table->string('firmaDelegado')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('firma_sello_formatos');
    }
};
