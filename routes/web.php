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

// Listar Torneos Layout Principal
Route::get('listarTorneos', 'App\Http\Controllers\Torneos@listarTorneos')->name('torneo.listarTorneos');
Route::get('listarTorneos/{id}', 'App\Http\Controllers\Torneos@show')->name('torneo.show');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');    
});

Route::middleware('auth', 'role:admin')->group(function () {
    // Listado de Alumnos Administrador
    Route::get('alumnoAdmin', 'App\Http\Controllers\AlumnoController@indexAdmin')->name('alumno.indexAdmin');
    
    // Listado de Pagos Administrador
    Route::get('comprobantesAdmin', 'App\Http\Controllers\ComprobantesController@indexAdmin')->name('comprobantes.indexAdmin');
    
    // Listado de Torneos
    Route::get('torneos', 'App\Http\Controllers\Torneos@index')->name('torneo.index');

    // Formulario para crear un nuevo Torneo
    Route::get('torneos/create', 'App\Http\Controllers\Torneos@create')->name('torneo.create');

    // Guardar un nuevo Torneo
    Route::post('torneos', 'App\Http\Controllers\Torneos@store')->name('torneo.store');

    // Mostrar un Torneo específico
    Route::get('torneos/{torneo}', 'App\Http\Controllers\Torneos@show')->name('torneo.show');

    // Formulario para editar un Torneo existente
    Route::get('torneos/{torneo}/edit', 'App\Http\Controllers\Torneos@edit')->name('torneo.edit');

    // Actualizar un Torneo existente
    Route::put('torneos/{torneo}', 'App\Http\Controllers\Torneos@update')->name('torneo.update');

    // Eliminar un Torneo existente
    Route::delete('torneos/{torneo}', 'App\Http\Controllers\Torneos@destroy')->name('torneo.destroy');

    // Listado de Torneos
    Route::get('torneos', 'App\Http\Controllers\Torneos@index')->name('torneo.index');
    
});

Route::middleware('auth', 'role:acudiente')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    //Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');   

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

// Registrar Director Equipo
Route::get('preregistro', 'App\Http\Controllers\Torneos@registrarEquipo')->name('preregistro.create');
Route::middleware('auth', 'role:equipo')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::get('listarEquipos', 'App\Http\Controllers\EquiposController@index')->name('preregistro.listarEquipos');
    Route::post('listarEquipos', 'App\Http\Controllers\EquiposController@store')->name('equipos.store');
    //Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy'); 
});
Route::get('/version', function () {
    return 'Versión de PHP: ' . phpversion();
});


require __DIR__.'/auth.php';
