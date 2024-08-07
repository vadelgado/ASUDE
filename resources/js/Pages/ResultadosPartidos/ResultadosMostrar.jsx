import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Header from "@/Components/DashBoard/Header";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/DashBoard/Footer";
import html2pdf from "html2pdf.js";

export default function ResultadosMostrar({
    auth,
    resultados,
    partidoInfo,
    torneo,
}) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleDownloadPDF = () => {
        const element = document.getElementById("pdf-content");
        const opt = {
            margin: [0, 0, 0, 0], // Márgenes ajustados
            filename: "ResultadosPartido.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "A2", orientation: "portrait" },
        };
        html2pdf().set(opt).from(element).save();
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

    return (
        <>
            <Header auth={auth} />
            <Head title={`Resultados Partido`} />
            <div className="flex flex-col min-h-screen mt-32">
                <main
                    className="container flex-grow px-4 py-8 mx-auto"
                    id="pdf-content"
                >
                    <div className="text-center">
                        {torneo && (
                            <>
                                <div className="flex items-center justify-center py-8">
                                    <img
                                        src={`/storage/${torneo.imgBannerSuperior}`}
                                        alt={torneo.nombreTorneo}
                                        className="w-full h-auto max-w-lg"
                                    />
                                </div>
                                <h2 className="text-sm text-primary sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl">
                                    {torneo.nombreTorneo} <br />
                                    {new Date(
                                        torneo.fechaInicio
                                    ).toLocaleDateString("es-CO", {
                                        month: "long",
                                        day: "numeric",
                                    }) +
                                        " al " +
                                        new Date(
                                            torneo.fechaFin
                                        ).toLocaleDateString("es-CO", {
                                            month: "long",
                                            day: "numeric",
                                            year: "numeric",
                                        })}{" "}
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

                    <div className="container p-6 mx-auto mt-1 bg-white">
                        <div className="flex flex-col items-start justify-between mb-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <h3 className="text-lg font-semibold sm:text-xl">
                                {`Partido: ${partidoInfo.equipoLocal} vs ${partidoInfo.equipoVisitante}`}
                            </h3>
                            <div className="text-sm text-gray-600 sm:text-base">
                                <div>{`Fecha: ${partidoInfo.FechaPartido}`}</div>
                                <div>{`Hora: ${partidoInfo.HoraPartido}`}</div>
                                <div>{`Lugar: ${partidoInfo.nomLugar}`}</div>
                            </div>
                            <input
                                type="text"
                                placeholder="Buscar por nombre..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="px-4 py-2 mt-2 border rounded sm:mt-0 sm:text-base"
                            />
                            <button
                                onClick={handleDownloadPDF}
                                className="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-700 sm:mt-0 sm:ml-auto sm:text-base"
                            >
                                Descargar PDF
                            </button>
                        </div>

                        <div className="grid py-6 overflow-x-auto bg-white place-items-center">
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
                                            Observaciones
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

                        <div className="grid py-6 overflow-x-auto bg-white place-items-center">
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
                            className="w-1/2 h-auto max-w-xs mr-4 md:w-1/6"
                        />
                        <div className="mx-4 text-sm text-center text-primary sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl">
                            {torneo.Aval}
                        </div>
                        <img
                            src={`/storage/${torneo.imgBannerInferiorDe}`}
                            alt={torneo.nombreTorneo}
                            className="w-1/2 h-auto max-w-xs ml-4 md:w-1/6"
                        />
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}