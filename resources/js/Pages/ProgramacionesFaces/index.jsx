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

export default function Index({
    auth,
    fase,
    programaciones,
    equipos,
    lugares,
    cantidadEquipos,
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
            <main className="flex-grow container mx-auto px-4 py-8 mt-32">

            <div className="grid bg-white v-screen place-items-center">
                <div className="flex justify-end mt-2 mb-3">
                    <PrimaryButton onClick={() => handleModal(1)}>
                        <i className="fa-solid fa-plus-circle"></i>
                        Programar Partido
                    </PrimaryButton>
                </div>
            </div>
            <div className="grid py-6 bg-white v-screen place-items-center">
                <table className="border-gray-400 table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">#</th>
                            <th className="px-4 py-2 border">Local</th>
                            <th className="px-4 py-2 border">Visitante</th>
                            <th className="px-4 py-2 border">Fecha</th>
                            <th className="px-4 py-2 border">Hora</th>
                            <th className="px-4 py-2 border">Lugar</th>
                            <th className="px-2 py-2 border"></th>
                            <th className="px-2 py-2 border"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {programaciones.map((programacion, index) => (
                            <tr key={programacion.id}>
                                <td className="px-4 py-2 border">
                                    {index + 1}
                                </td>
                                <td className="px-4 py-2 border">
                                    {programacion.posicion_local}
                                </td>
                                <td className="px-4 py-2 border">
                                    {programacion.posicion_visitante}
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
                                    <SecondaryButton
                                        onClick={() =>
                                            handleModal(
                                                2,
                                                programacion.id,
                                                programacion.fk_fase,
                                                programacion.posicion_local,
                                                programacion.posicion_visitante,
                                                programacion.FechaPartido,
                                                programacion.HoraPartido,
                                                programacion.fk_lugarPartido,
                                            )
                                        }
                                    >
                                        <i className="fa-solid fa-pencil"></i>
                                    </SecondaryButton>
                                </td>
                                <td className="px-2 py-2 border">
                                    <DangerButton
                                        onClick={() =>
                                            showDeleteConfirmation(
                                                programacion.id
                                            )
                                        }
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </DangerButton>
                                </td>
                                <td className="px-4 py-2 border border-gray-400">
                                    <a
                                        className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
                                        href={`/resultadosPartidos?partido=${programacion.id}&torneo=${programacion.torneo_id}`}
                                    >
                                        <i className="fa-regular fa-flag">
                                            {" "}
                                            Resultados
                                        </i>
                                    </a>
                                </td>
                                <td className="px-4 py-2 border border-gray-400">
                                    <a
                                        className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
                                        href={`/faltasCuerpoTecnico?partido=${programacion.id}&torneo=${programacion.torneo_id}`}
                                    >
                                        <i className="fa-regular fa-flag">
                                            {" "}
                                            Faltas CT
                                        </i>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
                    <div className="flex items-center justify-end mt-4">
                        <SecondaryButton onClick={closeModal}>
                            Cancelar
                        </SecondaryButton>
                        <PrimaryButton
                            className="ml-4"
                            type="submit"
                            disabled={processing}
                        >
                            Guardar
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
            </main>
            </div>
            <Footer />
        </AuthenticatedLayout>
    );
}
