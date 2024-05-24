import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import WarningButton from "@/Components/WarningButton";
import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import Swal from "sweetalert2";
import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import SelectField from "@/Components/SelectField";

export default function Index({
    auth,
    resultadoSorteos,
    equipos,
    cantidadEquiposParticipantes,
    torneo_id,
}) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const puestoInput = useRef();
    const fk_equipoInput = useRef();
    const {
        data,
        setData,
        delete: destroy,
        post,
        put,
        processing,
        reset,
        errors,
    } = useForm({
        id: "",
        puesto: "",
        fk_equipo: "",
        fk_torneo: torneo_id,
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const openModal = (op, id, puesto, fk_equipo, fk_torneo) => {
        setModal(true);
        setOperation(op);
        if (op === 1) {
            setTitle("Agregar Resultado Sorteo");
            setData({
                id: "",
                puesto: "",
                fk_equipo: "",
                fk_torneo: torneo_id,
            });
        } else {
            setTitle("Editar Resultado Sorteo");
            setData({
                id: id,
                puesto: puesto,
                fk_equipo: fk_equipo,
                fk_torneo: torneo_id,
            });
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (operation === 1) {
            post(route("resultadoSorteo.store"), {
                onSuccess: () => {
                    closeModal();
                    Swal.fire({
                        title: "Resultado Sorteo agregado correctamente",
                        icon: "success",
                    });
                },

                onError: (errors) => {
                    if (errors.grupo) {
                        grupoPosicionInput.current.focus();
                    } else if (errors.fk_equipo) {
                        fk_equipoInput.current.focus();
                    }
                },
            });
        } else {
            put(route("resultadoSorteo.update", data.id), {
                onSuccess: () => {
                    closeModal();
                    ok("Resultado Sorteo actualizado correctamente");
                },
                onError: (errors) => {
                    if (errors.grupo) {
                        grupoPosicionInput.current.focus();
                    } else if (errors.fk_equipo) {
                        fk_equipoInput.current.focus();
                    }
                },
            });
        }
    };

    const ok = (mensaje) => {
        closeModal();
        Swal.fire({ title: mensaje, icon: "success" });
    };

    const eliminar = (id) => {
        const alerta = Swal.mixin({ buttonsStyling: true });
        alerta
            .fire({
                title: "¿Estás seguro?",
                text: "No podrás revertir esto!",
                icon: "question",
                showCancelButton: true,
                confirmButtonText:
                    '<i class="fa-solid fa-check"></i> Si, eliminarlo!',
                cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancelar!',
            })
            .then((result) => {
                if (result.isConfirmed) {
                    destroy(route("resultadoSorteo.destroy", id), {
                        onSuccess: () => {
                            ok("Resultado Sorteo eliminado correctamente");
                        },
                    });
                }
            });
    };

    const handleSelectPuestos = [
        { value: "", label: "Seleccione ..."},
        ...Array.from({ length: cantidadEquiposParticipantes }, (_, i) => ({
            value: i + 1,
            label: `Equipo ${i + 1}`,
        })),
    ];

    const handleSelectEquipos = [
        { value: "", label: "Seleccione ..."},
        ...equipos.map((equipo) => ({
            value: equipo.id,
            label: equipo.nombreEquipo,
        })),
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    ✋Sorteo
                </h2>
            }
        >
            <Head title="✋Sorteo" />
            <div className="bg-white grid v-screen place-items-center py-6">
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Resultado Sorteo
                </h2>
            </div>
            <div className="bg-white grid v-screen place-items-center py-6 overflow-x-auto">
                <div className="bg-white grid v-screen place-items-center py-6">
                    <PrimaryButton onClick={() => openModal(1)}>
                        <i className="fa-solid fa-plus-circle">Añadir</i>
                    </PrimaryButton>
                </div>
                <div className="bg-white grid v-screen place-items-center py-6">
                    <table className="table table-auto border border-gray-400 rounded-t-lg rounded-br-lg rounded-bl-lg text-center items-center">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-2 py-2 uppercase font-semibold text-sm">
                                    Grupo y Posición
                                </th>
                                <th className="px-2 py-2 uppercase font-semibold text-sm">
                                    Equipo
                                </th>
                                <th className="px-2 py-2 uppercase font-semibold text-sm"></th>
                                <th className="px-2 py-2 uppercase font-semibold text-sm"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultadoSorteos.length > 0 ? (
                                resultadoSorteos.map((resultadoSorteo) => (
                                    <tr key={resultadoSorteo.id}>
                                        <td className="border border-gray-400 px-2 py-2">
                                            {resultadoSorteo.puesto}
                                        </td>
                                        <td className="flex flex-auto border border-gray-400 px-2 py-2">
                                        <img
                                                src={`/storage/${resultadoSorteo.escudoEquipo}`}
                                                alt={`Foto de ${resultadoSorteo.nombreEquipo}`}
                                                className="h-10 w-10 rounded-full"
                                            />
                                            {resultadoSorteo.nombreEquipo}
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
                                            <WarningButton
                                                onClick={() =>
                                                    openModal(
                                                        2,
                                                        resultadoSorteo.id,
                                                        resultadoSorteo.puesto,
                                                        resultadoSorteo.fk_equipo,
                                                        resultadoSorteo.fk_torneo
                                                    )
                                                }
                                            >
                                                <i className="fa-solid fa-edit"></i>
                                            </WarningButton>
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
                                            <DangerButton
                                                onClick={() =>
                                                    eliminar(resultadoSorteo.id)
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
                                        colSpan="4"
                                        className="border border-gray-400 px-4 py-2"
                                    >
                                        No hay resultados. 👀
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
                <form onSubmit={handleSubmit} className="p-6">
                    <input
                        type="text"
                        value={data.fk_torneo}
                        name="fk_torneo"
                        hidden
                        readOnly
                    />

                    <SelectField
                        htmlFor="puesto"
                        label={
                            <>
                                <span>Puesto</span>
                                <span className="text-red-500">*</span>
                            </>
                        }
                        id="puesto"
                        ref={puestoInput}
                        name="puesto"
                        value={data.puesto}
                        onChange={handleInputChange}
                        options={handleSelectPuestos}
                        errorMessage={errors.puesto}
                    />

                        <SelectField
                        htmlFor="fk_equipo"
                        label={
                            <>
                                <span>Equipo</span>
                                <span className="text-red-500">*</span>
                            </>
                        }
                        id="fk_equipo"
                        ref={fk_equipoInput}
                        name="fk_equipo"
                        value={data.fk_equipo}
                        onChange={handleInputChange}
                        options={handleSelectEquipos}
                        errorMessage={errors.fk_equipo}
                    />



                    <div>
                        <PrimaryButton
                            processing={processing ? "true" : "false"}
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
