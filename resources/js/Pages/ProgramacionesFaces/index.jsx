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

export default function Index({ auth, fase, programaciones, equipos, lugares }) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const fk_equipo_localSelect = useRef();
    const fk_equipo_visitanteSelect = useRef();
    const FechaPartidoInput = useRef();
    const HoraPartidoInput = useRef();
    const fk_lugarPartidoSelect = useRef();

    // Valores iniciales del formulario.
    const initialValues = {
        fk_fase: fase[0].id,
        fk_equipo_local: "",
        fk_equipo_visitante: "",
        FechaPartido: "",
        HoraPartido: "",
        fk_lugarPartido: "",
    };

    const { data, setData, errors, delete: destroy, post, put, processing } = useForm(initialValues);

    // Función para manejar cambios en los inputs del formulario.
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Función para manejar el modal.
    const handleModal = (op, id, fk_fase, fk_equipo_local, fk_equipo_visitante, FechaPartido, HoraPartido, fk_lugarPartido) => {
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
                fk_equipo_local: fk_equipo_local,
                fk_equipo_visitante: fk_equipo_visitante,
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
        { value: "", label: "Seleccione un equipo" },
        ...equipos.map((equipo) => ({
            value: equipo.id,
            label: equipo.nombreEquipo,
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
                                <td className="px-4 py-2 border">{index + 1}</td>
                                <td className="px-4 py-2 border">{programacion.equipoLocal}</td>
                                <td className="px-4 py-2 border">{programacion.equipoVisitante}</td>
                                <td className="px-4 py-2 border">{programacion.FechaPartido}</td>
                                <td className="px-4 py-2 border">{programacion.HoraPartido}</td>
                                <td className="px-4 py-2 border">{programacion.nomLugar}</td>
                                <td className="px-2 py-2 border">
                                    <SecondaryButton
                                        onClick={() =>
                                            handleModal(
                                                2,
                                                programacion.id,
                                                programacion.fk_fase,
                                                programacion.fk_equipo_local,
                                                programacion.fk_equipo_visitante,
                                                programacion.FechaPartido,
                                                programacion.HoraPartido,
                                                programacion.fk_lugarPartido,
                                                console.log(programacion.fk_equipo_local),
                                                
                                            )
                                        }
                                    >
                                        <i className="fa-solid fa-pencil"></i>
                                    </SecondaryButton>
                                </td>
                                <td className="px-2 py-2 border">
                                    <DangerButton
                                        onClick={() => showDeleteConfirmation(programacion.id)}
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </DangerButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal show={modal} onClose={closeModal}>
                <h2 className="text-lg font-medium text-gray-900">{title}</h2>
                <form onSubmit={save} className="p-6">
                    <input
                        type="text"
                        value={data.fk_fase}
                        name="fk_fase"
                        readOnly
                        className="hidden"
                    />
                    <SelectField
                        htmlFor="fk_equipo_local"
                        label={
                            <>
                                <span>Equipo Local</span>
                                <span className="text-red-500">*</span>
                            </>
                        }
                        id="fk_equipo_local"
                        ref={fk_equipo_localSelect}
                        name="fk_equipo_local"
                        value={data.fk_equipo_local}
                        onChange={handleInputChange}
                        options={equiposSelect}
                        errorMessage={errors.fk_equipo_local}
                    />
                    <SelectField
                        htmlFor="fk_equipo_visitante"
                        label={
                            <>
                                <span>Equipo Visitante</span>
                                <span className="text-red-500">*</span>
                            </>
                        }
                        id="fk_equipo_visitante"
                        ref={fk_equipo_visitanteSelect}
                        name="fk_equipo_visitante"
                        value={data.fk_equipo_visitante}
                        onChange={handleInputChange}
                        options={equiposSelect}
                        errorMessage={errors.fk_equipo_visitante}
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
                        <SecondaryButton onClick={closeModal}>Cancelar</SecondaryButton>
                        <PrimaryButton className="ml-4" type="submit" disabled={processing}>
                            Guardar
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
