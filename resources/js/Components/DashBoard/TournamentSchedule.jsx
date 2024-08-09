import React, { useRef, useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { Link } from "@inertiajs/react";

const TournamentSchedule = ({ programaciones_faces }) => {
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (carouselRef.current) {
                carouselRef.current.scrollLeft = 0;
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseLeaveOrUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    const handlePrev = () => {
        if (carouselRef.current) {
            const cardWidth =
                carouselRef.current.querySelector(".card").offsetWidth;
            carouselRef.current.scrollBy({
                left: -cardWidth * 3,
                behavior: "smooth",
            });
        }
    };

    const handleNext = () => {
        if (carouselRef.current) {
            const cardWidth =
                carouselRef.current.querySelector(".card").offsetWidth;
            carouselRef.current.scrollBy({
                left: cardWidth * 3,
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

    // Función para formatear la fecha completa (fase)
    const formatFullDate = (dateString) => {
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

    // Función para formatear la fecha de las tarjetas (día y mes)
    const formatCardDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getUTCDate();
        const months = [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic",
        ];
        const month = months[date.getUTCMonth()];

        return `${day} ${month}`;
    };

    // Agrupar por fase y fecha
    const groupedMatches = programaciones_faces.reduce((acc, match) => {
        const key = `${match.nombreFase}-${match.FechaPartido}`;
        if (!acc[key]) {
            acc[key] = {
                fase: match.nombreFase,
                fecha: match.FechaPartido,
                matches: [],
            };
        }
        acc[key].matches.push(match);
        return acc;
    }, {});

    // Convertir objeto a arreglo para facilitar el renderizado
    const matchesArray = Object.values(groupedMatches);

    return (
        <div className="flex items-center justify-center h-auto py-12 text-white bg-gradient-to-b from-gray-800 to-gray-900 mt-36">
            <div className="relative w-full p-4 overflow-hidden max-w-screen-2xl">
                <div
                    {...handlers}
                    ref={carouselRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeaveOrUp}
                    onMouseUp={handleMouseLeaveOrUp}
                    onMouseMove={handleMouseMove}
                    className="flex space-x-4 overflow-x-auto transition-transform duration-300 ease-in-out"
                    style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
                >
                    {matchesArray.map((group, indexGroup) => (
                        <div
                            key={indexGroup}
                            className="flex flex-col flex-none w-auto px-2"
                        >
                            <h2 className="mt-2 mb-2 text-xl font-bold text-green-400 whitespace-nowrap">
                                {group.fase} - {formatFullDate(group.fecha)}
                            </h2>
                            <div className="flex space-x-2">
                                {group.matches.map((match, idx) => (
                                    <div
                                        key={idx}
                                        className="flex-none w-64 p-4 card"
                                    >
                                        <div className="flex flex-col justify-between h-full p-6 border-l-4 border-green-500 rounded-lg shadow-lg bg-gradient-to-b from-gray-700 to-gray-800">
                                            <div>
                                                <p className="mb-2 text-sm font-semibold text-gray-300">
                                                    {formatCardDate(
                                                        match.FechaPartido
                                                    )}{" "}
                                                    {new Date(
                                                        `1970-01-01T${match.HoraPartido}`
                                                    ).toLocaleString("es-ES", {
                                                        hour: "numeric",
                                                        minute: "numeric",
                                                        hour12: true,
                                                        timeZone: "America/Bogota",
                                                    })}
                                                </p>
                                                <a
                                                    href={`${match.geolocalizacion}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center text-green-400 underline transition-colors duration-300 hover:text-green-600"
                                                >
                                                    <span
                                                        role="img"
                                                        aria-label="geolocalización"
                                                        className="mr-2"
                                                    >
                                                        📍
                                                    </span>
                                                    <p className="mb-4 text-gray-300">
                                                        {match.nomLugar}
                                                    </p>
                                                </a>
                                                <p className="text-gray-300 truncate">
                                                    <Link
                                                        href={`/resultados?partido=${match.partido}&torneo=${match.torneo}`}
                                                        className="text-green-400 underline transition-colors duration-300 hover:text-green-600"
                                                    >
                                                        {`Detalles Partido`}
                                                    </Link>
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
                                                            className="text-green-400 underline transition-colors duration-300 hover:text-green-600"
                                                        >
                                                            {match.nombreEquipoLocal
                                                                ? match.nombreEquipoLocal
                                                                : `Posición: ${match.posicion_local}`}
                                                        </Link>
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-center mb-2">
                                                    <p className="mx-2 text-3xl font-bold text-yellow-300">
                                                        {match.GolesLocal} -{" "}
                                                        {match.GolesVisitante}
                                                    </p>
                                                </div>
                                                <div className="flex items-center mb-2">
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
                                                            className="text-green-400 underline transition-colors duration-300 hover:text-green-600"
                                                        >
                                                            {match.nombreEquipoVisitante
                                                                ? match.nombreEquipoVisitante
                                                                : `Posición: ${match.posicion_visitante}`}
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={handlePrev}
                    className="absolute left-0 z-10 px-2 py-1 -translate-y-1/2 bg-gray-700 rounded-full top-1/2 hover:bg-gray-800"
                >
                    ❮
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-0 z-10 px-2 py-1 -translate-y-1/2 bg-gray-700 rounded-full top-1/2 hover:bg-gray-800"
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default TournamentSchedule;
