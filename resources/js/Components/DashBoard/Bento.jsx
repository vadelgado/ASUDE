import React, { useState } from 'react';

const Bento = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '32px',
    flexWrap: 'wrap',
  };

  const imageStyle = {
    borderRadius: '8px',
    boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.1)',
    width: '100%',
    height: '100%',
    maxWidth: '100%', // Ajusta el tamaño máximo al ancho del contenedor
    transition: '.3s',
  };

  const imgHoverStyle = {
    transform: 'scale(1.1)',
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div style={containerStyle}>

      <img
        style={{ ...imageStyle, ...(hoveredIndex === 0 && imgHoverStyle) }}
        src="/2.png"
        alt="BabyFutbolFemenino"
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      />
      <img
        style={{ ...imageStyle, ...(hoveredIndex === 1 && imgHoverStyle) }}
        src="/BabyFutbolSala.webp"
        alt="BabyFutbolSala"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      />
      <img
        style={{ ...imageStyle, ...(hoveredIndex === 2 && imgHoverStyle) }}
        src="/1.png"
        alt="BabyFutbolMasculino"
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      />
      <img
        style={{ ...imageStyle, ...(hoveredIndex === 3 && imgHoverStyle) }}
        src="/BabyMicro.webp"
        alt="BabyMicro"
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default Bento;
