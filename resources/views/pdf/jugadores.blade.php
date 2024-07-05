<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Planilla de Inscripción</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        h1 {
            text-align: center;
            font-size: 14pt;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th, td {
            border: 1px solid black;
            text-align: center;
            padding: 4px;
            font-size: 10pt;
        }

        th {
            background-color: #f2f2f2;
        }

        p {
            font-size: 10pt;
        }

        .section-title {
            background-color: #d9d9d9;
            font-weight: bold;
            text-align: left;
        }

        .signature-section td {
            height: 60px;
        }

        .italic {
            font-style: italic;
        }

        .bold {
            font-weight: bold;
        }
    </style>
</head>

<body>
    <h1>Planilla de Inscripción</h1>
    <p class="italic" style="text-align: center;">
        
        Los abajo firmantes aceptamos y reconocemos que, de acuerdo con la Ley 1581 de 2012 de Protección de Datos Personales de Colombia, autorizamos a Alianza Sureña Grupo Empresarial, para el uso de los datos personales de los jugadores, exclusivamente para la gestión y organización de torneos de fútbol.    </p>
    <p class="italic" style="text-align: center;">
        La información recopilada incluye nombre completo, foto, tipo de identificación, número de identificación, número de serie, fecha de nacimiento, lugar de nacimiento, institución educativa, grado, ciudad de la institución educativa, teléfono de la institución educativa, equipo al que pertenece, estado de la EPS, nombre de la EPS y lugar de atención de la EPS. Nos comprometemos a proteger estos datos y a no divulgarlos a terceros sin el consentimiento previo y expreso de los representantes legales.
    </p>
    <p class="italic" style="text-align: center;">
        Los datos serán tratados de manera confidencial y se utilizarán únicamente con las siguientes finalidades: verificar la elegibilidad de los jugadores, organizar los eventos y torneos de fútbol, y mantener una comunicación efectiva con los representantes legales sobre las actividades relacionadas con el torneo. En cualquier momento, los titulares de los datos pueden ejercer sus derechos de acceso, rectificación, actualización, contactando a CIMA_FUTURASESTRELLAS@hotmail.com o al teléfono +57 318 3773718 o atraves de la plataforma donde se genero el presente documento.
    </p>

    <table>
        <thead>
            <tr>
                <th colspan="13" style="font-size: 12pt;">NOMBRE EQUIPO: {{ $equipo->nombreEquipo }}</th>
            </tr>
            <tr>
                <th>N°</th>
                <th>Nombres y Apellidos</th>
                <th>Firma Representante Legal</th>
                <th>Tarjeta de Identidad</th>
                <th>Serial Folio</th>
                <th colspan="3">Fecha de Nacimiento</th>
                <th>Lugar de Nacimiento</th>
                <th>Establecimiento Educativo</th>
                <th>Grado</th>
                <th>Ciudad</th>
                <th>Teléfono Establecimiento</th>
            </tr>
            <tr>
                <th style="background-color: black;"></th>
                <th style="background-color: black;"></th>
                <th style="background-color: black;"></th>
                <th style="background-color: black;"></th>
                <th style="background-color: black;"></th>
                <th>Día</th>
                <th>Mes</th>
                <th>Año</th>
                <th style="background-color: black;"></th>
                <th style="background-color: black;"></th>
                <th style="background-color: black;"></th>
                <th style="background-color: black;"></th>
                <th style="background-color: black;"></th>
            </tr>
        </thead>
        <tbody>
            @foreach ($jugadores as $jugador)
            <tr>
                <td>{{ $loop->iteration }}</td>
                <td>{{ ucfirst(strtolower($jugador->nombreCompleto)) }}</td>
                <td></td>
                <td>{{ $jugador->numeroIdentificacion }}</td>
                <td>{{ $jugador->numeroSerie }}</td>
                <td>{{ date('d', strtotime($jugador->fechaNacimiento)) }}</td>
                <td>{{ date('m', strtotime($jugador->fechaNacimiento)) }}</td>
                <td>{{ date('Y', strtotime($jugador->fechaNacimiento)) }}</td>
                <td>{{ $jugador->lugarNacimiento }}</td>
                <td>{{ $jugador->institucionEducativa }}</td>
                <td>{{ $jugador->grado }}</td>
                <td>{{ $jugador->ciudadInstitucionEducativa }}</td>
                <td>{{ $jugador->telefonoInstitucionEducativa }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</body>

</html>
