import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/DashBoard/Footer";

function UserInfo({ user }) {
    return (
        <div className="p-6 text-gray-900">
            <h3 className="text-2xl font-semibold mb-4">
                Bienvenido {user.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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

export default function Dashboard({ auth }) {
    if (!auth || !auth.user) {
        return <div>Error: Usuario no autenticado.</div>;
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Inicio
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/* Usando el componente UserInfo para mostrar la información del usuario */}
                        <UserInfo user={auth.user} />
                    </div>
                </div>
            </div>
            <Footer />
        </AuthenticatedLayout>
    );
}
