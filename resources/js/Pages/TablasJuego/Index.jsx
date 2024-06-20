import { Link, Head } from "@inertiajs/react";
import Footer from "@/Components/DashBoard/Footer";
import Header from "@/Components/DashBoard/Header";
import React from "react";

export default function Index({ auth, torneo, programaciones_faces }) {
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
                <div className="flex items-center justify-center py-8">
                    <img
                        src={`/storage/${torneo.imgBannerSuperior}`}
                        alt={torneo.nombreTorneo}
                        className="flex items-center w-auto h-auto mr-2 md:w-1/3 md:h-auto"
                    />
                </div>
                <h3 className="text-lg font-medium text-center text-primary sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                    {torneo.nombreTorneo}
                </h3>
                <h4 className="text-xs font-medium text-center text-primary sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                    {new Date(torneo.fechaInicio).toLocaleDateString("es-CO", {
                        month: "long",
                        day: "numeric",
                    }) +
                        " al " +
                        new Date(torneo.fechaFin).toLocaleDateString("es-CO", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                        })}
                </h4>
                <h4 className="text-xs font-medium text-center text-primary sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                    {torneo.caracteristicas}
                </h4>
                <h4 className="text-xs font-medium text-center text-primary sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                    Aval:{" "}
                    <span className="font-bold">{torneo.ApoyoPrincipal}</span>
                </h4>
                <div className="text-xs text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    {orderedFases.map((fase, index) => (
                        <div key={index} className="mb-8">
                            <h3 className="my-10 mb-4 font-bold text-center">
                                Fase: <span className="font-bold">{fase}</span>
                            </h3>
                            {Object.keys(groupedByFaseAndDate[fase]).map(
                                (fecha, subIndex) => (
                                    <div key={subIndex} className="mb-4">
                                        <h4 className="mb-2 font-semibold text-center">
                                            Fecha: {fecha || "Por definir"}
                                        </h4>
                                        <div className="overflow-x-auto">
                                            <div className="min-w-full overflow-hidden overflow-x-auto">
                                                <table className="w-full mt-10 text-sm text-center text-black text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl">
                                                    <thead>
                                                        <tr className="p-4 mb-10 bg-table-green-cabecera">
                                                            <th className="px-4 py-2 font-bold text-center">
                                                                Hora
                                                            </th>
                                                            <th className="px-4 py-2 font-bold text-center">
                                                                Equipo Local
                                                            </th>
                                                            <th className="px-4 py-2 font-bold text-center">
                                                                Marcador
                                                            </th>
                                                            <th className="px-4 py-2 font-bold text-center">
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
                                                                    <td className="flex flex-row items-center px-4 py-2 text-center flex-nowrap">
                                                                        <span
                                                                            className="text-xs font-bold text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
                                                                            style={{
                                                                                transform:
                                                                                    "scale(0.70)",
                                                                            }}
                                                                        >
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
                                                                                    className="w-10 h-10 mr-2"
                                                                                />
                                                                                {
                                                                                    programacion.nombreEquipoLocal
                                                                                }
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                <span className="ml-2">
                                                                                    Posición:{" "}
                                                                                    {
                                                                                        programacion.posicion_local
                                                                                    }
                                                                                </span>
                                                                            </>
                                                                        )}
                                                                    </td>
                                                                    <td className="px-4 py-2 text-center"></td>
                                                                    <td className="flex flex-row items-center px-4 py-2 text-center flex-nowrap">
                                                                        <span
                                                                            className="text-xs font-bold text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
                                                                            style={{
                                                                                transform:
                                                                                    "scale(0.70)",
                                                                            }}
                                                                        >
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
                                                                                    className="w-10 h-10 mr-2"
                                                                                />
                                                                                {
                                                                                    programacion.nombreEquipoVisitante
                                                                                }
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                <span className="ml-2">
                                                                                    Posición:{" "}
                                                                                    {
                                                                                        programacion.posicion_visitante
                                                                                    }
                                                                                </span>
                                                                            </>
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
