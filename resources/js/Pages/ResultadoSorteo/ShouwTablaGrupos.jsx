import { Link, Head } from "@inertiajs/react";
import Footer from "@/Components/DashBoard/Footer";
import Header from "@/Components/DashBoard/Header";
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

export default function ListarTorneos({ auth, tablasGrupos, torneo }) {
    console.log('tablasGrupos',tablasGrupos);
    console.log('torneo',torneo);
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
            <h2>
                <span>👉📝Tabla de Grupos👈</span>
            </h2>
            <br />
            <main className="m-auto my-7 max-w-4xl">
                <div className="bg-white grid v-screen place-items-center py-6">
                    <table className="table-auto border-gray-400">
                        <thead>
                            <tr>
                                {secuenciaLetras.map((letra, index) => (
                                    <th key={index} className="border px-4 py-2">
                                        {letra}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: equiposPorGrupo }).map((_, filaIndex) => (
                                <tr key={filaIndex}>
                                    {grupos.map((grupo, colIndex) => (
                                        
                                        <td key={colIndex} className="border px-4 py-2">
                                            {grupo[filaIndex] && (
                                                <div className="flex items-center">
                                                    <span className="mr-2">
                                                        {grupo[filaIndex].grupoPosicion}
                                                    </span>
                                                    <img
                                                        src={`/storage/${grupo[filaIndex].escudoEquipo}`}
                                                        alt={grupo[filaIndex].nombreEquipo}
                                                        className="w-8 h-8 rounded-full mr-2"
                                                    />
                                                    {grupo[filaIndex].nombreEquipo}
                                                </div>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
