import { useState } from "react";
import { Link } from "@inertiajs/react";
import {
    HomeIcon,
    UserGroupIcon,
    TrophyIcon,
    GameControllerIcon,
    UserCircleIcon,
    LogoutIcon,
} from "@heroicons/react/outline"; // Utilizando Heroicons

export default function Authenticated({ user, header, children }) {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 w-64 bg-orange-500 transition-transform transform ${showSidebar ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}>
                <div className="flex items-center justify-between h-16 px-4 bg-orange-600">
                    <HeaderLink checkActive={false} href="/" className="flex items-center">
                        <Logo className="w-auto h-12" />
                        <span className="ml-2 text-2xl font-bold text-white">Alianza Sureña</span>
                    </HeaderLink>
                    <button className="sm:hidden" onClick={() => setShowSidebar(!showSidebar)}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <nav className="px-4 pt-4">
                    <NavLink href={route("dashboard")} active={route().current("dashboard")} className="flex items-center px-4 py-2 text-white rounded-lg hover:bg-gray-600">
                        <HomeIcon className="w-6 h-6 mr-3" />
                        Inicio 🏠
                    </NavLink>
                    {user.role === "equipo" && (
                        <NavLink href={route("equiposInvitados.index")} active={route().current("equiposInvitados.index")} className="flex items-center px-4 py-2 text-white rounded-lg hover:bg-gray-600">
                            <UserGroupIcon className="w-6 h-6 mr-3" />
                            Mis Equipos ⚽
                        </NavLink>
                    )}
                    {user.role === "admin" && (
                        <>
                            <NavLink href={route("equipos.index")} active={route().current("equipos.index")} className="flex items-center px-4 py-2 text-white rounded-lg hover:bg-gray-600">
                                <UserGroupIcon className="w-6 h-6 mr-3" />
                                Mis Equipos ⚽
                            </NavLink>
                            <NavLink href={route("torneo.index")} active={route().current("torneo.index")} className="flex items-center px-4 py-2 text-white rounded-lg hover:bg-gray-600">
                                <TrophyIcon className="w-6 h-6 mr-3" />
                                Torneos 🏟
                            </NavLink>
                            <NavLink href={route("sistemaJuego.index")} active={route().current("sistemaJuego.index")} className="flex items-center px-4 py-2 text-white rounded-lg hover:bg-gray-600">
                                <GameControllerIcon className="w-6 h-6 mr-3" />
                                Sistema de Juego 🎲
                            </NavLink>
                        </>
                    )}
                </nav>
                <div className="px-4 pt-4 mt-4 border-t border-gray-200">
                    <Dropdown>
                        <Dropdown.Trigger>
                            <button className="flex items-center w-full px-4 py-2 text-lg font-medium text-left text-white bg-white bg-opacity-25 rounded-md hover:bg-opacity-50 focus:outline-none">
                                <UserCircleIcon className="w-6 h-6 mr-3" />
                                {user.name}
                            </button>
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <Dropdown.Link href={route("profile.edit")}>
                                Perfil 🧑
                            </Dropdown.Link>
                            <Dropdown.Link href={route("logout")} method="post" as="button">
                                <LogoutIcon className="w-6 h-6 mr-3" />
                                Cerrar Sesión 🚪
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
            </div>

            {/* Main content */}
            <div className="flex flex-col flex-1">
                <header className="flex items-center justify-between h-16 bg-white shadow sm:hidden">
                    <button className="p-4" onClick={() => setShowSidebar(!showSidebar)}>
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className="flex items-center">
                        <HeaderLink checkActive={false} href="/" className="relative z-10 flex lg:flex-1">
                            <Logo className="w-auto h-12" />
                            <span className="ml-2 text-2xl font-bold text-gray-800">Alianza Sureña</span>
                        </HeaderLink>
                    </div>
                </header>
                {header && (
                    <header className="bg-white shadow">
                        <div className="container px-4 py-6 mx-auto sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}
                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
        </div>
    );
}
