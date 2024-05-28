import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    {
      src: "/banner1.webp",
      alt: "Torneos en curso",
      title: "Torneos en curso",
      description: "¿Ya estás participando en algún torneo?",
      button: "Ver Resultados",
    },
    {
        src: "/banner2.webp",
        alt: "Próximos Torneos",
        title: "Próximos Torneos",
        description: "Aquí puedes ver los torneos que se realizarán próximamente",
        button: "Ver Torneos",
      },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 50000); // Cambia la imagen cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden rounded-lg h-56 sm:h-72 md:h-96 lg:h-[36rem]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={image.src} alt={image.alt} className="object-cover w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center bg-green-600 bg-opacity-50">
              <div className="text-center text-white p-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{image.title}</h2>
                <p className="mb-4 text-sm sm:text-base md:text-lg">{image.description}</p>
                <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded">
                  {image.button}
                </button>
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
          <span className="sr-only">Previous</span>
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
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
