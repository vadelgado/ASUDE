import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DangerButton from "@/Components/DangerButton";
import FormField from "@/Components/FormField";
import SelectField from "@/Components/SelectField";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Footer from "@/Components/DashBoard/Footer";
import WarningButton from "@/Components/WarningButton";
import BackButton from "@/Components/BackButton";
import GuardarButton from "@/Components/GuardarButton";
import CancelarButton from "@/Components/CancelarButton";

export default function Index({
    auth,
    fase,
    programaciones,
    equipos,
    lugares,
    cantidadEquipos,
    torneo_id,
}) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const posicion_localSelect = useRef();
    const posicion_visitanteSelect = useRef();
    const FechaPartidoInput = useRef();
    const HoraPartidoInput = useRef();
    const fk_lugarPartidoSelect = useRef();

    // Valores iniciales del formulario.
    const initialValues = {
        fk_fase: fase[0].id,
        posicion_local: "",
        posicion_visitante: "",
        FechaPartido: "",
        HoraPartido: "",
        fk_lugarPartido: "",
    };

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

    // Función para manejar el modal.
    const handleModal = (
        op,
        id,
        fk_fase,
        posicion_local,
        posicion_visitante,
        FechaPartido,
        HoraPartido,
        fk_lugarPartido
    ) => {
        setModal(true);
        setOperation(op);

        if (op === 1) {
            setTitle("Programar Partido");
            setData(initialValues);
        } else if (op === 2) {
            setTitle("Editar Partido");
            setData({
                id: id,
                fk_fase: fk_fase,
                posicion_local: posicion_local,
                posicion_visitante: posicion_visitante,
                FechaPartido: FechaPartido,
                HoraPartido: HoraPartido,
                fk_lugarPartido: fk_lugarPartido,
            });
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    const save = (e) => {
        e.preventDefault();

        if (operation === 1) {
            post(route("programacionesFaces.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    showSuccessMessage("Partido guardado.");
                },
            });
        } else {
            put(route("programacionesFaces.update", data.id), {
                preserveScroll: true,
                onSuccess: () => {
                    showSuccessMessage("Partido actualizado.");
                },
            });
        }
    };

    const showSuccessMessage = (message) => {
        closeModal();
        Swal.fire({ title: message, icon: "success" });
    };

    const showDeleteConfirmation = (id) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción no se puede deshacer.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("programacionesFaces.destroy", id), {
                    preserveScroll: true,
                    onSuccess: () => {
                        showSuccessMessage("Partido eliminado.");
                    },
                    onError: () => {
                        Swal.fire({
                            title: "Error",
                            text: "No se pudo eliminar el partido.",
                            icon: "error",
                        });
                    },
                });
            }
        });
    };

    const equiposSelect = [
        { value: "", label: "Seleccione ...", disabled: true },
        ...Array.from({ length: cantidadEquipos }, (_, i) => ({
            value: i + 1,
            label: `Equipo ${i + 1}`,
        })),
    ];

    const lugaresSelect = [
        { value: "", label: "Seleccione un lugar" },
        ...lugares.map((lugar) => ({
            value: lugar.id,
            label: lugar.nomLugar,
        })),
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Programación de Partidos - {fase[0].nombreFase}
                </h2>
            }
        >
            <Head title="Programación Torneo" />
            <div className="flex flex-col min-h-screen">
                <main className="container flex-grow px-4 py-8 mx-auto">
                    <div className="min-h-screen py-6 bg-gray-100">
                        <div className="flex justify-end mt-1 mb-4 space-x-2 sm:space-x-4">
                            <PrimaryButton onClick={() => handleModal(1)}>
                                {" "}
                                {/* Agregar margen al botón */}
                                <i className="fa-solid fa-plus-circle"></i>
                                Programar Partido
                            </PrimaryButton>
                            <BackButton to={`/fases?torneo_id=${torneo_id}`} />
                        </div>

                        <h1 className="mb-4 text-2xl font-bold">
                            Listado de Partidos
                        </h1>
                        <div className="grid py-6 bg-white v-screen place-items-center">
                            <table className="border-gray-400 table-auto">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 border">#</th>
                                        <th className="px-4 py-2 border">
                                            Local
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Visitante
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Fecha
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Hora
                                        </th>
                                        <th className="px-4 py-2 border">
                                            Lugar
                                        </th>
                                        <th className="px-2 py-2 border">
                                            Editar
                                        </th>
                                        <th className="px-2 py-2 border">
                                            Eliminar
                                        </th>
                                        <th className="px-2 py-2 border">
                                            Resultados
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {programaciones.map(
                                        (programacion, index) => (
                                            <tr key={programacion.id}>
                                                <td className="px-4 py-2 border">
                                                    {index + 1}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {
                                                        programacion.posicion_local
                                                    }
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {
                                                        programacion.posicion_visitante
                                                    }
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {programacion.FechaPartido}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {new Date(
                                                        `1970-01-01T${programacion.HoraPartido}`
                                                    ).toLocaleString("en-US", {
                                                        hour: "numeric",
                                                        minute: "numeric",
                                                        hour12: true,
                                                    })}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {programacion.nomLugar}
                                                </td>
                                                <td className="px-2 py-2 border">
                                                    <button
                                                        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200   focus:ring-4 focus:outline-none focus:ring-red-100"
                                                        onClick={() =>
                                                            handleModal(
                                                                2,
                                                                programacion.id,
                                                                programacion.fk_fase,
                                                                programacion.posicion_local,
                                                                programacion.posicion_visitante,
                                                                programacion.FechaPartido,
                                                                programacion.HoraPartido,
                                                                programacion.fk_lugarPartido
                                                            )
                                                        }
                                                    >
                                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                                                            <i className="fa-solid fa-edit"></i>
                                                        </span>
                                                    </button>
                                                </td>
                                                <td className="px-2 py-2 border">
                                                    <button
                                                        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200"
                                                        onClick={() =>
                                                            showDeleteConfirmation(
                                                                programacion.id
                                                            )
                                                        }
                                                    >
                                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                                            <i className="fa-solid fa-trash"></i>
                                                        </span>
                                                    </button>
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    <a
                                                        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200  "
                                                        href={`/resultadosPartidos?partido=${programacion.id}&torneo=${programacion.torneo_id}`}
                                                    >
                                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                                            <i className="fa-solid fa-flag"></i>
                                                        </span>
                                                    </a>
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <Modal show={modal} onClose={closeModal}>
                        <h2 className="p-4 text-2xl font-semibold text-white bg-gray-800 border-b border-gray-300 rounded-t-md">
                            {title}
                        </h2>
                        <form onSubmit={save} className="p-6">
                            <input
                                type="text"
                                value={data.fk_fase}
                                name="fk_fase"
                                readOnly
                                className="hidden"
                            />

                            {errors.fk_fase && (
                                <p className="text-red-500">{errors.fk_fase}</p>
                            )}
                            <SelectField
                                htmlFor="posicion_local"
                                label={
                                    <>
                                        <span>Equipo Local</span>
                                        <span className="text-red-500">*</span>
                                    </>
                                }
                                id="posicion_local"
                                ref={posicion_localSelect}
                                name="posicion_local"
                                value={data.posicion_local}
                                onChange={handleInputChange}
                                options={equiposSelect}
                                errorMessage={errors.posicion_local}
                            />
                            <SelectField
                                htmlFor="posicion_visitante"
                                label={
                                    <>
                                        <span>Equipo Visitante</span>
                                        <span className="text-red-500">*</span>
                                    </>
                                }
                                id="posicion_visitante"
                                ref={posicion_visitanteSelect}
                                name="posicion_visitante"
                                value={data.posicion_visitante}
                                onChange={handleInputChange}
                                options={equiposSelect}
                                errorMessage={errors.posicion_visitante}
                            />
                            <FormField
                                htmlFor="FechaPartido"
                                label={
                                    <>
                                        <span>Fecha del Partido</span>
                                        <span className="text-red-500">*</span>
                                    </>
                                }
                                type="date"
                                id="FechaPartido"
                                ref={FechaPartidoInput}
                                name="FechaPartido"
                                value={data.FechaPartido}
                                onChange={handleInputChange}
                                errorMessage={errors.FechaPartido}
                            />
                            <FormField
                                htmlFor="HoraPartido"
                                label={
                                    <>
                                        <span>Hora del Partido</span>
                                        <span className="text-red-500">*</span>
                                    </>
                                }
                                type="time"
                                id="HoraPartido"
                                ref={HoraPartidoInput}
                                name="HoraPartido"
                                value={data.HoraPartido}
                                onChange={handleInputChange}
                                errorMessage={errors.HoraPartido}
                            />
                            <SelectField
                                htmlFor="fk_lugarPartido"
                                label={
                                    <>
                                        <span>Lugar del Partido</span>
                                        <span className="text-red-500">*</span>
                                    </>
                                }
                                id="fk_lugarPartido"
                                ref={fk_lugarPartidoSelect}
                                name="fk_lugarPartido"
                                value={data.fk_lugarPartido}
                                onChange={handleInputChange}
                                options={lugaresSelect}
                                errorMessage={errors.fk_lugarPartido}
                            />
                            <div className="flex justify-between mt-4">
                                <GuardarButton
                                    processing={processing.toString()}
                                    className="px-4 py-2 mt-2"
                                >
                                    Guardar
                                </GuardarButton>
                                <CancelarButton
                                    onClick={closeModal}
                                    className="px-4 py-2 mt-2"
                                >
                                    Cancelar
                                </CancelarButton>
                            </div>
                        </form>
                    </Modal>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}
