<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">ASUDE</h1>
</p>
<p align="center">
    <em>HTTP error 401 for prompt `slogan`</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/vadelgado/ASUDE?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/vadelgado/ASUDE?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/vadelgado/ASUDE?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/vadelgado/ASUDE?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/PHP-777BB4.svg?style=flat&logo=PHP&logoColor=white" alt="PHP">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running ASUDE](#-running-ASUDE)
>   - [🧪 Tests](#-tests)
> - [🛠 Project Roadmap](#-project-roadmap)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)
> - [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

HTTP error 401 for prompt `overview`

---

## 📦 Features

HTTP error 401 for prompt `features`

---

## 📂 Repository Structure

```sh
└── ASUDE/
    ├── LICENSE.md
    ├── README.md
    ├── app
    │   ├── Console
    │   │   └── Kernel.php
    │   ├── Exceptions
    │   │   └── Handler.php
    │   ├── Http
    │   │   ├── Controllers
    │   │   │   ├── AlumnoController.php
    │   │   │   ├── AmonestacionesTCController.php
    │   │   │   ├── Auth
    │   │   │   │   ├── AuthenticatedSessionController.php
    │   │   │   │   ├── ConfirmablePasswordController.php
    │   │   │   │   ├── EmailVerificationNotificationController.php
    │   │   │   │   ├── EmailVerificationPromptController.php
    │   │   │   │   ├── NewPasswordController.php
    │   │   │   │   ├── PasswordController.php
    │   │   │   │   ├── PasswordResetLinkController.php
    │   │   │   │   ├── RegisteredUserAdminController.php
    │   │   │   │   ├── RegisteredUserController.php
    │   │   │   │   └── VerifyEmailController.php
    │   │   │   ├── ComprobantesController.php
    │   │   │   ├── Controller.php
    │   │   │   ├── CuerpoTecnicoController.php
    │   │   │   ├── EquiposController.php
    │   │   │   ├── FaltasCuerpoTecnicoController.php
    │   │   │   ├── FasesController.php
    │   │   │   ├── GalleryController.php
    │   │   │   ├── HomeController.php
    │   │   │   ├── InscripcionesController.php
    │   │   │   ├── JugadoresController.php
    │   │   │   ├── LugarPartidoController.php
    │   │   │   ├── PreplanillaController.php
    │   │   │   ├── ProfileController.php
    │   │   │   ├── ProgramacionesFacesController.php
    │   │   │   ├── ResultadoSorteoController.php
    │   │   │   ├── ResultadosController.php
    │   │   │   ├── ResultadosPartidosController.php
    │   │   │   ├── SistemaJuegoController.php
    │   │   │   ├── TablasGruposController.php
    │   │   │   ├── TablasJuego.php
    │   │   │   ├── TorneoEnCursoController.php
    │   │   │   ├── Torneos.php
    │   │   │   ├── TournamentSchedule.php
    │   │   │   └── VerResultadosController.php
    │   │   ├── Kernel.php
    │   │   ├── Middleware
    │   │   │   ├── Authenticate.php
    │   │   │   ├── CheckRole.php
    │   │   │   ├── Cors.php
    │   │   │   ├── EncryptCookies.php
    │   │   │   ├── HandleInertiaRequests.php
    │   │   │   ├── PreventRequestsDuringMaintenance.php
    │   │   │   ├── RedirectIfAuthenticated.php
    │   │   │   ├── TrimStrings.php
    │   │   │   ├── TrustHosts.php
    │   │   │   ├── TrustProxies.php
    │   │   │   ├── ValidateSignature.php
    │   │   │   └── VerifyCsrfToken.php
    │   │   └── Requests
    │   │       ├── Auth
    │   │       │   └── LoginRequest.php
    │   │       ├── CuerpoTecnico
    │   │       │   ├── StoreRequest.php
    │   │       │   └── UpdateRequest.php
    │   │       ├── Equipos
    │   │       │   ├── StoreRequest.php
    │   │       │   └── UpdateRequest.php
    │   │       ├── Fases
    │   │       │   ├── StoreRequest.php
    │   │       │   └── UpdateRequest.php
    │   │       ├── Inscripciones
    │   │       │   ├── StoreRequest.php
    │   │       │   └── UpdateRequest.php
    │   │       ├── Jugadores
    │   │       │   ├── StoreRequest.php
    │   │       │   └── UpdateRequest.php
    │   │       ├── LugarPartido
    │   │       │   ├── StoreRequest.php
    │   │       │   └── UpdateRequest.php
    │   │       ├── ProfileUpdateRequest.php
    │   │       ├── ProgramacionesFases
    │   │       │   ├── StoreRequest.php
    │   │       │   └── UpdateRequest.php
    │   │       ├── ResultadosPartidos
    │   │       │   ├── StoreRequest.php
    │   │       │   └── UpdateRequest.php
    │   │       ├── SistemaJuego
    │   │       │   ├── StoreRequest.php
    │   │       │   └── UpdateRequest.php
    │   │       ├── Sorteo
    │   │       │   ├── StoreRequest.php
    │   │       │   └── UpdateRequest.php
    │   │       └── Torneos
    │   │           ├── StoreRequest.php
    │   │           └── UpdateRequest.php
    │   ├── Models
    │   │   ├── Alumno.php
    │   │   ├── AmonestacionesTC.php
    │   │   ├── Categorias.php
    │   │   ├── Comprobantes.php
    │   │   ├── Equipos.php
    │   │   ├── FaltasCuerpoTecnico.php
    │   │   ├── Fases.php
    │   │   ├── Gallery.php
    │   │   ├── Inscripciones.php
    │   │   ├── Jugadores.php
    │   │   ├── ProgramacionesFaces.php
    │   │   ├── ResultadoSorteo.php
    │   │   ├── Resultados.php
    │   │   ├── ResultadosPartidos.php
    │   │   ├── SistemaJuego.php
    │   │   ├── TablasGrupos.php
    │   │   ├── TorneoEnCurso.php
    │   │   ├── User.php
    │   │   ├── VerResultados.php
    │   │   ├── cuerpoTecnico.php
    │   │   ├── lugarPartido.php
    │   │   └── torneo.php
    │   ├── Providers
    │   │   ├── AppServiceProvider.php
    │   │   ├── AuthServiceProvider.php
    │   │   ├── BroadcastServiceProvider.php
    │   │   ├── EventServiceProvider.php
    │   │   └── RouteServiceProvider.php
    │   └── Rules
    │       └── UniqueTorneoEquipo.php
    ├── artisan
    ├── bootstrap
    │   ├── app.php
    │   └── cache
    │       └── .gitignore
    ├── composer.json
    ├── composer.lock
    ├── config
    │   ├── app.php
    │   ├── auth.php
    │   ├── broadcasting.php
    │   ├── cache.php
    │   ├── cors.php
    │   ├── database.php
    │   ├── dompdf.php
    │   ├── filesystems.php
    │   ├── hashing.php
    │   ├── logging.php
    │   ├── mail.php
    │   ├── queue.php
    │   ├── sanctum.php
    │   ├── services.php
    │   ├── session.php
    │   ├── sweetalert.php
    │   └── view.php
    ├── database
    │   ├── .gitignore
    │   ├── factories
    │   │   ├── AlumnoFactory.php
    │   │   ├── ComprobantesFactory.php
    │   │   ├── CuerpoTecnicoFactory.php
    │   │   ├── EpsJugadorFactory.php
    │   │   ├── FirmaSelloFormatosFactory.php
    │   │   ├── FormatoFotosFactory.php
    │   │   ├── InfExtraJugadorFactory.php
    │   │   ├── LugarPartidoFactory.php
    │   │   ├── PreplanillaFactory.php
    │   │   ├── ResultadoSorteoFactory.php
    │   │   ├── SesionImagenJugadorFactory.php
    │   │   ├── SistemaJuegoFactory.php
    │   │   ├── TablasGruposFactory.php
    │   │   ├── TorneoEnCursoFactory.php
    │   │   └── UserFactory.php
    │   ├── migrations
    │   │   ├── 2014_10_12_000000_create_users_table.php
    │   │   ├── 2014_10_12_100000_create_password_reset_tokens_table.php
    │   │   ├── 2019_08_19_000000_create_failed_jobs_table.php
    │   │   ├── 2019_12_14_000001_create_personal_access_tokens_table.php
    │   │   ├── 2024_02_05_163755_create_alumnos_table.php
    │   │   ├── 2024_02_06_194227_create_comprobantes_ta.php
    │   │   ├── 2024_03_04_144619_create_categoria_equipo_table.php
    │   │   ├── 2024_03_27_204045_create_sistema_juegos_table.php
    │   │   ├── 2024_03_28_152808_torneo.php
    │   │   ├── 2024_03_28_152809_create_lugar_partidos_table.php
    │   │   ├── 2024_03_28_153222_equipos.php
    │   │   ├── 2024_03_28_153449_jugado.php
    │   │   ├── 2024_03_28_153612_resultados_sorteo.php
    │   │   ├── 2024_04_05_144228_create_cuerpo_tecnicos_tabl.php
    │   │   ├── 2024_05_21_204612_inscripciones.php
    │   │   ├── 2024_05_30_203732_create_fases_table.php
    │   │   ├── 2024_05_31_160637_create_programaciones_faces_tabl.php
    │   │   ├── 2024_06_14_133759_create_resultados_partidos_table.php
    │   │   ├── 2024_06_16_214414_create_amonestaciones_t_c_s_table.php
    │   │   ├── 2024_06_17_210125_create_faltas_cuerpo_tecnicos_table.php
    │   │   ├── 2024_07_02_211544_create_resultados_table.php
    │   │   └── 2024_07_03_145724_create_galleries_table.php
    │   └── seeders
    │       ├── CategoriasSeeder.php
    │       ├── DatabaseSeeder.php
    │       ├── ResultadosSeeder.php
    │       ├── SistemaJuegoSeeder.php
    │       └── UsuarioSeeder.php
    ├── jsconfig.json
    ├── lang
    │   └── en
    │       ├── auth.php
    │       ├── pagination.php
    │       ├── passwords.php
    │       └── validation.php
    ├── package-lock.json
    ├── package.json
    ├── phpunit.xml
    ├── postcss.config.js
    ├── public
    │   ├── .htaccess
    │   ├── Bento
    │   │   ├── Baby.webp
    │   │   ├── cafe.webp
    │   │   ├── chiquifutbol.webp
    │   │   ├── festival.webp
    │   │   ├── fortaleza.webp
    │   │   ├── futurasEstrellas.webp
    │   │   ├── liganarino.webp
    │   │   ├── osbol.webp
    │   │   └── paisitas.webp
    │   ├── banner1.webp
    │   ├── banner2.webp
    │   ├── banner3.webp
    │   ├── escudo.svg
    │   ├── facebook.png
    │   ├── favicon.ico
    │   ├── fotos
    │   │   ├── 1710432906_osbol.png
    │   │   ├── 1710433406_4.png
    │   │   └── 1710434759_logoalone.png
    │   ├── hand-click.svg
    │   ├── index.php
    │   ├── logo-footer.webp
    │   ├── logo-home.svg
    │   ├── logo-home1.webp
    │   ├── logo2.webp
    │   ├── robots.txt
    │   ├── soccer-player.svg
    │   ├── vendor
    │   │   └── sweetalert
    │   │       └── sweetalert.all.js
    │   ├── whatsapp-icon.webp
    │   └── whatsapp.png
    ├── resources
    │   ├── css
    │   │   └── app.css
    │   ├── js
    │   │   ├── Components
    │   │   │   ├── ApplicationLogo.jsx
    │   │   │   ├── Banner.jsx
    │   │   │   ├── Button.jsx
    │   │   │   ├── CardComprobantes.jsx
    │   │   │   ├── Checkbox.jsx
    │   │   │   ├── DangerButton.jsx
    │   │   │   ├── DashBoard
    │   │   │   │   ├── Bento.jsx
    │   │   │   │   ├── Carousel.jsx
    │   │   │   │   ├── ContactBar.jsx
    │   │   │   │   ├── Footer.jsx
    │   │   │   │   ├── Header.jsx
    │   │   │   │   ├── HeaderLink.jsx
    │   │   │   │   ├── Intro.jsx
    │   │   │   │   ├── PreFooter.jsx
    │   │   │   │   ├── TablaTorneos.jsx
    │   │   │   │   ├── TournamentSchedule.jsx
    │   │   │   │   ├── Video.jsx
    │   │   │   │   └── YourComponent.jsx
    │   │   │   ├── DataTable.jsx
    │   │   │   ├── DateInput.jsx
    │   │   │   ├── DragDrop.jsx
    │   │   │   ├── Dropdown.jsx
    │   │   │   ├── FlyoutMenu.jsx
    │   │   │   ├── FormField.jsx
    │   │   │   ├── Gallery.jsx
    │   │   │   ├── ImgField.jsx
    │   │   │   ├── InputError.jsx
    │   │   │   ├── InputLabel.jsx
    │   │   │   ├── Logo.jsx
    │   │   │   ├── Modal.jsx
    │   │   │   ├── NavLink.jsx
    │   │   │   ├── PrimaryButton.jsx
    │   │   │   ├── ResponsiveNavLink.jsx
    │   │   │   ├── SecondaryButton.jsx
    │   │   │   ├── SelectField.jsx
    │   │   │   ├── SimpleGallery.jsx
    │   │   │   ├── TextInput.jsx
    │   │   │   ├── Textarea .jsx
    │   │   │   ├── Textarea.jsx
    │   │   │   ├── Textarea2.jsx
    │   │   │   ├── Title.jsx
    │   │   │   ├── WarningButton.jsx
    │   │   │   ├── Whatsapp.jsx
    │   │   │   └── styles
    │   │   │       └── Button.module.css
    │   │   ├── Layouts
    │   │   │   ├── AuthenticatedLayout.jsx
    │   │   │   └── GuestLayout.jsx
    │   │   ├── Pages
    │   │   │   ├── Alumno
    │   │   │   │   └── Index.jsx
    │   │   │   ├── AmonestacionesTC
    │   │   │   │   └── Index.jsx
    │   │   │   ├── Auth
    │   │   │   │   ├── ConfirmPassword.jsx
    │   │   │   │   ├── ForgotPassword.jsx
    │   │   │   │   ├── Login.jsx
    │   │   │   │   ├── Register.jsx
    │   │   │   │   ├── ResetPassword.jsx
    │   │   │   │   └── VerifyEmail.jsx
    │   │   │   ├── AuthAdmin
    │   │   │   │   └── Register.jsx
    │   │   │   ├── Comprobantes
    │   │   │   │   └── Index.jsx
    │   │   │   ├── CuerpoTecnico
    │   │   │   │   └── Index.jsx
    │   │   │   ├── Dashboard.jsx
    │   │   │   ├── Equipos
    │   │   │   │   └── Index.jsx
    │   │   │   ├── FaltasCuerpoTecnico
    │   │   │   │   └── Index.jsx
    │   │   │   ├── Fases
    │   │   │   │   └── Index.jsx
    │   │   │   ├── Gallery
    │   │   │   │   └── Index.jsx
    │   │   │   ├── Inscripciones
    │   │   │   │   └── Index.jsx
    │   │   │   ├── Jugadores
    │   │   │   │   └── Index.jsx
    │   │   │   ├── LicensePage.jsx
    │   │   │   ├── LugarPartido
    │   │   │   │   └── Index.jsx
    │   │   │   ├── PoliticaDeCookies.jsx
    │   │   │   ├── Preplanilla
    │   │   │   │   └── Index.jsx
    │   │   │   ├── PrivacyPolicy.jsx
    │   │   │   ├── Profile
    │   │   │   │   ├── Edit.jsx
    │   │   │   │   └── Partials
    │   │   │   ├── ProgramacionesFaces
    │   │   │   │   └── index.jsx
    │   │   │   ├── ResultadoSorteo
    │   │   │   │   ├── Index.jsx
    │   │   │   │   └── ShouwTablaGrupos.jsx
    │   │   │   ├── Resultados
    │   │   │   │   └── Index.jsx
    │   │   │   ├── ResultadosPartidos
    │   │   │   │   └── Index.jsx
    │   │   │   ├── SistemaJuego
    │   │   │   │   └── Index.jsx
    │   │   │   ├── TablasJuego
    │   │   │   │   └── Index.jsx
    │   │   │   ├── Team.jsx
    │   │   │   ├── TermsAndConditions.jsx
    │   │   │   ├── Torneo
    │   │   │   │   ├── Acordion.jsx
    │   │   │   │   ├── Index.jsx
    │   │   │   │   ├── ListOfTournaments.jsx
    │   │   │   │   ├── ListarTorneos.jsx
    │   │   │   │   ├── Show.jsx
    │   │   │   │   ├── Title.jsx
    │   │   │   │   └── TournamentsItem.jsx
    │   │   │   ├── TorneoEnCurso
    │   │   │   │   └── Index.jsx
    │   │   │   ├── VerResultados
    │   │   │   │   └── Index.jsx
    │   │   │   └── Welcome.jsx
    │   │   ├── app.jsx
    │   │   └── bootstrap.js
    │   └── views
    │       ├── app.blade.php
    │       ├── pdf
    │       │   ├── fotosJugadores.blade.php
    │       │   └── jugadores.blade.php
    │       ├── vendor
    │       │   └── sweetalert
    │       │       └── alert.blade.php
    │       └── welcome.blade.php
    ├── routes
    │   ├── api.php
    │   ├── auth.php
    │   ├── channels.php
    │   ├── console.php
    │   └── web.php
    ├── storage
    │   ├── app
    │   │   ├── .gitignore
    │   │   └── public
    │   │       └── .gitignore
    │   ├── framework
    │   │   ├── .gitignore
    │   │   ├── cache
    │   │   │   ├── .gitignore
    │   │   │   └── data
    │   │   │       └── .gitignore
    │   │   ├── sessions
    │   │   │   └── .gitignore
    │   │   ├── testing
    │   │   │   └── .gitignore
    │   │   └── views
    │   │       └── .gitignore
    │   └── logs
    │       └── .gitignore
    ├── tailwind.config.js
    ├── tests
    │   ├── CreatesApplication.php
    │   ├── Feature
    │   │   ├── Auth
    │   │   │   ├── AuthenticationTest.php
    │   │   │   ├── EmailVerificationTest.php
    │   │   │   ├── PasswordConfirmationTest.php
    │   │   │   ├── PasswordResetTest.php
    │   │   │   ├── PasswordUpdateTest.php
    │   │   │   └── RegistrationTest.php
    │   │   ├── ExampleTest.php
    │   │   └── ProfileTest.php
    │   ├── TestCase.php
    │   └── Unit
    │       └── ExampleTest.php
    └── vite.config.js
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File                                                                                    | Summary                                        |
| ---                                                                                     | ---                                            |
| [jsconfig.json](https://github.com/vadelgado/ASUDE/blob/master/jsconfig.json)           | HTTP error 401 for prompt `jsconfig.json`      |
| [composer.lock](https://github.com/vadelgado/ASUDE/blob/master/composer.lock)           | HTTP error 401 for prompt `composer.lock`      |
| [postcss.config.js](https://github.com/vadelgado/ASUDE/blob/master/postcss.config.js)   | HTTP error 401 for prompt `postcss.config.js`  |
| [vite.config.js](https://github.com/vadelgado/ASUDE/blob/master/vite.config.js)         | HTTP error 401 for prompt `vite.config.js`     |
| [package.json](https://github.com/vadelgado/ASUDE/blob/master/package.json)             | HTTP error 401 for prompt `package.json`       |
| [phpunit.xml](https://github.com/vadelgado/ASUDE/blob/master/phpunit.xml)               | HTTP error 401 for prompt `phpunit.xml`        |
| [tailwind.config.js](https://github.com/vadelgado/ASUDE/blob/master/tailwind.config.js) | HTTP error 401 for prompt `tailwind.config.js` |
| [package-lock.json](https://github.com/vadelgado/ASUDE/blob/master/package-lock.json)   | HTTP error 401 for prompt `package-lock.json`  |
| [artisan](https://github.com/vadelgado/ASUDE/blob/master/artisan)                       | HTTP error 401 for prompt `artisan`            |
| [composer.json](https://github.com/vadelgado/ASUDE/blob/master/composer.json)           | HTTP error 401 for prompt `composer.json`      |

</details>

<details closed><summary>resources.css</summary>

| File                                                                            | Summary                                           |
| ---                                                                             | ---                                               |
| [app.css](https://github.com/vadelgado/ASUDE/blob/master/resources/css/app.css) | HTTP error 401 for prompt `resources/css/app.css` |

</details>

<details closed><summary>resources.views</summary>

| File                                                                                                  | Summary                                                       |
| ---                                                                                                   | ---                                                           |
| [app.blade.php](https://github.com/vadelgado/ASUDE/blob/master/resources/views/app.blade.php)         | HTTP error 401 for prompt `resources/views/app.blade.php`     |
| [welcome.blade.php](https://github.com/vadelgado/ASUDE/blob/master/resources/views/welcome.blade.php) | HTTP error 401 for prompt `resources/views/welcome.blade.php` |

</details>

<details closed><summary>resources.views.pdf</summary>

| File                                                                                                                    | Summary                                                                  |
| ---                                                                                                                     | ---                                                                      |
| [fotosJugadores.blade.php](https://github.com/vadelgado/ASUDE/blob/master/resources/views/pdf/fotosJugadores.blade.php) | HTTP error 401 for prompt `resources/views/pdf/fotosJugadores.blade.php` |
| [jugadores.blade.php](https://github.com/vadelgado/ASUDE/blob/master/resources/views/pdf/jugadores.blade.php)           | HTTP error 401 for prompt `resources/views/pdf/jugadores.blade.php`      |

</details>

<details closed><summary>resources.views.vendor.sweetalert</summary>

| File                                                                                                                | Summary                                                                       |
| ---                                                                                                                 | ---                                                                           |
| [alert.blade.php](https://github.com/vadelgado/ASUDE/blob/master/resources/views/vendor/sweetalert/alert.blade.php) | HTTP error 401 for prompt `resources/views/vendor/sweetalert/alert.blade.php` |

</details>

<details closed><summary>resources.js</summary>

| File                                                                                     | Summary                                               |
| ---                                                                                      | ---                                                   |
| [bootstrap.js](https://github.com/vadelgado/ASUDE/blob/master/resources/js/bootstrap.js) | HTTP error 401 for prompt `resources/js/bootstrap.js` |
| [app.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/app.jsx)           | HTTP error 401 for prompt `resources/js/app.jsx`      |

</details>

<details closed><summary>resources.js.Layouts</summary>

| File                                                                                                                   | Summary                                                                  |
| ---                                                                                                                    | ---                                                                      |
| [GuestLayout.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Layouts/GuestLayout.jsx)                 | HTTP error 401 for prompt `resources/js/Layouts/GuestLayout.jsx`         |
| [AuthenticatedLayout.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Layouts/AuthenticatedLayout.jsx) | HTTP error 401 for prompt `resources/js/Layouts/AuthenticatedLayout.jsx` |

</details>

<details closed><summary>resources.js.Components</summary>

| File                                                                                                                  | Summary                                                                   |
| ---                                                                                                                   | ---                                                                       |
| [SelectField.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/SelectField.jsx)             | HTTP error 401 for prompt `resources/js/Components/SelectField.jsx`       |
| [ResponsiveNavLink.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/ResponsiveNavLink.jsx) | HTTP error 401 for prompt `resources/js/Components/ResponsiveNavLink.jsx` |
| [FlyoutMenu.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/FlyoutMenu.jsx)               | HTTP error 401 for prompt `resources/js/Components/FlyoutMenu.jsx`        |
| [WarningButton.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/WarningButton.jsx)         | HTTP error 401 for prompt `resources/js/Components/WarningButton.jsx`     |
| [Gallery.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/Gallery.jsx)                     | HTTP error 401 for prompt `resources/js/Components/Gallery.jsx`           |
| [DragDrop.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/DragDrop.jsx)                   | HTTP error 401 for prompt `resources/js/Components/DragDrop.jsx`          |
| [Whatsapp.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/Whatsapp.jsx)                   | HTTP error 401 for prompt `resources/js/Components/Whatsapp.jsx`          |
| [CardComprobantes.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/CardComprobantes.jsx)   | HTTP error 401 for prompt `resources/js/Components/CardComprobantes.jsx`  |
| [Checkbox.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/Checkbox.jsx)                   | HTTP error 401 for prompt `resources/js/Components/Checkbox.jsx`          |
| [DateInput.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/DateInput.jsx)                 | HTTP error 401 for prompt `resources/js/Components/DateInput.jsx`         |
| [Banner.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/Banner.jsx)                       | HTTP error 401 for prompt `resources/js/Components/Banner.jsx`            |
| [ImgField.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/ImgField.jsx)                   | HTTP error 401 for prompt `resources/js/Components/ImgField.jsx`          |
| [DataTable.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/DataTable.jsx)                 | HTTP error 401 for prompt `resources/js/Components/DataTable.jsx`         |
| [ApplicationLogo.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/ApplicationLogo.jsx)     | HTTP error 401 for prompt `resources/js/Components/ApplicationLogo.jsx`   |
| [FormField.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/FormField.jsx)                 | HTTP error 401 for prompt `resources/js/Components/FormField.jsx`         |
| [SimpleGallery.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/SimpleGallery.jsx)         | HTTP error 401 for prompt `resources/js/Components/SimpleGallery.jsx`     |
| [NavLink.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/NavLink.jsx)                     | HTTP error 401 for prompt `resources/js/Components/NavLink.jsx`           |
| [InputLabel.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/InputLabel.jsx)               | HTTP error 401 for prompt `resources/js/Components/InputLabel.jsx`        |
| [InputError.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/InputError.jsx)               | HTTP error 401 for prompt `resources/js/Components/InputError.jsx`        |
| [DangerButton.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/DangerButton.jsx)           | HTTP error 401 for prompt `resources/js/Components/DangerButton.jsx`      |
| [Logo.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/Logo.jsx)                           | HTTP error 401 for prompt `resources/js/Components/Logo.jsx`              |
| [Dropdown.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/Dropdown.jsx)                   | HTTP error 401 for prompt `resources/js/Components/Dropdown.jsx`          |
| [SecondaryButton.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/SecondaryButton.jsx)     | HTTP error 401 for prompt `resources/js/Components/SecondaryButton.jsx`   |
| [Textarea2.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/Textarea2.jsx)                 | HTTP error 401 for prompt `resources/js/Components/Textarea2.jsx`         |
| [PrimaryButton.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/PrimaryButton.jsx)         | HTTP error 401 for prompt `resources/js/Components/PrimaryButton.jsx`     |
| [Textarea .jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/Textarea .jsx)                 | HTTP error 401 for prompt `resources/js/Components/Textarea .jsx`         |
| [Modal.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/Modal.jsx)                         | HTTP error 401 for prompt `resources/js/Components/Modal.jsx`             |
| [Title.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/Title.jsx)                         | HTTP error 401 for prompt `resources/js/Components/Title.jsx`             |
| [Textarea.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/Textarea.jsx)                   | HTTP error 401 for prompt `resources/js/Components/Textarea.jsx`          |
| [Button.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/Button.jsx)                       | HTTP error 401 for prompt `resources/js/Components/Button.jsx`            |
| [TextInput.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/TextInput.jsx)                 | HTTP error 401 for prompt `resources/js/Components/TextInput.jsx`         |

</details>

<details closed><summary>resources.js.Components.styles</summary>

| File                                                                                                                 | Summary                                                                      |
| ---                                                                                                                  | ---                                                                          |
| [Button.module.css](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/styles/Button.module.css) | HTTP error 401 for prompt `resources/js/Components/styles/Button.module.css` |

</details>

<details closed><summary>resources.js.Components.DashBoard</summary>

| File                                                                                                                              | Summary                                                                              |
| ---                                                                                                                               | ---                                                                                  |
| [Carousel.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/DashBoard/Carousel.jsx)                     | HTTP error 401 for prompt `resources/js/Components/DashBoard/Carousel.jsx`           |
| [ContactBar.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/DashBoard/ContactBar.jsx)                 | HTTP error 401 for prompt `resources/js/Components/DashBoard/ContactBar.jsx`         |
| [Bento.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/DashBoard/Bento.jsx)                           | HTTP error 401 for prompt `resources/js/Components/DashBoard/Bento.jsx`              |
| [HeaderLink.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/DashBoard/HeaderLink.jsx)                 | HTTP error 401 for prompt `resources/js/Components/DashBoard/HeaderLink.jsx`         |
| [Footer.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/DashBoard/Footer.jsx)                         | HTTP error 401 for prompt `resources/js/Components/DashBoard/Footer.jsx`             |
| [Video.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/DashBoard/Video.jsx)                           | HTTP error 401 for prompt `resources/js/Components/DashBoard/Video.jsx`              |
| [TablaTorneos.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/DashBoard/TablaTorneos.jsx)             | HTTP error 401 for prompt `resources/js/Components/DashBoard/TablaTorneos.jsx`       |
| [PreFooter.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/DashBoard/PreFooter.jsx)                   | HTTP error 401 for prompt `resources/js/Components/DashBoard/PreFooter.jsx`          |
| [YourComponent.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/DashBoard/YourComponent.jsx)           | HTTP error 401 for prompt `resources/js/Components/DashBoard/YourComponent.jsx`      |
| [TournamentSchedule.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/DashBoard/TournamentSchedule.jsx) | HTTP error 401 for prompt `resources/js/Components/DashBoard/TournamentSchedule.jsx` |
| [Intro.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/DashBoard/Intro.jsx)                           | HTTP error 401 for prompt `resources/js/Components/DashBoard/Intro.jsx`              |
| [Header.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Components/DashBoard/Header.jsx)                         | HTTP error 401 for prompt `resources/js/Components/DashBoard/Header.jsx`             |

</details>

<details closed><summary>resources.js.Pages</summary>

| File                                                                                                               | Summary                                                               |
| ---                                                                                                                | ---                                                                   |
| [Welcome.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Welcome.jsx)                       | HTTP error 401 for prompt `resources/js/Pages/Welcome.jsx`            |
| [Team.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Team.jsx)                             | HTTP error 401 for prompt `resources/js/Pages/Team.jsx`               |
| [TermsAndConditions.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/TermsAndConditions.jsx) | HTTP error 401 for prompt `resources/js/Pages/TermsAndConditions.jsx` |
| [PrivacyPolicy.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/PrivacyPolicy.jsx)           | HTTP error 401 for prompt `resources/js/Pages/PrivacyPolicy.jsx`      |
| [PoliticaDeCookies.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/PoliticaDeCookies.jsx)   | HTTP error 401 for prompt `resources/js/Pages/PoliticaDeCookies.jsx`  |
| [Dashboard.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Dashboard.jsx)                   | HTTP error 401 for prompt `resources/js/Pages/Dashboard.jsx`          |
| [LicensePage.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/LicensePage.jsx)               | HTTP error 401 for prompt `resources/js/Pages/LicensePage.jsx`        |

</details>

<details closed><summary>resources.js.Pages.Torneo</summary>

| File                                                                                                                    | Summary                                                                     |
| ---                                                                                                                     | ---                                                                         |
| [TournamentsItem.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Torneo/TournamentsItem.jsx)     | HTTP error 401 for prompt `resources/js/Pages/Torneo/TournamentsItem.jsx`   |
| [Acordion.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Torneo/Acordion.jsx)                   | HTTP error 401 for prompt `resources/js/Pages/Torneo/Acordion.jsx`          |
| [Show.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Torneo/Show.jsx)                           | HTTP error 401 for prompt `resources/js/Pages/Torneo/Show.jsx`              |
| [ListarTorneos.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Torneo/ListarTorneos.jsx)         | HTTP error 401 for prompt `resources/js/Pages/Torneo/ListarTorneos.jsx`     |
| [Index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Torneo/Index.jsx)                         | HTTP error 401 for prompt `resources/js/Pages/Torneo/Index.jsx`             |
| [Title.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Torneo/Title.jsx)                         | HTTP error 401 for prompt `resources/js/Pages/Torneo/Title.jsx`             |
| [ListOfTournaments.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Torneo/ListOfTournaments.jsx) | HTTP error 401 for prompt `resources/js/Pages/Torneo/ListOfTournaments.jsx` |

</details>

<details closed><summary>resources.js.Pages.Alumno</summary>

| File                                                                                            | Summary                                                         |
| ---                                                                                             | ---                                                             |
| [Index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Alumno/Index.jsx) | HTTP error 401 for prompt `resources/js/Pages/Alumno/Index.jsx` |

</details>

<details closed><summary>resources.js.Pages.Gallery</summary>

| File                                                                                             | Summary                                                          |
| ---                                                                                              | ---                                                              |
| [Index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Gallery/Index.jsx) | HTTP error 401 for prompt `resources/js/Pages/Gallery/Index.jsx` |

</details>

<details closed><summary>resources.js.Pages.TablasJuego</summary>

| File                                                                                                 | Summary                                                              |
| ---                                                                                                  | ---                                                                  |
| [Index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/TablasJuego/Index.jsx) | HTTP error 401 for prompt `resources/js/Pages/TablasJuego/Index.jsx` |

</details>

<details closed><summary>resources.js.Pages.SistemaJuego</summary>

| File                                                                                                  | Summary                                                               |
| ---                                                                                                   | ---                                                                   |
| [Index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/SistemaJuego/Index.jsx) | HTTP error 401 for prompt `resources/js/Pages/SistemaJuego/Index.jsx` |

</details>

<details closed><summary>resources.js.Pages.CuerpoTecnico</summary>

| File                                                                                                   | Summary                                                                |
| ---                                                                                                    | ---                                                                    |
| [Index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/CuerpoTecnico/Index.jsx) | HTTP error 401 for prompt `resources/js/Pages/CuerpoTecnico/Index.jsx` |

</details>

<details closed><summary>resources.js.Pages.Preplanilla</summary>

| File                                                                                                 | Summary                                                              |
| ---                                                                                                  | ---                                                                  |
| [Index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Preplanilla/Index.jsx) | HTTP error 401 for prompt `resources/js/Pages/Preplanilla/Index.jsx` |

</details>

<details closed><summary>resources.js.Pages.AmonestacionesTC</summary>

| File                                                                                                      | Summary                                                                   |
| ---                                                                                                       | ---                                                                       |
| [Index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/AmonestacionesTC/Index.jsx) | HTTP error 401 for prompt `resources/js/Pages/AmonestacionesTC/Index.jsx` |

</details>

<details closed><summary>resources.js.Pages.ResultadoSorteo</summary>

| File                                                                                                                           | Summary                                                                             |
| ---                                                                                                                            | ---                                                                                 |
| [ShouwTablaGrupos.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/ResultadoSorteo/ShouwTablaGrupos.jsx) | HTTP error 401 for prompt `resources/js/Pages/ResultadoSorteo/ShouwTablaGrupos.jsx` |
| [Index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/ResultadoSorteo/Index.jsx)                       | HTTP error 401 for prompt `resources/js/Pages/ResultadoSorteo/Index.jsx`            |

</details>

<details closed><summary>resources.js.Pages.Resultados</summary>

| File                                                                                                | Summary                                                             |
| ---                                                                                                 | ---                                                                 |
| [Index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Resultados/Index.jsx) | HTTP error 401 for prompt `resources/js/Pages/Resultados/Index.jsx` |

</details>

<details closed><summary>resources.js.Pages.FaltasCuerpoTecnico</summary>

| File                                                                                                         | Summary                                                                      |
| ---                                                                                                          | ---                                                                          |
| [Index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/FaltasCuerpoTecnico/Index.jsx) | HTTP error 401 for prompt `resources/js/Pages/FaltasCuerpoTecnico/Index.jsx` |

</details>

<details closed><summary>resources.js.Pages.Equipos</summary>

| File                                                                                             | Summary                                                          |
| ---                                                                                              | ---                                                              |
| [Index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Equipos/Index.jsx) | HTTP error 401 for prompt `resources/js/Pages/Equipos/Index.jsx` |

</details>

<details closed><summary>resources.js.Pages.Profile</summary>

| File                                                                                           | Summary                                                         |
| ---                                                                                            | ---                                                             |
| [Edit.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Profile/Edit.jsx) | HTTP error 401 for prompt `resources/js/Pages/Profile/Edit.jsx` |

</details>

<details closed><summary>resources.js.Pages.Profile.Partials</summary>

| File                                                                                                                                                    | Summary                                                                                          |
| ---                                                                                                                                                     | ---                                                                                              |
| [UpdatePasswordForm.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx)                     | HTTP error 401 for prompt `resources/js/Pages/Profile/Partials/UpdatePasswordForm.jsx`           |
| [UpdateProfileInformationForm.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx) | HTTP error 401 for prompt `resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx` |
| [DeleteUserForm.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Profile/Partials/DeleteUserForm.jsx)                             | HTTP error 401 for prompt `resources/js/Pages/Profile/Partials/DeleteUserForm.jsx`               |

</details>

<details closed><summary>resources.js.Pages.ProgramacionesFaces</summary>

| File                                                                                                         | Summary                                                                      |
| ---                                                                                                          | ---                                                                          |
| [index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/ProgramacionesFaces/index.jsx) | HTTP error 401 for prompt `resources/js/Pages/ProgramacionesFaces/index.jsx` |

</details>

<details closed><summary>resources.js.Pages.ResultadosPartidos</summary>

| File                                                                                                        | Summary                                                                     |
| ---                                                                                                         | ---                                                                         |
| [Index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/ResultadosPartidos/Index.jsx) | HTTP error 401 for prompt `resources/js/Pages/ResultadosPartidos/Index.jsx` |

</details>

<details closed><summary>resources.js.Pages.LugarPartido</summary>

| File                                                                                                  | Summary                                                               |
| ---                                                                                                   | ---                                                                   |
| [Index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/LugarPartido/Index.jsx) | HTTP error 401 for prompt `resources/js/Pages/LugarPartido/Index.jsx` |

</details>

<details closed><summary>resources.js.Pages.TorneoEnCurso</summary>

| File                                                                                                   | Summary                                                                |
| ---                                                                                                    | ---                                                                    |
| [Index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/TorneoEnCurso/Index.jsx) | HTTP error 401 for prompt `resources/js/Pages/TorneoEnCurso/Index.jsx` |

</details>

<details closed><summary>resources.js.Pages.VerResultados</summary>

| File                                                                                                   | Summary                                                                |
| ---                                                                                                    | ---                                                                    |
| [Index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/VerResultados/Index.jsx) | HTTP error 401 for prompt `resources/js/Pages/VerResultados/Index.jsx` |

</details>

<details closed><summary>resources.js.Pages.Jugadores</summary>

| File                                                                                               | Summary                                                            |
| ---                                                                                                | ---                                                                |
| [Index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Jugadores/Index.jsx) | HTTP error 401 for prompt `resources/js/Pages/Jugadores/Index.jsx` |

</details>

<details closed><summary>resources.js.Pages.Inscripciones</summary>

| File                                                                                                   | Summary                                                                |
| ---                                                                                                    | ---                                                                    |
| [Index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Inscripciones/Index.jsx) | HTTP error 401 for prompt `resources/js/Pages/Inscripciones/Index.jsx` |

</details>

<details closed><summary>resources.js.Pages.Comprobantes</summary>

| File                                                                                                  | Summary                                                               |
| ---                                                                                                   | ---                                                                   |
| [Index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Comprobantes/Index.jsx) | HTTP error 401 for prompt `resources/js/Pages/Comprobantes/Index.jsx` |

</details>

<details closed><summary>resources.js.Pages.Fases</summary>

| File                                                                                           | Summary                                                        |
| ---                                                                                            | ---                                                            |
| [Index.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Fases/Index.jsx) | HTTP error 401 for prompt `resources/js/Pages/Fases/Index.jsx` |

</details>

<details closed><summary>resources.js.Pages.AuthAdmin</summary>

| File                                                                                                     | Summary                                                               |
| ---                                                                                                      | ---                                                                   |
| [Register.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/AuthAdmin/Register.jsx) | HTTP error 401 for prompt `resources/js/Pages/AuthAdmin/Register.jsx` |

</details>

<details closed><summary>resources.js.Pages.Auth</summary>

| File                                                                                                              | Summary                                                                 |
| ---                                                                                                               | ---                                                                     |
| [ResetPassword.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Auth/ResetPassword.jsx)     | HTTP error 401 for prompt `resources/js/Pages/Auth/ResetPassword.jsx`   |
| [ConfirmPassword.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Auth/ConfirmPassword.jsx) | HTTP error 401 for prompt `resources/js/Pages/Auth/ConfirmPassword.jsx` |
| [ForgotPassword.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Auth/ForgotPassword.jsx)   | HTTP error 401 for prompt `resources/js/Pages/Auth/ForgotPassword.jsx`  |
| [Login.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Auth/Login.jsx)                     | HTTP error 401 for prompt `resources/js/Pages/Auth/Login.jsx`           |
| [VerifyEmail.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Auth/VerifyEmail.jsx)         | HTTP error 401 for prompt `resources/js/Pages/Auth/VerifyEmail.jsx`     |
| [Register.jsx](https://github.com/vadelgado/ASUDE/blob/master/resources/js/Pages/Auth/Register.jsx)               | HTTP error 401 for prompt `resources/js/Pages/Auth/Register.jsx`        |

</details>

<details closed><summary>public</summary>

| File                                                                           | Summary                                       |
| ---                                                                            | ---                                           |
| [.htaccess](https://github.com/vadelgado/ASUDE/blob/master/public/.htaccess)   | HTTP error 401 for prompt `public/.htaccess`  |
| [index.php](https://github.com/vadelgado/ASUDE/blob/master/public/index.php)   | HTTP error 401 for prompt `public/index.php`  |
| [robots.txt](https://github.com/vadelgado/ASUDE/blob/master/public/robots.txt) | HTTP error 401 for prompt `public/robots.txt` |

</details>

<details closed><summary>public.vendor.sweetalert</summary>

| File                                                                                                           | Summary                                                                |
| ---                                                                                                            | ---                                                                    |
| [sweetalert.all.js](https://github.com/vadelgado/ASUDE/blob/master/public/vendor/sweetalert/sweetalert.all.js) | HTTP error 401 for prompt `public/vendor/sweetalert/sweetalert.all.js` |

</details>

<details closed><summary>database.factories</summary>

| File                                                                                                                               | Summary                                                                       |
| ---                                                                                                                                | ---                                                                           |
| [SesionImagenJugadorFactory.php](https://github.com/vadelgado/ASUDE/blob/master/database/factories/SesionImagenJugadorFactory.php) | HTTP error 401 for prompt `database/factories/SesionImagenJugadorFactory.php` |
| [UserFactory.php](https://github.com/vadelgado/ASUDE/blob/master/database/factories/UserFactory.php)                               | HTTP error 401 for prompt `database/factories/UserFactory.php`                |
| [CuerpoTecnicoFactory.php](https://github.com/vadelgado/ASUDE/blob/master/database/factories/CuerpoTecnicoFactory.php)             | HTTP error 401 for prompt `database/factories/CuerpoTecnicoFactory.php`       |
| [InfExtraJugadorFactory.php](https://github.com/vadelgado/ASUDE/blob/master/database/factories/InfExtraJugadorFactory.php)         | HTTP error 401 for prompt `database/factories/InfExtraJugadorFactory.php`     |
| [FormatoFotosFactory.php](https://github.com/vadelgado/ASUDE/blob/master/database/factories/FormatoFotosFactory.php)               | HTTP error 401 for prompt `database/factories/FormatoFotosFactory.php`        |
| [ComprobantesFactory.php](https://github.com/vadelgado/ASUDE/blob/master/database/factories/ComprobantesFactory.php)               | HTTP error 401 for prompt `database/factories/ComprobantesFactory.php`        |
| [SistemaJuegoFactory.php](https://github.com/vadelgado/ASUDE/blob/master/database/factories/SistemaJuegoFactory.php)               | HTTP error 401 for prompt `database/factories/SistemaJuegoFactory.php`        |
| [EpsJugadorFactory.php](https://github.com/vadelgado/ASUDE/blob/master/database/factories/EpsJugadorFactory.php)                   | HTTP error 401 for prompt `database/factories/EpsJugadorFactory.php`          |
| [TablasGruposFactory.php](https://github.com/vadelgado/ASUDE/blob/master/database/factories/TablasGruposFactory.php)               | HTTP error 401 for prompt `database/factories/TablasGruposFactory.php`        |
| [TorneoEnCursoFactory.php](https://github.com/vadelgado/ASUDE/blob/master/database/factories/TorneoEnCursoFactory.php)             | HTTP error 401 for prompt `database/factories/TorneoEnCursoFactory.php`       |
| [ResultadoSorteoFactory.php](https://github.com/vadelgado/ASUDE/blob/master/database/factories/ResultadoSorteoFactory.php)         | HTTP error 401 for prompt `database/factories/ResultadoSorteoFactory.php`     |
| [PreplanillaFactory.php](https://github.com/vadelgado/ASUDE/blob/master/database/factories/PreplanillaFactory.php)                 | HTTP error 401 for prompt `database/factories/PreplanillaFactory.php`         |
| [AlumnoFactory.php](https://github.com/vadelgado/ASUDE/blob/master/database/factories/AlumnoFactory.php)                           | HTTP error 401 for prompt `database/factories/AlumnoFactory.php`              |
| [LugarPartidoFactory.php](https://github.com/vadelgado/ASUDE/blob/master/database/factories/LugarPartidoFactory.php)               | HTTP error 401 for prompt `database/factories/LugarPartidoFactory.php`        |
| [FirmaSelloFormatosFactory.php](https://github.com/vadelgado/ASUDE/blob/master/database/factories/FirmaSelloFormatosFactory.php)   | HTTP error 401 for prompt `database/factories/FirmaSelloFormatosFactory.php`  |

</details>

<details closed><summary>database.migrations</summary>

| File                                                                                                                                                                                      | Summary                                                                                                   |
| ---                                                                                                                                                                                       | ---                                                                                                       |
| [2024_07_02_211544_create_resultados_table.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2024_07_02_211544_create_resultados_table.php)                         | HTTP error 401 for prompt `database/migrations/2024_07_02_211544_create_resultados_table.php`             |
| [2024_06_17_210125_create_faltas_cuerpo_tecnicos_table.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2024_06_17_210125_create_faltas_cuerpo_tecnicos_table.php) | HTTP error 401 for prompt `database/migrations/2024_06_17_210125_create_faltas_cuerpo_tecnicos_table.php` |
| [2024_03_28_152809_create_lugar_partidos_table.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2024_03_28_152809_create_lugar_partidos_table.php)                 | HTTP error 401 for prompt `database/migrations/2024_03_28_152809_create_lugar_partidos_table.php`         |
| [2024_05_30_203732_create_fases_table.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2024_05_30_203732_create_fases_table.php)                                   | HTTP error 401 for prompt `database/migrations/2024_05_30_203732_create_fases_table.php`                  |
| [2014_10_12_000000_create_users_table.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2014_10_12_000000_create_users_table.php)                                   | HTTP error 401 for prompt `database/migrations/2014_10_12_000000_create_users_table.php`                  |
| [2024_03_28_153222_equipos.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2024_03_28_153222_equipos.php)                                                         | HTTP error 401 for prompt `database/migrations/2024_03_28_153222_equipos.php`                             |
| [2024_06_16_214414_create_amonestaciones_t_c_s_table.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2024_06_16_214414_create_amonestaciones_t_c_s_table.php)     | HTTP error 401 for prompt `database/migrations/2024_06_16_214414_create_amonestaciones_t_c_s_table.php`   |
| [2024_05_21_204612_inscripciones.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2024_05_21_204612_inscripciones.php)                                             | HTTP error 401 for prompt `database/migrations/2024_05_21_204612_inscripciones.php`                       |
| [2024_04_05_144228_create_cuerpo_tecnicos_tabl.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2024_04_05_144228_create_cuerpo_tecnicos_tabl.php)                 | HTTP error 401 for prompt `database/migrations/2024_04_05_144228_create_cuerpo_tecnicos_tabl.php`         |
| [2024_07_03_145724_create_galleries_table.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2024_07_03_145724_create_galleries_table.php)                           | HTTP error 401 for prompt `database/migrations/2024_07_03_145724_create_galleries_table.php`              |
| [2024_06_14_133759_create_resultados_partidos_table.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2024_06_14_133759_create_resultados_partidos_table.php)       | HTTP error 401 for prompt `database/migrations/2024_06_14_133759_create_resultados_partidos_table.php`    |
| [2024_02_06_194227_create_comprobantes_ta.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2024_02_06_194227_create_comprobantes_ta.php)                           | HTTP error 401 for prompt `database/migrations/2024_02_06_194227_create_comprobantes_ta.php`              |
| [2024_02_05_163755_create_alumnos_table.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2024_02_05_163755_create_alumnos_table.php)                               | HTTP error 401 for prompt `database/migrations/2024_02_05_163755_create_alumnos_table.php`                |
| [2014_10_12_100000_create_password_reset_tokens_table.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2014_10_12_100000_create_password_reset_tokens_table.php)   | HTTP error 401 for prompt `database/migrations/2014_10_12_100000_create_password_reset_tokens_table.php`  |
| [2024_03_28_152808_torneo.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2024_03_28_152808_torneo.php)                                                           | HTTP error 401 for prompt `database/migrations/2024_03_28_152808_torneo.php`                              |
| [2024_03_28_153449_jugado.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2024_03_28_153449_jugado.php)                                                           | HTTP error 401 for prompt `database/migrations/2024_03_28_153449_jugado.php`                              |
| [2024_03_27_204045_create_sistema_juegos_table.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2024_03_27_204045_create_sistema_juegos_table.php)                 | HTTP error 401 for prompt `database/migrations/2024_03_27_204045_create_sistema_juegos_table.php`         |
| [2024_03_28_153612_resultados_sorteo.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2024_03_28_153612_resultados_sorteo.php)                                     | HTTP error 401 for prompt `database/migrations/2024_03_28_153612_resultados_sorteo.php`                   |
| [2024_03_04_144619_create_categoria_equipo_table.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2024_03_04_144619_create_categoria_equipo_table.php)             | HTTP error 401 for prompt `database/migrations/2024_03_04_144619_create_categoria_equipo_table.php`       |
| [2024_05_31_160637_create_programaciones_faces_tabl.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2024_05_31_160637_create_programaciones_faces_tabl.php)       | HTTP error 401 for prompt `database/migrations/2024_05_31_160637_create_programaciones_faces_tabl.php`    |
| [2019_12_14_000001_create_personal_access_tokens_table.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2019_12_14_000001_create_personal_access_tokens_table.php) | HTTP error 401 for prompt `database/migrations/2019_12_14_000001_create_personal_access_tokens_table.php` |
| [2019_08_19_000000_create_failed_jobs_table.php](https://github.com/vadelgado/ASUDE/blob/master/database/migrations/2019_08_19_000000_create_failed_jobs_table.php)                       | HTTP error 401 for prompt `database/migrations/2019_08_19_000000_create_failed_jobs_table.php`            |

</details>

<details closed><summary>database.seeders</summary>

| File                                                                                                             | Summary                                                             |
| ---                                                                                                              | ---                                                                 |
| [DatabaseSeeder.php](https://github.com/vadelgado/ASUDE/blob/master/database/seeders/DatabaseSeeder.php)         | HTTP error 401 for prompt `database/seeders/DatabaseSeeder.php`     |
| [CategoriasSeeder.php](https://github.com/vadelgado/ASUDE/blob/master/database/seeders/CategoriasSeeder.php)     | HTTP error 401 for prompt `database/seeders/CategoriasSeeder.php`   |
| [ResultadosSeeder.php](https://github.com/vadelgado/ASUDE/blob/master/database/seeders/ResultadosSeeder.php)     | HTTP error 401 for prompt `database/seeders/ResultadosSeeder.php`   |
| [UsuarioSeeder.php](https://github.com/vadelgado/ASUDE/blob/master/database/seeders/UsuarioSeeder.php)           | HTTP error 401 for prompt `database/seeders/UsuarioSeeder.php`      |
| [SistemaJuegoSeeder.php](https://github.com/vadelgado/ASUDE/blob/master/database/seeders/SistemaJuegoSeeder.php) | HTTP error 401 for prompt `database/seeders/SistemaJuegoSeeder.php` |

</details>

<details closed><summary>routes</summary>

| File                                                                               | Summary                                         |
| ---                                                                                | ---                                             |
| [auth.php](https://github.com/vadelgado/ASUDE/blob/master/routes/auth.php)         | HTTP error 401 for prompt `routes/auth.php`     |
| [api.php](https://github.com/vadelgado/ASUDE/blob/master/routes/api.php)           | HTTP error 401 for prompt `routes/api.php`      |
| [web.php](https://github.com/vadelgado/ASUDE/blob/master/routes/web.php)           | HTTP error 401 for prompt `routes/web.php`      |
| [console.php](https://github.com/vadelgado/ASUDE/blob/master/routes/console.php)   | HTTP error 401 for prompt `routes/console.php`  |
| [channels.php](https://github.com/vadelgado/ASUDE/blob/master/routes/channels.php) | HTTP error 401 for prompt `routes/channels.php` |

</details>

<details closed><summary>config</summary>

| File                                                                                       | Summary                                             |
| ---                                                                                        | ---                                                 |
| [auth.php](https://github.com/vadelgado/ASUDE/blob/master/config/auth.php)                 | HTTP error 401 for prompt `config/auth.php`         |
| [database.php](https://github.com/vadelgado/ASUDE/blob/master/config/database.php)         | HTTP error 401 for prompt `config/database.php`     |
| [view.php](https://github.com/vadelgado/ASUDE/blob/master/config/view.php)                 | HTTP error 401 for prompt `config/view.php`         |
| [mail.php](https://github.com/vadelgado/ASUDE/blob/master/config/mail.php)                 | HTTP error 401 for prompt `config/mail.php`         |
| [queue.php](https://github.com/vadelgado/ASUDE/blob/master/config/queue.php)               | HTTP error 401 for prompt `config/queue.php`        |
| [sanctum.php](https://github.com/vadelgado/ASUDE/blob/master/config/sanctum.php)           | HTTP error 401 for prompt `config/sanctum.php`      |
| [broadcasting.php](https://github.com/vadelgado/ASUDE/blob/master/config/broadcasting.php) | HTTP error 401 for prompt `config/broadcasting.php` |
| [sweetalert.php](https://github.com/vadelgado/ASUDE/blob/master/config/sweetalert.php)     | HTTP error 401 for prompt `config/sweetalert.php`   |
| [dompdf.php](https://github.com/vadelgado/ASUDE/blob/master/config/dompdf.php)             | HTTP error 401 for prompt `config/dompdf.php`       |
| [app.php](https://github.com/vadelgado/ASUDE/blob/master/config/app.php)                   | HTTP error 401 for prompt `config/app.php`          |
| [session.php](https://github.com/vadelgado/ASUDE/blob/master/config/session.php)           | HTTP error 401 for prompt `config/session.php`      |
| [services.php](https://github.com/vadelgado/ASUDE/blob/master/config/services.php)         | HTTP error 401 for prompt `config/services.php`     |
| [logging.php](https://github.com/vadelgado/ASUDE/blob/master/config/logging.php)           | HTTP error 401 for prompt `config/logging.php`      |
| [cache.php](https://github.com/vadelgado/ASUDE/blob/master/config/cache.php)               | HTTP error 401 for prompt `config/cache.php`        |
| [cors.php](https://github.com/vadelgado/ASUDE/blob/master/config/cors.php)                 | HTTP error 401 for prompt `config/cors.php`         |
| [filesystems.php](https://github.com/vadelgado/ASUDE/blob/master/config/filesystems.php)   | HTTP error 401 for prompt `config/filesystems.php`  |
| [hashing.php](https://github.com/vadelgado/ASUDE/blob/master/config/hashing.php)           | HTTP error 401 for prompt `config/hashing.php`      |

</details>

<details closed><summary>bootstrap</summary>

| File                                                                        | Summary                                       |
| ---                                                                         | ---                                           |
| [app.php](https://github.com/vadelgado/ASUDE/blob/master/bootstrap/app.php) | HTTP error 401 for prompt `bootstrap/app.php` |

</details>

<details closed><summary>lang.en</summary>

| File                                                                                    | Summary                                            |
| ---                                                                                     | ---                                                |
| [validation.php](https://github.com/vadelgado/ASUDE/blob/master/lang/en/validation.php) | HTTP error 401 for prompt `lang/en/validation.php` |
| [auth.php](https://github.com/vadelgado/ASUDE/blob/master/lang/en/auth.php)             | HTTP error 401 for prompt `lang/en/auth.php`       |
| [passwords.php](https://github.com/vadelgado/ASUDE/blob/master/lang/en/passwords.php)   | HTTP error 401 for prompt `lang/en/passwords.php`  |
| [pagination.php](https://github.com/vadelgado/ASUDE/blob/master/lang/en/pagination.php) | HTTP error 401 for prompt `lang/en/pagination.php` |

</details>

<details closed><summary>app.Exceptions</summary>

| File                                                                                     | Summary                                                |
| ---                                                                                      | ---                                                    |
| [Handler.php](https://github.com/vadelgado/ASUDE/blob/master/app/Exceptions/Handler.php) | HTTP error 401 for prompt `app/Exceptions/Handler.php` |

</details>

<details closed><summary>app.Providers</summary>

| File                                                                                                                      | Summary                                                                |
| ---                                                                                                                       | ---                                                                    |
| [EventServiceProvider.php](https://github.com/vadelgado/ASUDE/blob/master/app/Providers/EventServiceProvider.php)         | HTTP error 401 for prompt `app/Providers/EventServiceProvider.php`     |
| [BroadcastServiceProvider.php](https://github.com/vadelgado/ASUDE/blob/master/app/Providers/BroadcastServiceProvider.php) | HTTP error 401 for prompt `app/Providers/BroadcastServiceProvider.php` |
| [RouteServiceProvider.php](https://github.com/vadelgado/ASUDE/blob/master/app/Providers/RouteServiceProvider.php)         | HTTP error 401 for prompt `app/Providers/RouteServiceProvider.php`     |
| [AppServiceProvider.php](https://github.com/vadelgado/ASUDE/blob/master/app/Providers/AppServiceProvider.php)             | HTTP error 401 for prompt `app/Providers/AppServiceProvider.php`       |
| [AuthServiceProvider.php](https://github.com/vadelgado/ASUDE/blob/master/app/Providers/AuthServiceProvider.php)           | HTTP error 401 for prompt `app/Providers/AuthServiceProvider.php`      |

</details>

<details closed><summary>app.Console</summary>

| File                                                                                | Summary                                            |
| ---                                                                                 | ---                                                |
| [Kernel.php](https://github.com/vadelgado/ASUDE/blob/master/app/Console/Kernel.php) | HTTP error 401 for prompt `app/Console/Kernel.php` |

</details>

<details closed><summary>app.Http</summary>

| File                                                                             | Summary                                         |
| ---                                                                              | ---                                             |
| [Kernel.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Kernel.php) | HTTP error 401 for prompt `app/Http/Kernel.php` |

</details>

<details closed><summary>app.Http.Requests</summary>

| File                                                                                                                  | Summary                                                                |
| ---                                                                                                                   | ---                                                                    |
| [ProfileUpdateRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/ProfileUpdateRequest.php) | HTTP error 401 for prompt `app/Http/Requests/ProfileUpdateRequest.php` |

</details>

<details closed><summary>app.Http.Requests.Torneos</summary>

| File                                                                                                            | Summary                                                                 |
| ---                                                                                                             | ---                                                                     |
| [UpdateRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/Torneos/UpdateRequest.php) | HTTP error 401 for prompt `app/Http/Requests/Torneos/UpdateRequest.php` |
| [StoreRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/Torneos/StoreRequest.php)   | HTTP error 401 for prompt `app/Http/Requests/Torneos/StoreRequest.php`  |

</details>

<details closed><summary>app.Http.Requests.SistemaJuego</summary>

| File                                                                                                                 | Summary                                                                      |
| ---                                                                                                                  | ---                                                                          |
| [UpdateRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/SistemaJuego/UpdateRequest.php) | HTTP error 401 for prompt `app/Http/Requests/SistemaJuego/UpdateRequest.php` |
| [StoreRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/SistemaJuego/StoreRequest.php)   | HTTP error 401 for prompt `app/Http/Requests/SistemaJuego/StoreRequest.php`  |

</details>

<details closed><summary>app.Http.Requests.CuerpoTecnico</summary>

| File                                                                                                                  | Summary                                                                       |
| ---                                                                                                                   | ---                                                                           |
| [UpdateRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/CuerpoTecnico/UpdateRequest.php) | HTTP error 401 for prompt `app/Http/Requests/CuerpoTecnico/UpdateRequest.php` |
| [StoreRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/CuerpoTecnico/StoreRequest.php)   | HTTP error 401 for prompt `app/Http/Requests/CuerpoTecnico/StoreRequest.php`  |

</details>

<details closed><summary>app.Http.Requests.ProgramacionesFases</summary>

| File                                                                                                                        | Summary                                                                             |
| ---                                                                                                                         | ---                                                                                 |
| [UpdateRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/ProgramacionesFases/UpdateRequest.php) | HTTP error 401 for prompt `app/Http/Requests/ProgramacionesFases/UpdateRequest.php` |
| [StoreRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/ProgramacionesFases/StoreRequest.php)   | HTTP error 401 for prompt `app/Http/Requests/ProgramacionesFases/StoreRequest.php`  |

</details>

<details closed><summary>app.Http.Requests.Sorteo</summary>

| File                                                                                                           | Summary                                                                |
| ---                                                                                                            | ---                                                                    |
| [UpdateRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/Sorteo/UpdateRequest.php) | HTTP error 401 for prompt `app/Http/Requests/Sorteo/UpdateRequest.php` |
| [StoreRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/Sorteo/StoreRequest.php)   | HTTP error 401 for prompt `app/Http/Requests/Sorteo/StoreRequest.php`  |

</details>

<details closed><summary>app.Http.Requests.Equipos</summary>

| File                                                                                                            | Summary                                                                 |
| ---                                                                                                             | ---                                                                     |
| [UpdateRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/Equipos/UpdateRequest.php) | HTTP error 401 for prompt `app/Http/Requests/Equipos/UpdateRequest.php` |
| [StoreRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/Equipos/StoreRequest.php)   | HTTP error 401 for prompt `app/Http/Requests/Equipos/StoreRequest.php`  |

</details>

<details closed><summary>app.Http.Requests.ResultadosPartidos</summary>

| File                                                                                                                       | Summary                                                                            |
| ---                                                                                                                        | ---                                                                                |
| [UpdateRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/ResultadosPartidos/UpdateRequest.php) | HTTP error 401 for prompt `app/Http/Requests/ResultadosPartidos/UpdateRequest.php` |
| [StoreRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/ResultadosPartidos/StoreRequest.php)   | HTTP error 401 for prompt `app/Http/Requests/ResultadosPartidos/StoreRequest.php`  |

</details>

<details closed><summary>app.Http.Requests.LugarPartido</summary>

| File                                                                                                                 | Summary                                                                      |
| ---                                                                                                                  | ---                                                                          |
| [UpdateRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/LugarPartido/UpdateRequest.php) | HTTP error 401 for prompt `app/Http/Requests/LugarPartido/UpdateRequest.php` |
| [StoreRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/LugarPartido/StoreRequest.php)   | HTTP error 401 for prompt `app/Http/Requests/LugarPartido/StoreRequest.php`  |

</details>

<details closed><summary>app.Http.Requests.Jugadores</summary>

| File                                                                                                              | Summary                                                                   |
| ---                                                                                                               | ---                                                                       |
| [UpdateRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/Jugadores/UpdateRequest.php) | HTTP error 401 for prompt `app/Http/Requests/Jugadores/UpdateRequest.php` |
| [StoreRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/Jugadores/StoreRequest.php)   | HTTP error 401 for prompt `app/Http/Requests/Jugadores/StoreRequest.php`  |

</details>

<details closed><summary>app.Http.Requests.Inscripciones</summary>

| File                                                                                                                  | Summary                                                                       |
| ---                                                                                                                   | ---                                                                           |
| [UpdateRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/Inscripciones/UpdateRequest.php) | HTTP error 401 for prompt `app/Http/Requests/Inscripciones/UpdateRequest.php` |
| [StoreRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/Inscripciones/StoreRequest.php)   | HTTP error 401 for prompt `app/Http/Requests/Inscripciones/StoreRequest.php`  |

</details>

<details closed><summary>app.Http.Requests.Fases</summary>

| File                                                                                                          | Summary                                                               |
| ---                                                                                                           | ---                                                                   |
| [UpdateRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/Fases/UpdateRequest.php) | HTTP error 401 for prompt `app/Http/Requests/Fases/UpdateRequest.php` |
| [StoreRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/Fases/StoreRequest.php)   | HTTP error 401 for prompt `app/Http/Requests/Fases/StoreRequest.php`  |

</details>

<details closed><summary>app.Http.Requests.Auth</summary>

| File                                                                                                       | Summary                                                             |
| ---                                                                                                        | ---                                                                 |
| [LoginRequest.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Requests/Auth/LoginRequest.php) | HTTP error 401 for prompt `app/Http/Requests/Auth/LoginRequest.php` |

</details>

<details closed><summary>app.Http.Middleware</summary>

| File                                                                                                                                            | Summary                                                                              |
| ---                                                                                                                                             | ---                                                                                  |
| [CheckRole.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Middleware/CheckRole.php)                                               | HTTP error 401 for prompt `app/Http/Middleware/CheckRole.php`                        |
| [Authenticate.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Middleware/Authenticate.php)                                         | HTTP error 401 for prompt `app/Http/Middleware/Authenticate.php`                     |
| [TrimStrings.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Middleware/TrimStrings.php)                                           | HTTP error 401 for prompt `app/Http/Middleware/TrimStrings.php`                      |
| [HandleInertiaRequests.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Middleware/HandleInertiaRequests.php)                       | HTTP error 401 for prompt `app/Http/Middleware/HandleInertiaRequests.php`            |
| [Cors.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Middleware/Cors.php)                                                         | HTTP error 401 for prompt `app/Http/Middleware/Cors.php`                             |
| [TrustProxies.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Middleware/TrustProxies.php)                                         | HTTP error 401 for prompt `app/Http/Middleware/TrustProxies.php`                     |
| [ValidateSignature.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Middleware/ValidateSignature.php)                               | HTTP error 401 for prompt `app/Http/Middleware/ValidateSignature.php`                |
| [TrustHosts.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Middleware/TrustHosts.php)                                             | HTTP error 401 for prompt `app/Http/Middleware/TrustHosts.php`                       |
| [RedirectIfAuthenticated.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Middleware/RedirectIfAuthenticated.php)                   | HTTP error 401 for prompt `app/Http/Middleware/RedirectIfAuthenticated.php`          |
| [VerifyCsrfToken.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Middleware/VerifyCsrfToken.php)                                   | HTTP error 401 for prompt `app/Http/Middleware/VerifyCsrfToken.php`                  |
| [PreventRequestsDuringMaintenance.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Middleware/PreventRequestsDuringMaintenance.php) | HTTP error 401 for prompt `app/Http/Middleware/PreventRequestsDuringMaintenance.php` |
| [EncryptCookies.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Middleware/EncryptCookies.php)                                     | HTTP error 401 for prompt `app/Http/Middleware/EncryptCookies.php`                   |

</details>

<details closed><summary>app.Http.Controllers</summary>

| File                                                                                                                                       | Summary                                                                            |
| ---                                                                                                                                        | ---                                                                                |
| [FaltasCuerpoTecnicoController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/FaltasCuerpoTecnicoController.php) | HTTP error 401 for prompt `app/Http/Controllers/FaltasCuerpoTecnicoController.php` |
| [ResultadosPartidosController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/ResultadosPartidosController.php)   | HTTP error 401 for prompt `app/Http/Controllers/ResultadosPartidosController.php`  |
| [AlumnoController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/AlumnoController.php)                           | HTTP error 401 for prompt `app/Http/Controllers/AlumnoController.php`              |
| [JugadoresController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/JugadoresController.php)                     | HTTP error 401 for prompt `app/Http/Controllers/JugadoresController.php`           |
| [ResultadosController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/ResultadosController.php)                   | HTTP error 401 for prompt `app/Http/Controllers/ResultadosController.php`          |
| [TablasGruposController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/TablasGruposController.php)               | HTTP error 401 for prompt `app/Http/Controllers/TablasGruposController.php`        |
| [TorneoEnCursoController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/TorneoEnCursoController.php)             | HTTP error 401 for prompt `app/Http/Controllers/TorneoEnCursoController.php`       |
| [LugarPartidoController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/LugarPartidoController.php)               | HTTP error 401 for prompt `app/Http/Controllers/LugarPartidoController.php`        |
| [AmonestacionesTCController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/AmonestacionesTCController.php)       | HTTP error 401 for prompt `app/Http/Controllers/AmonestacionesTCController.php`    |
| [Controller.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/Controller.php)                                       | HTTP error 401 for prompt `app/Http/Controllers/Controller.php`                    |
| [ProfileController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/ProfileController.php)                         | HTTP error 401 for prompt `app/Http/Controllers/ProfileController.php`             |
| [PreplanillaController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/PreplanillaController.php)                 | HTTP error 401 for prompt `app/Http/Controllers/PreplanillaController.php`         |
| [Torneos.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/Torneos.php)                                             | HTTP error 401 for prompt `app/Http/Controllers/Torneos.php`                       |
| [ResultadoSorteoController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/ResultadoSorteoController.php)         | HTTP error 401 for prompt `app/Http/Controllers/ResultadoSorteoController.php`     |
| [VerResultadosController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/VerResultadosController.php)             | HTTP error 401 for prompt `app/Http/Controllers/VerResultadosController.php`       |
| [TablasJuego.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/TablasJuego.php)                                     | HTTP error 401 for prompt `app/Http/Controllers/TablasJuego.php`                   |
| [CuerpoTecnicoController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/CuerpoTecnicoController.php)             | HTTP error 401 for prompt `app/Http/Controllers/CuerpoTecnicoController.php`       |
| [TournamentSchedule.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/TournamentSchedule.php)                       | HTTP error 401 for prompt `app/Http/Controllers/TournamentSchedule.php`            |
| [HomeController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/HomeController.php)                               | HTTP error 401 for prompt `app/Http/Controllers/HomeController.php`                |
| [InscripcionesController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/InscripcionesController.php)             | HTTP error 401 for prompt `app/Http/Controllers/InscripcionesController.php`       |
| [GalleryController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/GalleryController.php)                         | HTTP error 401 for prompt `app/Http/Controllers/GalleryController.php`             |
| [ProgramacionesFacesController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/ProgramacionesFacesController.php) | HTTP error 401 for prompt `app/Http/Controllers/ProgramacionesFacesController.php` |
| [FasesController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/FasesController.php)                             | HTTP error 401 for prompt `app/Http/Controllers/FasesController.php`               |
| [SistemaJuegoController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/SistemaJuegoController.php)               | HTTP error 401 for prompt `app/Http/Controllers/SistemaJuegoController.php`        |
| [ComprobantesController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/ComprobantesController.php)               | HTTP error 401 for prompt `app/Http/Controllers/ComprobantesController.php`        |
| [EquiposController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/EquiposController.php)                         | HTTP error 401 for prompt `app/Http/Controllers/EquiposController.php`             |

</details>

<details closed><summary>app.Http.Controllers.Auth</summary>

| File                                                                                                                                                                | Summary                                                                                           |
| ---                                                                                                                                                                 | ---                                                                                               |
| [NewPasswordController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/Auth/NewPasswordController.php)                                     | HTTP error 401 for prompt `app/Http/Controllers/Auth/NewPasswordController.php`                   |
| [RegisteredUserAdminController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/Auth/RegisteredUserAdminController.php)                     | HTTP error 401 for prompt `app/Http/Controllers/Auth/RegisteredUserAdminController.php`           |
| [PasswordResetLinkController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/Auth/PasswordResetLinkController.php)                         | HTTP error 401 for prompt `app/Http/Controllers/Auth/PasswordResetLinkController.php`             |
| [PasswordController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/Auth/PasswordController.php)                                           | HTTP error 401 for prompt `app/Http/Controllers/Auth/PasswordController.php`                      |
| [ConfirmablePasswordController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/Auth/ConfirmablePasswordController.php)                     | HTTP error 401 for prompt `app/Http/Controllers/Auth/ConfirmablePasswordController.php`           |
| [EmailVerificationNotificationController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/Auth/EmailVerificationNotificationController.php) | HTTP error 401 for prompt `app/Http/Controllers/Auth/EmailVerificationNotificationController.php` |
| [AuthenticatedSessionController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/Auth/AuthenticatedSessionController.php)                   | HTTP error 401 for prompt `app/Http/Controllers/Auth/AuthenticatedSessionController.php`          |
| [RegisteredUserController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/Auth/RegisteredUserController.php)                               | HTTP error 401 for prompt `app/Http/Controllers/Auth/RegisteredUserController.php`                |
| [EmailVerificationPromptController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/Auth/EmailVerificationPromptController.php)             | HTTP error 401 for prompt `app/Http/Controllers/Auth/EmailVerificationPromptController.php`       |
| [VerifyEmailController.php](https://github.com/vadelgado/ASUDE/blob/master/app/Http/Controllers/Auth/VerifyEmailController.php)                                     | HTTP error 401 for prompt `app/Http/Controllers/Auth/VerifyEmailController.php`                   |

</details>

<details closed><summary>app.Rules</summary>

| File                                                                                                      | Summary                                                      |
| ---                                                                                                       | ---                                                          |
| [UniqueTorneoEquipo.php](https://github.com/vadelgado/ASUDE/blob/master/app/Rules/UniqueTorneoEquipo.php) | HTTP error 401 for prompt `app/Rules/UniqueTorneoEquipo.php` |

</details>

<details closed><summary>app.Models</summary>

| File                                                                                                         | Summary                                                        |
| ---                                                                                                          | ---                                                            |
| [AmonestacionesTC.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/AmonestacionesTC.php)       | HTTP error 401 for prompt `app/Models/AmonestacionesTC.php`    |
| [torneo.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/torneo.php)                           | HTTP error 401 for prompt `app/Models/torneo.php`              |
| [TablasGrupos.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/TablasGrupos.php)               | HTTP error 401 for prompt `app/Models/TablasGrupos.php`        |
| [Categorias.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/Categorias.php)                   | HTTP error 401 for prompt `app/Models/Categorias.php`          |
| [Alumno.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/Alumno.php)                           | HTTP error 401 for prompt `app/Models/Alumno.php`              |
| [Resultados.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/Resultados.php)                   | HTTP error 401 for prompt `app/Models/Resultados.php`          |
| [Comprobantes.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/Comprobantes.php)               | HTTP error 401 for prompt `app/Models/Comprobantes.php`        |
| [ResultadosPartidos.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/ResultadosPartidos.php)   | HTTP error 401 for prompt `app/Models/ResultadosPartidos.php`  |
| [Fases.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/Fases.php)                             | HTTP error 401 for prompt `app/Models/Fases.php`               |
| [ResultadoSorteo.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/ResultadoSorteo.php)         | HTTP error 401 for prompt `app/Models/ResultadoSorteo.php`     |
| [ProgramacionesFaces.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/ProgramacionesFaces.php) | HTTP error 401 for prompt `app/Models/ProgramacionesFaces.php` |
| [SistemaJuego.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/SistemaJuego.php)               | HTTP error 401 for prompt `app/Models/SistemaJuego.php`        |
| [TorneoEnCurso.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/TorneoEnCurso.php)             | HTTP error 401 for prompt `app/Models/TorneoEnCurso.php`       |
| [FaltasCuerpoTecnico.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/FaltasCuerpoTecnico.php) | HTTP error 401 for prompt `app/Models/FaltasCuerpoTecnico.php` |
| [Equipos.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/Equipos.php)                         | HTTP error 401 for prompt `app/Models/Equipos.php`             |
| [cuerpoTecnico.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/cuerpoTecnico.php)             | HTTP error 401 for prompt `app/Models/cuerpoTecnico.php`       |
| [User.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/User.php)                               | HTTP error 401 for prompt `app/Models/User.php`                |
| [Gallery.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/Gallery.php)                         | HTTP error 401 for prompt `app/Models/Gallery.php`             |
| [lugarPartido.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/lugarPartido.php)               | HTTP error 401 for prompt `app/Models/lugarPartido.php`        |
| [VerResultados.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/VerResultados.php)             | HTTP error 401 for prompt `app/Models/VerResultados.php`       |
| [Inscripciones.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/Inscripciones.php)             | HTTP error 401 for prompt `app/Models/Inscripciones.php`       |
| [Jugadores.php](https://github.com/vadelgado/ASUDE/blob/master/app/Models/Jugadores.php)                     | HTTP error 401 for prompt `app/Models/Jugadores.php`           |

</details>

---

## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **PHP**: `version x.y.z`

### ⚙️ Installation

1. Clone the ASUDE repository:

```sh
git clone https://github.com/vadelgado/ASUDE
```

2. Change to the project directory:

```sh
cd ASUDE
```

3. Install the dependencies:

```sh
composer install
```

### 🤖 Running ASUDE

Use the following command to run ASUDE:

```sh
php main.php
```

### 🧪 Tests

To execute tests, run:

```sh
vendor/bin/phpunit
```

---

## 🛠 Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/vadelgado/ASUDE/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/vadelgado/ASUDE/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/vadelgado/ASUDE/issues)**: Submit bugs found or log feature requests for Asude.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/vadelgado/ASUDE
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
