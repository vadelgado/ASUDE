import React from 'react';

const WhatsappButton = ({ torneo }) => {
    const handleClick = () => {
        window.open(`https://wa.me/3183773718?text=Hola%20quiero%20participar%20en%20el%20torneo%20${torneo.nombreTorneo}`, '_blank');
    };

    return (
        <button onClick={handleClick}>
            <h6 className='text-green-700'>Más Información</h6>
            <img className="max-w-full h-auto w-20" src="/whatsapp-icon.webp" alt="Logo WhatsApp" />               
        </button>
    );
};

export default WhatsappButton;
