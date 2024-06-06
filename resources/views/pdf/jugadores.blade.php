<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PLANILLA DE INSCRIPCIÓN</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        h1 {
            text-align: center;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th,
        td {
            border: 1px solid black;
            text-align: center;
            padding: 4px;
            font-size: 8pt;
        }

        th {
            background-color: #f2f2f2;
        }

        p {
            font-size: 8pt;
        }

        .section-title {
            background-color: #d9d9d9;
            font-weight: bold;
            text-align: left;
        }

        .signature-section td {
            height: 60px;
        }
    </style>
</head>

<body>
    <h1 style="font-size: 10pt;">PLANILLA DE INSCRIPCIÓN</h1>
    <p style="font-style: italic; text-align: center;"><strong style="font-style: normal">Corporación Deportiva Los Paisitas "DEPORTE CON SENTIDO
            SOCIAL"</strong>
        <br />
        Los abajo firmantes aceptamos y reconocemos el reglamento que
        nos
        ha sido suministrado por la Corporación Deportiva Los Paisitas. El cual hemos leído detalladamente y que regirá
        para el presente Festival. <br />
        Nos comprometemos a cumplir con las normas y reglamentos establecidos por la Corporación Deportiva Los Paisitas,
        en caso de no cumplir con las normas y reglamentos establecidos, aceptamos las sanciones que se nos impongan.
    </p>

    <table>
        <thead>
            <tr>
                <th style="font-size: 10pt;" colspan="11">NOMBRE EQUIPO: ALIANZA IPIALES</th>
            </tr>
            <tr>
                <th>N°</th>
                <th>NOMBRES Y APELLIDOS</th>
                <th>FIRMA AUTOGRAFA</th>
                <th>TARJETA DE<br />IDENTIDAD</th>
                <th>SERIAL<br />FOLIO</th>
                <th>FECHA DE<br />NACIMIENTO</th>
                <th>LUGAR DE<br />NACIMIENTO</th>
                <th>ESTABLECIMIENTO<br />EDUCATIVO DONDE<br />CURSA ESTUDIOS</th>
                <th>GRADO</th>
                <th>CIUDAD</th>
                <th>TELÉFONO<br />ESTABLECIMIENTO<br />EDUCATIVO</th>
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
                <td>{{ $jugador->fechaNacimiento }}</td>
                <td>{{ $jugador->lugarNacimiento }}</td>
                <td>{{ $jugador->institucionEducativa }}</td>
                <td>{{ $jugador->grado }}</td>
                <td>{{ $jugador->ciudadInstitucionEducativa }}</td>
                <td>{{ $jugador->telefonoInstitucionEducativa }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <br />
    <table>
        <thead>
            <tr>
                <th class="section-title" colspan="6">FIRMA Y SELLO AUTORIDAD COMPETENTE</th>
            </tr>
            <tr>
                <th>N°</th>
                <th>NOMBRES Y APELLIDOS</th>
                <th>FIRMA AUTOGRAFA</th>
                <th>CÉDULA</th>
                <th>TEL. FIJO</th>
                <th>TEL. CELULAR</th>
                <th>CORREO ELECTRÓNICO</th>
            </tr>
        </thead>
        <tbody class="signature-section">

        </tbody>
    </table>
    <br />
    <table>
        <tbody>
            <tr>
                <td>Firma y Sello Alcalde Municipal</td>
                <td>Firma y Sello Gerente de Deportes</td>
                <td>Firma y Sello Presidente JAC</td>
            </tr>
        </tbody>
    </table>
</body>

</html>

<table>
    <thead>
        <tr>
            <th style="font-size: 10pt;" colspan="11">NOMBRE EQUIPO: ALIANZA IPIALES</th>
        </tr>
        <tr>
            <th>N°</th>
            <th>NOMBRES Y APELLIDOS</th>
            <th>FIRMA AUTOGRAFA</th>
            <th>TARJETA DE<br />IDENTIDAD</th>
            <th>SERIAL<br />FOLIO</th>
            <th>FECHA DE<br />NACIMIENTO</th>
            <th>LUGAR DE<br />NACIMIENTO</th>
            <th>ESTABLECIMIENTO<br />EDUCATIVO DONDE<br />CURSA ESTUDIOS</th>
            <th>GRADO</th>
            <th>CIUDAD</th>
            <th>TELÉFONO<br />ESTABLECIMIENTO<br />EDUCATIVO</th>
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
            <td>{{ $jugador->fechaNacimiento }}</td>
            <td>{{ $jugador->lugarNacimiento }}</td>
            <td>{{ $jugador->institucionEducativa }}</td>
            <td>{{ $jugador->grado }}</td>
            <td>{{ $jugador->ciudadInstitucionEducativa }}</td>
            <td>{{ $jugador->telefonoInstitucionEducativa }}</td>
        </tr>
        @endforeach
    </tbody>
</table>
<br />
<table>
    <thead>
        <tr>
            <th class="section-title" colspan="6">FIRMA Y SELLO AUTORIDAD COMPETENTE</th>
        </tr>
        <tr>
            <th>N°</th>
            <th>NOMBRES Y APELLIDOS</th>
            <th>FIRMA AUTOGRAFA</th>
            <th>CÉDULA</th>
            <th>TEL. FIJO</th>
            <th>TEL. CELULAR</th>
            <th>CORREO ELECTRÓNICO</th>
        </tr>
    </thead>
    <tbody class="signature-section">

    </tbody>
</table>
<br />
<table>
    <tbody>
        <tr>
            <td>Firma y Sello Alcalde Municipal</td>
            <td>Firma y Sello Gerente de Deportes</td>
            <td>Firma y Sello Presidente JAC</td>
        </tr>
    </tbody>
</table>
</body>

</html>