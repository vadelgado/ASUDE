import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";

import Swal from "sweetalert2";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DangerButton from "@/Components/DangerButton";
import FormField from "@/Components/FormField";
import ImgField from "@/Components/ImgField";
import SelectField from "@/Components/SelectField";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import WarningButton from "@/Components/WarningButton";
import Textarea2 from "@/Components/Textarea2";

export default function Dashboard({
    auth,
    torneos,
    sistemaJuegos,
    categoriaEquipos,
}) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const nombreTorneoInput = useRef();
    const flayerInput = useRef();
    const imgBannerSuperiorInput = useRef();
    const imgBannerInferiorIzInput = useRef();
    const imgBannerInferiorDeInput = useRef();
    const AvalInput = useRef();
    const ApoyoPrincipalInput = useRef();
    const cantidadGruposInput = useRef();
    const cantidadEquiposParticipantesInput = useRef();
    const caracteristicasInput = useRef();
    const premiacionInput = useRef();
    const fk_sistema_juegosInput = useRef();
    const fk_categoria_equipoInput = useRef();
    const estadoTorneoInput = useRef();
    const inscripcionInput = useRef();
    const procesoInscripcionInput = useRef();
    const reglamentacionInput = useRef();
    const fechaInicioInput = useRef();
    const fechaFinInput = useRef();

    const InitialValues = {
        fk_user: auth.user.id,
        nombreTorneo: "",
        flayer: null,
        imgBannerSuperior: null,
        imgBannerInferiorIz: null,
        imgBannerInferiorDe: null,
        Aval: "",
        ApoyoPrincipal: "",
        cantidadGrupos: "",
        cantidadEquiposParticipantes: "",
        caracteristicas: "",
        premiacion: "",
        fk_sistema_juegos: "",
        fk_categoria_equipo: "",
        estadoTorneo: "",
        inscripcion: "",
        procesoInscripcion: "",
        reglamentacion: "",
        fechaInicio: "",
        fechaFin: "",
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
    const handleFileChange = (field, e) => {
        setData(field, e.target.files[0]);
    };
    const openModal = (
        op,
        id,
        nombreTorneo,
        flayer,
        imgBannerSuperior,
        imgBannerInferiorIz,
        imgBannerInferiorDe,
        Aval,
        ApoyoPrincipal,
        cantidadGrupos,
        cantidadEquiposParticipantes,
        caracteristicas,
        premiacion,
        fk_sistema_juegos,
        fk_categoria_equipo,
        estadoTorneo,
        inscripcion,
        procesoInscripcion,
        reglamentacion,
        fechaInicio,
        fechaFin
    ) => {
        setModal(true);
        setOperation(op);
        if (op === 1) {
            setTitle("Agregar Torneo");
            setData(InitialValues);
        } else {
            setTitle("Editar Torneo");
            setData({
                id: id,
                nombreTorneo: nombreTorneo,
                flayer: flayer,
                imgBannerSuperior: imgBannerSuperior,
                imgBannerInferiorIz: imgBannerInferiorIz,
                imgBannerInferiorDe: imgBannerInferiorDe,
                Aval: Aval,
                ApoyoPrincipal: ApoyoPrincipal,
                cantidadGrupos: cantidadGrupos,
                cantidadEquiposParticipantes: cantidadEquiposParticipantes,
                caracteristicas: caracteristicas,
                premiacion: premiacion,
                fk_sistema_juegos: fk_sistema_juegos,
                fk_categoria_equipo: fk_categoria_equipo,
                estadoTorneo: estadoTorneo,
                inscripcion: inscripcion,
                procesoInscripcion: procesoInscripcion,
                reglamentacion: reglamentacion,
                fechaInicio: fechaInicio,
                fechaFin: fechaFin,
            });
        }
    };
    const closeModal = () => {
        setModal(false);
    };

    const save = (e) => {
        e.preventDefault();
        if (operation === 1) {
            post(route("torneo.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    ok("Torneo guardado correctamente");
                },
            });
        } else {
            post(route("torneo.updatepost", data.id), {
                preserveScroll: true,
                onSuccess: () => {
                    ok("Torneo actualizado correctamente");
                },
            });
        }
    };

    const ok = (message) => {
        closeModal();
        Swal.fire("¡Correcto!", message, "success");
    };

    const eliminar = (id, nombreTorneo) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: `Eliminarás el torneo ${nombreTorneo}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("torneo.destroy", id), {
                    preserveScroll: true,
                    onSuccess: () => {
                        ok("Torneo eliminado correctamente");
                    },
                });
            }
        });
    };

    const handleSistemaJuego = [
        { value: "", label: "Seleccione...", disabled: true },
        ...sistemaJuegos.map((sistemaJuego) => ({
            value: sistemaJuego.id,
            label: sistemaJuego.nombreSistema,
        })),
    ];

    const handleCategoriaEquipo = [
        { value: "", label: "Seleccione...", disabled: true },
        ...categoriaEquipos.map((categoriaEquipo) => ({
            value: categoriaEquipo.id,
            label: categoriaEquipo.descripcion,
        })),
    ];

    function splitTextIntoLines(text, maxLineLength) {
        const words = text.split(" ");
        const lines = [];
        let currentLine = "";

        for (const word of words) {
            if ((currentLine + word).length <= maxLineLength) {
                currentLine += " " + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }

        lines.push(currentLine); // push the last line

        return lines;
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Torneos ⚽
                </h2>
            }
        >
            <Head title="Torneos" />

            <div className="min-h-screen py-6 bg-gray-100">
                <div className="container px-4 mx-auto">
                    <div className="flex justify-end mb-4">
                        <PrimaryButton onClick={() => openModal(1)}>
                            <i className="mr-2 fa-solid fa-plus-circle"></i>{" "}
                            Agregar Torneo
                        </PrimaryButton>
                    </div>

                    <h1 className="mb-4 text-2xl font-bold">
                        Listado de Torneos
                    </h1>

                    {torneos.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {torneos.map((torneo) => (
                                <div
                                    key={torneo.id}
                                    className="p-4 bg-white rounded-lg shadow-md"
                                >
                                    <div className="grid grid-cols-3 gap-4 mb-4">
                                        <a
                                            className="text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
                                            onClick={() =>
                                                openModal(
                                                    2,
                                                    torneo.id,
                                                    torneo.nombreTorneo,
                                                    torneo.flayer,
                                                    torneo.imgBannerSuperior,
                                                    torneo.imgBannerInferiorIz,
                                                    torneo.imgBannerInferiorDe,
                                                    torneo.Aval,
                                                    torneo.ApoyoPrincipal,
                                                    torneo.cantidadGrupos,
                                                    torneo.cantidadEquiposParticipantes,
                                                    torneo.caracteristicas,
                                                    torneo.premiacion,
                                                    torneo.fk_sistema_juegos,
                                                    torneo.fk_categoria_equipo,
                                                    torneo.estadoTorneo,
                                                    torneo.inscripcion,
                                                    torneo.procesoInscripcion,
                                                    torneo.reglamentacion,
                                                    torneo.fechaInicio,
                                                    torneo.fechaFin,
                                                    torneo.fk_user
                                                )
                                            }
                                        >
                                            <i className="mr-2 fa-solid fa-edit"></i>{" "}
                                            Editar
                                        </a>

                                        <a
                                            className="text-white bg-pink-500 hover:bg-pink-400 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
                                            href={`/lugarPartido?torneo_id=${torneo.id}`}
                                        >
                                            <i className="mr-2 fa-solid fa-location-dot"></i>{" "}
                                            Lugares
                                        </a>

                                        <a
                                            className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
                                            href={`/resultadoSorteo?torneo_id=${torneo.id}`}
                                        >
                                            <i className="mr-2 fa-solid fa-dice"></i>{" "}
                                            Sorteo
                                        </a>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <a
                                            className="text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
                                            href={`/fases?torneo_id=${torneo.id}`}
                                        >
                                            <i className="mr-2 fa-solid fa-flag"></i>{" "}
                                            Fases Torneo
                                        </a>

                                        <a
                                            className="text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
                                            onClick={() =>
                                                eliminar(
                                                    torneo.id,
                                                    torneo.nombreTorneo
                                                )
                                            }
                                        >
                                            <i className="mr-2 fa-solid fa-trash"></i>{" "}
                                            Eliminar
                                        </a>
                                    </div>

                                    <div className="mb-2 text-base">
                                        <strong>Nombre del Torneo:</strong>{" "}
                                        {torneo.nombreTorneo}
                                    </div>
                                    <div className="mb-2 text-base">
                                        <strong>Cantidad de Grupos:</strong>{" "}
                                        {torneo.cantidadGrupos}
                                    </div>
                                    <div className="mb-2 text-base">
                                        <strong>
                                            Cantidad de Equipos Participantes:
                                        </strong>{" "}
                                        {torneo.cantidadEquiposParticipantes}
                                    </div>
                                    <div className="mb-2 text-base">
                                        <strong>Estado del Torneo:</strong>{" "}
                                        {torneo.estadoTorneo}
                                    </div>
                                    <div className="mb-2 text-base">
                                        <strong>Proceso de Inscripción:</strong>{" "}
                                        {torneo.procesoInscripcion}
                                    </div>
                                    <div className="mb-2 text-base">
                                        <strong>Fecha de Inicio:</strong>{" "}
                                        {torneo.fechaInicio}
                                    </div>
                                    <div className="mb-2 text-base">
                                        <strong>Fecha de Fin:</strong>{" "}
                                        {torneo.fechaFin}
                                    </div>
                                    <div className="mb-2 text-base">
                                        <strong>Detalles del Torneo:</strong>{" "}
                                        Información detallada del torneo 1
                                    </div>
                                    <div className="mb-2 text-base">
                                        <strong>Aval:</strong> {torneo.Aval}
                                    </div>
                                    <div className="mb-2 text-base">
                                        <strong>Apoyo Principal:</strong>{" "}
                                        {torneo.ApoyoPrincipal}
                                    </div>
                                    <div className="mb-2 text-base">
                                        <strong>
                                            Características del Torneo:
                                        </strong>
                                        {splitTextIntoLines(
                                            torneo.caracteristicas,
                                            62
                                        ).map((line, index) => (
                                            <div key={index}>{line}</div>
                                        ))}
                                    </div>
                                    <div className="mb-2 text-base">
                                        <strong>Premiación:</strong>
                                        {splitTextIntoLines(
                                            torneo.premiacion,
                                            62
                                        ).map((line, index) => (
                                            <div key={index}>{line}</div>
                                        ))}
                                    </div>
                                    <div className="mb-2 text-base">
                                        <strong>Sistema de Juego:</strong>{" "}
                                        {torneo.fk_sistema_juegos}
                                    </div>
                                    <div className="mb-2 text-base">
                                        <strong>Categoría de Equipos:</strong>{" "}
                                        {torneo.fk_categoria_equipo}
                                    </div>
                                    <div className="mb-2 text-base">
                                        <strong>Reglamentación:</strong>{" "}
                                        {torneo.reglamentacion}
                                    </div>
                                    <div className="mb-2 text-base">
                                        <strong>Imagen y Publicidad:</strong>{" "}
                                        Información de imagen y publicidad del
                                        torneo 1
                                    </div>
                                    <div className="mb-2 text-base">
                                        <strong>Flayer</strong>
                                        <img
                                            src={`/storage/${torneo.flayer}`}
                                            alt={torneo.nombreTorneo}
                                            className="w-32 h-auto"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-base">
                                            <strong>
                                                Imagen del Banner Inferior
                                                Izquierdo
                                            </strong>
                                            <img
                                                src={`/storage/${torneo.imgBannerInferiorIz}`}
                                                alt={torneo.nombreTorneo}
                                                className="w-24 h-auto"
                                            />
                                        </div>
                                        <div className="text-base">
                                            <strong>
                                                Imagen del Banner Inferior
                                                Derecho
                                            </strong>
                                            <img
                                                src={`/storage/${torneo.imgBannerInferiorDe}`}
                                                alt={torneo.nombreTorneo}
                                                className="w-24 h-auto"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4 text-base">
                                        <strong>
                                            Imagen del Banner Superior
                                        </strong>
                                        <img
                                            src={`/storage/${torneo.imgBannerSuperior}`}
                                            alt={torneo.nombreTorneo}
                                            className="h-auto w-36"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>No hay torneos</div>
                    )}
                </div>
            </div>

            <Modal show={modal} onClose={closeModal}>
                <h2 className="p-4 text-2xl font-semibold text-white bg-gray-800 border-b border-gray-300 rounded-t-md">
                    {title}
                </h2>

                <p className="pl-4 text-red-500">
                    Los campos marcados con un{" "}
                    <span className="font-bold">*</span> son obligatorios
                </p>

                <form
                    onSubmit={save}
                    className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 "
                    encType="multipart/form-data"
                >
                    <FormField
                        htmlFor="nombreTorneo"
                        label={
                            <>
                                <span>Nombre Torneo</span>
                                <span className="text-red-500">*</span>
                            </>
                        }
                        id="nombreTorneo"
                        type="text"
                        ref={nombreTorneoInput}
                        name="nombreTorneo"
                        placeholder="Nombre Torneo"
                        value={data.nombreTorneo}
                        onChange={handleInputChange}
                        errorMessage={errors.nombreTorneo}
                    />

                    <FormField
                        htmlFor="Aval"
                        label="Aval"
                        id="Aval"
                        type="text"
                        ref={AvalInput}
                        name="Aval"
                        placeholder="Aval"
                        value={data.Aval}
                        onChange={handleInputChange}
                        errorMessage={errors.Aval}
                    />

                    <FormField
                        htmlFor="ApoyoPrincipal"
                        label="Apoyo Principal"
                        id="ApoyoPrincipal"
                        type="text"
                        ref={ApoyoPrincipalInput}
                        name="ApoyoPrincipal"
                        placeholder="Apoyo Principal"
                        value={data.ApoyoPrincipal}
                        onChange={handleInputChange}
                        errorMessage={errors.ApoyoPrincipal}
                    />

                    <FormField
                        htmlFor="cantidadGrupos"
                        label={
                            <>
                                <span>Cantidad de Grupos</span>
                                <span className="text-red-500">*</span>
                            </>
                        }
                        id="cantidadGrupos"
                        type="number"
                        ref={cantidadGruposInput}
                        name="cantidadGrupos"
                        placeholder="Cantidad de Grupos"
                        value={data.cantidadGrupos}
                        onChange={handleInputChange}
                        errorMessage={errors.cantidadGrupos}
                    />

                    <FormField
                        htmlFor="cantidadEquiposParticipantes"
                        label={
                            <>
                                <span>Cantidad de Equipos</span>
                                <span className="text-red-500">*</span>
                            </>
                        }
                        id="cantidadEquiposParticipantes"
                        type="number"
                        ref={cantidadEquiposParticipantesInput}
                        name="cantidadEquiposParticipantes"
                        placeholder="Cantidad de Equipos"
                        value={data.cantidadEquiposParticipantes}
                        onChange={handleInputChange}
                        errorMessage={errors.cantidadEquiposParticipantes}
                    />

                    <FormField
                        htmlFor="reglamentacion"
                        label={
                            <>
                                <span>Reglamentación</span>
                                <span className="text-red-500">*</span>
                            </>
                        }
                        id="reglamentacion"
                        type="text"
                        ref={reglamentacionInput}
                        name="reglamentacion"
                        placeholder="Reglamentación"
                        value={data.reglamentacion}
                        onChange={handleInputChange}
                        errorMessage={errors.reglamentacion}
                    />

                    <FormField
                        htmlFor="fechaInicio"
                        label="Fecha de Inicio"
                        id="fechaInicio"
                        type="date"
                        ref={fechaInicioInput}
                        name="fechaInicio"
                        placeholder="Fecha de Inicio"
                        value={data.fechaInicio}
                        onChange={handleInputChange}
                        errorMessage={errors.fechaInicio}
                    />

                    <FormField
                        htmlFor="fechaFin"
                        label="Fecha de Cierre"
                        id="fechaFin"
                        type="date"
                        ref={fechaFinInput}
                        name="fechaFin"
                        placeholder="Fecha de Cierre"
                        value={data.fechaFin}
                        onChange={handleInputChange}
                        errorMessage={errors.fechaFin}
                    />
                    <SelectField
                        htmlFor="fk_sistema_juegos"
                        label={
                            <>
                                <span>Sistema de Juego</span>
                                <span className="text-red-500">*</span>
                            </>
                        }
                        id="fk_sistema_juegos"
                        ref={fk_sistema_juegosInput}
                        name="fk_sistema_juegos"
                        value={data.fk_sistema_juegos}
                        onChange={handleInputChange}
                        errorMessage={errors.fk_sistema_juegos}
                        options={handleSistemaJuego}
                    />

                    <SelectField
                        htmlFor="fk_categoria_equipo"
                        label={
                            <>
                                <span>Categoría</span>
                                <span className="text-red-500">*</span>
                            </>
                        }
                        id="fk_categoria_equipo"
                        ref={fk_categoria_equipoInput}
                        name="fk_categoria_equipo"
                        value={data.fk_categoria_equipo}
                        onChange={handleInputChange}
                        errorMessage={errors.fk_categoria_equipo}
                        options={handleCategoriaEquipo}
                    />

                    <SelectField
                        htmlFor="estadoTorneo"
                        label={
                            <>
                                <span>Estado</span>
                                <span className="text-red-500">*</span>
                            </>
                        }
                        id="estadoTorneo"
                        ref={estadoTorneoInput}
                        name="estadoTorneo"
                        value={data.estadoTorneo}
                        onChange={handleInputChange}
                        errorMessage={errors.estadoTorneo}
                        options={[
                            {
                                value: "",
                                label: "Seleccione...",
                                disabled: true,
                            },
                            { value: "Por Iniciar", label: "Por Iniciar" },
                            { value: "En Juego", label: "En Juego" },
                            { value: "Finalizado", label: "Finalizado" },
                        ]}
                    />

                    <SelectField
                        htmlFor="inscripcion"
                        label={
                            <>
                                <span>Inscripción</span>
                                <span className="text-red-500">*</span>
                            </>
                        }
                        id="inscripcion"
                        ref={inscripcionInput}
                        name="inscripcion"
                        value={data.inscripcion}
                        onChange={handleInputChange}
                        errorMessage={errors.inscripcion}
                        options={[
                            {
                                value: "",
                                label: "Seleccione...",
                                disabled: true,
                            },
                            { value: "Abierta", label: "Abierta" },
                            { value: "Cerrada", label: "Cerrada" },
                        ]}
                    />

                    <ImgField
                        htmlFor="flayer"
                        label="Flayer"
                        id="flayer"
                        ref={flayerInput}
                        name="flayer"
                        value={data.flayer}
                        onChange={(e) => handleFileChange("flayer", e)}
                        errorMessage={errors.flayer}
                    />

                    <ImgField
                        htmlFor="imgBannerSuperior"
                        label="Banner Superior"
                        id="imgBannerSuperior"
                        ref={imgBannerSuperiorInput}
                        name="imgBannerSuperior"
                        value={data.imgBannerSuperior}
                        onChange={(e) =>
                            handleFileChange("imgBannerSuperior", e)
                        }
                        errorMessage={errors.imgBannerSuperior}
                    />

                    <ImgField
                        htmlFor="imgBannerInferiorIz"
                        label="Banner Inferior Izquierdo"
                        id="imgBannerInferiorIz"
                        ref={imgBannerInferiorIzInput}
                        name="imgBannerInferiorIz"
                        value={data.imgBannerInferiorIz}
                        onChange={(e) =>
                            handleFileChange("imgBannerInferiorIz", e)
                        }
                        errorMessage={errors.imgBannerInferiorIz}
                    />

                    <ImgField
                        htmlFor="imgBannerInferiorDe"
                        label="Banner Inferior Derecho"
                        id="imgBannerInferiorDe"
                        ref={imgBannerInferiorDeInput}
                        name="imgBannerInferiorDe"
                        value={data.imgBannerInferiorDe}
                        onChange={(e) =>
                            handleFileChange("imgBannerInferiorDe", e)
                        }
                        errorMessage={errors.imgBannerInferiorDe}
                    />

                    <Textarea2
                        htmlFor="caracteristicas"
                        label={
                            <>
                                <span>Características</span>
                                <span className="text-red-500">*</span>
                            </>
                        }
                        id="caracteristicas"
                        type="text"
                        ref={caracteristicasInput}
                        name="caracteristicas"
                        placeholder="Caracteristicas"
                        value={data.caracteristicas}
                        onChange={handleInputChange}
                        errorMessage={errors.caracteristicas}
                    />

                    <Textarea2
                        htmlFor="premiacion"
                        label={
                            <>
                                <span>Premiación</span>
                                <span className="text-red-500">*</span>
                            </>
                        }
                        id="premiacion"
                        type="text"
                        ref={premiacionInput}
                        name="premiacion"
                        placeholder="Premiación"
                        value={data.premiacion}
                        onChange={handleInputChange}
                        errorMessage={errors.premiacion}
                    />

                    <Textarea2
                        htmlFor="procesoInscripcion"
                        label={
                            <>
                                <span>Proceso de Inscripción</span>
                                <span className="text-red-500">*</span>
                            </>
                        }
                        id="procesoInscripcion"
                        type="text"
                        ref={procesoInscripcionInput}
                        name="procesoInscripcion"
                        placeholder="Proceso de Inscripción"
                        value={data.procesoInscripcion}
                        onChange={handleInputChange}
                        errorMessage={errors.procesoInscripcion}
                    />

                    <div className="mt-20 space-x-4 ">
                        <PrimaryButton processing={processing.toString()}>
                            <i className="fa-solid fa-save"></i>
                            <span>Guardar</span>
                        </PrimaryButton>
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
