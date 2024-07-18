import { Link } from "@inertiajs/react";
import Logo from "@/Components/Logo";

export default function Footer() {
    return (
        <footer className="mt-24 text-white bg-green-700">
            <div className="w-full max-w-screen-xl p-4 px-6 py-6 mx-auto lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="flex flex-col mb-6 md:mb-0">
                        <Link href="/" className="flex items-center justify-center -mt-24">
                            <img className="w-auto h-40" src="/logo-footer.webp" alt="LogoFooter" />
                        </Link>
                        <div className="flex justify-center mt-4 gap-x-2">
                            <a href="https://www.facebook.com/oscarbolanoscastro" target="_blank" className="text-gray-500 hover:text-white">
                            <img src="/facebook.png" alt="Logo facebook" className="w-6 h-6"/>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="https://wa.me/+573183773718" target="_blank" className="text-gray-500 hover:text-white ms-5">
                                <img src="/whatsapp.png" alt="Logo whatsapp" className="w-6 h-6"/>
                                <span className="sr-only">WhatsApp page</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:space-x-8">
                        <Link href="/" className="mb-2 md:mb-0 hover:text-gray-300">
                        🏠 Inicio
                        </Link>
                        <Link  href={route("torneo.listarTorneos")}  className="mb-2 md:mb-0 hover:text-gray-300">
                        📅 Próximos Torneos
                        </Link>
                        <Link  href={route("torneo.torneosIniciados")}  className="mb-2 md:mb-0 hover:text-gray-300">
                        ⚡ Torneos en Curso
                        </Link>  
                        <Link  href={route("torneo.finalizadosTorneos")}  className="mb-2 md:mb-0 hover:text-gray-300">
                        🏁 Torneos Finalizados
                        </Link>                          
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                <div className="mb-4 text-center md:mb-0 md:text-left">
                        <p className="mb-2">
                            © 2024 Alianza Sureña. Todos los derechos reservados.
                        </p>
                        <p className="mb-2">
                            Este proyecto está licenciado bajo la <a href="/LICENSE" className="underline hover:text-gray-300">Licencia Apache 2.0</a>.
                        </p>
                        <p>
                            Desarrollado por Victor Alfonso Delgado Bolaños{" "}
                            <a
                                href="https://www.linkedin.com/in/v%C3%ADctor-alfonso-83046184/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-300"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>{" "}
                            como parte de su pasantía en la empresa Alianza Sureña.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:space-x-4">
                        <Link href={route("politicasPrivacidad.index")} className="mb-2 md:mb-0 hover:text-gray-300">
                            Política de privacidad
                        </Link>
                        <Link href={route("terminosCondiciones.index")}className="mb-2 md:mb-0 hover:text-gray-300">
                            Términos y condiciones
                        </Link>
                        <Link href={route("PoliticaCokies.index")} className="mb-2 md:mb-0 hover:text-gray-300">
                            Aviso de cookies
                        </Link>
                    </div>
                    <br />
                    <br  />
                </div>
            </div>
        </footer>
    );
}
