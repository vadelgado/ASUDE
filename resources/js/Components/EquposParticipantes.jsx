import React from "react";
import { Link, Head } from "@inertiajs/react";

const EquiposParticipantes = ({ equiposParticipantes }) => {
    return (
        <section className="my-5">
            <h2 className="py-6 text-xl text-center text-primary sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                <span className="px-6 font-medium text-white uppercase rounded-lg bg-gradient-to-r from-green-400 to-green-500 animate-fade-in animate-delay-300 mb-9">
                    Equipos Participantes
                </span>
            </h2>
            <div className="grid grid-cols-2 gap-8 mt-12 select-none md:grid-cols-3">
                {equiposParticipantes.map(
                    ({ id, nombreEquipo, escudoEquipo }) => (
                        <div
                            key={id}
                            className="relative flex flex-col items-center justify-center overflow-hidden company-link group h-34 md:h-44"
                        >
                            <Link
                                href={`/Equipo/${id}`}
                                className="text-blue-500 underline transition-colors duration-300 hover:text-blue-700 hover:underline hover:font-bold"
                            >
                                <img
                                    loading="lazy"
                                    src={`/storage/${escudoEquipo}`}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "/escudo.svg";
                                        e.target.style.filter =
                                            "brightness(0.5)";
                                    }}
                                    alt={`Logo de ${nombreEquipo}`}
                                    className="w-auto h-32 px-4 mx-auto transition company-logo group-hover:scale-105"
                                />
                                <h2 className="text-center group-hover:scale-105">
                                    {nombreEquipo}
                                </h2>
                            </Link>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};

export default EquiposParticipantes;
