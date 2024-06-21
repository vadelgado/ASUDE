import { Link, Head } from "@inertiajs/react";
import Footer from "@/Components/DashBoard/Footer";
import Header from "@/Components/DashBoard/Header";
import React, { useEffect, useState } from "react";



export default function ListarTorneos({ auth, tablasGrupos, torneo }) {

    return (
        <>
            <Header auth={auth}></Header>
            <Head title={`Torneo ⚽ Tabla de Grupos`} />
            <h2 className="mt-32 text-3xl font-bold text-center">
                <span>👉📝Tablas de Resultados👈</span>
            </h2>

            <main className="px-2">
                <div className="flex items-center justify-center py-8">
                    <img
                        src={`/storage/${torneo[0].imgBannerSuperior}`}
                        alt={torneo[0].nombreTorneo}
                        className="flex items-center w-auto h-auto mr-2 "
                    />
                </div>
                <div className="text-xs text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                    <div className="overflow-x-auto">
                        <div className="min-w-full overflow-hidden overflow-x-auto">
                            <table className="w-full text-black">
                                <thead>
                                    <tr className="p-4 bg-gradient-to-b from-white/20 via-transparent to-transparent">
                                        <th className="px-4 py-2">Equipo</th>
                                        <th className="px-4 py-2">PJ</th>
                                        <th className="px-4 py-2">PG</th>
                                        <th className="px-4 py-2">PE</th>
                                        <th className="px-4 py-2">PP</th>
                                        <th className="px-4 py-2">GF</th>
                                        <th className="px-4 py-2">GC</th>
                                        <th className="px-4 py-2">DG</th>
                                        <th className="px-4 py-2">TA</th>
                                        <th className="px-4 py-2">TR</th>
                                        <th className="px-4 py-2">JL</th>
                                        <th className="px-4 py-2">PTS</th>
                                    </tr>
                                </thead>
                                <tbody>


                                </tbody>
                            </table>
                        </div>
                    </div>
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
