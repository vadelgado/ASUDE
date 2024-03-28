<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

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
    
    // Resource Torneos
    Route::resource('torneo', App\Http\Controllers\Torneos::class);
    // Actualizar Torneo
    Route::post('torneo/{torneo}', 'App\Http\Controllers\Torneos@update')->name('torneo.update');

    // Sorteo de Torneos

    Route::resource('resultadoSorteo', App\Http\Controllers\ResultadoSorteoController::class);   

    // Resource equipos
    Route::resource('equipos', App\Http\Controllers\EquiposController::class);
    // Actualizar Equipo
    Route::post('equipos/{equipos}', 'App\Http\Controllers\EquiposController@update')->name('equipos.update');

    // Resource jornadaPartido
    Route::resource('jornadaPartido', App\Http\Controllers\JornadaPartidoController::class);

    // Resource lugarPartido
    Route::resource('lugarPartido', App\Http\Controllers\LugarPartidoController::class);
    // Actualizar Lugar Partido
    Route::post('lugarPartido/{lugarPartido}', 'App\Http\Controllers\LugarPartidoController@update')->name('lugarPartido.update');

    // Resource programacionTorneo
    Route::resource('programacionTorneo', App\Http\Controllers\ProgramacionTorneoController::class);

    // Resource sistemaJuego
    Route::resource('sistemaJuego', App\Http\Controllers\SistemaJuegoController::class);
    // Actualizar Sistema Juego
    Route::post('sistemaJuego/{sistemaJuego}', 'App\Http\Controllers\SistemaJuegoController@update')->name('sistemaJuego.update');
    
    
    
    
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
    //Route::get('listarEquipos', 'App\Http\Controllers\EquiposController@index')->name('preregistro.listarEquipos');
    //Route::post('listarEquipos', 'App\Http\Controllers\EquiposController@store')->name('equipos.store');
    //Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy'); 


    // Listado de Jugadores
    Route::get('jugadores', 'App\Http\Controllers\JugadoresController@index')->name('jugadores.listarJugadores');
    // Formulario para crear un nuevo Jugador
    Route::post('jugadores', 'App\Http\Controllers\JugadoresController@store')->name('jugadores.store');
});

Route::get('/version', function () {
    return 'Versión de PHP: ' . phpversion();
});


require __DIR__.'/auth.php';
