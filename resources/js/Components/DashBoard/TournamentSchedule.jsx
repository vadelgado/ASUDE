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

    // Función para simplificar los nombres de los equipos
    const simplifyName = (name) => {
        // Aquí puedes añadir las reglas de reemplazo
        return name
            .replace("Fútbol Club", "FC")
            .replace("Club Deportivo", "CD")
            .replace("Unión Deportiva", "UD")
            .replace("Unión", "U.")
            .replace("Deportivo", "Dep.")
            .replace("Universidad", "U.")
            .replace("Atlético", "Atl.");
    };

    // Función para truncar el nombre si es necesario
    const truncateName = (name, maxLength = 12) => {
        return name.length > maxLength
            ? `${name.substring(0, maxLength)}...`
            : name;
    };

    // Función para obtener el nombre del equipo a mostrar
    const getTeamDisplayName = (name) => {
        // Primero simplifica el nombre, luego trúncalo si es necesario
        return truncateName(simplifyName(name));
    };

    return (
        <div className="flex items-center justify-center py-12 text-white bg-gradient-to-b from-gray-800 to-gray-900 mt-36">
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
                                        className="relative flex-none w-[22.9rem] h-auto p-2 card"
                                    >
                                        <div className="flex flex-col justify-between h-full p-4 border-l-4 rounded-lg shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 border-neon-blue backdrop-blur-md">
                                            <div className="absolute top-0 right-0 p-2 bg-green-600 rounded-bl-lg">
                                                <p className="text-xs font-semibold text-white">
                                                    {formatCardDate(
                                                        match.FechaPartido
                                                    )}
                                                </p>
                                                <p className="text-xs font-semibold text-white">
                                                    {new Date(
                                                        `1970-01-01T${match.HoraPartido}`
                                                    ).toLocaleString("es-ES", {
                                                        hour: "numeric",
                                                        minute: "numeric",
                                                        hour12: true,
                                                        timeZone:
                                                            "America/Bogota",
                                                    })}
                                                </p>
                                            </div>
                                            <div className="flex-grow">
                                                <div className="flex items-center mb-2 min-h-[3rem]">
                                                    <a
                                                        href={`${match.geolocalizacion}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center text-green-400 underline transition-colors duration-300 hover:text-green-600 hover:underline-glow"
                                                    >
                                                        <span
                                                            role="img"
                                                            aria-label="geolocalización"
                                                            className="mr-1 text-red-700"
                                                        >
                                                            <i className="fa-solid fa-location-dot"></i>
                                                        </span>
                                                        <p className="text-gray-300 text-xs">
                                                            {match.nomLugar}
                                                        </p>
                                                    </a>
                                                </div>
                                                <div className="flex items-center justify-between mb-2 min-h-[3rem]">
                                                    <div className="flex flex-col items-center">
                                                        <Link
                                                            href={`/Equipo/${match.idEquipoLocal}`}
                                                            className="flex flex-col items-center text-neon-blue underline transition-colors duration-300 hover:text-green-600 hover:underline-glow"
                                                        >
                                                            <img
                                                                src={`/storage/${match.escudoEquipoLocal}`}
                                                                onError={(
                                                                    e
                                                                ) => {
                                                                    e.target.onerror =
                                                                        null;
                                                                    e.target.src =
                                                                        "/escudo.svg";
                                                                }}
                                                                alt={
                                                                    match.nombreEquipoLocal
                                                                }
                                                                className="w-8 h-8 mb-1 rounded-full shadow-md"
                                                            />
                                                            <p className="text-xs text-gray-300 truncate text-center">
                                                                {match.nombreEquipoLocal
                                                                    ? getTeamDisplayName(
                                                                          match.nombreEquipoLocal
                                                                      )
                                                                    : `Posición: ${match.posicion_local}`}
                                                            </p>
                                                        </Link>
                                                        <div className="flex items-center space-x-1 mt-1 text-xs">
                                                            {match.TarjetasAmarillasLocal >
                                                            0 ? (
                                                                <span className="text-yellow-500">
                                                                    <i className="mr-1 fas fa-square"></i>
                                                                    {
                                                                        match.TarjetasAmarillasLocal
                                                                    }
                                                                </span>
                                                            ) : (
                                                                <span className="text-transparent">
                                                                    <i className="mr-1 fas fa-square"></i>
                                                                    0
                                                                </span>
                                                            )}
                                                            {match.TarjetasRojasLocal >
                                                            0 ? (
                                                                <span className="text-red-500 ml-1">
                                                                    <i className="mr-1 fas fa-square"></i>
                                                                    {
                                                                        match.TarjetasRojasLocal
                                                                    }
                                                                </span>
                                                            ) : (
                                                                <span className="text-transparent ml-1">
                                                                    <i className="mr-1 fas fa-square"></i>
                                                                    0
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <p className="mx-1 text-lg font-bold text-yellow-300 bg-gray-800 p-2 rounded-md">
                                                        {match.GolesLocal} -{" "}
                                                        {match.GolesVisitante}
                                                    </p>
                                                    <div className="flex flex-col items-center">
                                                        <Link
                                                            href={`/Equipo/${match.idEquipoVisitante}`}
                                                            className="flex flex-col items-center text-neon-blue underline transition-colors duration-300 hover:text-green-600 hover:underline-glow"
                                                        >
                                                            <img
                                                                src={`/storage/${match.escudoEquipoVisitante}`}
                                                                onError={(
                                                                    e
                                                                ) => {
                                                                    e.target.onerror =
                                                                        null;
                                                                    e.target.src =
                                                                        "/escudo.svg";
                                                                }}
                                                                alt={
                                                                    match.nombreEquipoVisitante
                                                                }
                                                                className="w-8 h-8 mb-1 rounded-full shadow-md"
                                                            />
                                                            <p className="text-xs text-gray-300 truncate text-center">
                                                                {match.nombreEquipoVisitante
                                                                    ? getTeamDisplayName(
                                                                          match.nombreEquipoVisitante
                                                                      )
                                                                    : `Posición: ${match.posicion_visitante}`}
                                                            </p>
                                                        </Link>
                                                        <div className="flex items-center space-x-1 mt-1 text-xs">
                                                            {match.TarjetasAmarillasVisitante >
                                                            0 ? (
                                                                <span className="text-yellow-500">
                                                                    <i className="mr-1 fas fa-square"></i>
                                                                    {
                                                                        match.TarjetasAmarillasVisitante
                                                                    }
                                                                </span>
                                                            ) : (
                                                                <span className="text-transparent">
                                                                    <i className="mr-1 fas fa-square"></i>
                                                                    0
                                                                </span>
                                                            )}
                                                            {match.TarjetasRojasVisitante >
                                                            0 ? (
                                                                <span className="text-red-500 ml-1">
                                                                    <i className="mr-1 fas fa-square"></i>
                                                                    {
                                                                        match.TarjetasRojasVisitante
                                                                    }
                                                                </span>
                                                            ) : (
                                                                <span className="text-transparent ml-1">
                                                                    <i className="mr-1 fas fa-square"></i>
                                                                    0
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-gray-300 truncate">
                                                    <Link
                                                        href={`/resultados?partido=${match.partido}&torneo=${match.torneo}`}
                                                        className="text-neon-blue underline transition-colors duration-300 hover:text-green-600 hover:underline-glow"
                                                    >
                                                        Detalles Partido
                                                    </Link>
                                                </p>
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
