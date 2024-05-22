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
import Textarea2 from "@/Components/Textarea2";

export default function Index({
    auth,
    torneo,
    equipo,
    inscripciones,
    fk_equipo,
    userRole,
}) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const fk_torneoInput = useRef();
    const estadoInscripcionInput = useRef();
    const observacionInput = useRef();
    const InitialValues = {
        fk_user: auth.user.id,
        fk_torneo: "",
        fk_equipo: fk_equipo,
        estadoInscripcion: "",
        observacion: "",
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
        fk_torneo,
        fk_equipo,
        estadoInscripcion,
        observacion
    ) => {
        setModal(true);
        setOperation(op);
        if (op === 1) {
            setTitle("Realizar Pre Inscripción");
            setData(InitialValues);
        } else {
            setTitle("Editar Pre Inscripción");
            setData({
                id: id,
                fk_torneo: fk_torneo,
                fk_equipo: fk_equipo,
                estadoInscripcion: estadoInscripcion,
                observacion: observacion,
            });
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (operation === 1) {
            post(
                userRole === "admin"
                    ? route("inscripciones.store")
                    : route("inscripcionesEquipo.store"),
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        ok("Pre Inscripción realizada correctamente");
                    },
                }
            );
        } else {
            put(
                userRole === "admin"
                    ? route("inscripciones.update", data.id)
                    : route("inscripcionesEquipo.update", data.id),
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        ok("Pre Inscripción actualizada correctamente");
                    },
                }
            );
        }
    };
    const ok = (mensaje) => {
        closeModal();
        Swal.fire({ title: mensaje, icon: "success" });
    };

    const handleSelectTorneos = [
        { value: "", label: "Seleccione un torneo" },
        ...torneo.map((torneo) => ({
            value: torneo.id,
            label: `${torneo.nombreTorneo} - ${torneo.estadoTorneo}`,
        })),
    ];

    const [selectedTorneo, setSelectedTorneo] = useState(null);

    // Modifica la función handleInputChangeFlayer para actualizar el torneo seleccionado
    const handleInputChangeFlayer = (event) => {
        const { name, value } = event.target;
        setData((prevState) => ({ ...prevState, [name]: value }));

        if (name === "fk_torneo") {
            const selectedTorneo = torneo.find(
                (torneo) => torneo.id === parseInt(value)
            );
            setSelectedTorneo(selectedTorneo);
        }
    };

    const handleSelectestadoInscripcion = [
        { value: "", label: "Seleccione un estado" },
        { value: "Pendiente", label: "Pendiente" },
        { value: "Aceptada", label: "Aceptada" },
        { value: "Rechazada", label: "Rechazada" },
    ];

    const eliminar = (id, nombreTorneo) => {
        Swal.fire({
            title: `¿Estás seguro de eliminar la inscripcion al torneo ${nombreTorneo}?`,
            text: "No podrás revertir esto",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("inscripciones.destroy", id), {
                    onSuccess: () => {
                        ok("Inscripcion eliminada correctamente");
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

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Pre Inscripciones
                </h2>
            }
        >
            <Head title="Programación Torneo" />

            <div className="bg-white grid v-screen place-items-center">
                <div className="mt-2 mb-3 flex justify-end">
                    <PrimaryButton onClick={() => handleModal(1)}>
                        <i className="fa-solid fa-plus-circle">
                            {" "}
                            Realizar Pre Inscripcion
                        </i>
                    </PrimaryButton>
                </div>
            </div>
            <div className="bg-white grid v-screen place-items-center py-6">
                <table className="table-auto border-gray-400">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">#</th>
                            <th className="border px-4 py-2">Torneo</th>
                            <th className="border px-4 py-2">Equipo</th>
                            <th className="border px-4 py-2">Estado</th>
                            <th className="border px-4 py-2">Observación</th>
                            <th className="px-2 py-2"></th>
                            <th className="px-2 py-2"></th>
                            <th className="px-2 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {inscripciones.map((inscripcion, index) => (
                            <tr key={inscripcion.id}>
                                <td className="border px-4 py-2">
                                    {index + 1}
                                </td>
                                <td className="border px-4 py-2">
                                    {inscripcion.nombreTorneo}
                                </td>
                                <td className="border px-4 py-2">
                                    <div className="flex flex-center">
                                        <img
                                            src={`/storage/${inscripcion.escudoEquipo}`}
                                            alt={inscripcion.nombreTorneo}
                                            className="h-10 w-10 rounded-full"
                                        />
                                        {inscripcion.nombreEquipo}
                                    </div>
                                </td>
                                <td className="border px-4 py-2">
                                    {inscripcion.estadoInscripcion}
                                </td>
                                <td className="border border-gray-400 px-4 py-2">
                                    {inscripcion.observacion}
                                </td>
                                {auth.user.role === "admin" ? (
                                <td className="border border-gray-400 px-4 py-2">
                                    <PrimaryButton
                                        onClick={() =>
                                            handleModal(
                                                2,
                                                inscripcion.id,
                                                inscripcion.fk_torneo,
                                                inscripcion.fk_equipo,
                                                inscripcion.estadoInscripcion,
                                                inscripcion.observacion
                                            )
                                        }
                                    >
                                        Editar
                                    </PrimaryButton>
                                </td>
                                ) : null}
                                {auth.user.role === "admin" ? (
                                <td className="border border-gray-400 px-4 py-2">
                                    <DangerButton
                                        onClick={() =>
                                            eliminar(
                                                inscripcion.id,
                                                inscripcion.nombreTorneo
                                            )
                                        }
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </DangerButton>
                                </td>
                                ) : null}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal show={modal} close={closeModal}>
                <h2 className="text-lg font-medium text-gray-900">{title}</h2>
                <form onSubmit={handleSubmit} className="p-6">
                    {auth.user.role === "admin" ? (
                        <SelectField
                            htmlFor="fk_torneo"
                            label={
                                <>
                                    <span>Torneo</span>
                                    <span className="text-red-500">*</span>
                                </>
                            }
                            id="fk_torneo"
                            ref={fk_torneoInput}
                            name="fk_torneo"
                            value={data.fk_torneo}
                            onChange={handleInputChange}
                            options={handleSelectTorneos}
                            errorMessage={errors.fk_torneo}
                        />
                    ) : auth.user.role === "equipo" ? (
                        <>
                            <SelectField
                                htmlFor="fk_torneo"
                                label={
                                    <>
                                        <span>Torneo</span>
                                        <span className="text-red-500">*</span>
                                    </>
                                }
                                id="fk_torneo"
                                ref={fk_torneoInput}
                                name="fk_torneo"
                                value={data.fk_torneo}
                                onChange={handleInputChangeFlayer}
                                options={handleSelectTorneos}
                                errorMessage={errors.fk_torneo}
                            />
                            {selectedTorneo && (
                                <>
                                    <img
                                        className="w-1/2 h-1/2 mx-auto mt-4"
                                        src={`/storage/${selectedTorneo.flayer}`}
                                        alt={`Torneo ⚽ ${selectedTorneo.nombreTorneo}`}
                                    />
                                </>
                            )}
                        </>
                    ) :  null}

                    {auth.user.role === "admin" ? (
                        <SelectField
                            htmlFor="estadoInscripcion"
                            label={
                                <>
                                    <span>Estadio Inscripción</span>
                                    <span className="text-red-500">*</span>
                                </>
                            }
                            id="estadoInscripcion"
                            ref={estadoInscripcionInput}
                            name="estadoInscripcion"
                            value={data.estadoInscripcion || ""}
                            onChange={handleInputChange}
                            options={handleSelectestadoInscripcion}
                            errorMessage={errors.estadoInscripcion}
                        />
                    ) : null}

                    {auth.user.role === "admin" ? (
                        <Textarea2
                            htmlFor="observacion"
                            label="Observación"
                            id="observacion"
                            type="text"
                            ref={observacionInput}
                            name="observacion"
                            placeholder="Observación"
                            value={data.observacion || ""}
                            onChange={handleInputChange}
                            errorMessage={errors.observacion}
                        />
                    ) : null}

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
