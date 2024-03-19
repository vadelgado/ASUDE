import { useRef, useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";


export default function Index({
    auth,
    equipos,
    categorias,
    torneos,
    jugadores,
}) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const fotoJugadorInput = useRef();
    const tipoDocIdentidadInput = useRef();
    const documentoIdentidadInput = useRef();
    const nombreJugadorInput = useRef();
    const segundoNombreJugadorInput = useRef();
    const apellidoJugadorInput = useRef();
    const segundoApellidoJugadorInput = useRef();
    const fechaNacimientoInput = useRef();    
    const fk_equipoInput = useRef();

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
        fotoJugador: "",
        tipoDocIdentidad: "",
        documentoIdentidad: "",
        nombreJugador: "",
        segundoNombreJugador: "",
        apellidoJugador: "",
        segundoApellidoJugador: "",
        fechaNacimiento: "",
        fk_equipo: "",
    });

    const openModal = (
        op,
        id,
        fotoJugador,
        tipoDocIdentidad,
        documentoIdentidad,
        nombreJugador,
        segundoNombreJugador,
        apellidoJugador,
        segundoApellidoJugador,
        fechaNacimiento,
        fk_equipo
    ) => {
        setModal(true);
        setOperation(op);

        if (op === 1) {
            setTitle("Nuevo Jugador");
            setData({
                id: "",
                fotoJugador: null,
                tipoDocIdentidad: "",
                documentoIdentidad: "",
                nombreJugador: "",
                segundoNombreJugador: "",
                apellidoJugador: "",
                segundoApellidoJugador: "",
                fechaNacimiento: "",
                fk_equipo: "",
            });
        } else {
            setTitle("Editar Jugador");
            setData({
                id: id,
                fotoJugador: fotoJugador,
                tipoDocIdentidad: tipoDocIdentidad,
                documentoIdentidad: documentoIdentidad,
                nombreJugador: nombreJugador,
                segundoNombreJugador: segundoNombreJugador,
                apellidoJugador: apellidoJugador,
                segundoApellidoJugador: segundoApellidoJugador,
                fechaNacimiento: fechaNacimiento,
                fk_equipo: fk_equipo,
            });
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    // funcion para manejar el cambio de archivos y almacena la imagen en el estado
    const handleFileChange = (e) => {
        setData("fotoJugador", e.target.files[0]);
    };

    const [requiredFields, setRequiredFields] = useState([
        "fotoJugador",
        "tipoDocIdentidad",
        "documentoIdentidad",
        "nombreJugador",
        "apellidoJugador",
        "fechaNacimiento",
        "fk_equipo",
    ]);

    const save = (e) => {
        e.preventDefault();
        // Validar campos requeridos

        const emptyFields = requiredFields.filter((field) => !data[field]);
        if (emptyFields.length > 0) {
            //Obtener los nombres de los campos vacios
            const emptyFieldsNames = emptyFields.map((field) => {
                return field === "fotoJugador"
                    ? "Foto Jugador"
                    : field === "tipoDocIdentidad"
                    ? "Tipo Documento Identidad"
                    : field === "documentoIdentidad"
                    ? "Documento Identidad"
                    : field === "nombreJugador"
                    ? "Nombre Jugador"
                    : field === "apellidoJugador"
                    ? "Apellido Jugador"
                    : field === "fechaNacimiento"
                    ? "Fecha Nacimiento"
                    : "Equipo";
            });

            Swal.fire(
                "Campos vacios",
                `Los campos ${emptyFieldsNames.join(
                    ", "
                )} no pueden estar vacios`,
                "error"
            );
            return;
        }

        // Validar que el campo fotoJugador sea una imagen

        const formData = new FormData();
        formData.append("fotoJugador", data.fotoJugador);
        formData.append("tipoDocIdentidad", data.tipoDocIdentidad);
        formData.append("documentoIdentidad", data.documentoIdentidad);
        formData.append("nombreJugador", data.nombreJugador);
        formData.append("segundoNombreJugador", data.segundoNombreJugador);
        formData.append("apellidoJugador", data.apellidoJugador);
        formData.append("segundoApellidoJugador", data.segundoApellidoJugador);
        formData.append("fechaNacimiento", data.fechaNacimiento);
        formData.append("fk_equipo", data.fk_equipo);

        //Verificar si la operacion es agregar o editar
        if (operation === 1) {
            // Agregar archivo al formData
            formData.append("fotoJugador", data.fotoJugador);

            // Realizar la peticion POST
            post(route("jugadores.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    closeModal();
                    ok("El jugador ha sido registrado");
                },
                data: formData, // Enviar FormData en lugar de data
            });
        } else {
            //Realizar la solicitud PUT
            put(route("jugadores.update", data.id), {
                preserveScroll: true,
                onSuccess: () => {
                    closeModal();
                    ok("El jugador ha sido actualizado");
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

    const eliminar = (id, nombreJugador) => {
        Swal.fire({
            title: "Eliminar Jugador",
            text: `¿Está seguro de eliminar al jugador ${nombreJugador}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Si",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("jugadores.destroy", id), {
                    preserveScroll: true,
                    onSuccess: () => {
                        ok("El jugador ha sido eliminado");
                    },
                    onError: () => {
                        Swal.fire({
                            title: "Error",
                            text: "El jugador no ha sido eliminado",
                            icon: "error",
                        });
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
                    ⚽ Jugadores 👦👧
                </h2>
            }
        >
            {/* Head y otras importaciones... */}
            <Head title="⚽ Jugadores 👦👧" />

            {/* Contenido de la vista... */}
            <div className="bg-white grid v-screen place-items-center py-6 overflow-x-auto">
                <div className="mt-1 mb-1 flex justify-end">
                    <PrimaryButton onClick={() => openModal(1)}>
                        <i
                            className="fa-solid fa-plus-circle"
                            style={{ marginRight: "10px" }}
                        ></i>
                        Agregar Jugador
                    </PrimaryButton>
                </div>
                <div className="bg-white grid v-screen place-items-center py-6">
                    <table className="table table-auto border border-gray-400 rounded-t-lg rounded-br-lg rounded-bl-lg">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-2 py-2">#</th>
                                <th className="px-2 py-2">Foto</th>
                                <th className="px-2 py-2">Tipo Doc</th>
                                <th className="px-2 py-2"># Documento</th>
                                <th className="px-2 py-2">Nombre</th>
                                <th className="px-2 py-2">Seg Nombre</th>
                                <th className="px-2 py-2">Apellido</th>
                                <th className="px-2 py-2">SegApellido</th>
                                <th className="px-2 py-2">Fecha Nacimiento</th>
                                <th className="px-2 py-2">Equipo</th>
                                <th className="px-2 py-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jugadores.length > 0 ? (
                                jugadores.map((jugador, i) => (
                                    <tr key={jugador.id}>
                                        <td className="px-2 py-2">{i+1}</td>
                                        <td className="px-2 py-2">
                                            <img
                                                src={`/fotos/${jugador.fotoJugador}`}
                                                alt="Foto Jugador"
                                                className="h-10 w-10 rounded-full"
                                            />
                                        </td>
                                        <td className="px-2 py-2">
                                            {jugador.tipoDocIdentidad}
                                        </td>
                                        <td className="px-2 py-2">
                                            {jugador.documentoIdentidad}
                                        </td>
                                        <td className="px-2 py-2">
                                            {jugador.nombreJugador}
                                        </td>
                                        <td className="px-2 py-2">
                                            {jugador.segundoNombreJugador}
                                        </td>
                                        <td className="px-2 py-2">
                                            {jugador.apellidoJugador}
                                        </td>
                                        <td className="px-2 py-2">
                                            {jugador.segundoApellidoJugador}
                                        </td>
                                        <td className="px-2 py-2">
                                            {jugador.fechaNacimiento}
                                        </td>
                                        <td className="px-2 py-2">
                                            {jugador.fk_equipo}
                                        </td>
                                        <td className="px-2 py-2">
                                            <SecondaryButton
                                                onClick={() =>
                                                    openModal(
                                                        2,
                                                        jugador.id,
                                                        jugador.fotoJugador,
                                                        jugador.tipoDocIdentidad,
                                                        jugador.documentoIdentidad,
                                                        jugador.nombreJugador,
                                                        jugador.segundoNombreJugador,
                                                        jugador.apellidoJugador,
                                                        jugador.segundoApellidoJugador,
                                                        jugador.fechaNacimiento,
                                                        jugador.fk_equipo
                                                    )
                                                }
                                            >
                                                <i
                                                    className="fa-solid fa-pencil"
                                                    style={{
                                                        marginRight: "10px",
                                                    }}
                                                ></i>
                                                Editar
                                            </SecondaryButton>
                                            <SecondaryButton
                                                onClick={() =>
                                                    eliminar(
                                                        jugador.id,
                                                        jugador.nombreJugador
                                                    )
                                                }
                                            >
                                                <i
                                                    className="fa-solid fa-trash"
                                                    style={{
                                                        marginRight: "10px",
                                                    }}
                                                ></i>
                                                Eliminar
                                            </SecondaryButton>
                                        </td>
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

            <Modal show={modal} close={closeModal}>
                <h2 className="p-3 text-lg font-medium text-gray-900">
                    {title}
                </h2>
                <form
                    onSubmit={save}
                    className="p-6"
                    encType="multipart/form-data"
                >
                    <div className="mt-4">
                        <InputLabel
                            htmlFor="fotoJugador"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Foto Jugador
                        </InputLabel>
                        <TextInput
                            type="file"
                            id="fotoJugador"
                            ref={fotoJugadorInput}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={handleFileChange}
                        />
                        <InputError 
                        message={errors.fotoJugador} 
                         className="mt-2"/>
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="tipoDocIdentidad"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Tipo Documento Identidad
                        </InputLabel>
                        <select
                            id="tipoDocIdentidad"
                            ref={tipoDocIdentidadInput}
                            value={data.tipoDocIdentidad}
                            onChange={(e) =>
                                setData("tipoDocIdentidad", e.target.value)
                            }
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        >
                            <option value="">Seleccione</option>
                            <option value="Registro Civil">
                                Registro Civil
                            </option>
                            <option value="Cédula de Ciudadanía">
                                Cédula de Ciudadanía
                            </option>
                            <option value="Tarjeta de Identidad">
                                Tarjeta de Identidad
                            </option>
                            <option value="Cédula de Extranjería">
                                Cédula de Extranjería
                            </option>
                            <option value="Pasaporte">Pasaporte</option>
                        </select>

                        {errors["tipoDocIdentidad"] && (
                            <p className="mt-2 text-sm text-red-600">
                                {errors["tipoDocIdentidad"]}
                            </p>
                        )}
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="documentoIdentidad"
                            className="block text-sm font-medium text-gray-700"
                        >
                            # Documento Identidad
                        </label>
                        <input
                            type="number"
                            id="documentoIdentidad"
                            ref={documentoIdentidadInput}
                            value={data.documentoIdentidad}
                            onChange={(e) =>
                                setData("documentoIdentidad", e.target.value)
                            }
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="nombreJugador"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Nombre Jugador
                        </label>
                        <input
                            type="text"
                            id="nombreJugador"
                            ref={nombreJugadorInput}
                            value={data.nombreJugador}
                            onChange={(e) =>
                                setData("nombreJugador", e.target.value)
                            }
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="segundoNombreJugador"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Segundo Nombre Jugador
                        </label>
                        <input
                            type="text"
                            id="segundoNombreJugador"
                            ref={segundoNombreJugadorInput}
                            value={data.segundoNombreJugador}
                            onChange={(e) =>
                                setData("segundoNombreJugador", e.target.value)
                            }
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="apellidoJugador"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Apellido Jugador
                        </label>
                        <input
                            type="text"
                            id="apellidoJugador"
                            ref={apellidoJugadorInput}
                            value={data.apellidoJugador}
                            onChange={(e) =>
                                setData("apellidoJugador", e.target.value)
                            }
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="segundoApellidoJugador"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Segundo Apellido Jugador
                        </label>
                        <input
                            type="text"
                            id="segundoApellidoJugador"
                            ref={segundoApellidoJugadorInput}
                            value={data.segundoApellidoJugador}
                            onChange={(e) =>
                                setData(
                                    "segundoApellidoJugador",
                                    e.target.value
                                )
                            }
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="fechaNacimiento"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Fecha Nacimiento
                        </label>
                        <input
                            type="date"
                            id="fechaNacimiento"
                            ref={fechaNacimientoInput}
                            value={data.fechaNacimiento}
                            onChange={(e) =>
                                setData("fechaNacimiento", e.target.value)
                            }
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="fk_equipo"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Equipo
                        </label>
                        <select
                            id="fk_equipo"
                            ref={fk_equipoInput}
                            value={data.fk_equipo}
                            onChange={(e) =>
                                setData("fk_equipo", e.target.value)
                            }
                            className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                                errors["fk_equipo"] ? "border-red-500" : ""
                            }`}
                        >
                            <option value="" disabled
                            >Seleccione</option>
                            {equipos.map((equipo) => (
                                <option key={equipo.id} value={equipo.id}>
                                    {equipo.nombreEquipo}
                                </option>
                            ))}
                        </select>
                        {errors["fk_equipo"] && (
                    <p className="mt-2 text-sm text-red-600">
                        {errors["fk_equipo"]}
                    </p>
                )}
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
