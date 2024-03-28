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

export default function Dashboard({ auth, torneos, sistemaJuegos,categoriaEquipos}) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const nombreTorneoInput = useRef();
    const flayerInput = useRef();
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
    const handleFileChange = (e) => {
        setData("flayer", e.target.files[0]);
    };
    const openModal = (
        op,
        id,
        nombreTorneo,
        flayer,
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
        {value: "", label: "Seleccione...", disabled: true},
        ...sistemaJuegos.map((sistemaJuego) => ({
            value: sistemaJuego.id,
            label: sistemaJuego.nombreSistema,
        })),
    ];

    const handleCategoriaEquipo = [
        {value: "", label: "Seleccione...", disabled: true},
        ...categoriaEquipos.map((categoriaEquipo) => ({
            value: categoriaEquipo.id,
            label: categoriaEquipo.descripcion,
        })),
    ];

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

                <div className="bg-white grid v-screen place-items-center py-6">
                    <table className="table table-auto border border-gray-400 rounded-t-lg rounded-br-lg rounded-bl-lg">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-2 py-2">#</th>
                                <th className="px-2 py-2">Nombre Torneo</th>
                                <th className="px-2 py-2">Flayer</th>
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
                                <th className="px-2 py-2">Fehca Cierre</th>
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
                                        <td className="border border-gray-400 px-2 py-2">
                                            <WarningButton
                                                onClick={() =>
                                                    openModal(
                                                        2,
                                                        torneo.id,
                                                        torneo.nombreTorneo,
                                                        torneo.flayer,
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
                                                        torneo.fk_user,
                                                    )
                                                }
                                            >
                                                <i className="fa-solid fa-edit"></i>
                                            </WarningButton>
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
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
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
                                            <a
                                                href={`/resultadoSorteo?team_id=${torneo.id}`}
                                            >
                                                <i className="fa-solid fa-dice"></i>
                                                Resultado Sorteo
                                            </a>
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
                                            <a
                                                href={`/programacionTorneo?team_id=${torneo.id}`}
                                            >
                                                <i className="fa-solid fa-dice"></i>
                                                Programación Torneo
                                            </a>
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
                    </table>
                </div>
            </div>

            <Modal show={modal} onClose={closeModal}>
                <h2 className="p-3 text-lg font-medium text-gray-900">
                    {title}
                </h2>
                <form onSubmit={save} className="p-6"
                encType="multipart/form-data">
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
                        onChange={handleFileChange}
                        errorMessage={errors.flayer}
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
                            { value: "", label: "Seleccione...", disabled: true },
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
                            { value: "", label: "Seleccione...", disabled: true },
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
