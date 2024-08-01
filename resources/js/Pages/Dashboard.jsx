import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/DashBoard/Footer";

const menuItems = [
    { title: "Inicio", iconClass: "fa-solid fa-house", route: "dashboard", color: "bg-blue-500" },
    { 
        title: "Mis Equipos", 
        iconClass: "fa-solid fa-users", 
        route: "equipos.index", 
        color: "bg-green-500", 
        roles: ["admin", "equipo"],
        alternativeRoute: "equiposInvitados.index"
    },
    { title: "Pre-Torneos", iconClass: "fa-solid fa-trophy", route: "preTorneos.index", color: "bg-red-500", roles: ["admin"] },
    { title: "Torneos", iconClass: "fa-solid fa-trophy", route: "torneo.index", color: "bg-red-500", roles: ["admin"] },
    { title: "Sistema de Juego", iconClass: "fa-solid fa-puzzle-piece", route: "sistemaJuego.index", color: "bg-yellow-500", roles: ["admin"] }
];

function UserInfo({ user }) {
    return (
        <div className="p-6 text-gray-900">
            <h3 className="mb-4 text-2xl font-semibold">
                Bienvenido, {user.name}
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                <div>
                    <p className="mb-2">Celular:</p>
                    <p className="text-lg font-medium">{user.celular}</p>
                </div>
                <div>
                    <p className="mb-2">Email:</p>
                    <p className="text-lg font-medium">{user.email}</p>
                </div>
                <div>
                    <p className="mb-2">Identificación:</p>
                    <p className="text-lg font-medium">{user.identificacion}</p>
                </div>
                <div>
                    <p className="mb-2">Rol:</p>
                    <p className="text-lg font-medium">{user.role}</p>
                </div>
            </div>
        </div>
    );
}

function WindowsMenu({ user }) {
    return (
        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
            {menuItems
                .filter(item => !item.roles || item.roles.includes(user.role))
                .map((item, index) => {
                    let routeName = item.route;
                    if (item.title === "Mis Equipos" && user.role === "equipo") {
                        routeName = item.alternativeRoute;
                    }

                    return (
                        <a
                            key={index}
                            href={route(routeName)}
                            className={`flex items-center justify-center h-32 rounded-lg shadow-lg text-white ${item.color} hover:bg-opacity-75 transition duration-300`}
                        >
                            <div className="text-center">
                                <i className={`${item.iconClass} text-4xl mb-2`}></i>
                                <p className="text-lg font-semibold">{item.title}</p>
                            </div>
                        </a>
                    );
                })}
        </div>
    );
}

export default function Dashboard({ auth }) {
    if (!auth || !auth.user) {
        return <div>Error: Usuario no autenticado.</div>;
    }


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Inicio
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-full mx-auto space-y-6 sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <UserInfo user={auth.user} />
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <WindowsMenu user={auth.user} />
                    </div>
                </div>
            </div>
            <Footer />
        </AuthenticatedLayout>
    );
}
