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
import { Button } from "@nextui-org/react";
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
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Programación Torneo" />

            <div className="flex flex-wrap gap-4 items-center">
                <Button color="default">Default</Button>
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="success">Success</Button>
                <Button color="warning">Warning</Button>
                <Button color="danger">Danger</Button>
            </div>

            <div className="bg-white grid v-screen place-items-center">
                <div className="mt-2 mb-3 flex justify-end">
                    <PrimaryButton onClick={() => handleModal(1)}>
                        <i className="fa-solid fa-plus-circle"></i>
                        Programar Partido
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
                                        {programacion.posicion_local}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {programacion.posicion_visitante}
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
                                                    programacion.posicion_local,
                                                    programacion.posicion_visitante
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
