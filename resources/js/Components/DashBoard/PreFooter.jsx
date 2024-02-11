// PreFooter.jsx
import React from 'react';
import '@justinribeiro/lite-youtube';

const PreFooter = () => {
    const videoId = "N8C2tOdH-YA";

    return (
        <section className='w-full p-20 max-w-[1400px] mx-auto'>
            <h3 className='uppercase text-4xl tracking-wide text-center font-semibold mb-10 text-balance mx-auto sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>La paciencia y el tiempo hacen más que la fuerza y la violencia ⚽</h3>
            <lite-youtube
                className="shadow-2xl shadow-white/10 rounded-xl overflow-hidden relative z-10"
                videoid={videoId}
                videotitle="Futuras Estrellas"
                style={{ width: '100%', height: '100%' }}
            ></lite-youtube>
        </section>
    );
};

export default PreFooter;
