// PreFooter.jsx
import React from "react";

const TablaTorneos = (torneoEnCurso) => {
    return ( 
<section className="pt-40 mx-20">
    <h2 className="p-4 text-2xl font-semibold text-center text-white uppercase rounded-lg shadow-lg lg:text-4xl bg-gradient-to-r from-blue-500 via-green-500 to-green-500">
        CAMPEONATOS
    </h2>
    <div className="w-full mt-12">
        {torneoEnCurso.torneoEnCurso.map((torneo, index) => (
            <div key={index} className="p-6 mb-12 transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105">
                <div className="text-center">
                    <a
                        href={`/listarTorneos/${torneo.id}`}
                        className="text-xl font-black text-orange-600 transition-colors duration-300 hover:underline hover:text-orange-700"
                    >
                        {torneo.nombreTorneo}
                    </a>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-3">
                    <div className="flex justify-center">
                        <a
                            href={`/tablaGrupos?torneo_id=${torneo.id}`}
                            className="inline-flex items-center px-4 py-2 text-blue-600 transition-colors duration-300 bg-blue-100 rounded-lg shadow hover:text-blue-700 hover:bg-blue-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h3.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293h5.172a1 1 0 00.707-.293l1.414-1.414A1 1 0 0116.414 3H20a1 1 0 011 1v6a1 1 0 01-1 1h-1v6a1 1 0 01-1 1h-5v2h2a1 1 0 010 2H7a1 1 0 010-2h2v-2H4a1 1 0 01-1-1V11H2a1 1 0 01-1-1V4zm1 2h4v2H4V6z" />
                            </svg>
                            Ver Grupos
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <a
                            href={`/tablasJuego?torneo_id=${torneo.id}`}
                            className="inline-flex items-center px-4 py-2 text-blue-600 transition-colors duration-300 bg-blue-100 rounded-lg shadow hover:text-blue-700 hover:bg-blue-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                            </svg>
                            Ver Partidos
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <a
                            href={`/verResultados?torneo_id=${torneo.id}`}
                            className="inline-flex items-center px-4 py-2 text-blue-600 transition-colors duration-300 bg-blue-100 rounded-lg shadow hover:text-blue-700 hover:bg-blue-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 5h.01M19 12h.01M12 19h.01M7 7h10M7 12h10M7 17h10" />
                            </svg>
                            Ver Resultados
                        </a>
                    </div>
                </div>
            </div>
        ))}
    </div>
</section>


    );
};

export default TablaTorneos;
