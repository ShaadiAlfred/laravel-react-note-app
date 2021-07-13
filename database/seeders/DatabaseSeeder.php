<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         \App\Models\User::factory(1)->create([
             'email' => 'admin@admin.com',
             'password' => Hash::make('password'),
             'is_admin' => true,
         ]);

         \App\Models\Note::factory(50)->create([
             'user_id' => 1,
             'title' => Factory::create()->text(25),
             'content' => Factory::create()->paragraph,
         ]);
    }
}
