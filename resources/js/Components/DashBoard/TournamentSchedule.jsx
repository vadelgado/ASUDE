import React, { useRef } from "react";
import { useSwipeable } from "react-swipeable";


const TournamentSchedule = ({ programaciones_faces }) => {
    const carouselRef = useRef(null);

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -carouselRef.current.children[0].offsetWidth,
                behavior: "smooth",
            });
        }
    };

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: carouselRef.current.children[0].offsetWidth,
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
        const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        
        const dayOfWeek = daysOfWeek[date.getUTCDay()];
        const day = date.getUTCDate();
        const month = months[date.getUTCMonth()];
        const year = date.getUTCFullYear();
        
        return `${dayOfWeek} ${day} ${month} de ${year}`;
    };

    return (
        <div className="flex items-center justify-center h-auto text-white bg-gray-900 mt-36">
            <div className="relative w-full overflow-hidden max-w-screen-2xl">
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
                                <h2 className="mt-2 mb-4 text-xl font-bold">
                                    {fase}
                                </h2>
                                <div className="flex overflow-x-auto flex-nowrap">
                                    {matches.map((match, idx) => (
                                        <div
                                            key={idx}
                                            className="flex-none w-64 p-4"
                                        >
                                            <div className="h-full p-6 bg-gray-800 border-l-4 border-blue-500 rounded-lg shadow-lg">
                                                <p>
                                                {formatDate(match.FechaPartido)}{" "}
                                                    {new Date(
                                                        `1970-01-01T${match.HoraPartido}`
                                                    ).toLocaleString("en-US", {
                                                        hour: "numeric",
                                                        minute: "numeric",
                                                        hour12: true,
                                                    })}
                                                </p>
                                                <p>
                                                    {" "}
                                                    {match.nomLugar}
                                                </p>
                                                <div className="flex items-center my-2">
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
                                                    <p>
                                                        {match.nombreEquipoLocal
                                                            ? match.nombreEquipoLocal
                                                            : `Posición: ${match.posicion_local}`}
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-center">
                                                    <p className="mx-2 text-2xl font-bold">
                                                        {match.marcadorLocal} - {match.marcadorVisitante}
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-center">
                                                    <p className="mx-1 text-xs text-yellow-500">
                                                        {match.tarjetasAmarillasLocal}
                                                    </p>
                                                    <p className="mx-1 text-xs text-red-500">
                                                        {match.tarjetasRojasLocal}
                                                    </p>
                                                    <p className="mx-1 text-xs text-yellow-500">
                                                        {match.tarjetasAmarillasVisitante}
                                                    </p>
                                                    <p className="mx-1 text-xs text-red-500">
                                                        {match.tarjetasRojasVisitante}
                                                    </p>
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
                                                    <p>
                                                        {match.nombreEquipoVisitante
                                                            ? match.nombreEquipoVisitante
                                                            : `Posición: ${match.posicion_visitante}`}
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
