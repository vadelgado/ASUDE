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
import SelectField from "@/Components/SelectField";
import Textarea2 from "@/Components/Textarea2";

export default function Dashboard({
    auth,
    fk_programaciones_faces_id,
    faltas_cuerpo_tecnicos,
    cuerpoTecnico,
    fk_amonestaciones_t_c_s_id,
}) {
    // Estado para manejar si el modal está abierto o cerrado.
    const [modal, setModal] = useState(false);
    // Estado para manejar el título del modal.
    const [title, setTitle] = useState("");
    // Estado para manejar si estamos agregando (1) o editando (2) una fase.
    const [operation, setOperation] = useState(1);
    // Referencia para el input del nombre de la fase.
    const CuerpoTecnicoSelect = useRef();
    const AmonestacionesSelect = useRef();
    const ObservacionesText = useRef();

    // Valores iniciales del formulario.
    const initialValues = {
        fk_programaciones_faces_id: fk_programaciones_faces_id[0].id,
        fk_cuerpo_tecnico_id: "",
        fk_amonestaciones_t_c_s_id: "",
        observaciones: "",
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
    const handleModal = (
        op,
        id,
        fk_programaciones_faces_id,
        fk_cuerpo_tecnico_id,
        fk_amonestaciones_t_c_s_id,
        observaciones
    ) => {
        setModal(true); // Abrimos el modal.
        setOperation(op); // Configuramos la operación (1 para agregar, 2 para editar).

        if (op === 1) {
            setTitle("Agregar Fase"); // Título para agregar.
            setData(initialValues); // Reseteamos los datos del formulario.
        } else {
            setTitle("Editar Fase"); // Título para editar.
            setData({
                id: id,
                fk_programaciones_faces_id: fk_programaciones_faces_id,
                fk_cuerpo_tecnico_id: fk_cuerpo_tecnico_id,
                fk_amonestaciones_t_c_s_id: fk_amonestaciones_t_c_s_id,
                observaciones: observaciones,
            });
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    const save = (e) => {
        e.preventDefault(); // Prevenimos el comportamiento por defecto del formulario.

        // Si estamos agregando una nueva fase
        if (operation === 1) {
            post(route("faltasCuerpoTecnico.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    showSuccessMessage("Falta guardada.");
                },
            });
        } else {
            // Si estamos editando una fase existente
            put(route("faltasCuerpoTecnico.update", data.id), {
                preserveScroll: true,
                onSuccess: () => {
                    showSuccessMessage("Falta actualizada");
                },
            });
        }
    };

    // Función para mostrar un mensaje de éxito.
    const showSuccessMessage = (message) => {
        closeModal();
        Swal.fire({ title: message, icon: "success" });
    };

    const deleteFase = (id) => {
        Swal.fire({
            title: `¿Estás seguro de eliminar?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("faltasCuerpoTecnico.destroy", id), {
                    onSuccess: () => {
                        showSuccessMessage("Falta Eliminada eliminada.");
                    },
                    onError: () => {
                        Swal.fire({
                            title: "Error",
                            text: "No se pudo eliminar la Falta.",
                            icon: "error",
                        });
                    },
                });
            }
        });
    };

    const cuerpoTecnicoSelect = [
        { value: "", label: "Seleccione un miembro" },
        ...cuerpoTecnico.map((cuerpoTecnico) => ({
            value: cuerpoTecnico.id,
            label:
                cuerpoTecnico.nombreCompleto +
                " - " +
                cuerpoTecnico.nombreEquipo,
        })),
    ];

    const amonestacionesSelect = [
        { value: "", label: "Seleccione un tipo de amonestación" },
        ...fk_amonestaciones_t_c_s_id.map((amonestacion) => ({
            value: amonestacion.id,
            label: " - " + amonestacion.valor + amonestacion.description,
        })),
    ];

    // Renderizado del componente.
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Faltas Cuerpo Técnico
                </h2>
            }
        >
            <Head title="Faltas Cuerpo Técnico" />

            <div className="grid bg-white v-screen place-items-center">
                <div className="flex justify-end mt-2 mb-3">
                    <PrimaryButton onClick={() => handleModal(1)}>
                        <i className="fa-solid fa-plus-circle"> Añadir Falta</i>
                    </PrimaryButton>
                </div>
            </div>

            <div className="grid py-6 bg-white v-screen place-items-center">
                <table className="border-gray-400 table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-2 py-2">#</th>
                            <th className="px-2 py-2">Nombre</th>
                            <th className="px-2 py-2">Tipo Amonestación</th>
                            <th className="px-2 py-2">Observaciones</th>
                            <th className="px-2 py-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {faltas_cuerpo_tecnicos.length > 0 ? (
                            faltas_cuerpo_tecnicos.map((falta, i) => (
                                <tr key={falta.id}>
                                    <td className="px-4 py-2 border border-gray-400">
                                        {i + 1}
                                    </td>
                                    <td className="px-4 py-2 border border-gray-400">
                                        {falta.nombreCompleto}
                                    </td>
                                    <td className="px-4 py-2 border border-gray-400">
                                        {falta.description} - {falta.value}
                                    </td>
                                    <td className="px-4 py-2 border border-gray-400">
                                        {falta.observaciones}
                                    </td>
                                    <td className="px-4 py-2 border border-gray-400">
                                        <WarningButton
                                            onClick={() =>
                                                handleModal(
                                                    2,
                                                    falta.id,
                                                    falta.fk_programaciones_faces_id,
                                                    falta.fk_cuerpo_tecnico_id,
                                                    falta.fk_amonestaciones_t_c_s_id,
                                                    falta.observaciones,
                                                )
                                            }
                                        >
                                            <i className="fa-solid fa-pencil"></i>
                                        </WarningButton>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-400">
                                        <DangerButton
                                            onClick={() => deleteFase(falta.id)}
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
                                    className="px-4 py-2 text-center border"
                                >
                                    No hay Faltas Registradas
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
                        value={data.fk_programaciones_faces_id}
                        name="fk_programaciones_faces_id"
                        readOnly
                        className="hidden" // Lo hacemos oculto ya que no necesita ser visible
                    />

<SelectField
    htmlFor="fk_cuerpo_tecnico_id"
    label={
        <>
            <span>Miembro</span>
            <span className="text-red-500">*</span>
        </>
    }
    id="fk_cuerpo_tecnico_id"
    ref={CuerpoTecnicoSelect}
    name="fk_cuerpo_tecnico_id"
    value={data.fk_cuerpo_tecnico_id}
    onChange={handleInputChange}
    options={cuerpoTecnicoSelect}
    errorMessage={errors.fk_cuerpo_tecnico_id}
/>

<SelectField
    htmlFor="fk_amonestaciones_t_c_s_id"
    label={
        <>
            <span>Tipo Amonestación</span>
            <span className="text-red-500">*</span>
        </>
    }
    id="fk_amonestaciones_t_c_s_id"
    ref={AmonestacionesSelect}
    name="fk_amonestaciones_t_c_s_id"
    value={data.fk_amonestaciones_t_c_s_id}
    onChange={handleInputChange}
    options={amonestacionesSelect}
    errorMessage={errors.fk_amonestaciones_t_c_s_id}
/>

                    <Textarea2
                        htmlFor="observaciones"
                        label="Observaciones"
                        id="observaciones"
                        ref={ObservacionesText}
                        name="observaciones"
                        value={data.observaciones || ''}
                        onChange={handleInputChange}
                        errorMessage={errors.observaciones}
                        placeholder="Escribe las observaciones"
                    />

                    <div className="mt-6">
                        <PrimaryButton
                            processing={processing ? "true" : "false"}
                            className="mt-2"
                        >
                            <i className="fa-solid fa-save">
                                {processing ? " Procesando..." : " Guardar"}
                            </i>
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
