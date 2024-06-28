import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import FlyoutMenu from "@/Components/FlyoutMenu";
import { Bars3Icon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import HeaderLink from "@/Components/DashBoard/HeaderLink";
import Logo from "@/Components/Logo";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Asegúrate de importar FontAwesome CSS

const callsToAction = [
    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
    { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Header({ auth }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-green-700 h-36 ">
            <div className="bg-green-500 text-black text-xs sm:text-sm">
                <div className="container flex flex-col items-center justify-center px-4 py-2 mx-auto md:flex-row">
                    <div className="flex items-center mb-2 md:mb-0">
                        <span className="mr-2">
                            <i className="fa-brands fa-whatsapp"></i>{" "}
                            <span className="font-bold">Contáctenos por Whatsapp</span>
                        </span>
                        <a
                            href="https://wa.me/573183773718"
                            className="hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            (+57) 318-3773718
                        </a>
                    </div>
                </div>
            </div>
            <nav className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
                <HeaderLink
                    checkActive={false}
                    href="/"
                    className="relative z-10 flex lg:flex-1"
                >
                    <span className="sr-only">Alianza Sureña</span>
                    <Logo className="w-auto h-12 sm:h-16" />
                </HeaderLink>

                <div className="flex lg:hidden">
                    {!mobileMenuOpen && (
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Abrir menú</span>
                            <Bars3Icon className="w-8 h-8" aria-hidden="true" />
                        </button>
                    )}
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <HeaderLink
                        href={route("torneo.listarTorneos")}
                        active={route().current("torneo.listarTorneos") ? "true" : undefined}
                        className="text-sm font-semibold leading-6 text-white"
                    >
                        ⚽PRÓXIMOS TORNEOS
                    </HeaderLink>
                    <HeaderLink
                        href={route("torneoEnCurso.index")}
                        active={route().current("torneoEnCurso.index") ? "true" : undefined}
                        className="text-sm font-semibold leading-6 text-white"
                    >
                        ⚽TORNEO EN CURSO
                    </HeaderLink>
                    <FlyoutMenu auth={auth} />
                </Popover.Group>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10 bg-black bg-opacity-25" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-green-700 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <HeaderLink
                            checkActive={false}
                            href="/"
                            className="relative z-10 flex h-16 lg:flex-1"
                        >
                            <Logo className="w-auto h-12 sm:h-16" />
                        </HeaderLink>
                        <button
                            type="button"
                            className="mt-36 rounded-full p-2.5 text-white bg-red-500 hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Cerrar menú</span>
                            
                             <i className="fa-solid fa-circle-xmark w-6 h-6" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="flow-root mt-6">
                        <div className="divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                            <Link
                                    href="/"
                                    className="block px-4 text-base font-medium text-white hover:bg-green-600"
                                >
                                    🏠INICIO
                                </Link>
                                <Link
                                    href={route("torneo.listarTorneos")}
                                    className="block px-4 text-base font-medium text-white hover:bg-green-600"
                                >
                                    ⚽PRÓXIMOS TORNEOS
                                </Link>
                                <FlyoutMenu auth={auth} />
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
            <nav className="fixed bottom-0 left-0 right-0 bg-green-500 text-white py-3 flex justify-around items-center md:hidden">
                <a href="tel:+573183773718" className="flex flex-col items-center">
                    <PhoneIcon className="w-6 h-6 mb-1" aria-hidden="true" />
                    <span className="text-xs">Llamar</span>
                </a>
                <a href="https://wa.me/573183773718" className="flex flex-col items-center">
                    <ArrowPathIcon className="w-6 h-6 mb-1" aria-hidden="true" />
                    <span className="text-xs">WhatsApp</span>
                </a>
            </nav>
        </header>
    );
}
