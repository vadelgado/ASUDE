import { Link, Head } from "@inertiajs/react";
import Footer from "@/Components/DashBoard/Footer";
import Header from "@/Components/DashBoard/Header";
import React, { useEffect, useState } from "react";

export default function ListarTorneos({
    auth,
    tablasGrupos,
    torneo,
    resultados,
    resultadosGoles,
    tablaJuegoLimpio
}) {
    return (
        <>
            <Header auth={auth}></Header>
            <Head title={`Torneo ⚽ Tabla de Grupos`} />

            <main className="px-4 py-8 sm:px-6 lg:px-8 ">

            <div className="mt-40 text-center">
                    <div className="flex items-center justify-center py-8">
                        <img
                            src={`/storage/${torneo[0].imgBannerSuperior}`}
                            alt={torneo[0].nombreTorneo}
                            className="h-auto md:w-1/4"
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
                        Tabla de Posiciones 🏆
                    </span>
                </h2>
                <div className="text-xs text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    <div className="overflow-x-auto">
                        <div className="min-w-full overflow-x-auto rounded-lg shadow-md">
                            <table className="w-full text-black table-auto">
                                <thead>
                                    <tr className="text-sm font-semibold tracking-wide text-left text-white uppercase border-b border-gray-600 bg-gradient-to-r from-black to-gray-800 sm:text-base md:text-lg">
                                        <th className="px-4 py-2 font-bold text-center">#</th>
                                        <th className="px-4 py-2 font-bold text-center">Equipo</th>
                                        <th className="px-4 py-2 font-bold text-center">PJ</th>
                                        <th className="px-4 py-2 font-bold text-center">PG</th>
                                        <th className="px-4 py-2 font-bold text-center">PE</th>
                                        <th className="px-4 py-2 font-bold text-center">PP</th>
                                        <th className="px-4 py-2 font-bold text-center">GF</th>
                                        <th className="px-4 py-2 font-bold text-center">GC</th>
                                        <th className="px-4 py-2 font-bold text-center">DG</th>
                                        <th className="px-4 py-2 font-bold text-center">TA</th>
                                        <th className="px-4 py-2 font-bold text-center">TR</th>                                                                                
                                        <th className="px-4 py-2 font-bold text-center">JL</th>
                                        <th className="px-4 py-2 font-bold text-center">PTS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {resultados ? (
                                        resultados.map((resultado, index) => (
                                            <tr
                                                key={index}
                                                className={`${
                                                    index % 2 === 0
                                                        ? "bg-gradient-to-r from-gray-100 to-gray-50"
                                                        : "bg-white"
                                                } hover:bg-gray-200`}
                                            >
                                                <td className="px-4 py-2 border">
                                                    {index+1}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.nombreEquipo}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.PJ}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.PG}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.PE}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.PP}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.GF}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.GC}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.DG}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.TA}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.TR}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.JL}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.Pts}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="13"
                                                className="px-4 py-2 text-center border"
                                            >
                                                No hay resultados disponibles
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <h2 className="py-6 text-xl text-center text-primary sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                    <span className="px-6 font-medium text-white uppercase rounded-lg bg-gradient-to-r from-green-400 to-green-500 animate-fade-in animate-delay-300 mb-9">
                        Tabla de Juego Limpio ⚽
                    </span>
                </h2>

                <div className="text-xs text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    <div className="overflow-x-auto">
                        <div className="min-w-full overflow-x-auto bg-white rounded-lg shadow-md">
                            <table className="w-full text-black table-auto">
                                <thead>
                                    <tr className="text-sm font-semibold tracking-wide text-left text-white uppercase border-b border-gray-600 bg-gradient-to-r from-black to-gray-800 sm:text-base md:text-lg">
                                        <th className="px-4 py-2">#</th>
                                        <th className="px-4 py-2">Equipo</th>
                                        <th className="px-4 py-2">Jugador</th>
                                        <th className="px-4 py-2">Tarjetas Amarillas 🟨 </th>
                                        <th className="px-4 py-2">Tarjetas Rojas 🟥 </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {tablaJuegoLimpio ? (
                                        tablaJuegoLimpio.map((resultado, index) => (
                                            <tr
                                                key={index}
                                                className={`${
                                                    index % 2 === 0
                                                        ? "bg-gradient-to-r from-gray-100 to-gray-50"
                                                        : "bg-white"
                                                } hover:bg-gray-200`}
                                            >
                                                <td className="px-4 py-2 border">
                                                    {index+1}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.nombreEquipo}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.nombreCompleto}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.tarjetas_amarillas}
                                                </td>      
                                                <td className="px-4 py-2 border">
                                                    {resultado.tarjetas_rojas}
                                                </td>                                             
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="13"
                                                className="px-4 py-2 text-center border"
                                            >
                                                No hay resultados disponibles
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <h2 className="py-6 text-xl text-center text-primary sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                    <span className="px-6 font-medium text-white uppercase rounded-lg bg-gradient-to-r from-green-400 to-green-500 animate-fade-in animate-delay-300 mb-9">
                        Tabla de Goles ⚽
                    </span>
                </h2>

                <div className="text-xs text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    <div className="overflow-x-auto">
                        <div className="min-w-full overflow-x-auto bg-white rounded-lg shadow-md">
                            <table className="w-full text-black table-auto">
                                <thead>
                                    <tr className="text-sm font-semibold tracking-wide text-left text-white uppercase border-b border-gray-600 bg-gradient-to-r from-black to-gray-800 sm:text-base md:text-lg">
                                        <th className="px-4 py-2">#</th>
                                        <th className="px-4 py-2">Equipo</th>
                                        <th className="px-4 py-2">Jugador</th>
                                        <th className="px-4 py-2">Numero Goles</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {resultadosGoles ? (
                                        resultadosGoles.map((resultado, index) => (
                                            <tr
                                                key={index}
                                                className={`${
                                                    index % 2 === 0
                                                        ? "bg-gradient-to-r from-gray-100 to-gray-50"
                                                        : "bg-white"
                                                } hover:bg-gray-200`}
                                            >
                                                <td className="px-4 py-2 border">
                                                    {index+1}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.nombreEquipo}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.nombreCompleto}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {resultado.goles}
                                                </td>                                                
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="13"
                                                className="px-4 py-2 text-center border"
                                            >
                                                No hay resultados disponibles
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
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

            <Footer></Footer>
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
