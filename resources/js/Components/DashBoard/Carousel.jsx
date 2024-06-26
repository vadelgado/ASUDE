import React, { useState, useEffect } from "react";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        {
            src: "/banner1.webp",
            alt: "Torneos en curso",
            title: "Torneos en curso",
            description: "Conoce los torneos en curso y sigue los resultados",
            button: "Ver Resultados",
        },
        {
            src: "/banner2.webp",
            alt: "Próximos Torneos",
            title: "Próximos Torneos",
            description:
                "Conoce los próximos torneos y regístrate para participar",
            button: "Ver Torneos",
        },
    ];

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setActiveIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full" data-carousel="static">
            {/* Carousel wrapper */}
            <div className="relative overflow-hidden rounded-lg h-56 sm:h-72 md:h-96 lg:h-[36rem]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                            index === activeIndex ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
                            <div className="relative w-full h-full flex items-center justify-center lg:justify-end">
                                <div
                                    className="absolute left-1/2 top-0 h-full w-full transform -rotate-45 origin-top-left hidden lg:block"
                                    style={{
                                        width: "150%",
                                        height: "200%",
                                        backgroundImage:
                                            "linear-gradient(290deg, rgb(112, 178, 38) 55%, rgba(0, 0, 0, 0.23) 47%)",
                                        color: "#333",
                                        lineHeight: "24px",
                                    }}
                                ></div>
                                <div className="absolute inset-x-0 bottom-0 h-80 sm:h-2/3 bg-gradient-to-t from-black via-transparent to-transparent lg:inset-0 lg:bg-none"></div>

                                <div className="relative z-10 p-6  lg:p-7 text-center lg:text-right text-white flex flex-col items-center lg:items-start justify-center h-full lg:mr-16">
                                    <h2 className="relative text-2xl sm:text-3xl md:text-6xl font-bold mb-2  order-2 lg:order-1">
                                        {image.title}
                                    </h2>
                                    <p className="relative font-semibold mb-4 text-sm sm:text-base md:text-xl  order-3 lg:order-2">
                                        {image.description}
                                    </p>
                                    <button className="relative bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold py-2 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl self-center lg:self-end order-1 lg:order-3">
                                        {image.button}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={prevSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 focus:ring-4 focus:ring-gray-800 focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1L1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Anterior</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={nextSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 focus:ring-4 focus:ring-gray-800 focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Siguiente</span>
                </span>
            </button>
        </div>
    );
};

export default Carousel;
