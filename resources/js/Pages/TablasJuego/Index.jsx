import { Link, Head } from "@inertiajs/react";
import Footer from "@/Components/DashBoard/Footer";
import Header from "@/Components/DashBoard/Header";
import Gallery from "@/Components/Gallery";
import React from "react";

export default function Index({ auth, torneo, programaciones_faces, gallery }) {
    
    // Agrupar partidos por nombreFase
    const groupedByFase = programaciones_faces.reduce((acc, programacion) => {
        const { nombreFase } = programacion;
        if (!acc[nombreFase]) {
            acc[nombreFase] = [];
        }
        acc[nombreFase].push(programacion);
        return acc;
    }, {});

    // Ordenar partidos por FechaPartido y HoraPartido dentro de cada fase
    Object.keys(groupedByFase).forEach((fase) => {
        groupedByFase[fase].sort((a, b) => {
            if (a.FechaPartido === b.FechaPartido) {
                return a.HoraPartido.localeCompare(b.HoraPartido);
            }
            return a.FechaPartido.localeCompare(b.FechaPartido);
        });
    });

    // Agrupar partidos por fecha dentro de cada fase
    const groupedByFaseAndDate = Object.keys(groupedByFase).reduce(
        (acc, fase) => {
            acc[fase] = groupedByFase[fase].reduce((acc, programacion) => {
                const { FechaPartido } = programacion;
                if (!acc[FechaPartido]) {
                    acc[FechaPartido] = [];
                }
                acc[FechaPartido].push(programacion);
                return acc;
            }, {});
            return acc;
        },
        {}
    );

    // Obtener las fases en orden de la fecha más temprana
    const orderedFases = Object.keys(groupedByFaseAndDate).sort((a, b) => {
        const firstMatchA =
            groupedByFaseAndDate[a][Object.keys(groupedByFaseAndDate[a])[0]][0];
        const firstMatchB =
            groupedByFaseAndDate[b][Object.keys(groupedByFaseAndDate[b])[0]][0];
        if (firstMatchA.FechaPartido === firstMatchB.FechaPartido) {
            return firstMatchA.HoraPartido.localeCompare(
                firstMatchB.HoraPartido
            );
        }
        return firstMatchA.FechaPartido.localeCompare(firstMatchB.FechaPartido);
    });

    return (
        <>
            <Header auth={auth} />
            <Head title={`Partidos`} />
            <main className="px-2 mt-40">
                <div className="mt-40 text-center">
                    <div className="flex items-center justify-center py-8">
                        <img
                            src={`/storage/${torneo.imgBannerSuperior}`}
                            alt={torneo.nombreTorneo}
                            className="h-auto md:w-1/4"
                        />
                    </div>
                    <h2 className="text-sm text-primary sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl">
                        {torneo.nombreTorneo} <br />
                        {new Date(torneo.fechaInicio).toLocaleDateString(
                            "es-CO",
                            {
                                month: "long",
                                day: "numeric",
                            }
                        ) +
                            " al " +
                            new Date(torneo.fechaFin).toLocaleDateString(
                                "es-CO",
                                {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                }
                            )}{" "}
                        <br />
                        {torneo.caracteristicas} <br />
                        Apoyo:{" "}
                        <span className="font-semibold">
                            {torneo.ApoyoPrincipal}
                        </span>
                    </h2>
                </div>

                <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                <Gallery gallery={gallery} />
                    {orderedFases.map((fase, index) => (
                        <div key={index} className="mb-8">
                            <div className="flex justify-center mt-8">
                                <span className="items-center px-6 text-xl font-medium text-center text-white uppercase bg-black animate-fade-in animate-delay-300 mb-9">
                                    Fase:{" "}
                                    <span className="font-bold">{fase}</span>
                                </span>
                            </div>

                            

                            {Object.keys(groupedByFaseAndDate[fase]).map(
                                (fecha, subIndex) => (
                                    <div key={subIndex} className="mb-4">
                                        <h4 className="mb-2 font-semibold text-center">
                                            Fecha: {fecha || "Por definir"}
                                        </h4>
                                        <div className="overflow-x-auto">
                                            <div className="min-w-full overflow-hidden">
                                                <table className="w-full text-black table-auto">
                                                    <thead>
                                                        <tr className="text-sm font-semibold tracking-wide text-left text-white uppercase border-b border-gray-600 bg-gradient-to-r from-black to-gray-800 sm:text-base md:text-lg">
                                                            <th
                                                                className="px-4 py-2 font-bold text-center"
                                                                scope="col"
                                                            >
                                                                Hora
                                                            </th>
                                                            <th
                                                                className="px-4 py-2 font-bold text-center"
                                                                scope="col"
                                                            >
                                                                Equipo Local
                                                            </th>
                                                            <th
                                                                className="px-4 py-2 font-bold text-center"
                                                                scope="col"
                                                            >
                                                                Marcador
                                                            </th>
                                                            <th
                                                                className="px-4 py-2 font-bold text-center"
                                                                scope="col"
                                                            >
                                                                Equipo Visitante
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {groupedByFaseAndDate[
                                                            fase
                                                        ][fecha].map(
                                                            (
                                                                programacion,
                                                                programacionIndex
                                                            ) => (
                                                                <tr
                                                                    key={
                                                                        programacionIndex
                                                                    }
                                                                    className="bg-table-green"
                                                                >
                                                                    <td className="px-4 py-2 text-center">
                                                                        {new Date(
                                                                            `1970-01-01T${programacion.HoraPartido}`
                                                                        ).toLocaleString(
                                                                            "en-US",
                                                                            {
                                                                                hour: "numeric",
                                                                                minute: "numeric",
                                                                                hour12: true,
                                                                            }
                                                                        )}
                                                                    </td>
                                                                    <td className="flex items-center px-4 py-2 text-center">
                                                                        <span className="text-xs font-bold sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-primary">
                                                                            {
                                                                                programacion.puestoLocal
                                                                            }
                                                                        </span>
                                                                        {programacion.nombreEquipoLocal ? (
                                                                            <>
                                                                                <img
                                                                                    src={`/storage/${programacion.escudoEquipoLocal}`}
                                                                                    onError={(
                                                                                        e
                                                                                    ) => {
                                                                                        e.target.onerror =
                                                                                            null;
                                                                                        e.target.src =
                                                                                            "/escudo.svg";
                                                                                    }}
                                                                                    alt={
                                                                                        programacion.nombreEquipoLocal
                                                                                    }
                                                                                    className="w-5 h-5 mr-2"
                                                                                />
                                                                                {
                                                                                    programacion.nombreEquipoLocal
                                                                                }
                                                                            </>
                                                                        ) : (
                                                                            <span className="ml-2">
                                                                                Posición:{" "}
                                                                                {
                                                                                    programacion.posicion_local
                                                                                }
                                                                            </span>
                                                                        )}
                                                                    </td>
                                                                    <td className="px-4 py-2 font-bold text-center">
                                                                        {
                                                                            programacion.GolesLocal
                                                                        }
                                                                        -
                                                                        {
                                                                            programacion.GolesVisitante
                                                                        }
                                                                    </td>
                                                                    <td className="flex items-center px-4 py-2 text-center">
                                                                        <span className="text-xs font-bold sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-primary">
                                                                            {
                                                                                programacion.puestoVisitante
                                                                            }
                                                                        </span>
                                                                        {programacion.nombreEquipoVisitante ? (
                                                                            <>
                                                                                <img
                                                                                    src={`/storage/${programacion.escudoEquipoVisitante}`}
                                                                                    onError={(
                                                                                        e
                                                                                    ) => {
                                                                                        e.target.onerror =
                                                                                            null;
                                                                                        e.target.src =
                                                                                            "/escudo.svg";
                                                                                    }}
                                                                                    alt={
                                                                                        programacion.nombreEquipoVisitante
                                                                                    }
                                                                                    className="w-5 h-5 mr-2"
                                                                                />
                                                                                {
                                                                                    programacion.nombreEquipoVisitante
                                                                                }
                                                                            </>
                                                                        ) : (
                                                                            <span className="ml-2">
                                                                                Posición:{" "}
                                                                                {
                                                                                    programacion.posicion_visitante
                                                                                }
                                                                            </span>
                                                                        )}
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center py-8">
                    <img
                        src={`/storage/${torneo.imgBannerInferiorIz}`}
                        alt={torneo.nombreTorneo}
                        className="w-1/6 h-auto mr-4 md:w-1/12"
                    />
                    <div className="mx-4 text-sm text-center text-primary sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl">
                        {torneo.Aval}
                    </div>
                    <img
                        src={`/storage/${torneo.imgBannerInferiorDe}`}
                        alt={torneo.nombreTorneo}
                        className="w-1/6 h-auto ml-4 md:w-1/12"
                    />
                </div>
            </main>

            <Footer />
            <style>{`
        html {
            font-family: 'Onest Variable', system-ui, sans-serif;
            background: #D5D5D5;
        }
    `}</style>
        </>
    );
}
