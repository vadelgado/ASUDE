import React from 'react';

const ContactBar = () => {
return (
    <div className="bg-green-800 text-[#a3a3a3] text-xs sm:text-sm  ">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center py-2 px-4">
            <div className="flex items-center mb-2 md:mb-0">
                <span className="mr-2">Háblanos por Whatsapp</span>
                <a href="https://wa.me/573183773718" className="hover:underline" target="_blank" rel="noopener noreferrer">(+57) 318-3773718</a>
            </div>
        </div>
    </div>
);
}

export default ContactBar;
