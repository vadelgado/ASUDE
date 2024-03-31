import React from 'react';

const Title = ({arriba, abajo}) =>{
    return (
        <>
        <br /><br />
            <h1 className="font-black uppercase text-3xl md:text-5xl lg:text-7xl text-center py-8 px-4 mt-8 text-green-700">
            {arriba}
                <span className="block text-[36px] md:text-[58px]">
                    {abajo}
                </span>
            </h1>
        </>
    );
};

export default Title;
