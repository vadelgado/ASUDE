import { useRef, useState } from "react"; // Importamos useRef y useState para manejar el estado y referencias de los elementos del DOM.
import { useForm } from "@inertiajs/react"; // Importamos useForm de Inertia.js para manejar formularios.
import { Head } from "@inertiajs/react"; // Importamos Head para manejar el título de la página.
import Swal from "sweetalert2"; // Importamos SweetAlert2 para mostrar alertas bonitas.

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"; // Importamos nuestro diseño autenticado.
import DangerButton from "@/Components/DangerButton"; // Importamos un botón de peligro (rojo).
import FormField from "@/Components/FormField"; // Importamos un componente de campo de formulario.
import Modal from "@/Components/Modal"; // Importamos nuestro componente de modal.
import PrimaryButton from "@/Components/PrimaryButton"; // Importamos un botón primario (azul).
import SecondaryButton from "@/Components/SecondaryButton"; // Importamos un botón secundario (gris).
import WarningButton from "@/Components/WarningButton"; // Importamos un botón de advertencia (amarillo).

export default function Dashboard({ auth, fases, torneo, fk_torneo }) { 
    // Estado para manejar si el modal está abierto o cerrado.
    const [modal, setModal] = useState(false);
    // Estado para manejar el título del modal.
    const [title, setTitle] = useState("");
    // Estado para manejar si estamos agregando (1) o editando (2) una fase.
    const [operation, setOperation] = useState(1);
    // Referencia para el input del nombre de la fase.
    const NombreFaseInput = useRef();

    // Valores iniciales del formulario.
    const initialValues = {
        nombreFase: "",
        fk_torneo: fk_torneo, // Asignamos el fk_torneo del padre.
    };

    // useForm para manejar los datos del formulario.
    const {
        data,
        setData,
        errors,
        delete: destroy,
        post,
        put,
        processing,
    } = useForm(initialValues);

    // Función para manejar cambios en los inputs del formulario.
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Función para abrir y configurar el modal.
    const handleModal = (op, id, nombreFase) => {
        setModal(true); // Abrimos el modal.
        setOperation(op); // Configuramos la operación (1 para agregar, 2 para editar).

        if (op === 1) {
            setTitle("Agregar Fase"); // Título para agregar.
            setData(initialValues); // Reseteamos los datos del formulario.
        } else {
            setTitle("Editar Fase"); // Título para editar.
            setData({
                id: id, // ID de la fase que se va a editar.
                nombreFase: nombreFase, // Nombre de la fase que se va a editar.
                fk_torneo: fk_torneo, // fk_torneo del padre.
            });
        }
    };

    // Función para cerrar el modal.
    const closeModal = () => {
        setModal(false);
    };

    // Función para guardar los datos del formulario.
    const save = (e) => {
        e.preventDefault(); // Prevenimos el comportamiento por defecto del formulario.

        // Si estamos agregando una nueva fase
        if (operation === 1) {
            post(route("fases.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    showSuccessMessage("Fase guardada.");
                },
            });
        } else {
            // Si estamos editando una fase existente
            put(route("fases.update", data.id), {
                preserveScroll: true,
                onSuccess: () => {
                    showSuccessMessage("Fase actualizada");
                },
            });
        }
    };

    // Función para mostrar un mensaje de éxito.
    const showSuccessMessage = (message) => {
        closeModal();
        Swal.fire({ title: message, icon: "success" });
    };

    // Función para eliminar una fase.
    const deleteFase = (id, nombreFase) => {
        Swal.fire({
            title: `¿Estás seguro de eliminar ${nombreFase}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("fases.destroy", id), {
                    onSuccess: () => {
                        showSuccessMessage("Fase eliminada.");
                    },
                    onError: () => {
                        Swal.fire({
                            title: "Error",
                            text: "No se pudo eliminar la fase.",
                            icon: "error",
                        });
                    },
                });
            }
        });
    };

    // Renderizado del componente.
    return (
        <AuthenticatedLayout
    user={auth.user}
    header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Fases para el torneo {torneo[0].nombreTorneo} del {torneo[0].fechaInicio} al {torneo[0].fechaFin}
        </h2>
    }
>
    <Head title="Fases Partidos" />

    <div className="container p-6 mx-auto mt-6 bg-white">
        <div className="flex justify-end mt-2 mb-3">
            <PrimaryButton onClick={() => handleModal(1)}>
                <i className="mr-2 fa-solid fa-plus-circle">Añadir Fase</i> 
            </PrimaryButton>
        </div>

        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-400 rounded-lg table-auto">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Nombre Fase</th>
                        <th className="px-4 py-2">Editar</th>
                        <th className="px-4 py-2">Eliminar</th>
                        <th className="px-4 py-2">Partidos</th>
                    </tr>
                </thead>
                <tbody>
                    {fases.length > 0 ? (
                        fases.map((fase, i) => (
                            <tr key={fase.id} className="border-b last:border-0">
                                <td className="px-4 py-2 border">{i + 1}</td>
                                <td className="px-4 py-2 border">{fase.nombreFase}</td>
                                <td className="px-4 py-2 border">
                                    <WarningButton onClick={() => handleModal(2, fase.id, fase.nombreFase)}>
                                        <i className="fa-solid fa-pencil"></i>
                                    </WarningButton>
                                </td>
                                <td className="px-4 py-2 border">
                                    <DangerButton onClick={() => deleteFase(fase.id, fase.nombreFase)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </DangerButton>
                                </td>
                                <td className="px-4 py-2 border">
                                    <a
                                        className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300"
                                        href={`/programacionesFaces?fase_id=${fase.id}`}
                                    >
                                        <i className="mr-2 fa-regular fa-futbol"> Partidos</i> 
                                    </a>
                                </td>
                                <td className="px-4 py-2 border">
                                    <a
                                        className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300"
                                        href={`/gallery?fase_id=${fase.id}`}
                                    >
                                        <i className="mr-2 fa-regular fa-image"> Fotos</i> 
                                    </a>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="px-4 py-2 text-center border">
                                No hay Fases Registradas
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>

    <Modal show={modal} onClose={closeModal}>
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        <form onSubmit={save} className="p-6">
            <input type="text" value={data.fk_torneo} name="fk_torneo" readOnly className="hidden" />
            <FormField
                htmlFor="nombreFase"
                label="Nombre"
                id="nombreFase"
                type="text"
                name="nombreFase"
                ref={NombreFaseInput}
                placeholder="Nombre de la Fase"
                value={data.nombreFase}
                onChange={handleInputChange}
                errorMessage={errors.nombreFase}
            />
            <div className="mt-6">
                <PrimaryButton processing={processing ? "true" : "false"}>
                    <i className="mr-2 fa-solid fa-save"></i>
                    {processing ? "Procesando..." : "Guardar"}
                </PrimaryButton>
            </div>
            <div className="flex justify-end mt-6">
                <SecondaryButton onClick={closeModal}>
                    Cancelar
                </SecondaryButton>
            </div>
        </form>
    </Modal>
</AuthenticatedLayout>

    );
}
