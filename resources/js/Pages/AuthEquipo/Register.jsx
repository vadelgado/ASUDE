import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        identificacion: "",
        name: "",
        email: "",
        celular: "",
        password: "",
        password_confirmation: "",
        role: "equipo",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="⚽Registro Encargado Equipo" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel
                        htmlFor="identificacion"
                        value="Identificación"
                    />

                    <TextInput
                        id="identificacion"
                        name="identificacion"
                        value={data.identificacion}
                        className="mt-1 block w-full"
                        autoComplete="identificacion"
                        isFocused={true}
                        onChange={(e) =>
                            setData("identificacion", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.identificacion}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel htmlFor="name" value="Nombre Completo" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="celular" value="Celular" />

                    <TextInput
                        id="celular"
                        name="celular"
                        value={data.celular}
                        className="mt-1 block w-full"
                        autoComplete="celular"
                        onChange={(e) => setData("celular", e.target.value)}
                        required
                    />

                    <InputError message={errors.celular} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Contraseña" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirmar Contraseña"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
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

                <div className="mt-4" style={{ display: "none" }}>
                    <InputLabel htmlFor="role" value="Role" />

                    <TextInput
                        id="role"
                        name="role"
                        value="equipo"
                        className="mt-1 block w-full"
                        autoComplete="role"
                        onChange={(e) => setData("role", e.target.value)}
                        required
                    />

                    <InputError message={errors.role} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="bg-blue-500 text-white hover:bg-blue-700 hover:text-shadow-md rounded-full py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <i className="fas fa-sign-in-alt mr-2"></i> Iniciar Sesión
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Registrar Encargado
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
