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
            post(route("torneo.update", data.id), {
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
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Torneos ⚽
                </h2>
            }
        >
            <Head title="Torneos" />

            <div className="bg-white grid v-screen place-items-center py-6 overflow-x-auto">
                <div className="mt-1 mb-1 flex justify-end">
                    <PrimaryButton onClick={() => openModal(1)}>
                        <i
                            className="fa-solid fa-plus-circle"
                            style={{ marginRight: "10px" }}
                        ></i>
                        Agregar Torneo
                    </PrimaryButton>
                </div>

                <h1>Listado de Torneos</h1>

                {torneos.length > 0 ? (
                    torneos.map((torneo, i) => (
                        <ul key={torneo.id} className="grid grid-cols-1 gap-4">
                            <li className="border border-gray-400 mb-10 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14">
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium">
                                    <strong>Información General:</strong>{" "}
                                    Información del torneo 1
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    <strong>Nombre del Torneo:</strong>{" "}
                                    {torneo.nombreTorneo}
                                </p>
                                <div>
                                    
                                        <WarningButton
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
                                            <i className="fa-solid fa-edit"></i>
                                        </WarningButton>                                  
                                    
                                        <DangerButton
                                            onClick={() =>
                                                eliminar(
                                                    torneo.id,
                                                    torneo.nombreTorneo
                                                )
                                            }
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </DangerButton>

                                        <a
                                            href={`/resultadoSorteo?team_id=${torneo.id}`}
                                        >
                                            <i className="fa-solid fa-dice"></i>
                                            Resultado Sorteo
                                        </a>

                                        <a
                                            href={`/programacionTorneo?team_id=${torneo.id}`}
                                        >
                                            <i className="fa-solid fa-dice"></i>
                                            Programación Torneo
                                        </a>

                                </div>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    <strong>Cantidad de Grupos:</strong>{" "}
                                    {torneo.cantidadGrupos}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    <strong>
                                        Cantidad de Equipos Participantes:
                                    </strong>{" "}
                                    {torneo.cantidadEquiposParticipantes}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    <strong>Estado del Torneo:</strong>{" "}
                                    {torneo.estadoTorneo}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    <strong>Proceso de Inscripción:</strong>{" "}
                                    {torneo.procesoInscripcion}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    <strong>Fecha de Inicio:</strong>{" "}
                                    {torneo.fechaInicio}
                                </p>

                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    <strong>Fecha de Fin:</strong>{" "}
                                    {torneo.fechaFin}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    <strong>Imagen y Publicidad:</strong>{" "}
                                    Información de imagen y publicidad del
                                    torneo 1
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    <strong>Flayer</strong>
                                    <img
                                        src={`/storage/${torneo.flayer}`}
                                        alt={torneo.nombreTorneo}
                                        className="w-32 h-auto sm:w-48 md:w-64 lg:w-80 xl:w-96 2xl:w-112"
                                    />
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    <strong>
                                        Imagen del Banner Inferior Izquierdo
                                    </strong>
                                    <img
                                        src={`/storage/${torneo.imgBannerInferiorIz}`}
                                        alt={torneo.nombreTorneo}
                                        className="w-32 h-auto sm:w-48 md:w-64 lg:w-80 xl:w-96 2xl:w-112"
                                    />
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    <strong>
                                        Imagen del Banner Inferior Derecho
                                    </strong>
                                    <img
                                        src={`/storage/${torneo.imgBannerInferiorDe}`}
                                        alt={torneo.nombreTorneo}
                                        className="w-32 h-auto sm:w-48 md:w-64 lg:w-80 xl:w-96 2xl:w-112"
                                    />
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    <strong>Imagen del Banner Superior</strong>
                                    <img
                                        src={`/storage/${torneo.imgBannerSuperior}`}
                                        alt={torneo.nombreTorneo}
                                        className="w-32 h-auto sm:w-48 md:w-64 lg:w-80 xl:w-96 2xl:w-112"
                                    />
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    <strong>Detalles del Torneo:</strong>{" "}
                                    Información detallada del torneo 1
                                </p>
                                <br />
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    <strong>Aval:</strong> {torneo.Aval}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    <strong>Apoyo Principal:</strong>{" "}
                                    {torneo.ApoyoPrincipal}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    <strong>Características del Torneo:</strong>{" "}
                                    {splitTextIntoLines(
                                        torneo.caracteristicas,
                                        62
                                    ).map((line, index) => (
                                        <p key={index}>{line}</p>
                                    ))}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    <strong>Premiación:</strong>{" "}
                                    {splitTextIntoLines(
                                        torneo.premiacion,
                                        62
                                    ).map((line, index) => (
                                        <p key={index}>{line}</p>
                                    ))}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    <strong>Sistema de Juego:</strong>{" "}
                                    {torneo.fk_sistema_juegos}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    <strong>Categoría de Equipos:</strong>{" "}
                                    {torneo.fk_categoria_equipo}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    <strong>Reglamentación:</strong>{" "}
                                    {torneo.reglamentacion}
                                </p>
                            </li>
                        </ul>
                    ))
                ) : (
                    <p>No hay torneos</p>
                )}

                <div className="bg-white grid v-screen place-items-center py-6">
                    {/*                     <table className="table table-auto border border-gray-400 rounded-t-lg rounded-br-lg rounded-bl-lg">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-2 py-2">#</th>
                                <th className="px-2 py-2">Nombre Torneo</th>
                                <th className="px-2 py-2">Flayer</th>
                                <th className="px-2 py-2">Cantidad Equipo</th>
                                <th className="px-2 py-2">Caracteristicas</th>
                                <th className="px-2 py-2">Premiación</th>
                                <th className="px-2 py-2">Sistema de Juego</th>
                                <th className="px-2 py-2">Categoria</th>
                                <th className="px-2 py-2">Estado</th>
                                <th className="px-2 py-2">Inscripción</th>
                                <th className="px-2 py-2">
                                    Proceso de Inscripción
                                </th>
                                <th className="px-2 py-2">Reglamentación</th>
                                <th className="px-2 py-2">Fecha de Inicio</th>
                                <th className="px-2 py-2">Fecha Cierre</th>
                                <th className="px-2 py-2"></th>
                                <th className="px-2 py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {torneos.length > 0 ? (
                                torneos.map((torneo, i) => (
                                    <tr key={torneo.id}>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {i + 1}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {torneo.nombreTorneo}
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
                                            <img
                                                src={`/storage/${torneo.flayer}`}
                                                alt={torneo.nombreTorneo}
                                                className="w-32 h-auto"
                                            />
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {
                                                torneo.cantidadEquiposParticipantes
                                            }
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
                                            {torneo.caracteristicas}
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
                                            {torneo.premiacion}
                                        </td>

                                        <td className="border border-gray-400 px-2 py-2">
                                            {torneo.sistemaJuego}
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
                                            {torneo.fk_sistema_juegos}
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
                                            {torneo.fk_categoria_equipo}
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
                                            {torneo.estadoTorneo}
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
                                            {torneo.inscripcion}
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
                                            <a href="{torneo.reglamentacion}">
                                                {torneo.reglamentacion}
                                            </a>
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
                                            {new Date(
                                                torneo.fechaInicio
                                            ).toLocaleDateString()}
                                        </td>


                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="11" className="text-center">
                                        Usted no ha subido ningún Torneo. 👀
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table> */}
                </div>
            </div>

            <Modal show={modal} onClose={closeModal}>
                <h2 className="p-3 text-lg font-medium text-gray-900">
                    {title}
                </h2>

                <form
                    onSubmit={save}
                    className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 "
                    encType="multipart/form-data"
                >
                    <FormField
                        htmlFor="nombreTorneo"
                        label="Nombre Torneo"
                        id="nombreTorneo"
                        type="text"
                        ref={nombreTorneoInput}
                        name="nombreTorneo"
                        placeholder="Nombre Torneo"
                        value={data.nombreTorneo}
                        onChange={handleInputChange}
                        errorMessage={errors.nombreTorneo}
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
                        label="Cantidad de Grupos"
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
                        label="Cantidad de Equipos"
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
                        htmlFor="caracteristicas"
                        label="Caracteristicas"
                        id="caracteristicas"
                        type="text"
                        ref={caracteristicasInput}
                        name="caracteristicas"
                        placeholder="Caracteristicas"
                        value={data.caracteristicas}
                        onChange={handleInputChange}
                        errorMessage={errors.caracteristicas}
                    />

                    <FormField
                        htmlFor="premiacion"
                        label="Premiación"
                        id="premiacion"
                        type="text"
                        ref={premiacionInput}
                        name="premiacion"
                        placeholder="Premiación"
                        value={data.premiacion}
                        onChange={handleInputChange}
                        errorMessage={errors.premiacion}
                    />

                    <SelectField
                        htmlFor="fk_sistema_juegos"
                        label="Sistema de Juego"
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
                        label="Categoria"
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
                        label="Estado"
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
                        label="Inscripción"
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

                    <FormField
                        htmlFor="procesoInscripcion"
                        label="Proceso de Inscripción"
                        id="procesoInscripcion"
                        type="text"
                        ref={procesoInscripcionInput}
                        name="procesoInscripcion"
                        placeholder="Proceso de Inscripción"
                        value={data.procesoInscripcion}
                        onChange={handleInputChange}
                        errorMessage={errors.procesoInscripcion}
                    />

                    <FormField
                        htmlFor="reglamentacion"
                        label="Reglamentación"
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

                    <div className="">
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
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
