import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DangerButton from "@/Components/DangerButton";
import FormField from "@/Components/FormField";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import WarningButton from "@/Components/WarningButton";

export default function Index({ auth, sistemaJuegos }) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const nombreSistemaInput = useRef();
    const descripcionSistemaInput = useRef();
    const InitialValues = {
        nombreSistema: "",
        descripcionSistema: "",
    };
    const {
        data,
        setData,
        errors,
        delete: destroy,
        post,
        put,
        processing,
    } = useForm(InitialValues);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleModal = (op, id, nombreSistema, descripcionSistema) => {
        setModal(true);
        setOperation(op);
        if (op === 1) {
            setTitle("Nuevo Sistema de Juego");
            setData(InitialValues);
        } else {
            setTitle("Editar Sistema de Juego");
            setData({
                id: id,
                nombreSistema: nombreSistema,
                descripcionSistema: descripcionSistema,
            });
        }
    };
    const closeModal = () => {
        setModal(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (operation === 1) {
            post(route("sistemaJuego.store"), {
                preserveScroll: true,
                onSuccess: () => {                    
                    ok("Sistema de juego creado correctamente");
                },
            });
        } else {
            post(route("sistemaJuego.update", data.id), {
                preserveScroll: true,
                onSuccess: () => {                    
                    ok("Sistema de juego actualizado correctamente");
                },
            });
        }
    };
    const ok = (message) => {
        closeModal();
        Swal.fire({
            title: "Correcto",
            text: message,
            icon: "success",
            confirmButtonText: "Aceptar",
        });
    };
    const handleDelete = (id, nombreSistema) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: `Eliminarás el sistema de juego ${nombreSistema}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("sistemaJuego.destroy", id));
            }
        });
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    ✋Sorteo
                </h2>
            }
        >
            <Head title="Sistemas de Juego" />

            <div className="bg-white grid v-screen place-items-center">
                <div className="mt-2 mb-3 flex justify-end">
                    <PrimaryButton onClick={() => handleModal(1)}>
                        <i className="fa-solid fa-plus-circle"></i>
                        Añadir Lugar
                    </PrimaryButton>
                </div>
                <div className="bg-white grid v-screen place-items-center py-6">
                    <table className="table-auto border-gray-400">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Nombre</th>
                                <th className="px-4 py-2">Descripción</th>
                                <th className="px-4 py-2"></th>
                                <th className="px-4 py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {sistemaJuegos.length > 0 ? (
                                sistemaJuegos.map((sistemaJuego) => (
                                    <tr key={sistemaJuego.id}>
                                        <td className="border px-4 py-2">
                                            {sistemaJuego.nombreSistema}
                                        </td>
                                        <td className="border px-4 py-2">
                                            {sistemaJuego.descripcionSistema}
                                        </td>
                                        <td className="border px-4 py-2">
                                            <WarningButton
                                                onClick={() =>
                                                    handleModal(
                                                        2,
                                                        sistemaJuego.id,
                                                        sistemaJuego.nombreSistema,
                                                        sistemaJuego.descripcionSistema
                                                    )
                                                }
                                            >
                                                <i className="fa-solid fa-pencil"></i>
                                            </WarningButton>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <DangerButton
                                                onClick={() =>
                                                    handleDelete(
                                                        sistemaJuego.id,
                                                        sistemaJuego.nombreSistema
                                                    )
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
                                        colSpan="4"
                                        className="border px-4 py-2"
                                    >
                                        No hay sistemas de juego
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal show={modal} Close={closeModal}>
                <h2 className="text-lg font-medium text-gray-900">{title}</h2>
                <form onSubmit={handleSubmit} className="p-6">
                    <FormField
                        htmlFor="nombreSistema"
                        label="Nombre"
                        id="nombreSistema"
                        type="text"
                        name="nombreSistema"
                        ref={nombreSistemaInput}
                        value={data.nombreSistema}
                        onChange={handleInputChange}
                        error={errors.nombreSistema}
                    />
                    <FormField
                        htmlFor="descripcionSistema"
                        label="Descripción"
                        id="descripcionSistema"
                        type="text"
                        name="descripcionSistema"
                        ref={descripcionSistemaInput}
                        value={data.descripcionSistema}
                        onChange={handleInputChange}
                        error={errors.descripcionSistema}
                    />
                    <div>
                        <PrimaryButton
                            processing={processing ? "true" : "false"}
                            className="mt-2"
                        >
                            <i className="fa-solid fa-save"></i>Guardar
                        </PrimaryButton>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
