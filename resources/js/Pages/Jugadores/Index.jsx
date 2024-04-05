import { useRef, useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DangerButton from "@/Components/DangerButton";
import FormField from "@/Components/FormField";
import SelectField from "@/Components/SelectField";
import ImgField from "@/Components/ImgField";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import WarningButton from "@/Components/WarningButton";

export default function Index({ 
    auth,
    equipos, 
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
    const InitialValues = {
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

    const handleFileChange = (e) => {
        setData("fotoJugador", e.target.files[0]);
    };


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
            setData(InitialValues);
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

    const save = (e) => {
        e.preventDefault();
        if (operation === 1) {
            post(route("jugadores.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    ok("El jugador ha sido creado");
                },
            });
        } else {
            post(route("jugadores.update", data.id), {
                preserveScroll: true,
                onSuccess: () => {
                    ok("El jugador ha sido actualizado");
                },
            });
        }
    };

    const ok = (mensaje) => {
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

    const handletipoDocIdentidad = [
        { value: "", label: "Seleccione ...", disabled: true },        
        { value: "CC", label: "Cédula de Ciudadanía" },
        { value: "CE", label: "Cédula de Extranjería" },
        { value: "TI", label: "Tarjeta de Identidad" },
        { value: "RC", label: "Registro Civil" },
        { value: "PA", label: "Pasaporte" },
    ];

    const handleEquipos = [
        { value: "", label: "Seleccione ...", disabled: true },
        ...equipos.map((equipo) => ({
            value: equipo.id,
            label: equipo.nombreEquipo,
        })),
    ];

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
                                            <WarningButton
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
                                            </WarningButton>
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
                    <ImgField
                        htmlFor="fotoJugador"
                        label="Foto Jugador"
                        id="fotoJugador"
                        name="fotoJugador"
                        ref={fotoJugadorInput}
                        onChange={handleFileChange}
                        value={data.fotoJugador}
                        errorMessage={errors.fotoJugador}                        
                    />
                    <SelectField
                        htmlFor="tipoDocIdentidad"
                        label="Tipo Doc Identidad"
                        id="tipoDocIdentidad"
                        name="tipoDocIdentidad"
                        value={data.tipoDocIdentidad}                        
                        options={handletipoDocIdentidad} 
                        onChange={handleInputChange}
                        errorMessage={errors.tipoDocIdentidad}
                        ref={tipoDocIdentidadInput}                        
                        
                    />

                    <FormField
                        htmlFor="documentoIdentidad"
                        label="# Documento"
                        id="documentoIdentidad"
                        type="number"
                        name="documentoIdentidad"
                        value={data.documentoIdentidad}
                        onChange={handleInputChange}
                        errorMessage={errors.documentoIdentidad}
                        ref={documentoIdentidadInput}
                        
                    />

                    <FormField
                        htmlFor="nombreJugador"
                        label="Nombre Jugador"
                        id="nombreJugador"
                        type="text"
                        name="nombreJugador"
                        value={data.nombreJugador}
                        onChange={handleInputChange}
                        errorMessage={errors.nombreJugador}
                        ref={nombreJugadorInput}
                        
                    />

                    <FormField
                        htmlFor="segundoNombreJugador"
                        label="Segundo Nombre Jugador"
                        id="segundoNombreJugador"
                        type="text"
                        name="segundoNombreJugador"
                        value={data.segundoNombreJugador}
                        onChange={handleInputChange}
                        errorMessage={errors.segundoNombreJugador}
                        ref={segundoNombreJugadorInput}
                    />

                    <FormField
                        htmlFor="apellidoJugador"
                        label="Apellido Jugador"
                        id="apellidoJugador"
                        type="text"
                        name="apellidoJugador"
                        value={data.apellidoJugador}
                        onChange={handleInputChange}
                        errorMessage={errors.apellidoJugador}
                        ref={apellidoJugadorInput}
                        
                    />

                    <FormField
                        htmlFor="segundoApellidoJugador"
                        label="Segundo Apellido Jugador"
                        id="segundoApellidoJugador"
                        type="text"
                        name="segundoApellidoJugador"
                        value={data.segundoApellidoJugador}
                        onChange={handleInputChange}
                        errorMessage={errors.segundoApellidoJugador}
                        ref={segundoApellidoJugadorInput}
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

                    <SelectField
                        htmlFor="fk_equipo"
                        label="Equipo"
                        id="fk_equipo"
                        name="fk_equipo"
                        value={data.fk_equipo}
                        options={handleEquipos}
                        onChange={handleInputChange}
                        errorMessage={errors.fk_equipo}
                        ref={fk_equipoInput}                        
                    />
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
