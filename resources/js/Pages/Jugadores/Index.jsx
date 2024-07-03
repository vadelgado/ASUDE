import { useRef, useState, useEffect } from "react";

import { useForm, Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FormField from "@/Components/FormField";
import SelectField from "@/Components/SelectField";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import ImgField from "@/Components/ImgField";
import SecondaryButton from "@/Components/SecondaryButton";
import WarningButton from "@/Components/WarningButton";

export default function Index({
    auth,
    equipo_id,
    jugadores,
    equipo,
    userRole,
}) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const nombreCompletoInput = useRef();
    const fotoInput = useRef();
    const tipoIdentificacionInput = useRef();
    const numeroIdentificacionInput = useRef();
    const numeroSerieInput = useRef();
    const fechaNacimientoInput = useRef();
    const lugarNacimientoInput = useRef();
    const institucionEducativaInput = useRef();
    const gradoInput = useRef();
    const ciudadInstitucionEducativaInput = useRef();
    const telefonoInstitucionEducativaInput = useRef();
    const estadoEPSInput = useRef();
    const nombreEPSInput = useRef();
    const lugarAtencionEPSInput = useRef();

    const InitialValues = {
        id: "",
        nombreCompleto: "",
        foto: null,
        tipoIdentificacion: "",
        numeroIdentificacion: "",
        numeroSerie: "",
        fechaNacimiento: "",
        lugarNacimiento: "",
        institucionEducativa: "",
        grado: "",
        ciudadInstitucionEducativa: "",
        telefonoInstitucionEducativa: "",
        fk_equipo: equipo_id,
        estadoEPS: "",
        nombreEPS: "",
        lugarAtencionEPS: "",
    };
    const {
        data,
        setData,
        errors,
        delete: destroy,
        post,
        processing,
    } = useForm(InitialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleInputChangeMayus = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value.toUpperCase(),
        }));
    };

    const handleFileChange = (e) => {
        setData("foto", e.target.files[0]);
    };

    const handleInputChangeFirst = (event) => {
        const { name, value } = event.target;
        const valueWithCapitalLetters = value
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        setData((prevData) => ({
            ...prevData,
            [name]: valueWithCapitalLetters,
        }));
    };

    const openModal = (
        op,
        id,
        nombreCompleto,
        foto,
        tipoIdentificacion,
        numeroIdentificacion,
        numeroSerie,
        fechaNacimiento,
        lugarNacimiento,
        institucionEducativa,
        grado,
        ciudadInstitucionEducativa,
        telefonoInstitucionEducativa,
        fk_equipo,
        estadoEPS,
        nombreEPS,
        lugarAtencionEPS
    ) => {
        setModal(true);
        setOperation(op);

        if (op === 1) {
            setTitle("Nuevo Jugador");
            setData(InitialValues);
        } else {
            setTitle("Editar Jugador");
            setData({
                id: id,
                nombreCompleto: nombreCompleto,
                foto: foto,
                tipoIdentificacion: tipoIdentificacion,
                numeroIdentificacion: numeroIdentificacion,
                numeroSerie: numeroSerie,
                fechaNacimiento: fechaNacimiento,
                lugarNacimiento: lugarNacimiento,
                institucionEducativa: institucionEducativa,
                grado: grado,
                ciudadInstitucionEducativa: ciudadInstitucionEducativa,
                telefonoInstitucionEducativa: telefonoInstitucionEducativa,
                fk_equipo: fk_equipo,
                estadoEPS: estadoEPS,
                nombreEPS: nombreEPS,
                lugarAtencionEPS: lugarAtencionEPS,
            });
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    const save = (e) => {
        e.preventDefault();
        if (operation === 1) {
            post(
                userRole === "admin"
                    ? route("jugadoresAdmin.store")
                    : route("jugadores.store"),
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        ok("El jugador ha sido creado");
                    },
                }
            );
        } else {
            post(
                userRole === "admin"
                    ? route("jugadoresAdmin.updatepost", data.id)
                    : route("jugadores.updatepost", data.id),
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        ok("El jugador ha sido actualizado");
                    },
                }
            );
        }
    };

    const ok = (mensaje) => {
        closeModal();
        Swal.fire({ title: mensaje, icon: "success" });
    };

    const toggleJugador = (id, nombreJugador) => {
        Swal.fire({
            title: "Activar/Desactivar Jugador",
            text: `¿Está seguro cambiar el estado del jugador ${nombreJugador}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Si",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                post(
                    userRole === "admin"
                        ? route("jugadoresAdmin.toggle", id)
                        : route("jugadores.toggle", id),
                    {
                        preserveScroll: true,
                        onSuccess: () => {
                            ok("El jugador ha sido actualizado");
                        },
                        onError: () => {
                            Swal.fire({
                                title: "Error",
                                text: "El jugador no ha sido actualizado",
                                icon: "error",
                            });
                        },
                    }
                );
            }
        });
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

    const handletipoDocIdentidad = [
        { value: "", label: "Seleccione ...", disabled: true },
        { value: "CC", label: "Cédula de Ciudadanía" },
        { value: "CE", label: "Cédula de Extranjería" },
        { value: "TI", label: "Tarjeta de Identidad" },
        { value: "RC", label: "Registro Civil" },
        { value: "PA", label: "Pasaporte" },
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    ⚽ Jugadores 👦👧
                </h2>
            }
        >
            <Head title="⚽ Jugadores 👦👧" />

            <div className="py-6">
                <div className="container p-6 mx-auto overflow-x-auto bg-white rounded-lg shadow-md">
                    <div className="flex justify-end mt-1 mb-4 space-x-4">
                        <PrimaryButton onClick={() => openModal(1)}>
                            <i className="mr-2 fa-solid fa-plus-circle"></i>
                            Agregar Jugador
                        </PrimaryButton>
                        <PrimaryButton>
                            <a
                                href={route("jugadores.pdf", { equipo_id })}
                                target="_blank"
                                download
                            >
                                <i className="mr-2 fa-solid fa-file-pdf"></i>
                                Descargar PDF
                            </a>
                        </PrimaryButton>
                    </div>

                    <div className="mt-2 text-left">
                        <span className="italic font-bold">
                            NOMBRE EQUIPO:{" "}
                        </span>
                        <span>{equipo}</span>
                    </div>

                    <table className="w-full mt-4 border border-gray-400 table-auto">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-2 py-2">N°</th>
                                <th className="px-2 py-2">
                                    NOMBRES Y APELLIDOS
                                </th>
                                <th className="px-2 py-2">TIPO DOC</th>
                                <th className="px-2 py-2"># DOC</th>
                                <th className="px-2 py-2">SERIAL FOLIO</th>
                                <th className="px-2 py-2">FECHA NACIMIENTO</th>
                                <th className="px-2 py-2">LUGAR NACIMIENTO</th>
                                <th className="px-2 py-2">
                                    INSTITUCIÓN EDUCATIVA
                                </th>
                                <th className="px-2 py-2">GRADO</th>
                                <th className="px-2 py-2">CIUDAD</th>
                                <th className="px-2 py-2">
                                    TELÉFONO INSTITUCIONAL
                                </th>
                                <th className="px-2 py-2">ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jugadores.length > 0 ? (
                                jugadores.map((jugador, i) => (
                                    <tr key={jugador.id}>
                                        <td className="px-2 py-2 border">
                                            {i + 1}
                                        </td>
                                        <td className="px-2 py-2 border">
                                            {jugador.nombreCompleto}
                                        </td>
                                        <td className="px-2 py-2 border">
                                            {jugador.tipoIdentificacion}
                                        </td>
                                        <td className="px-2 py-2 border">
                                            {jugador.numeroIdentificacion}
                                        </td>
                                        <td className="px-2 py-2 border">
                                            {jugador.numeroSerie}
                                        </td>
                                        <td className="px-2 py-2 border">
                                            {jugador.fechaNacimiento}
                                        </td>
                                        <td className="px-2 py-2 border">
                                            {jugador.lugarNacimiento}
                                        </td>
                                        <td className="px-2 py-2 border">
                                            {jugador.institucionEducativa}
                                        </td>
                                        <td className="px-2 py-2 border">
                                            {jugador.grado}
                                        </td>
                                        <td className="px-2 py-2 border">
                                            {jugador.ciudadInstitucionEducativa}
                                        </td>
                                        <td className="px-2 py-2 border">
                                            {
                                                jugador.telefonoInstitucionEducativa
                                            }
                                        </td>
                                        <td className="flex px-2 py-2 space-x-2 border">
                                            <WarningButton
                                                onClick={() =>
                                                    openModal(
                                                        2,
                                                        jugador.id,
                                                        jugador.nombreCompleto,
                                                        jugador.foto,
                                                        jugador.tipoIdentificacion,
                                                        jugador.numeroIdentificacion,
                                                        jugador.numeroSerie,
                                                        jugador.fechaNacimiento,
                                                        jugador.lugarNacimiento,
                                                        jugador.institucionEducativa,
                                                        jugador.grado,
                                                        jugador.ciudadInstitucionEducativa,
                                                        jugador.telefonoInstitucionEducativa,
                                                        jugador.fk_equipo,
                                                        jugador.estadoEPS,
                                                        jugador.nombreEPS,
                                                        jugador.lugarAtencionEPS
                                                    )
                                                }
                                            >
                                                <i className="fa-solid fa-pencil"></i>
                                            </WarningButton>
                                            <SecondaryButton
                                                onClick={() =>
                                                    toggleJugador(
                                                        jugador.id,
                                                        jugador.nombreCompleto
                                                    )
                                                }
                                            >
                                                <i className="fa-solid fa-eye"></i>
                                                {jugador.estado === 1
                                                    ? "Desactivar"
                                                    : "Activar"}
                                            </SecondaryButton>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="12"
                                        className="px-2 py-2 text-center border"
                                    >
                                        Usted no ha subido ningún Jugador. 👀
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
                    className="grid grid-cols-2 gap-4 p-6"
                    encType="multipart/form-data"
                >
                    <FormField
                        htmlFor="nombreCompleto"
                        label="Nombres y Apellidos"
                        id="nombreCompleto"
                        type="text"
                        name="nombreCompleto"
                        value={data.nombreCompleto}
                        onChange={handleInputChangeMayus}
                        errorMessage={errors.nombreCompleto}
                        ref={nombreCompletoInput}
                    />
                    <ImgField
                        htmlFor="foto"
                        label="Foto Jugador"
                        id="foto"
                        name="foto"
                        ref={fotoInput}
                        onChange={handleFileChange}
                        value={data.foto}
                        errorMessage={errors.foto}
                        imageUrl={
                            data.foto
                                ? `http://127.0.0.1:8000/storage/${data.foto}`
                                : null
                        }
                    />
                    <SelectField
                        htmlFor="tipoIdentificacion"
                        label="Tipo Documento Identidad"
                        id="tipoIdentificacion"
                        name="tipoIdentificacion"
                        value={data.tipoIdentificacion}
                        options={handletipoDocIdentidad}
                        onChange={handleInputChange}
                        errorMessage={errors.tipoIdentificacion}
                        ref={tipoIdentificacionInput}
                    />
                    <FormField
                        htmlFor="numeroIdentificacion"
                        label="Número Documento Identidad"
                        id="numeroIdentificacion"
                        type="number"
                        name="numeroIdentificacion"
                        value={data.numeroIdentificacion}
                        onChange={handleInputChange}
                        errorMessage={errors.numeroIdentificacion}
                        ref={numeroIdentificacionInput}
                    />
                    <FormField
                        htmlFor="numeroSerie"
                        label="Serial Folio"
                        id="numeroSerie"
                        type="number"
                        name="numeroSerie"
                        value={data.numeroSerie}
                        onChange={handleInputChange}
                        errorMessage={errors.numeroSerie}
                        ref={numeroSerieInput}
                    />
                    <FormField
                        htmlFor="fechaNacimiento"
                        label="Fecha Nacimiento"
                        id="fechaNacimiento"
                        type="date"
                        name="fechaNacimiento"
                        value={data.fechaNacimiento}
                        onChange={handleInputChange}
                        errorMessage={errors.fechaNacimiento}
                        ref={fechaNacimientoInput}
                    />
                    <FormField
                        htmlFor="lugarNacimiento"
                        label="Lugar Nacimiento"
                        id="lugarNacimiento"
                        type="text"
                        name="lugarNacimiento"
                        value={data.lugarNacimiento}
                        onChange={handleInputChangeFirst}
                        errorMessage={errors.lugarNacimiento}
                        ref={lugarNacimientoInput}
                    />
                    <FormField
                        htmlFor="institucionEducativa"
                        label="Institución Educativa"
                        id="institucionEducativa"
                        type="text"
                        name="institucionEducativa"
                        value={data.institucionEducativa}
                        onChange={handleInputChangeFirst}
                        errorMessage={errors.institucionEducativa}
                        ref={institucionEducativaInput}
                    />
                    <SelectField
                        htmlFor="grado"
                        label="Grado"
                        id="grado"
                        name="grado"
                        value={data.grado}
                        options={[
                            {
                                value: "",
                                label: "Seleccione ...",
                                disabled: true,
                            },
                            { value: "0", label: "Preescolar" },
                            { value: "1", label: "Primero" },
                            { value: "2", label: "Segundo" },
                            { value: "3", label: "Tercero" },
                            { value: "4", label: "Cuarto" },
                            { value: "5", label: "Quinto" },
                            { value: "6", label: "Sexto" },
                            { value: "7", label: "Séptimo" },
                            { value: "8", label: "Octavo" },
                            { value: "9", label: "Noveno" },
                            { value: "10", label: "Décimo" },
                            { value: "11", label: "Once" },
                        ]}
                        onChange={handleInputChange}
                        errorMessage={errors.grado}
                        ref={gradoInput}
                    />
                    <FormField
                        htmlFor="ciudadInstitucionEducativa"
                        label="Ciudad Institución Educativa"
                        id="ciudadInstitucionEducativa"
                        type="text"
                        name="ciudadInstitucionEducativa"
                        value={data.ciudadInstitucionEducativa}
                        onChange={handleInputChangeFirst}
                        errorMessage={errors.ciudadInstitucionEducativa}
                        ref={ciudadInstitucionEducativaInput}
                    />
                    <FormField
                        htmlFor="telefonoInstitucionEducativa"
                        label="Teléfono Institución Educativa"
                        id="telefonoInstitucionEducativa"
                        type="number"
                        name="telefonoInstitucionEducativa"
                        value={data.telefonoInstitucionEducativa}
                        onChange={handleInputChange}
                        errorMessage={errors.telefonoInstitucionEducativa}
                        ref={telefonoInstitucionEducativaInput}
                    />
                    <SelectField
                        htmlFor="estadoEPS"
                        label="Estado EPS"
                        id="estadoEPS"
                        name="estadoEPS"
                        value={data.estadoEPS}
                        options={[
                            {
                                value: "",
                                label: "Seleccione ...",
                                disabled: true,
                            },
                            { value: "1", label: "Activo" },
                            { value: "0", label: "Inactivo" },
                        ]}
                        onChange={handleInputChange}
                        errorMessage={errors.estadoEPS}
                        ref={estadoEPSInput}
                    />
                    <FormField
                        htmlFor="nombreEPS"
                        label="Nombre EPS"
                        id="nombreEPS"
                        type="text"
                        name="nombreEPS"
                        value={data.nombreEPS}
                        onChange={handleInputChangeFirst}
                        errorMessage={errors.nombreEPS}
                        ref={nombreEPSInput}
                    />
                    <FormField
                        htmlFor="lugarAtencionEPS"
                        label="Lugar Atención EPS"
                        id="lugarAtencionEPS"
                        type="text"
                        name="lugarAtencionEPS"
                        value={data.lugarAtencionEPS}
                        onChange={handleInputChangeFirst}
                        errorMessage={errors.lugarAtencionEPS}
                        ref={lugarAtencionEPSInput}
                    />
                    <div className="flex justify-between col-span-2 mt-1">
                        <PrimaryButton
                            processing={processing.toString()}
                            className="mt-2"
                        >
                            <i className="mr-2 fa-solid fa-save"></i>Guardar
                        </PrimaryButton>
                        <SecondaryButton onClick={closeModal}>
                            Cancelar
                        </SecondaryButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
