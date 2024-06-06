import { Link, Head } from "@inertiajs/react";
import Footer from "@/Components/DashBoard/Footer";
import Header from "@/Components/DashBoard/Header";
import React, { useEffect, useState } from "react";

export default function Index({ auth, torneo, programacionTorneos }) {
    return (
        <>
            <Header auth={auth}></Header>
            <Head title={`Partidos`} />
            <h2 className="mt-32 text-3xl font-bold text-center">
                <span>👉📝Partidos👈</span>
            </h2>

            <main className="px-2">
                <div className="flex items-center justify-center py-8">
                    <img
                        src={`/storage/${torneo.imgBannerSuperior}`}
                        alt={torneo.nombreTorneo}
                        className="flex items-center w-auto h-auto mr-2 "
                    />
                </div>
                <div className="text-xs text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    {programacionTorneos && Object.keys(programacionTorneos).map((jornada, index) => (
                        <div key={index} className="mb-8">
                            <h3 className="mb-4 font-bold text-center">Jornada: {jornada}</h3>
                            <div className="overflow-x-auto">
                                <div className="min-w-full overflow-hidden overflow-x-auto">
                                    <table className="w-full text-black">
                                        <thead>
                                            <tr className="p-4 bg-gradient-to-b from-white/20 via-transparent to-transparent">
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
                                                <th className="px-4 py-2 font-bold text-center">
                                                    Lugar
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.isArray(programacionTorneos[jornada]) && programacionTorneos[jornada].map((programacion, subIndex) => (
                                                <tr
                                                    key={subIndex}
                                                    className="p-4 bg-gradient-to-b from-white/20 via-transparent to-transparent"
                                                >
                                                    <td className="px-4 py-2 text-center">
                                                    <span className="font-bold">{programacion.HoraPartido}</span>
                                                    </td>
                                                    <td className="px-4 py-2 text-center">
                                                       <span className="font-bold">{programacion.local_puesto}</span> {programacion.local}
                                                    </td>
                                                    <td className="px-4 py-2 text-center">
                                                        
                                                    </td>
                                                    <td className="px-4 py-2 text-center">
                                                    <span className="font-bold">{programacion.visitante_puesto}</span> {programacion.visitante}
                                                    </td>
                                                    <td className="px-4 py-2 text-center">
                                                        {programacion.lugar}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer></Footer>
            <style>{`

        html {
          font-family: 'Onest Variable', system-ui, sans-serif;
          background: #D5D5D5;
        }
      `}</style>
        </>
    );
}
