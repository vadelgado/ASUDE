import { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import Footer from "@/Components/DashBoard/Footer";

export default function Register({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        identificacion: "",
        name: "",
        email: "",
        celular: "",
        password: "",
        password_confirmation: "",
        role: "admin",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Registrar Administrador 💼
                </h2>
            }
        >
            <Head title="Registrar Administrador" />
            <div className="flex flex-col min-h-screen bg-gray-100">
                <main className="container flex-grow px-6 py-8 mx-auto">
                    <form onSubmit={submit} className="p-8 bg-white rounded-lg shadow-md">
                        <div className="mb-6">
                            <InputLabel
                                htmlFor="identificacion"
                                value="Identificación"
                            />
                            <TextInput
                                id="identificacion"
                                name="identificacion"
                                value={data.identificacion}
                                className="block w-full p-2 mt-1 border border-gray-300 rounded-lg"
                                autoComplete="identificacion"
                                onChange={(e) =>
                                    setData("identificacion", e.target.value)
                                }
                                required
                                type="number"
                            />
                            <InputError
                                message={errors.identificacion}
                                className="mt-2"
                            />
                        </div>

                        <div className="mb-6">
                            <InputLabel
                                htmlFor="name"
                                value="Nombre Completo"
                            />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="block w-full p-2 mt-1 border border-gray-300 rounded-lg"
                                autoComplete="name"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div className="mb-6">
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="block w-full p-2 mt-1 border border-gray-300 rounded-lg"
                                autoComplete="email"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mb-6">
                            <InputLabel htmlFor="celular" value="Celular" />
                            <TextInput
                                id="celular"
                                name="celular"
                                value={data.celular}
                                className="block w-full p-2 mt-1 border border-gray-300 rounded-lg"
                                autoComplete="celular"
                                onChange={(e) =>
                                    setData("celular", e.target.value.replace(/[^0-9]/g, ''))
                                }
                                required
                                type="tel"
                                pattern="[0-9]{10,15}" // Adjust pattern as needed
                            />
                            <InputError
                                message={errors.celular}
                                className="mt-2"
                            />
                        </div>

                        <div className="mb-6">
                            <InputLabel htmlFor="password" value="Contraseña" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="block w-full p-2 mt-1 border border-gray-300 rounded-lg"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mb-6">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirmar Contraseña"
                            />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="block w-full p-2 mt-1 border border-gray-300 rounded-lg"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password_confirmation", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div className="hidden">
                            <InputLabel htmlFor="role" value="Role" />
                            <TextInput
                                id="role"
                                name="role"
                                value="admin"
                                className="block w-full mt-1"
                                autoComplete="role"
                                onChange={(e) =>
                                    setData("role", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.role}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-end mt-6">
                            <PrimaryButton
                                className="px-6 py-3 text-white bg-blue-500 border border-transparent rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled={processing}
                            >
                                <i className="mr-2 fas fa-sign-in-alt"></i>{" "}
                                Registrar Administrador
                            </PrimaryButton>
                        </div>
                    </form>
                </main>
            </div>
            <Footer />
        </AuthenticatedLayout>
    );
}
