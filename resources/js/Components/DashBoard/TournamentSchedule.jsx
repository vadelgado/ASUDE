import React, { useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { Link, Head } from "@inertiajs/react";

const TournamentSchedule = ({ programaciones_faces }) => {
    console.log(programaciones_faces);
    const carouselRef = useRef(null);

    const handlePrev = () => {
        if (carouselRef.current) {
            const cardWidth =
                carouselRef.current.querySelector(".card").offsetWidth;
            carouselRef.current.scrollBy({
                left: -cardWidth,
                behavior: "smooth",
            });
        }
    };

    const handleNext = () => {
        if (carouselRef.current) {
            const cardWidth =
                carouselRef.current.querySelector(".card").offsetWidth;
            carouselRef.current.scrollBy({
                left: cardWidth,
                behavior: "smooth",
            });
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    const groupedMatches = programaciones_faces.reduce((acc, match) => {
        if (!acc[match.nombreFase]) {
            acc[match.nombreFase] = [];
        }
        acc[match.nombreFase].push(match);
        return acc;
    }, {});

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const daysOfWeek = [
            "Domingo",
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "Viernes",
            "Sábado",
        ];
        const months = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ];

        const dayOfWeek = daysOfWeek[date.getUTCDay()];
        const day = date.getUTCDate();
        const month = months[date.getUTCMonth()];
        const year = date.getUTCFullYear();

        return `${dayOfWeek} ${day} ${month} de ${year}`;
    };

    return (
        <div className="flex items-center justify-center h-auto text-white bg-gray-900 mt-36">
            <div className="relative w-full p-4 overflow-hidden max-w-screen-2xl">
                <div
                    {...handlers}
                    ref={carouselRef}
                    className="flex overflow-x-auto transition-transform duration-300 ease-in-out md:overflow-hidden"
                    style={{ scrollbarWidth: "none" }}
                >
                    {/* Cards */}
                    {Object.entries(groupedMatches).map(
                        ([fase, matches], index) => (
                            <div key={index} className="mb-8">
                                <h2 className="mt-2 mb-4 text-2xl font-bold text-blue-400">
                                    {fase}
                                </h2>
                                <div className="flex space-x-4 overflow-x-auto flex-nowrap">
                                    {matches.map((match, idx) => (
                                        <div
                                            key={idx}
                                            className="flex-none w-64 p-4 card"
                                        >
                                            <div className="flex flex-col justify-between h-full p-6 bg-gray-800 border-l-4 border-blue-500 rounded-lg shadow-lg">
                                                <div>
                                                    <p className="mb-2 text-sm font-semibold text-gray-400">
                                                        {formatDate(
                                                            match.FechaPartido
                                                        )}{" "}
                                                        {new Date(
                                                            `1970-01-01T${match.HoraPartido}`
                                                        ).toLocaleString(
                                                            "en-US",
                                                            {
                                                                hour: "numeric",
                                                                minute: "numeric",
                                                                hour12: true,
                                                                timeZone:
                                                                    "America/Bogota",
                                                            }
                                                        )}
                                                    </p>
                                                    <p className="mb-4 text-gray-400">
                                                        {match.nomLugar}
                                                    </p>
                                                    <div className="flex items-center mb-2">
                                                        <img
                                                            src={`/storage/${match.escudoEquipoLocal}`}
                                                            onError={(e) => {
                                                                e.target.onerror =
                                                                    null;
                                                                e.target.src =
                                                                    "/escudo.svg";
                                                            }}
                                                            alt={
                                                                match.nombreEquipoLocal
                                                            }
                                                            className="w-10 h-10 mr-2"
                                                        />
                                                        <p className="text-gray-300 truncate">
                                                            <Link
                                                                href={`/Equipo/${match.idEquipoLocal}`}
                                                                className="text-blue-500 underline transition-colors duration-300 hover:text-blue-700 hover:underline hover:font-bold"
                                                            >
                                                                {match.nombreEquipoLocal
                                                                    ? match.nombreEquipoLocal
                                                                    : `Posición: ${match.posicion_local}`}
                                                            </Link>
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center justify-center mb-2">
                                                        <p className="mx-2 text-2xl font-bold text-yellow-300">
                                                            {match.GolesLocal} -{" "}
                                                            {
                                                                match.GolesVisitante
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center justify-center mb-2 space-x-2">
                                                        <p className="text-xs text-yellow-500">
                                                            {
                                                                match.TarjetasAmarillasLocal
                                                            }
                                                        </p>
                                                        <p className="text-xs text-red-500">
                                                            {
                                                                match.TarjetasRojasLocal
                                                            }
                                                        </p>
                                                        <p className="text-xs text-white">
                                                            -
                                                        </p>
                                                        <p className="text-xs text-yellow-500">
                                                            {
                                                                match.TarjetasAmarillasVisitante
                                                            }
                                                        </p>
                                                        <p className="text-xs text-red-500">
                                                            {
                                                                match.TarjetasRojasVisitante
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <img
                                                        src={`/storage/${match.escudoEquipoVisitante}`}
                                                        onError={(e) => {
                                                            e.target.onerror =
                                                                null;
                                                            e.target.src =
                                                                "/escudo.svg";
                                                        }}
                                                        alt={
                                                            match.nombreEquipoVisitante
                                                        }
                                                        className="w-10 h-10 mr-2"
                                                    />
                                                    <p className="text-gray-300 truncate">
                                                        <Link
                                                            href={`/Equipo/${match.idEquipoVisitante}`}
                                                            className="text-blue-500 underline transition-colors duration-300 hover:text-blue-700 hover:underline hover:font-bold"
                                                        >
                                                            {match.nombreEquipoVisitante
                                                                ? match.nombreEquipoVisitante
                                                                : `Posición: ${match.posicion_visitante}`}
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    )}
                </div>
                {/* Flechas de navegación */}
                <button
                    onClick={handlePrev}
                    className="absolute left-0 hidden px-4 py-2 text-white transform -translate-y-1/2 bg-gray-700 bg-opacity-50 rounded-full top-1/2 hover:bg-gray-600 hover:bg-opacity-75 md:block"
                >
                    &#9664;
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-0 hidden px-4 py-2 text-white transform -translate-y-1/2 bg-gray-700 bg-opacity-50 rounded-full top-1/2 hover:bg-gray-600 hover:bg-opacity-75 md:block"
                >
                    &#9654;
                </button>
            </div>
        </div>
    );
};

export default TournamentSchedule;
