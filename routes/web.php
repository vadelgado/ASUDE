
<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TorneoEnCursoController;
use App\Models\torneo;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Application;
use App\Http\Controllers\Auth\RegisteredUserAdminController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\JugadoresController;
use Inertia\Inertia;


Route::get('/', function () {
    $torneoEnCurso = torneo::select('id', 'nombreTorneo')
        ->orderByRaw("CASE WHEN estadoTorneo = 'En Juego' THEN 0 WHEN estadoTorneo = 'Finalizado' THEN 2 ELSE 1 END")
        ->orderBy('fechaInicio')
        ->get();
        $programaciones_faces = DB::table('programaciones_faces as pf')
        
        ->join('fases as f', 'pf.fk_fase', '=', 'f.id')
        ->join('torneo as t', 'f.fk_torneo', '=', 't.id')
        ->join('lugar_partidos as lp', 'pf.fk_lugarPartido', '=', 'lp.id')
        ->leftJoin('resultado_sorteos as rs_local', function ($join) {
            $join->on('pf.posicion_local', '=', 'rs_local.puesto')
                ->on('rs_local.fk_torneo', '=', 'f.fk_torneo');
        })
        ->leftJoin('resultado_sorteos as rs_visitante', function ($join) {
            $join->on('pf.posicion_visitante', '=', 'rs_visitante.puesto')
                ->on('rs_visitante.fk_torneo', '=', 'f.fk_torneo');
        })
        ->leftJoin('equipos as el', 'rs_local.fk_equipo', '=', 'el.id')
        ->leftJoin('equipos as ev', 'rs_visitante.fk_equipo', '=', 'ev.id')
        ->select(
            'f.nombreFase',
            'pf.posicion_local',
            'pf.posicion_visitante',
            'pf.FechaPartido',
            'pf.HoraPartido',
            'lp.nomLugar',
            'lp.geolocalizacion',
            'el.nombreEquipo as nombreEquipoLocal',
            'el.escudoEquipo as escudoEquipoLocal',
            'rs_local.puesto as puestoLocal',
            'ev.nombreEquipo as nombreEquipoVisitante',
            'ev.escudoEquipo as escudoEquipoVisitante',
            'rs_visitante.puesto as puestoVisitante'
        )
        ->whereIn('t.estadoTorneo', ['Por Iniciar', 'En Juego'])
        ->orderBy('pf.FechaPartido')
        ->orderBy('pf.HoraPartido')
        ->get();
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'torneoEnCurso' => $torneoEnCurso,
        'programaciones_faces' => $programaciones_faces
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Listar Torneos Layout Principal
Route::get('listarTorneos', 'App\Http\Controllers\Torneos@listarTorneos')->name('torneo.listarTorneos');
Route::get('listarTorneos/{id}', 'App\Http\Controllers\Torneos@show')->name('torneo.showUno');
Route::get('torneoEnCurso', [TorneoEnCursoController::class, 'index'])->name('torneoEnCurso.index');
Route::resource('tablaGrupos', App\Http\Controllers\TablasGruposController::class);
Route::resource('tablasJuego', App\Http\Controllers\TablasJuego::class);
Route::resource('verResultados', App\Http\Controllers\VerResultadosController::class);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth', 'role:admin')->group(function () {

    Route::get('registerAdmin', [RegisteredUserAdminController::class, 'create'])->name('admin.register');
    Route::post('registerAdmin', [RegisteredUserAdminController::class, 'store']);
    Route::get('/profileAdmin', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profileAdmin', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profileAdmin', [ProfileController::class, 'destroy'])->name('profile.destroy');


    // Listado de Pagos Administrador
    Route::get('comprobantesAdmin', 'App\Http\Controllers\ComprobantesController@indexAdmin')->name('comprobantes.indexAdmin');

    // Resource Torneos
    Route::resource('torneo', App\Http\Controllers\Torneos::class);
    // Actualizar Torneo
    Route::post('torneo/{torneo}', 'App\Http\Controllers\Torneos@update')->name('torneo.updatepost');

    // Sorteo de Torneos

    Route::resource('resultadoSorteo', App\Http\Controllers\ResultadoSorteoController::class);

    // Resource equipos
    Route::resource('equipos', App\Http\Controllers\EquiposController::class);
    // Actualizar Equipo
    Route::post('equipos/{equipos}', 'App\Http\Controllers\EquiposController@update')->name('equipos.updatepost');

    

    // Resource lugarPartido
    Route::resource('lugarPartido', App\Http\Controllers\LugarPartidoController::class);
    // Actualizar Lugar Partido
    Route::post('lugarPartido/{lugarPartido}', 'App\Http\Controllers\LugarPartidoController@update')->name('lugarPartido.updatepost');


    // Resource sistemaJuego
    Route::resource('sistemaJuego', App\Http\Controllers\SistemaJuegoController::class);
    // Actualizar Sistema Juego
    Route::post('sistemaJuego/{sistemaJuego}', 'App\Http\Controllers\SistemaJuegoController@update')->name('sistemaJuego.updatepost');


    //JugadoresAdmin
    Route::resource('jugadoresAdmin', App\Http\Controllers\JugadoresController::class);
    // Actualizar JugadorAdmin
    Route::post('jugadoresAdmin/{jugadores}', 'App\Http\Controllers\JugadoresController@update')->name('jugadoresAdmin.updatepost');
    //toggle estado jugadorAdmin
    Route::post('jugadoresAdmin/{jugadores}/toggle', 'App\Http\Controllers\JugadoresController@toggleJugador')->name('jugadoresAdmin.toggle');

    //pdfJugadores
    Route::get('/jugadores/pdf', [JugadoresController::class, 'generatePDF'])->name('jugadores.pdf');
    //pdfFormatoFotos
    Route::get('/formatoFotos/pdf', [JugadoresController::class, 'generatePDFFormatoFotos'])->name('formatoFotos.pdf');

    //CuerpoTecnicoAdmin
    Route::resource('cuerpoTecnicoAdmin', App\Http\Controllers\CuerpoTecnicoController::class);
    // Actualizar CuerpoTecnicoAdmin
    Route::post('cuerpoTecnicoAdmin/{cuerpoTecnico}', 'App\Http\Controllers\CuerpoTecnicoController@update')->name('cuerpoTecnicoAdmin.updatepost');
    //toggle estado cuerpoTecnicoAdmin
    Route::post('cuerpoTecnicoAdmin/{cuerpoTecnico}/toggle', 'App\Http\Controllers\CuerpoTecnicoController@toggleCuerpoTecnico')->name('cuerpoTecnicoAdmin.toggle');

    // Resource Inscripciones
    Route::resource('inscripciones', App\Http\Controllers\InscripcionesController::class);

    // Resource Fases

    Route::resource('fases', App\Http\Controllers\FasesController::class);

    // Resource ProgramacionesFaces

    Route::resource('programacionesFaces', App\Http\Controllers\ProgramacionesFacesController::class);

    // Resource ResultadosPartidos

    Route::resource('resultadosPartidos', App\Http\Controllers\ResultadosPartidosController::class);

    // Resource AmonestacionesTC
    Route::resource('amonestacionesTC', App\Http\Controllers\AmonestacionesTCController::class);

    // Resource FaltasCuerpoTecnico
    Route::resource('faltasCuerpoTecnico', App\Http\Controllers\FaltasCuerpoTecnicoController::class);


});

// Registrar Director Equipo
Route::get('preregistro', 'App\Http\Controllers\Torneos@registrarEquipo')->name('preregistro.create');


Route::middleware('auth', 'role:equipo')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Resource equipos
    Route::resource('equiposInvitados', App\Http\Controllers\EquiposController::class);
    // Actualizar Equipo
    Route::post('equiposInvitados/{equipos}', 'App\Http\Controllers\EquiposController@update')->name('equiposInvitados.updatepost');

    //Jugadores
    Route::resource('jugadores', App\Http\Controllers\JugadoresController::class);
    // Actualizar Jugador
    Route::post('jugadores/{jugadores}', 'App\Http\Controllers\JugadoresController@update')->name('jugadores.updatepost');
    //toggle estado jugador
    Route::post('jugadores/{jugadores}/toggle', 'App\Http\Controllers\JugadoresController@toggleJugador')->name('jugadores.toggle');

    //CuerpoTecnico
    Route::resource('cuerpoTecnico', App\Http\Controllers\CuerpoTecnicoController::class);
    // Actualizar CuerpoTecnico
    Route::post('cuerpoTecnico/{cuerpoTecnico}', 'App\Http\Controllers\CuerpoTecnicoController@update')->name('cuerpoTecnico.updatepost');
    //toggle estado cuerpoTecnico
    Route::post('cuerpoTecnico/{cuerpoTecnico}/toggle', 'App\Http\Controllers\CuerpoTecnicoController@toggleCuerpoTecnico')->name('cuerpoTecnico.toggle');

    //Preplanilla
    Route::resource('preplanilla', App\Http\Controllers\PreplanillaController::class);

    //Resource Inscripciones
    Route::resource('inscripcionesEquipo', App\Http\Controllers\InscripcionesController::class);
});

Route::get('/version', function () {
    return 'Versión de PHP: ' . phpversion();
});


require __DIR__ . '/auth.php';
