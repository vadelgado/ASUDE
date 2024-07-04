import React from "react";

const Carousel = () => {
    const image = {
        src: "/banner2.webp",
        alt: "Próximos Torneos",
        title: "Próximos Torneos",
        description: "Conoce los próximos torneos y regístrate para participar",
        button: "Ver Torneos",
        link: "/listarTorneos",
    };

    const handleButtonClick = (link) => {
        window.location.href = link;
    };

    return (
        <div className="relative w-full">
            <div className="relative overflow-hidden rounded-lg h-56 sm:h-72 md:h-96 lg:h-[36rem]">
                <div className="absolute w-full h-full">
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
                        <div className="relative flex items-center justify-center w-full h-full lg:justify-end">
                            <div
                                className="absolute top-0 hidden w-full h-full origin-top-left transform -rotate-45 left-1/2 lg:block"
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

                            <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center text-white lg:p-7 lg:text-right lg:items-start lg:mr-16">
                                <h2 className="relative order-2 mb-2 text-2xl font-bold sm:text-3xl md:text-6xl lg:order-1">
                                    {image.title}
                                </h2>
                                <p className="relative order-3 mb-4 text-sm font-semibold sm:text-base md:text-xl lg:order-2">
                                    {image.description}
                                </p>
                                <button
                                    className="relative self-center order-1 px-8 py-2 font-semibold text-white transition duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 hover:scale-105 hover:shadow-xl lg:self-end lg:order-3"
                                    onClick={() => handleButtonClick(image.link)}
                                >
                                    {image.button}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
