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
        Schema::create('torneo', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('fk_user')->nullable(false);
            $table->foreign('fk_user')->references('id')->on('users');
            $table->text('nombreTorneo')->nullable(false);
            $table->text('flayer')->nullable(false);
            $table->text('caracteristicas')->nullable(false)->default('próximamente');
            $table->text('premiacion')->nullable(false)->default('próximamente');
            $table->text('sistemaJuego')->nullable(false)->default('próximamente');
            $table->text('procesoInscripcion')->nullable(false)->default('próximamente');
            $table->text('reglamentacion')->nullable(false)->default('próximamente');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('torneo');
    }
};
 