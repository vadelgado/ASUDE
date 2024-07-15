import React from "react";
import { Head } from "@inertiajs/react";
import Header from "@/Components/DashBoard/Header";
import Footer from "@/Components/DashBoard/Footer";

export default function Team({ auth, equipo }) {
    return (
        <>
            <Head title="Equipo" />
            <Header auth={auth} />
            <div className="flex flex-col min-h-screen mt-32 bg-gray-900">
                <main className="flex-grow">
                    {/* Encabezado del Equipo */}
                    <div className="bg-[#FFD8B1] py-8">
                        <div className="container px-4 mx-auto text-center">
                            <img 
                                src={`/storage/${equipo[0].escudoEquipo}`} 
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "/escudo.svg";
                                    e.target.style.filter = "brightness(0.5)";
                                    
                                }}
                                alt="Escudo del Equipo" 
                                className="mx-auto mb-4 aspect-w-4 aspect-h-5" 
                            /> 
                            <p className="text-gray-700">Presentando a los miembros del equipo</p>
                            <h1 className="mb-2 text-4xl font-bold text-gray-900">{equipo[0].nombreEquipo}</h1>
                            
                        </div>
                    </div>

                    <div className="py-8 bg-gray-900">
                        <div className="container px-4 mx-auto">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {equipo.map((player, index) => (
                                    <div 
                                        key={index} 
                                        className="flex flex-col items-center p-6 mb-4 transition-transform duration-300 transform bg-gray-800 border border-[#FF8228] rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl">
                                        <img 
                                            src={`/storage/${player.foto}`}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "/soccer-player.svg";
                                                
                                            }}
                                            alt={player.nombreCompleto} 
                                            className="w-24 h-24 mb-3 rounded-full shadow-md" 
                                        />
                                        <h3 className="mb-2 text-lg font-bold text-[#FF8228]">{player.nombreCompleto}</h3>
                                        <div className="text-center text-gray-300">
                                            {player.golesTotales > 0 && (
                                                <p>Goles: {player.golesTotales}</p>
                                            )}
                                            {player.tarjetasAmarillasTotales > 0 && (
                                                <p>Tarjetas Amarillas: {player.tarjetasAmarillasTotales}</p>
                                            )}
                                            {player.tarjetasRojasTotales > 0 && (
                                                <p>Tarjetas Rojas: {player.tarjetasRojasTotales}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer auth={auth} />
        </>
    );
}
