import { useRef, useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Index({ auth, equipos, categorias, torneos }) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState("");
    const nombreEquipoInput = useRef();
    const fk_categoria_equipoInput = useRef();
    const escudoEquipoInput = useRef();
    const numeroWhatsAppInput = useRef();
    const correoElectronicoInput = useRef();
    const fk_torneoInput = useRef();

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
        nombreEquipo: "",
        fk_categoria_equipo: "",
        escudoEquipo: "",
        numeroWhatsapp: "",
        correoElectronico: "",
        fk_torneo: "",
    });

    const openModal = (
        op,
        id,
        nombreEquipo,
        fk_categoria_equipo,
        escudoEquipo,
        numeroWhatsapp,
        correoElectronico,
        fk_user,
        fk_torneo
    ) => {
        setModal(true);
        setOperation(op);

        if (op === 1) {
            setTitle("Agregar Equipo");
            setData({
                id: "",
                nombreEquipo: "",
                fk_categoria_equipo: "",
                escudoEquipo: null,
                numeroWhatsapp: "",
                correoElectronico: "",
                fk_user: fk_user,
                fk_torneo: "",
            });
        } else {
            setTitle("Editar Equipo");
            setData({
                id: id,
                nombreEquipo: nombreEquipo,
                fk_categoria_equipo: fk_categoria_equipo,
                escudoEquipo: escudoEquipo,
                numeroWhatsapp: numeroWhatsapp,
                correoElectronico: correoElectronico,
                fk_user: fk_user,
                fk_torneo: fk_torneo,
            });
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    // funcion para manejar el cambio de archivos y almacenal la imagen en el estado
    const handleFileChange = (e) => {
        setData("escudoEquipo", e.target.files[0]);
        
    };
    

    const [requiredFields, setRequiredFields] = useState([
        "nombreEquipo",
        "fk_categoria_equipo",
        "escudoEquipo",
        "numeroWhatsapp",
        "correoElectronico",
        "fk_torneo",
    ]);

    const save = (e) => {
        e.preventDefault();
        // Validar campos requeridos
        const emptyFields = requiredFields.filter((field) => !data[field]);
        if (emptyFields.length > 0) {
            // Obtener los nombres de los campos vacíos
            const emptyFieldsNames = emptyFields.map((field) => {
                return field === "nombreEquipo"
                    ? "Nombre del Equipo"
                    : field === "fk_categoria_equipo"
                    ? "Categoría"
                    : field === "escudoEquipo"
                    ? "Escudo del Equipo"
                    : field === "numeroWhatsapp"
                    ? "Número de WhatsApp"
                    : field === "correoElectronico"
                    ? "Correo Electrónico"
                    : "Torneo";
            });

            Swal.fire(
                "¡Campos requeridos!",
                `Los siguientes campos son requeridos: ${emptyFieldsNames.join(
                    ", "
                )}.`,
                "warning"
            );
            return;
        }

        // Crear un objeto FormData para enviar datos con la imagen

        const formData = new FormData();
        formData.append("nombreEquipo", data.nombreEquipo);
        formData.append("fk_categoria_equipo", data.fk_categoria_equipo);
        formData.append("escudoEquipo", data.escudoEquipo);
        formData.append("numeroWhatsapp", data.numeroWhatsapp);
        formData.append("correoElectronico", data.correoElectronico);
        formData.append("fk_torneo", data.fk_torneo);

        //Verificar si la operación es agregar o editar
        if (operation === 1) {
            // Agregar archivo al FormData
            formData.append("escudoEquipo", data.escudoEquipo);

            // Realizar la petición POST
            post(route("equipos.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    closeModal();
                    ok("El equipo ha sido guardado.");
                },
                data: formData, // Enviar FormData en lugar de data
            });
        } else {
            // Realizar la solicitud PUT
            put(route("equipos.update", data.id), {
                preserveScroll: true,
                onSuccess: () => {
                    closeModal();
                    Swal.fire(
                        "¡Guardado!",
                        "El equipo ha sido actualizado.",
                        "success"
                    );
                },
                data: formData, // Enviar FormData en lugar de data
            });
        }
    };

    const ok = (mensaje) => {
        reset();
        closeModal();
        Swal.fire({ title: mensaje, icon: "success" });
    };

    const eliminar = (id, nombreEquipo) => {
        Swal.fire({
            title: "¿Está seguro?",
            text: `¿Está seguro que desea eliminar el equipo ${nombreEquipo}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("equipos.destroy", id), {
                    preserveScroll: true,
                    onSuccess: () => {
                        ok("El equipo ha sido eliminado.");
                    },
                    onError: () => {
                        Swal.fire(
                            "¡Error!",
                            "El equipo no ha sido eliminado.",
                            "error"
                        );
                    },
                });
            }
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    ⚽ Equipos 🥅
                </h2>
            }
        >
            {/* Head y otras importaciones... */}
            <div className="bg-white grid v-screen place-items-center py-6 overflow-x-auto">
                <div className="mt-1 mb-1 flex justify-end">
                    <PrimaryButton onClick={() => openModal(1)}>
                        <i
                            className="fa-solid fa-plus-circle"
                            style={{ marginRight: "10px" }}
                        ></i>
                        Agregar
                    </PrimaryButton>
                </div>
                <div className="bg-white grid v-screen place-items-center py-6">
                    <table className="table table-auto border border-gray-400 rounded-t-lg rounded-br-lg rounded-bl-lg">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-2 py-2">No.</th>
                                <th className="px-2 py-2">Nombre del Equipo</th>
                                <th className="px-2 py-2">Categoría</th>
                                <th className="px-2 py-2">Escudo del Equipo</th>
                                <th className="px-2 py-2">
                                    Número de WhatsApp
                                </th>
                                <th className="px-2 py-2">
                                    Correo Electrónico
                                </th>
                                <th className="px-2 py-2">Torneo</th>
                                <th className="px-2 py-2">Editar</th>
                                <th className="px-2 py-2">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {equipos.length > 0 ? (
                                equipos.map((equipo, index) => (
                                    <tr key={equipo.id}>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {index + 1}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {equipo.nombreEquipo}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {equipo.descripcion}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">


                                        <img src={`/storage/${equipo.escudoEquipo}`} alt={equipo.nombreEquipo} height={100} width={100} />


                                       
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {equipo.numeroWhatsapp}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {equipo.correoElectronico}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {equipo.nombreTorneo}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                        
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2"></td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="11" className="text-center">
                                        Usted no ha subido ningún Equipo. 👀
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal show={modal} onClose={closeModal}>
                <h2 className="p-3 text-lg font-medium text-gray-900">
                    {title}
                </h2>
                <form onSubmit={save} className="p-6" encType="multipart/form-data">
                    <div className="mt-4">
                        <label
                            htmlFor="nombreEquipo"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Nombre del Equipo
                        </label>
                        <input
                            type="text"
                            id="nombreEquipo"
                            ref={nombreEquipoInput}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={data.nombreEquipo}
                            onChange={(e) =>
                                setData("nombreEquipo", e.target.value)
                            }
                        />
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="fk_categoria_equipo"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Categoría
                        </label>
                        <select
                            id="fk_categoria_equipo"
                            ref={fk_categoria_equipoInput}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={data.fk_categoria_equipo}
                            onChange={(e) =>
                                setData("fk_categoria_equipo", e.target.value)
                            }
                        >
                            <option value="">Selecciona una opción</option>
                            {categorias.map((categoria) => (
                                <option value={categoria.id} key={categoria.id}>
                                    {categoria.descripcion}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="escudoEquipo"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Escudo del Equipo
                        </label>
                        <input
                            type="file"
                            id="escudoEquipo"
                            ref={escudoEquipoInput}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            
                            onChange={handleFileChange}                            
                        />
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="numeroWhatsapp"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Número de WhatsApp
                        </label>
                        <input
                            type="number"
                            id="numeroWhatsapp"
                            ref={numeroWhatsAppInput}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={data.numeroWhatsapp}
                            onChange={(e) =>
                                setData("numeroWhatsapp", e.target.value)
                            }
                            min="0"
                        />
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="correoElectronico"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Correo Electrónico
                        </label>
                        <input
                            type="text"
                            id="correoElectronico"
                            ref={correoElectronicoInput}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={data.correoElectronico}
                            onChange={(e) =>
                                setData("correoElectronico", e.target.value)
                            }
                        />
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="fk_torneo"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Torneo en el que participa
                        </label>
                        <select
                            id="fk_torneo"
                            ref={fk_torneoInput}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={data.fk_torneo}
                            onChange={(e) =>
                                setData("fk_torneo", e.target.value)
                            }
                        >
                            <option value="">Selecciona una opción</option>
                            {torneos.map((torneo) => (
                                <option value={torneo.id}key={torneo.id}>
                                    {torneo.nombreTorneo}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-1">
                        <PrimaryButton
                            processing={processing.toString()}
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
