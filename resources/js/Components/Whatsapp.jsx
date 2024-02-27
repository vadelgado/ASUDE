import React from 'react';

const WhatsappButton = ({ torneo }) => {
    const handleClick = () => {
        window.open(`https://wa.me/3183773718?text=Hola%20quiero%20participar%20en%20el%20torneo%20${torneo.nombreTorneo}`, '_blank');
    };

    return (
        <button onClick={handleClick}>
            <img className="max-w-full h-auto w-20" src="/whatsapp-icon.webp" alt="Logo Futuras Estrellas" />   
            Chat de WhatsApp
        </button>
    );
};

export default WhatsappButton;
