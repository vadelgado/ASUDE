import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Link } from "@inertiajs/react";
import FlyoutMenu from "@/Components/FlyoutMenu";
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
} from "@heroicons/react/20/solid";
import HeaderLink from "@/Components/DashBoard/HeaderLink";
import Logo from "@/Components/Logo";
import NavLink from "../NavLink";

const callsToAction = [
    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
    { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

/**
 * Renders the header component for the dashboard.
 *
 * @returns {JSX.Element} The rendered header component.
 */
/**
 * Componente que representa el encabezado de la página.
 *
 * @returns {JSX.Element} El encabezado de la página.
 */
export default function Header({ auth }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full px-6 z-50 bg-green-300 bg-opacity-25 h-24">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <HeaderLink
                    checkActive={false}
                    href="/"
                    className="relative z-10 flex lg:flex-1"
                >
                    <span className="sr-only">Alianza Sureña</span>
                    <Logo className="absolute h-16 w-auto m-auto blur-sm opacity-0 transition-opacity duration-300 hover:opacity-50" />
                    <Logo className="h-16 w-auto" />
                </HeaderLink>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">


                    <HeaderLink
                        href={route("torneo.listarTorneos")}
                        active={route().current("torneo.listarTorneos")}
                        className="text-sm font-semibold leading-6 text-black"
                    >
                        ⚽PRÓXIMOS TORNEOS
                    </HeaderLink>
                    <HeaderLink
                        href={route("torneoEnCurso.index")}
                        active={route().current("torneoEnCurso.index")}
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
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto backdrop-blur-sm bg-green-950 bg-opacity-40 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <HeaderLink
                            checkActive={false}
                            href="/"
                            className="relative z-10 flex lg:flex-1 h-16"
                        ></HeaderLink>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-black"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    href={route("torneo.listarTorneos")}
                                    active={route().current(
                                        "torneo.listarTorneos"
                                    )}
                                >
                                    ⚽PRÓXIMOS TORNEOS
                                </Link>
                                <FlyoutMenu auth={auth} />
                            </div>                         

                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
