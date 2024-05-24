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
            $table->text('nomLugar')->nullable(false);
            $table->text('geolocalizacion')->nullable(false);
            $table->text('direccion')->nullable(false);
            $table->text('fotoLugar')->nullable(true);
            $table->foreignId('fk_torneo')->constrained('torneo');  
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
