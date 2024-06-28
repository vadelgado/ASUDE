import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
    ChevronDownIcon,
} from "@heroicons/react/20/solid";

import { Link, Head } from "@inertiajs/react";
import HeaderLink from "@/Components/DashBoard/HeaderLink";

export default function FlyoutMenu({ auth }) {
    return (
        <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                <span className="hover:underline">Alianza Sureña</span>
                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </Popover.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                    <div className="max-w-max flex-auto overflow-hidden rounded-3xl bg-green-300 bg-opacity-25 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                            {auth.user ? (
                                <HeaderLink
                                    href={route("dashboard")}
                                    className="text-sm font-semibold leading-6 text-black hover:underline"
                                >
                                    Panel Inicio{" "}
                                    <span aria-hidden="true">&rarr;</span>
                                </HeaderLink>
                            ) : (
                                <>
                                    <div>
                                        <Link
                                            href={route("login")}
                                            className="text-sm font-semibold leading-6 text-black hover:underline"
                                        >
                                            Iniciar Sesión
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            href={route("register")}
                                            className="text-sm font-semibold leading-6 text-black hover:underline"
                                        >
                                            Registrarse{" "}
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
}
