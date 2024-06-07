import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import WarningButton from "@/Components/WarningButton";
import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import Swal from "sweetalert2";
import TextInput from "@/Components/TextInput";
import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";

export default function Index({ auth, jornadaPartidos, torneo }) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const fechaJornadaInput = useRef();
    
    const jornadaInput = useRef();
    const {
        data,
        setData,
        delete: destroy,
        post,
        put,
        processing,
        reset,
        errors,
    } = useForm({
        id: "",
        fechaJornada: "",
        fk_torneo: torneo[0].id, 
        jornada: "",
    });

    const openModal = (op, id, fechaJornada, fk_torneo,  jornada) => {
        setModal(true);
        setOperation(op);
        setData({
            fechaJornada: fechaJornada,
            fk_torneo: torneo[0].id,
            jornada: jornada,
        });
        if (op === 1) {
            setTitle("Nueva Jornada");
            setData({
                id: "",
                fechaJornada: "",
                fk_torneo: torneo[0].id,
                jornada: "",
            });
        } else {
            setTitle("Editar Jornada");
            setData({
                id: id,
                fechaJornada: fechaJornada,
                fk_torneo: torneo[0].id,
                jornada: jornada,
            });
        }
    };

    const closeModal = () => {
        setModal(false);
        reset();
    };

    const save = (e) => {
        e.preventDefault();
        if (operation === 1) {
            post(route("jornadaPartido.store"), {
                onSuccess: () => {
                    closeModal();
                    ok("Jornada creada");
                },

                onError: () => {
                    if (errors.fechaJornada) {
                        fechaJornadaInput.current.focus();
                    } else if (errors.jornada) {
                        jornadaInput.current.focus();
                    }
                },
            });
        } else {
            put(route("jornadaPartido.update", data.id), {
                onSuccess: () => {
                    closeModal();
                    ok("Jornada actualizada");
                },

                onError: () => {
                    if (errors.fechaJornada) {
                        fechaJornadaInput.current.focus(); 
                    } else if (errors.jornada) {
                        jornadaInput.current.focus();
                    }
                },
            });
        }
    };

    const ok = (mensaje) => {
        closeModal();
        Swal.fire({ title: mensaje, icon: "success" });
    };

    const eliminar = (id) => {
        const alerta = Swal.mixin({ buttonsStyling: true });
        alerta
            .fire({
                title: "¿Estás seguro?",
                text: "No podrás revertir esto!",
                icon: "question",
                showCancelButton: true,
                confirmButtonText:
                    '<i class="fa-solid fa-check"></i> Si, eliminarlo!',
                cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancelar!',
            })
            .then((result) => {
                if (result.isConfirmed) {
                    destroy(route("jornadaPartido.destroy", id), {
                        onSuccess: () => {
                            ok("Jornada eliminada");
                        },
                    });
                }
            });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    {" "}
                    🕛 Jornadas de Juego para la Primera Ronda del torneo {torneo[0].nombreTorneo}  {torneo[0].fechaInicio} al {torneo[0].fechaFin}
                </h2>
            }
        >
            <Head title=" 🕛 Jornadas" />

            <div className="grid py-6 bg-white v-screen place-items-center">
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Primera Ronda
                </h2>
            </div>

            <div className="grid py-6 overflow-x-auto bg-white v-screen place-items-center">
                <div className="grid py-6 bg-white v-screen place-items-center">
                    <PrimaryButton onClick={() => openModal(1)}>
                        <i className="fa-solid fa-plus-circle">Añadir</i>
                    </PrimaryButton>
                </div>
                <div className="grid py-6 bg-white v-screen place-items-center">
                    <table className="items-center table text-center border border-gray-400 rounded-t-lg rounded-bl-lg rounded-br-lg table-auto">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-2 py-2">#</th>
                                <th className="px-2 py-2">Fecha</th> 
                                <th className="px-2 py-2">Jornada</th>
                                <th className="px-2 py-2">Editar</th>
                                <th className="px-2 py-2">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jornadaPartidos.length > 0 ? (
                                jornadaPartidos.map((jornadaPartido, index) => (
                                    <tr key={jornadaPartido.id}>
                                        <td className="px-2 py-2 border border-gray-400">
                                            {index + 1}
                                        </td>
                                        <td className="px-2 py-2 border border-gray-400">
                                            {jornadaPartido.fechaJornada}
                                        </td>

                                        <td className="px-2 py-2 border border-gray-400">
                                            {jornadaPartido.jornada}
                                        </td>
                                        <td className="px-2 py-2 border border-gray-400">
                                            <WarningButton
                                                onClick={() =>
                                                    openModal(
                                                        2,
                                                        jornadaPartido.id,
                                                        jornadaPartido.fechaJornada,
                                                        jornadaPartido.fk_torneo,
                                                        jornadaPartido.jornada
                                                    )
                                                }
                                            >
                                                <i className="fa-solid fa-pencil"></i>
                                            </WarningButton>
                                        </td>
                                        <td className="px-2 py-2 border border-gray-400">
                                            <DangerButton
                                                onClick={() =>
                                                    eliminar(jornadaPartido.id)
                                                }
                                            >
                                                <i className="fa-solid fa-trash"></i>
                                            </DangerButton>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="px-4 py-2 border border-gray-400"
                                    >
                                        No hay datos 👀
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal show={modal} close={closeModal}>
                <div className="p-4 bg-white">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        {title}
                    </h2>
                    <form onSubmit={save}>

                            

                        <div className="mt-4">

                            <InputLabel
                                htmlFor="fechaJornada"
                                value="Fecha Jornada"
                                className="block text-sm font-medium text-gray-700"
                            />
                            <TextInput
                                type="date"
                                id="fechaJornada"
                                ref={fechaJornadaInput}
                                label="Fecha"
                                name="fechaJornada"
                                value={data.fechaJornada}
                                onChange={(e) =>
                                    setData("fechaJornada", e.target.value)
                                }
                                className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                                    errors["fechaJornada"]
                                        ? "border-red-500"
                                        : ""
                                }`}
                            />
                            <p className="mt-2 text-sm text-red-600">
                                {errors["fechaJornada"]}
                            </p>
                        </div>



                        <div className="mt-4">
                            <InputLabel
                                htmlFor="jornada"
                                value="Jornada"
                                className="block text-sm font-medium text-gray-700"
                            />
                            <TextInput
                                type="text"
                                id="jornada"
                                ref={jornadaInput}
                                label="Jornada"
                                name="jornada"
                                value={data.jornada}
                                onChange={(e) =>
                                    setData("jornada", e.target.value)
                                }
                                className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                                    errors["jornada"] ? "border-red-500" : ""
                                }`}
                            />
                            <p className="mt-2 text-sm text-red-600">
                                {errors["jornada"]}
                            </p>
                        </div>
                        <div className="flex justify-end space-x-2">
                            <SecondaryButton onClick={closeModal}>
                                Cancelar
                            </SecondaryButton>
                            <PrimaryButton type="submit">
                                {processing ? "Procesando..." : "Guardar"}
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </Modal>
        </AuthenticatedLayout>
    );
}
