<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class () extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('profiles', function (Blueprint $table) {

            $table->id();
            $table->string('name');
            $table->string('department');
            $table->string('division');
            $table->string('unit');
            $table->string('phoneNumber');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('belongto');
            $table->index('user_id');
            $table->index('belongto');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
