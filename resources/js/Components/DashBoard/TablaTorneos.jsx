// PreFooter.jsx
import React from "react";

const TablaTorneos = (torneoEnCurso) => {
    return (
        <section className="pt-24">
            <h2 className="text-lg text-center font-medium uppercase lg:text-2xl text-black">
                CAMPEONATOS
            </h2>
            <table className="mt-10 w-full text-center text-black lg:text-lg">
                <tbody>
                    {torneoEnCurso.torneoEnCurso.map((torneo, index) => (
                        <React.Fragment key={index}>
                            <tr className="mb-10 bg-gradient-to-b from-white/20 via-transparent to-transparent p-4">
                                <th className="py-3" colSpan="3">
                                    <a
                                        href={`https://futurasestrellas.netlify.app/tabla-grupos/${torneo.id}`}
                                        className="text-orange-500 font-black text-pretty hover:underline"
                                    >
                                        {torneo.nombreTorneo}
                                    </a>
                                </th>
                                <th colSpan="3">
                                    <br /><br />
                                </th>
                            </tr>
                            <tr>
                                <th className="w-1/3">
                                    <a
                                        href={`https://futurasestrellas.netlify.app/partidos/${torneo.id}`}
                                        className="text-blue-500 hover:underline text-pretty"
                                    >
                                        <em>Ver Grupos</em>
                                    </a>
                                </th>
                                <th className="w-1/3">
                                    <a
                                        href={`https://futurasestrellas.netlify.app/resultados/${torneo.id}`}
                                        className="text-blue-500 hover:underline text-pretty"
                                    >
                                        <em>Ver Partidos</em>
                                    </a>
                                </th>
                                <th className="w-1/3">
                                    <a
                                        href={`https://futurasestrellas.netlify.app/resultados/${torneo.id}`}
                                        className="text-blue-500 hover:underline text-pretty"
                                    >
                                        <em>Ver Resultados</em>
                                    </a>
                                </th>
                            </tr>
                            <tr>
                                <th colSpan="3">
                                    <br />
                                </th>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default TablaTorneos;
