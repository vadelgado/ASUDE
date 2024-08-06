import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Header from "@/Components/DashBoard/Header";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/DashBoard/Footer";

export default function ResultadosMostrar({ auth, resultados, partidoInfo, torneo }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Agrupar resultados por jugador y equipo
    const groupedResultados = resultados.reduce((acc, curr) => {
        const key = `${curr.fk_jugador_id}-${curr.nombreEquipo}`;
        if (!acc[key]) {
            acc[key] = {
                ...curr,
                goles: 0,
                tarjetas_amarillas: 0,
                tarjetas_rojas: 0,
            };
        }
        acc[key].goles += curr.goles;
        acc[key].tarjetas_amarillas += curr.tarjetas_amarillas;
        acc[key].tarjetas_rojas += curr.tarjetas_rojas;
        return acc;
    }, {});

    const resultadosAgrupados = Object.values(groupedResultados);

    // Filtrar resultados según el término de búsqueda
    const filteredResultados = resultadosAgrupados.filter((resultado) =>
        resultado.nombreCompleto
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    // Totalizar goles por equipo
    const totalGolesPorEquipo = resultadosAgrupados.reduce((acc, curr) => {
        if (!acc[curr.nombreEquipo]) {
            acc[curr.nombreEquipo] = 0;
        }
        acc[curr.nombreEquipo] += curr.goles;
        return acc;
    }, {});
    console.log(torneo);
    return (
        <>
        
            <Header auth={auth} />
            <Head title={`Resultados Partido`} />
            <div className="flex flex-col min-h-screen">
                <main className="container flex-grow px-4 py-8 mx-auto">
                <div className="mt-40 text-center">
                        {torneo && (
                            <>
                                <div className="flex items-center justify-center py-8">
                                    <img
                                        src={`/storage/${torneo.imgBannerSuperior}`}
                                        alt={torneo.nombreTorneo}
                                        className="h-auto"
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
                            </>
                        )}
                    </div>

                    <div className="container min-h-screen p-6 mx-auto mt-1 bg-white">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold">
                                {`Partido: ${partidoInfo.equipoLocal} vs ${partidoInfo.equipoVisitante}`}
                            </h3>
                            <div className="text-sm text-gray-600">
                                <div>{`Fecha: ${partidoInfo.FechaPartido}`}</div>
                                <div>{`Hora: ${partidoInfo.HoraPartido}`}</div>
                                <div>{`Lugar: ${partidoInfo.nomLugar}`}</div>
                            </div>
                            <input
                                type="text"
                                placeholder="Buscar por nombre..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="px-4 py-2 border rounded"
                            />
                        </div>

                        <div className="grid py-6 bg-white place-items-center">
                            <table className="w-full border-gray-400 table-auto">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 border">
                                            Equipo
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Jugador
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Goles
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Tarjetas Amarillas
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Tarjetas Rojas
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Observacionas
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredResultados.length > 0 ? (
                                        filteredResultados.map((resultado) => (
                                            <tr key={resultado.id}>
                                                <td className="px-4 py-2 border">
                                                    {resultado.nombreEquipo}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.nombreCompleto}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.goles}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {
                                                        resultado.tarjetas_amarillas
                                                    }
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.tarjetas_rojas}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.observaciones}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="6"
                                                className="px-4 py-2 text-center border"
                                            >
                                                No hay resultados
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <div className="grid py-6 bg-white place-items-center">
                            <table className="w-full border-gray-400 table-auto">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 border">
                                            Equipo
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Total de Goles
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(totalGolesPorEquipo).map(
                                        ([equipo, goles]) => (
                                            <tr key={equipo}>
                                                <td className="px-4 py-2 border">
                                                    {equipo}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {goles}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
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
            </div>
            <Footer />
            <style>{`
                html {
                    font-family: 'Onest Variable', system-ui, sans-serif;
                    background: #D5D5D5;
                }
                ::-webkit-scrollbar {
                    display: none;
                }
                .overflow-x-auto {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>
        </>
    );
}
