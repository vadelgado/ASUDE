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
import WarningButton from "@/Components/WarningButton";

export default function Index({
    auth,
    programacionTorneo,
    jornadas,
    lugares,
    resultadoSorteos,
}) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const HoraPartidoInput = useRef();
    const fk_jornadaPartidoInput = useRef();
    const fk_lugarPartidoInput = useRef();
    const fk_equipoLocalInput = useRef();
    const fk_equipoVisitanteInput = useRef();
    const InitialValues = {
        HoraPartido: "",
        fk_jornadaPartido: "",
        fk_lugarPartido: "",
        fk_equipoLocal: "",
        fk_equipoVisitante: "",
    };
    const {
        data,
        setData,
        errors,
        delete: destroy,
        post,
        put,
        processing,
    } = useForm(InitialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleModal = (
        op,
        id,
        HoraPartido,
        fk_jornadaPartido,
        fk_lugarPartido,
        fk_equipoLocal,
        fk_equipoVisitante
    ) => {
        setModal(true);
        setOperation(op);
        if (op === 1) {
            setTitle("Agregar Partido");
            setData(InitialValues);
        } else {
            setTitle("Editar Partido");
            setData({
                id: id,
                HoraPartido: HoraPartido,
                fk_jornadaPartido: fk_jornadaPartido,
                fk_lugarPartido: fk_lugarPartido,
                fk_equipoLocal: fk_equipoLocal,
                fk_equipoVisitante: fk_equipoVisitante,
            });
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (operation === 1) {
            post(route("programacionTorneo.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    closeModal();
                },
            });
        } else {
            put(route("programacionTorneo.update", data.id), {
                preserveScroll: true,
                onSuccess: () => {
                    closeModal();
                },
            });
        }
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "No podrás revertir esto",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("programacionTorneo.destroy", id));
            }
        });
    };

    const handleJornadas = [
        { value: "", label: "Seleccione ...", disabled: true },
        ...jornadas.map((jornada) => ({
            value: jornada.id,
            label: jornada.jornada,
        })),
    ];

    const handleLugares = [
        { value: "", label: "Seleccione ...", disabled: true },
        ...lugares.map((lugar) => ({
            value: lugar.id,
            label: lugar.nomLugar,
        })),
    ];

    const handleResultadoSorteos = [
        { value: "", label: "Seleccione ...", disabled: true },
        ...resultadoSorteos.map((sorteo) => ({
            value: sorteo.id,
            label: `${sorteo.nombreEquipo} - ${sorteo.grupoPosicion}`,
        })),
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Programación Torneo" />

            <div className="bg-white grid v-screen place-items-center">
                <div className="mt-2 mb-3 flex justify-end">
                    <PrimaryButton onClick={() => handleModal(1)}>
                        <i className="fa-solid fa-plus-circle"></i>
                        Añadir Lugar
                    </PrimaryButton>
                </div>
            </div>
            <div className="bg-white grid v-screen place-items-center py-6">
                <table className="table-auto border-gray-400">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">#</th>
                            <th className="border px-4 py-2">Hora</th>
                            <th className="border px-4 py-2">Jornada</th>
                            <th className="border px-4 py-2">Lugar</th>
                            <th className="border px-4 py-2">Local</th>
                            <th className="border px-4 py-2">Visitante</th>
                            <th className="px-2 py-2"></th>
                            <th className="px-2 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {programacionTorneo.length > 0 ? (
                            programacionTorneo.map((programacion, i) => (
                                <tr key={programacion.id}>
                                    <td className="border border-gray-400 px-4 py-2">
                                        {i + 1}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {new Date(
                                            `1970-01-01T${programacion.HoraPartido}`
                                        ).toLocaleString("en-US", {
                                            hour: "numeric",
                                            minute: "numeric",
                                            hour12: true,
                                        })}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {programacion.jornada}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {programacion.nomLugar}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {programacion.nombreEquipoLocal}
                                        <img
                                            src={`/storage/${programacion.escudoEquipoLocal}`}
                                            alt={programacion.nombreEquipoLocal}
                                        />
                                    </td>
                                    <td className="border px-4 py-2">
                                        {programacion.nombreEquipoVisitante}
                                        <img
                                            src={`/storage/${programacion.escudoEquipoVisitante}`}
                                            alt={
                                                programacion.nombreEquipoVisitante
                                            }
                                        />
                                    </td>
                                    <td className="border px-4 py-2">
                                        <WarningButton
                                            onClick={() =>
                                                handleModal(
                                                    2,
                                                    programacion.id,
                                                    programacion.HoraPartido,
                                                    programacion.fk_jornadaPartido,
                                                    programacion.fk_lugarPartido,
                                                    programacion.fk_equipoLocal,
                                                    programacion.fk_equipoVisitante
                                                )
                                            }
                                        >
                                            <i className="fa-solid fa-pencil"></i>
                                        </WarningButton>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <DangerButton
                                            onClick={() =>
                                                handleDelete(programacion.id)
                                            }
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </DangerButton>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="7"
                                    className="border px-4 py-2 text-center"
                                >
                                    No hay datos registrados
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Modal show={modal} close={closeModal}>
                <h2 className="text-lg font-medium text-gray-900">{title}</h2>
                <form onSubmit={handleSubmit} className="p-6">
                    <FormField
                        htmlFor="HoraPartido"
                        label="Hora Partido"
                        id="HoraPartido"
                        type="time"
                        name="HoraPartido"
                        ref={HoraPartidoInput}
                        value={data.HoraPartido}
                        onChange={handleInputChange}
                        error={errors.HoraPartido}
                    />

                    <SelectField
                        htmlFor="fk_jornadaPartido"
                        label="Jornada"
                        id="fk_jornadaPartido"
                        name="fk_jornadaPartido"
                        value={data.fk_jornadaPartido}
                        options={handleJornadas}
                        onChange={handleInputChange}
                        errorMessage={errors.fk_jornadaPartido}
                        ref={fk_jornadaPartidoInput}
                    />

                    <SelectField
                        htmlFor="fk_lugarPartido"
                        label="Lugar"
                        id="fk_lugarPartido"
                        name="fk_lugarPartido"
                        value={data.fk_lugarPartido}
                        options={handleLugares}
                        onChange={handleInputChange}
                        errorMessage={errors.fk_lugarPartido}
                        ref={fk_lugarPartidoInput}
                    />

                    <SelectField
                        htmlFor="fk_equipoLocal"
                        label="Equipo Local"
                        id="fk_equipoLocal"
                        name="fk_equipoLocal"
                        value={data.fk_equipoLocal}
                        options={handleResultadoSorteos}
                        onChange={handleInputChange}
                        errorMessage={errors.fk_equipoLocal}
                        ref={fk_equipoLocalInput}
                    />

                    <SelectField
                        htmlFor="fk_equipoVisitante"
                        label="Equipo Visitante"
                        id="fk_equipoVisitante"
                        name="fk_equipoVisitante"
                        value={data.fk_equipoVisitante}
                        options={handleResultadoSorteos}
                        onChange={handleInputChange}
                        errorMessage={errors.fk_equipoVisitante}
                        ref={fk_equipoVisitanteInput}
                    />

                    <div className="mt-4 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancelar
                        </SecondaryButton>
                        <PrimaryButton type="submit" className="ml-2">
                            Guardar
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
