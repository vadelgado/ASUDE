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
        Schema::create('amonestaciones_t_c_s', function (Blueprint $table) {
            $table->id();
            $table->integer('value');
            $table->text('description');
            $table->boolean('active')->default(true);            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('amonestaciones_t_c_s');
    }
};
