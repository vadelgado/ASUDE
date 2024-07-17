import React, { useState } from 'react';

const Bento = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <style>
        {`
          .bento-img {
            border-radius: 8px;
            box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
            width: 100%;
            height: auto;
            transition: transform .3s, box-shadow .3s;
            object-fit: cover;
            max-height: 200px;
            cursor: pointer;
            position: relative;
          }
          .bento-img:hover {
            transform: scale(1.05);
            box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.2);
          }
          .bento-caption {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(0, 0, 0, 0.7);
            color: #fff;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 14px;
            display: none;
            transition: opacity .3s;
          }
          .bento-img:hover + .bento-caption {
            display: block;
            opacity: 1;
          }
        `}
      </style>
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { src: '/Bento/osbol.webp', alt: 'Osbol Marketing Deportivo', link: 'https://www.facebook.com/profile.php?id=853397289' },
            { src: '/Bento/fortaleza.webp', alt: 'Fortaleza Tienda Deportiva', link: 'https://www.facebook.com/profile.php?id=61552098326569' },
            { src: '/Bento/paisitas.webp', alt: 'Los Paisitas', link: 'https://festivaldefestivales.com' },
            { src: '/Bento/Baby.webp', alt: 'Baby Futbol', link: 'https://festivaldefestivales.com/festivales/futbol/' },
            { src: '/Bento/festival.webp', alt: 'Festival Festivales', link: 'https://www.facebook.com/CDLosPaisitas/?locale=es_LA' },
            { src: '/Bento/liganarino.webp', alt: 'Liga Nariño', link: 'https://www.facebook.com/ligafutbolnarino/' },
            { src: '/Bento/futurasEstrellas.webp', alt: 'Futuras Estrellas', link: 'https://www.facebook.com/oscararmando.futurasestrellas?locale=es_LA' },
            { src: '/Bento/chiquifutbol.webp', alt: 'Chiquifutbol Vigor', link: 'https://www.facebook.com/VigorColombia/?locale=es_LA' },
            { src: '/Bento/cafe.webp', alt: 'Copa del Cafe', link: 'https://www.facebook.com/stories/3625459694369756/?source=profile_highlight&locale=es_ES' }
          ].map((image, index) => (
            <div
              className="relative w-full p-2 sm:w-1/2 md:w-1/3"
              key={index}
            >
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img
                  className={`bento-img ${hoveredIndex === index ? 'transform scale-110' : ''}`}
                  src={image.src}
                  alt={image.alt}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
                {hoveredIndex === index && (
                  <div className="bento-caption">
                    Ir a {image.alt}
                  </div>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bento;
