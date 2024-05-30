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
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Fases para el torneo {torneo[0].nombreTorneo} del {torneo[0].fechaInicio} al {torneo[0].fechaFin}
                </h2>
            }
        >
            <Head title="Fases Partidos" />

            <div className="bg-white grid v-screen place-items-center">
                <div className="mt-2 mb-3 flex justify-end">
                    <PrimaryButton onClick={() => handleModal(1)}>
                        <i className="fa-solid fa-plus-circle"> Añadir Fase</i>
                    </PrimaryButton>
                </div>
            </div>

            <div className="bg-white grid v-screen place-items-center py-6">
                <table className="table-auto border-gray-400">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-2 py-2">#</th>
                            <th className="px-2 py-2">Nombre Fase</th>
                            <th className="px-2 py-2">Editar</th>
                            <th className="px-2 py-2">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fases.length > 0 ? (
                            fases.map((fase, i) => (
                                <tr key={fase.id}>
                                    <td className="border border-gray-400 px-4 py-2">{i + 1}</td>
                                    <td className="border border-gray-400 px-4 py-2">{fase.nombreFase}</td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        <WarningButton onClick={() => handleModal(2, fase.id, fase.nombreFase)}>
                                            <i className="fa-solid fa-pencil"></i>
                                        </WarningButton>
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        <DangerButton onClick={() => deleteFase(fase.id, fase.nombreFase)}>
                                            <i className="fa-solid fa-trash"></i>
                                        </DangerButton>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="border px-4 py-2 text-center">
                                    No hay Fases Registradas
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Modal show={modal} onClose={closeModal}>
                <h2 className="text-lg font-medium text-gray-900">{title}</h2>
                <form onSubmit={save} className="p-6">
                    {/* Campo de entrada solo lectura para fk_torneo */}
                    <input 
                        type="text"
                        value={data.fk_torneo}
                        name="fk_torneo"
                        readOnly
                        className="hidden" // Lo hacemos oculto ya que no necesita ser visible
                    />
                    <FormField
                        htmlFor="nombreFase"
                        label="Nombre"
                        id="nombreFase"
                        type="text"
                        name="nombreFase"
                        ref={NombreFaseInput}
                        placeholder="Nombre de la Fase."
                        value={data.nombreFase}
                        onChange={handleInputChange}
                        errorMessage={errors.nombreFase}
                    />
                    <div className="mt-6">
                        <PrimaryButton processing={processing ? "true" : "false"} className="mt-2">
                            <i className="fa-solid fa-save">
                                {processing ? " Procesando..." : " Guardar"}
                            </i>
                        </PrimaryButton>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancelar</SecondaryButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
