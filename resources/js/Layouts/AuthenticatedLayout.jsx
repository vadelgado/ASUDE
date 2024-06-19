import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import HeaderLink from "@/Components/DashBoard/HeaderLink";
import Logo from "@/Components/Logo";

import { Link } from "@inertiajs/react";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-orange-400 border-b border-gray-100">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex items-center shrink-0">
                                <HeaderLink
                                    checkActive={false}
                                    href="/"
                                    className="relative z-10 flex lg:flex-1"
                                >
                                    <span className="sr-only">
                                        Alianza Sureña
                                    </span>
                                    <Logo className="absolute w-auto h-16 m-auto transition-opacity duration-300 opacity-0 blur-sm hover:opacity-50" />
                                    <Logo className="w-auto h-16" />
                                </HeaderLink>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route("dashboard")}
                                    active={route().current("dashboard")}
                                >
                                    Dashboard
                                </NavLink>
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                {user.role === "acudiente" && (
                                    <NavLink
                                        href={route("alumno.index")}
                                        active={route().current("alumno.index")}
                                    >
                                        Alumnos
                                    </NavLink>
                                )}
                                {user.role === "admin" && (
                                    <NavLink
                                        href={route("alumno.indexAdmin")}
                                        active={route().current(
                                            "alumno.indexAdmin"
                                        )}
                                    >
                                        Alumnos
                                    </NavLink>
                                )}
                                {user.role === "equipo" && (
                                    <NavLink
                                        href={route("equiposInvitados.index")}
                                        active={route().current(
                                            "equiposInvitados.index"
                                        )}
                                    >
                                        Mis Equipos 📝
                                    </NavLink>
                                )}
                                {user.role === "admin" && (
                                    <NavLink
                                        href={route("equipos.index")}
                                        active={route().current(
                                            "equipos.index"
                                        )}
                                    >
                                        Mis Equipos 📝
                                    </NavLink>
                                )}
                            </div>
                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                {user.role === "acudiente" && (
                                    <NavLink
                                        href={route("comprobantes.index")}
                                        activate={
                                            route().current(
                                                "comprobantes.index"
                                            )
                                                ? "true"
                                                : "false"
                                        }
                                    >
                                        Comprobantes
                                    </NavLink>
                                )}
                                {user.role === "admin" && (
                                    <NavLink
                                        href={route("comprobantes.indexAdmin")}
                                        active={route().current(
                                            "comprobantes.indexAdmin"
                                        )}
                                    >
                                        Comprobantes
                                    </NavLink>
                                )}{user.role === "admin" && (
                                    <NavLink
                                        href={route("amonestacionesTC.index")}
                                        active={route().current(
                                            "amonestacionesTC.index"
                                        )}
                                    >
                                        Amonestaciones
                                    </NavLink>
                                )}
                                {user.role === "admin" && (
                                    <NavLink
                                        href={route("torneo.index")}
                                        active={route().current("torneo.index")}
                                    >
                                        Torneos
                                    </NavLink>
                                )}
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="flex items-center -me-2 sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                            >
                                <svg
                                    className="w-6 h-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("alumno.index")}
                            active={route().current("alumno.index")}
                        >
                            Alumnos
                        </ResponsiveNavLink>
                    </div>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("comprobantes.index")}
                            active={route().current("comprobantes.index")}
                        >
                            Pagos
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
