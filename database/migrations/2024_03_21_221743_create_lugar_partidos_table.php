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
        Schema::create('lugar_partidos', function (Blueprint $table) {
            $table->id();
            $table->text('nomLugar')->unique()->nullable(false);
            $table->text('geolocalizacion')->unique()->nullable(false);
            $table->text('direccion')->unique()->nullable(false);
            $table->text('fotoLugar')->unique()->nullable(false);
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lugar_partidos');
    }
};
