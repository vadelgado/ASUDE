import React from 'react';

const Footer = () => {
    return (      
        <footer className="bg-black/40 mt-24">
            <div className="mx-auto w-full max-w-screen-xl p-4 px-6 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 flex flex-col md:mb-0">
                        <a href="/" className="-mt-14 flex items-center justify-center">
                            <img className="max-w-full h-auto w-40" src="/logo-footer.webp" alt="Logo Futuras Estrellas" />                  
                        </a>  
                        <div className='flex justify-center gap-x-2 mt-4'>
                            <a href="https://www.facebook.com/oscararmando.futurasestrellas" target="_blank" className="text-gray-500 hover:text-white">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            {/* <a href="#" target="_blank" className="text-gray-500 hover:text-white ms-5">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 20">
                                    <path d="M23.5 3.7c-.3-1.1-1.2-1.9-2.3-2.2C19.5 1 12 1 12 1S4.5 1 2.8 1.5C1.7 1.8.8 2.6.5 3.7 .1 5.4 .1 10 .1 10s0 4.6.4 6.3c.3 1.1 1.2 1.9 2.3 2.2C4.5 19 12 19 12 19s7.5 0 9.2-.5c1.1-.3 2-1.1 2.3-2.2.4-1.7.4-6.3.4-6.3s0-4.6-.4-6.3ZM9.5 14.5V5.5l7 4.5-7 4.5Z"/>
                                </svg>
                                <span className="sr-only">Canal Youtobe</span>
                            </a> */}
                            <a href="https://wa.me/+573183773718" target="_blank" className="text-gray-500 hover:text-white ms-5">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                    <path d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm4.5 14.5h-9v-1.5h1.5v-1.5H6v-1.5h1.5v-1.5H6v-1.5h1.5V6H6V4.5h9v9zm0-10.5h-1.5V3h-1.5V1.5h-1.5V3h-1.5V1.5H6v3h9v1.5z"/>
                                </svg>
                                <span className="sr-only">WhatsApp page</span>
                            </a>
                        </div>            
                    </div>

                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                                Legal
                            </h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/" className="hover:underline">
                                        Aviso Legal
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">
                                        Privacidad
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">
                                        Cookies
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                                Wep Map
                            </h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/" className="hover:underline">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">
                                        Info
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="hover:underline">
                                        Archivo
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                                Legal
                            </h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Politicas Privacidad
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Terminos &amp; Condiciones
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div> */}
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