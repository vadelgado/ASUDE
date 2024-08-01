import { Link, Head } from "@inertiajs/react";
import Footer from "@/Components/DashBoard/Footer";
import Header from "@/Components/DashBoard/Header";
import EquiposParticipantes from "@/Components/EquposParticipantes";
import React, { useEffect, useState } from "react";

function generarSecuenciaLetras(numero) {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Todas las letras del alfabeto
    let resultado = [];

    for (let i = 1; i <= numero; i++) {
        const indice = (i - 1) % 26;
        const letra = letras[indice];
        resultado.push(letra);
    }

    return resultado;
}

export default function ListarTorneos({
    auth,
    tablasGrupos, 
    torneo,
    resultadosGoles,
    equiposParticipantes
}) {
    const [secuenciaLetras, setSecuenciaLetras] = useState([]);

    useEffect(() => {
        if (torneo && torneo.length > 0 && torneo[0].cantidadGrupos) {
            const letras = generarSecuenciaLetras(torneo[0].cantidadGrupos);
            setSecuenciaLetras(letras);
        }
    }, [torneo]);

    const equiposPorGrupo = Math.floor(
        torneo[0].cantidadEquiposParticipantes / torneo[0].cantidadGrupos
    );

    const equiposEnGrupos = () => {
        let grupos = Array.from({ length: torneo[0].cantidadGrupos }, () => []);
        tablasGrupos.forEach((equipo, index) => {
            const grupoIndex = Math.floor(index / equiposPorGrupo);
            const posicionEnGrupo = index % equiposPorGrupo;
            if (!grupos[grupoIndex]) {
                grupos[grupoIndex] = [];
            }
            grupos[grupoIndex][posicionEnGrupo] = equipo;
        });
        return grupos;
    };

    const grupos = equiposEnGrupos();

    return (
        <>
            <Header auth={auth}></Header>
            <Head title={`Torneo ⚽ Tabla de Grupos`} />
            <div className="flex flex-col min-h-screen">
                <main className="container flex-grow px-4 py-8 mx-auto mt-32">
                    <div className="mt-40 text-center">
                        <div className="flex items-center justify-center py-8">
                            <img
                                src={`/storage/${torneo[0].imgBannerSuperior}`}
                                alt={torneo[0].nombreTorneo}
                                className="h-auto "
                            />
                        </div>
                        <h2 className="text-sm text-primary sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl">
                            {torneo[0].nombreTorneo} <br />
                            {new Date(torneo[0].fechaInicio).toLocaleDateString(
                                "es-CO",
                                {
                                    month: "long",
                                    day: "numeric",
                                }
                            ) +
                                " al " +
                                new Date(torneo[0].fechaFin).toLocaleDateString(
                                    "es-CO",
                                    {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    }
                                )}{" "}
                            <br />
                            {torneo[0].caracteristicas} <br />
                            Apoyo:{" "}
                            <span className="font-semibold">
                                {torneo[0].ApoyoPrincipal}
                            </span>
                        </h2>
                    </div>
                    <h2 className="py-6 text-xl text-center text-primary sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                        <span className="px-6 font-medium text-white uppercase rounded-lg bg-gradient-to-r from-green-400 to-green-500 animate-fade-in animate-delay-300 mb-9">
                            Tabla de Grupos
                        </span>
                    </h2>
                    <div className="text-xs text-primary sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl">
                        <div className="overflow-x-auto">
                            <div className="min-w-full">
                                <table className="w-full mt-10 text-sm text-black sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-xl">
                                    <thead>
                                        <tr className="text-center bg-table-green-cabecera">
                                            {secuenciaLetras.map(
                                                (letra, index) => (
                                                    <th
                                                        key={index}
                                                        className="px-4 py-2 font-bold"
                                                    >
                                                        {letra}
                                                    </th>
                                                )
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array.from({
                                            length: equiposPorGrupo,
                                        }).map((_, filaIndex) => (
                                            <tr
                                                key={filaIndex}
                                                className="bg-table-green"
                                            >
                                                {grupos.map(
                                                    (grupo, colIndex) => (
                                                        <td
                                                            key={colIndex}
                                                            className="px-4 py-2 text-left"
                                                        >
                                                            {grupo[
                                                                filaIndex
                                                            ] && (
                                                                <div className="flex items-center">
                                                                    <span className="mr-2">
                                                                        {
                                                                            grupo[
                                                                                filaIndex
                                                                            ]
                                                                                .puesto
                                                                        }
                                                                    </span>
                                                                    <img
                                                                        src={`/storage/${grupo[filaIndex].escudoEquipo}`}
                                                                        onError={(
                                                                            e
                                                                        ) => {
                                                                            e.target.onerror =
                                                                                null;
                                                                            e.target.src =
                                                                                "/escudo.svg";
                                                                        }}
                                                                        alt={
                                                                            grupo[
                                                                                filaIndex
                                                                            ]
                                                                                .nombreEquipo
                                                                        }
                                                                        className="w-6 h-6 mr-2 rounded-full sm:w-8 sm:h-8"
                                                                    />
                                                                    <span className="whitespace-nowrap">
                                                                        <Link
                                                                            href={`/Equipo/${grupo[filaIndex].id}`}
                                                                            className="text-blue-500 underline transition-colors duration-300 hover:text-blue-700 hover:underline hover:font-bold"
                                                                        >
                                                                            {
                                                                                grupo[
                                                                                    filaIndex
                                                                                ]
                                                                                    .nombreEquipo
                                                                            }
                                                                        </Link>
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </td>
                                                    )
                                                )}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <EquiposParticipantes equiposParticipantes={equiposParticipantes} />
                    
                    <h2 className="py-6 text-xl text-center text-primary sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                        <span className="px-6 font-medium text-white uppercase rounded-lg bg-gradient-to-r from-green-400 to-green-500 animate-fade-in animate-delay-300 mb-9">
                            Goleadores ⚽ del Torneo
                        </span>
                    </h2>
                    <div className="flex flex-wrap justify-center p-4 bg-gray-900">
                        {resultadosGoles.length > 0 ? (
                            resultadosGoles.map((resultado, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col justify-between max-w-xs p-6 m-4 text-center text-white transition duration-500 transform bg-gray-800 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-700"
                                    style={{
                                        minWidth: "280px",
                                        minHeight: "400px",
                                    }}
                                >
                                    <div className="flex flex-col items-center">
                                        <img
                                            src={`/storage/${resultado.foto}`}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src =
                                                    "/soccer-player.svg";
                                            }}
                                            alt={resultado.nombreCompleto}
                                            className="w-24 h-32 mb-4 border-2 border-yellow-500 rounded-lg"
                                        />
                                        <h3 className="mb-2 text-2xl font-bold text-yellow-500 truncate">
                                            {resultado.nombreCompleto}
                                        </h3>
                                        <p className="text-lg truncate">
                                            {resultado.name}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center mt-4">
                                        <div className="flex items-center justify-center mt-2">
                                            <img
                                                src={`/storage/${resultado.escudoEquipo}`}
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src =
                                                        "/escudo.svg";
                                                }}
                                                alt={resultado.nombreEquipo}
                                                className="w-8 h-8 mr-2"
                                            />
                                            <span className="truncate">
                                                {resultado.nombreEquipo}
                                            </span>
                                        </div>
                                        {resultado.goles !== undefined && (
                                            <p className="mt-2 text-lg text-yellow-500">
                                                Goles: {resultado.goles}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-white">No hay resultados</p>
                        )}
                    </div>

                    <div className="flex items-center justify-center py-8">
                        <img
                            src={`/storage/${torneo[0].imgBannerInferiorIz}`}
                            alt={torneo[0].nombreTorneo}
                            className="w-1/6 h-auto mr-4 md:w-1/12"
                        />
                        <div className="mx-4 text-sm text-center text-primary sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl">
                            {torneo[0].Aval}
                        </div>
                        <img
                            src={`/storage/${torneo[0].imgBannerInferiorDe}`}
                            alt={torneo[0].nombreTorneo}
                            className="w-1/6 h-auto ml-4 md:w-1/12"
                        />
                    </div>
                </main>
            </div>
            <Footer />
            <style>{`
        @media (prefers-color-scheme: dark) {
          .dark\\:bg-dots-lighter {
            background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
          }
        }
        html {
          font-family: 'Onest Variable', system-ui, sans-serif;
          background: #D5D5D5;
        }
        h1 {
          font-size: 3.5em;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1em;
          color: green;
          font-family: 'Onest Variable', system-ui, sans-serif;
        }
        h3 {
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1em;
          color: green;
          font-family: 'Onest Variable', system-ui, sans-serif;
        }
        p {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.4;
          margin-bottom: 1em;
          font-weight: 100;
          font-size: 1em;
          letter-spacing: 0.5px;
          font-family: 'Onest Variable', system-ui, sans-serif;
        }
        p strong {
          color: green;
          font-weight: 700;
          font-family: 'Onest Variable', system-ui, sans-serif;
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5em;
          }
        }
        @media (max-width: 576px) {
          h1 {
            font-size: 2em;
          }
        }
      `}</style>
        </>
    );
}
