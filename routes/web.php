<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');    
});

Route::middleware('auth', 'role:acudiente')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');   
// Listado de Alumnos
Route::get('alumno', 'App\Http\Controllers\AlumnoController@index')->name('alumno.index');

// Formulario para crear un nuevo Alumno
Route::get('alumno/create', 'App\Http\Controllers\AlumnoController@create')->name('alumno.create');

// Guardar un nuevo Alumno
Route::post('alumno', 'App\Http\Controllers\AlumnoController@store')->name('alumno.store');

// Mostrar un Alumno específico
Route::get('alumno/{alumno}', 'App\Http\Controllers\AlumnoController@show')->name('alumno.show');

// Formulario para editar un Alumno existente
Route::get('alumno/{alumno}/edit', 'App\Http\Controllers\AlumnoController@edit')->name('alumno.edit');

// Actualizar un Alumno existente
Route::put('alumno/{alumno}', 'App\Http\Controllers\AlumnoController@update')->name('alumno.update');

// Eliminar un Alumno existente
Route::delete('alumno/{alumno}', 'App\Http\Controllers\AlumnoController@destroy')->name('alumno.destroy');

// Listado de Comprobantes
Route::get('comprobantes', 'App\Http\Controllers\ComprobantesController@index')->name('comprobantes.index');

// Guardar un nuevo Comprobante

Route::post('comprobantes', 'App\Http\Controllers\ComprobantesController@store')->name('comprobantes.store');
 
});

require __DIR__.'/auth.php';
