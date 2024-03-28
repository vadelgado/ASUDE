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
        Schema::create('jornada_partidos', function (Blueprint $table) {
            $table->id();
            $table->date('fechaJornada')->nullable(false);
            $table->string('jornada',100)->nullable(false);                        
            $table->unsignedBigInteger('fk_torneo')->nullable(false);
            $table->foreign('fk_torneo')->references('id')->on('torneo');
        });
    }

    /**
     * Reverse the migrations.
     */ 
    public function down(): void
    {
        Schema::dropIfExists('jornada_partidos');
    }
};
