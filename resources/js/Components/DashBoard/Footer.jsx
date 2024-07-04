import React from 'react';

const Footer = () => {
    return (      
        <footer className="mt-24 bg-black/40">
            <div className="w-full max-w-screen-xl p-4 px-6 py-6 mx-auto lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="flex flex-col mb-6 md:mb-0">
                        <a href="/" className="flex items-center justify-center -mt-14">
                            <img className="w-40 h-auto max-w-full" src="/logo-footer.webp" alt="Logo Futuras Estrellas" />                  
                        </a>  
                        <div className='flex justify-center mt-4 gap-x-2'>
                            <a href="https://www.facebook.com/oscararmando.futurasestrellas" target="_blank" className="text-gray-500 hover:text-white">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="https://wa.me/+573183773718" target="_blank" className="text-gray-500 hover:text-white ms-5">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                    <path d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm4.5 14.5h-9v-1.5h1.5v-1.5H6v-1.5h1.5v-1.5H6v-1.5h1.5V6H6V4.5h9v9zm0-10.5h-1.5V3h-1.5V1.5h-1.5V3h-1.5V1.5H6v3h9v1.5z"/>
                                </svg>
                                <span className="sr-only">WhatsApp page</span>
                            </a>
                        </div>            
                    </div>


                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2024 <a href="https://flowbite.com/" className="hover:underline">Alianza Sureña™</a>.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://wa.me/+573183773718" target="_blank" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm4.5 14.5h-9v-1.5h1.5v-1.5H6v-1.5h1.5v-1.5H6v-1.5h1.5V6H6V4.5h9v9zm0-10.5h-1.5V3h-1.5V1.5h-1.5V3h-1.5V1.5H6v3h9v1.5z"/>
                            </svg>
                            <span className="sr-only">WhatsApp page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;