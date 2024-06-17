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
        Schema::create('faltas_cuerpo_tecnicos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('fk_programaciones_faces_id')->constrained('programaciones_faces');
            $table->foreignId('fk_cuerpo_tecnico_id')->constrained('cuerpo_tecnico');
            $table->foreignId('fk_amonestaciones_t_c_s_id')->constrained('amonestaciones_t_c_s');          
            $table->text('observaciones')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('faltas_cuerpo_tecnicos');
    }
};
