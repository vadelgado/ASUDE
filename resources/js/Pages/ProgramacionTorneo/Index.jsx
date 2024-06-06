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
    cantidadEquipos,
}) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const HoraPartidoInput = useRef();
    const fk_jornadaPartidoInput = useRef();
    const fk_lugarPartidoInput = useRef();
    const posicion_localInput = useRef();
    const posicion_visitanteInput = useRef();
    const InitialValues = {
        HoraPartido: "",
        fk_jornadaPartido: "",
        fk_lugarPartido: "",
        posicion_local: "",
        posicion_visitante: "",
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
        posicion_local,
        posicion_visitante
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
                posicion_local: posicion_local,
                posicion_visitante: posicion_visitante,
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
                    ok("Partido agregado correctamente");
                },
            });
        } else {
            put(route("programaciontorneo.updatepost", data.id), {
                preserveScroll: true,
                onSuccess: () => {
                    ok("Partido actualizado correctamente");
                },
            });
        }
    };

    const ok = (message) => {
        Swal.fire("Correcto", message, "success");
        closeModal();
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

    const handleCantidadEquipos = [
        { value: "", label: "Seleccione ...", disabled: true },
        ...Array.from({ length: cantidadEquipos }, (_, i) => ({
            value: i + 1,
            label: `Equipo ${i + 1}`,
        })),
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Programación Torneo" />



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
                            <th className="px-4 py-2 border">Hora</th>
                            <th className="px-4 py-2 border">Jornada</th>
                            <th className="px-4 py-2 border">Lugar</th>
                            <th className="px-4 py-2 border">Local</th>
                            <th className="px-4 py-2 border">Visitante</th>
                            <th className="px-2 py-2"></th>
                            <th className="px-2 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {programacionTorneo.length > 0 ? (
                            programacionTorneo.map((programacion, i) => (
                                <tr key={programacion.id}>
                                    <td className="px-4 py-2 border border-gray-400">
                                        {i + 1}
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
                                        {programacion.jornada}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        {programacion.nomLugar}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        {programacion.posicion_local}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        {programacion.posicion_visitante}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <WarningButton
                                            onClick={() =>
                                                handleModal(
                                                    2,
                                                    programacion.id,
                                                    programacion.HoraPartido,
                                                    programacion.fk_jornadaPartido,
                                                    programacion.fk_lugarPartido,
                                                    programacion.posicion_local,
                                                    programacion.posicion_visitante
                                                )
                                            }
                                        >
                                            <i className="fa-solid fa-pencil"></i>
                                        </WarningButton>
                                    </td>
                                    <td className="px-4 py-2 border">
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
                                    className="px-4 py-2 text-center border"
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
                        errorMessage={errors.HoraPartido}
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
                        htmlFor="posicion_local"
                        label="Equipo Local"
                        id="posicion_local"
                        name="posicion_local"
                        value={data.posicion_local}
                        options={handleCantidadEquipos}
                        onChange={handleInputChange}
                        errorMessage={errors.posicion_local}
                        ref={posicion_localInput}
                    />

                    <SelectField
                        htmlFor="posicion_visitante"
                        label="Equipo Visitante"
                        id="posicion_visitante"
                        name="posicion_visitante"
                        value={data.posicion_visitante}
                        options={handleCantidadEquipos}
                        onChange={handleInputChange}
                        errorMessage={errors.posicion_visitante}
                        ref={posicion_visitanteInput}
                    />

                    <div className="flex justify-end mt-4">
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
