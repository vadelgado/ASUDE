import { Fragment, useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import FlyoutMenu from "@/Components/FlyoutMenu";
import { Bars3Icon, XMarkIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import HeaderLink from "@/Components/DashBoard/HeaderLink";
import Logo from "@/Components/Logo";

const callsToAction = [
    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
    { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

/**
 * Componente de encabezado de la página.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} props.auth - Indica si el usuario está autenticado.
 * @returns {JSX.Element} Elemento JSX que representa el encabezado.
 */

export default function Header({ auth }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-[#2E8B57] h-30">
            <div className="bg-[#46C655] text-[#000000] text-xs sm:text-sm">
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
            <nav
                className="flex items-center justify-between p-6 mx-auto max-w-7xl px-7 lg:px-8"
                aria-label="Global"
            >
                <HeaderLink
                    checkActive={false}
                    href="/"
                    className="relative z-10 flex lg:flex-1"
                >
                    <span className="sr-only">Alianza Sureña</span>
                    <Logo className="absolute w-auto h-16 m-auto transition-opacity duration-300 opacity-0 blur-sm hover:opacity-50" />
                    <Logo className="w-auto h-16" />
                </HeaderLink>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Abri Menu</span>
                        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <HeaderLink
                        href={route("torneo.listarTorneos")}
                        active={route().current("torneo.listarTorneos") ? "true" : undefined}
                        className="text-sm font-semibold leading-6 text-black"
                    >
                        ⚽PRÓXIMOS TORNEOS
                    </HeaderLink>
                    <HeaderLink
                        href={route("torneoEnCurso.index")}
                        active={route().current("torneoEnCurso.index") ? "true" : undefined}
                        className="text-sm font-semibold leading-6 text-black"
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
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto backdrop-blur-sm bg-green-950 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <HeaderLink
                            checkActive={false}
                            href="/"
                            className="relative z-10 flex h-16 lg:flex-1"
                        >
                            
                        </HeaderLink>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-black"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="flow-root mt-20">
                        <div className="divide-y divide-gray-500/10">
                            <div className="space-y-2">
                                <Link
                                    href={route("torneo.listarTorneos")}
                                    className="block px-4 text-base font-medium text-black hover:bg-gray-50"
                                >
                                    ⚽PRÓXIMOS TORNEOS
                                </Link>
                                <Link
                                    href={route("torneoEnCurso.index")}
                                    className="block px-4 text-base font-medium text-black hover:bg-gray-50"
                                >
                                    ⚽TORNEO EN CURSO2
                                </Link>
                                <FlyoutMenu auth={auth} />
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
            <nav className="fixed bottom-0 left-0 right-0 bg-[#46C655] text-white py-3 flex justify-around items-center md:hidden">
 
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
