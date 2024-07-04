// PreFooter.jsx
import React from 'react';
import '@justinribeiro/lite-youtube';

const PreFooter = () => {
    const videoId = "dHl55OYa0hA";

    return (
        <section className='w-full p-20 max-w-[1400px] mx-auto'>
            {/* <h3 className='mx-auto mb-10 text-4xl font-semibold tracking-wide text-center uppercase text-balance sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>La paciencia y el tiempo hacen más que la fuerza y la violencia ⚽</h3> */}
            <lite-youtube
                className="relative z-10 overflow-hidden shadow-2xl shadow-white/10 rounded-xl"
                videoid={videoId}
                videotitle="Futuras Estrellas"
                style={{ width: '100%', height: '100%' }}
            ></lite-youtube>
        </section>
    );
};

export default PreFooter;
