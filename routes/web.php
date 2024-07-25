
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
use App\Http\Controllers\HomeController;
use Inertia\Inertia;
use App\Http\Controllers\TablasGruposController;


Route::get('/', function () {
    $torneoEnCurso = torneo::select('id', 'nombreTorneo')
        ->orderByRaw("CASE WHEN estadoTorneo = 'En Juego' THEN 0 WHEN estadoTorneo = 'Finalizado' THEN 2 ELSE 1 END")
        ->orderBy('fechaInicio')
        ->get();
        $programaciones_faces = DB::table('programaciones_faces')
        ->join('fases', 'programaciones_faces.fk_fase', '=', 'fases.id')
        ->join('torneo', 'fases.fk_torneo', '=', 'torneo.id')
        ->join('lugar_partidos', 'programaciones_faces.fk_lugarPartido', '=', 'lugar_partidos.id')
        ->join('resultado_sorteos as local', function ($join) {
            $join->on('programaciones_faces.posicion_local', '=', 'local.puesto')
                ->on('local.fk_torneo', '=', 'fases.fk_torneo');
        })
        ->join('resultado_sorteos as visitante', function ($join) {
            $join->on('programaciones_faces.posicion_visitante', '=', 'visitante.puesto')
                ->on('visitante.fk_torneo', '=', 'fases.fk_torneo');
        })
        ->join('equipos as el', 'local.fk_equipo', '=', 'el.id')
        ->join('equipos as ev', 'visitante.fk_equipo', '=', 'ev.id')
        ->leftJoin('resultados_partidos', 'programaciones_faces.id', '=', 'resultados_partidos.fk_programaciones_faces_id')
        ->leftJoin('jugadores', 'resultados_partidos.fk_jugador_id', '=', 'jugadores.id')
        ->whereIn('torneo.estadoTorneo', ['Por Iniciar', 'En Juego'])
        ->select(
            'fases.nombreFase',
            'programaciones_faces.posicion_local',
            'programaciones_faces.posicion_visitante',
            'programaciones_faces.FechaPartido',
            'programaciones_faces.HoraPartido',
            'lugar_partidos.nomLugar',
            'lugar_partidos.geolocalizacion',
            'el.id as idEquipoLocal',
            'el.nombreEquipo as nombreEquipoLocal',
            'el.escudoEquipo as escudoEquipoLocal',
            'ev.id as idEquipoVisitante',
            'ev.nombreEquipo as nombreEquipoVisitante',
            'ev.escudoEquipo as escudoEquipoVisitante',
            DB::raw('COALESCE(SUM(CASE WHEN jugadores.fk_equipo = el.id THEN resultados_partidos.goles ELSE 0 END), 0) AS GolesLocal'),
            DB::raw('COALESCE(SUM(CASE WHEN jugadores.fk_equipo = ev.id THEN resultados_partidos.goles ELSE 0 END), 0) AS GolesVisitante'),
            DB::raw('COALESCE(SUM(CASE WHEN jugadores.fk_equipo = el.id THEN resultados_partidos.tarjetas_amarillas ELSE 0 END), 0) AS TarjetasAmarillasLocal'),
            DB::raw('COALESCE(SUM(CASE WHEN jugadores.fk_equipo = ev.id THEN resultados_partidos.tarjetas_amarillas ELSE 0 END), 0) AS TarjetasAmarillasVisitante'),
            DB::raw('COALESCE(SUM(CASE WHEN jugadores.fk_equipo = el.id THEN resultados_partidos.tarjetas_rojas ELSE 0 END), 0) AS TarjetasRojasLocal'),
            DB::raw('COALESCE(SUM(CASE WHEN jugadores.fk_equipo = ev.id THEN resultados_partidos.tarjetas_rojas ELSE 0 END), 0) AS TarjetasRojasVisitante')
        )
        ->groupBy(
            'fases.nombreFase',
            'programaciones_faces.posicion_local',
            'programaciones_faces.posicion_visitante',
            'programaciones_faces.FechaPartido',
            'programaciones_faces.HoraPartido',
            'lugar_partidos.nomLugar',
            'lugar_partidos.geolocalizacion',
            'el.id',
            'el.nombreEquipo',
            'el.escudoEquipo',
            'ev.id',
            'ev.nombreEquipo',
            'ev.escudoEquipo'
        )
        ->orderBy('programaciones_faces.FechaPartido')
        ->orderBy('programaciones_faces.HoraPartido')
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
Route::get('finalizadosTorneos', 'App\Http\Controllers\Torneos@finalizadosTorneos')->name('torneo.finalizadosTorneos');
Route::get('torneosIniciados', 'App\Http\Controllers\Torneos@torneosIniciados')->name('torneo.torneosIniciados');
Route::get('listarTorneos/{id}', 'App\Http\Controllers\Torneos@show')->name('torneo.showUno');
Route::get('torneoEnCurso', [TorneoEnCursoController::class, 'index'])->name('torneoEnCurso.index');
Route::get('Equipo/{id}', [TablasGruposController::class, 'Equipo'])->name('equipo.showUno');
Route::resource('tablaGrupos', App\Http\Controllers\TablasGruposController::class);
Route::resource('tablasJuego', App\Http\Controllers\TablasJuego::class);
Route::resource('verResultados', App\Http\Controllers\VerResultadosController::class);

Route::get('/PoliticasPrivacidad',[HomeController::class, 'PrivacyPolicy'])->name('politicasPrivacidad.index');
Route::get('/TerminosCondiciones',[HomeController::class, 'TerminosCondiciones'])->name('terminosCondiciones.index');
Route::get('/politica-de-cookies',[HomeController::class, 'PoliticaCokies'])->name('PoliticaCokies.index');
Route::get('/LICENSE',[HomeController::class, 'License'])->name('License.index');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');    
});

Route::middleware('auth', 'role:admin')->group(function () {

    Route::get('registerAdmin', [RegisteredUserAdminController::class, 'create'])->name('admin.register');
    Route::post('registerAdmin', [RegisteredUserAdminController::class, 'store']);
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

    // Resource resultadosTorneo
    Route::resource('resultadosTorneo', App\Http\Controllers\ResultadosController::class);

    // Resource gallery
    Route::resource('gallery', App\Http\Controllers\GalleryController::class);
    // Actualizar Gallery
    Route::post('gallery/{gallery}', 'App\Http\Controllers\GalleryController@update')->name('gallery.updatepost');


});

// Registrar Director Equipo
Route::get('preregistro', 'App\Http\Controllers\Torneos@registrarEquipo')->name('preregistro.create');


Route::middleware('auth', 'role:equipo')->group(function () {
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
