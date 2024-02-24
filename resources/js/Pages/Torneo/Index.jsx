import { useRef, useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import WarningButton from "@/Components/WarningButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import DangerButton from "@/Components/DangerButton";

export default function Dashboard({ auth, torneos }) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const nombreTorneoInput = useRef();
    const flayerInput = useRef();
    const caracteristicasInput = useRef();
    const premiacionInput = useRef();
    const sistemaJuegoInput = useRef();
    const procesoInscripcionInput = useRef();
    const reglamentacionInput = useRef();

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
        nombreTorneo: "",
        flayer: "",
        caracteristicas: "",
        premiacion: "",
        sistemaJuego: "",
        procesoInscripcion: "",
        reglamentacion: "",
    });

    const openModal = (
        op,
        id,
        nombreTorneo,
        flayer,
        caracteristicas,
        premiacion,
        sistemaJuego,
        procesoInscripcion,
        reglamentacion,
        fk_user
    ) => {
        setModal(true);
        setOperation(op);

        if (op === 1) {
            setTitle("Agregar Torneo");
            setData({
                id: "",
                nombreTorneo: "",
                flayer: "",
                caracteristicas: "",
                premiacion: "",
                sistemaJuego: "",
                procesoInscripcion: "",
                reglamentacion: "",
                fk_user: fk_user,
            });
        } else {
            setTitle("Editar Torneo");
            setData({
                id: id,
                nombreTorneo: nombreTorneo,
                flayer: flayer,
                caracteristicas: caracteristicas,
                premiacion: premiacion,
                sistemaJuego: sistemaJuego,
                procesoInscripcion: procesoInscripcion,
                reglamentacion: reglamentacion,
                fk_user: fk_user,
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
                onSuccess: () => {
                    ok("Torneo agregado correctamente");
                },
                onError: () => {
                    if (errors?.nombreTorneo) {
                        reset("nombreTorneo");
                        nombreTorneoInput.current.focus();
                    }
                    if (errors?.flayer) {
                        reset("flayer");
                        flayerInput.current.focus();
                    }
                    if (errors?.caracteristicas) {
                        reset("caracteristicas");
                        caracteristicasInput.current.focus();
                    }
                    if (errors?.premiacion) {
                        reset("premiacion");
                        premiacionInput.current.focus();
                    }
                    if (errors?.sistemaJuego) {
                        reset("sistemaJuego");
                        sistemaJuegoInput.current.focus();
                    }
                    if (errors?.procesoInscripcion) {
                        reset("procesoInscripcion");
                        procesoInscripcionInput.current.focus();
                    }
                    if (errors?.reglamentacion) {
                        reset("reglamentacion");
                        reglamentacionInput.current.focus();
                    }
                },
            });
        } else {
            put(route("torneo.update", { torneo: data.id }), {
                onSuccess: () => {
                    OK("Torneo actualizado correctamente");
                },
                onError: () => {
                    if (errors?.nombreTorneo) {
                        reset("nombreTorneo");
                        nombreTorneoInput.current.focus();
                    }
                    if (errors?.flayer) {
                        reset("flayer");
                        flayerInput.current.focus();
                    }
                    if (errors?.caracteristicas) {
                        reset("caracteristicas");
                        caracteristicasInput.current.focus();
                    }
                    if (errors?.premiacion) {
                        reset("premiacion");
                        premiacionInput.current.focus();
                    }
                    if (errors?.sistemaJuego) {
                        reset("sistemaJuego");
                        sistemaJuegoInput.current.focus();
                    }
                    if (errors?.procesoInscripcion) {
                        reset("procesoInscripcion");
                        procesoInscripcionInput.current.focus();
                    }
                    if (errors?.reglamentacion) {
                        reset("reglamentacion");
                        reglamentacionInput.current.focus();
                    }
                },
            });
        }
    };

    const ok = (mensaje) => {
        reset();
        closeModal();
        Swal.fire({ title: mensaje, icon: "success" });
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
                destroy(route("torneo.destroy", { torneo: id }), {
                    onSuccess: () => {
                        Swal.fire({
                            title: "Torneo eliminado correctamente",
                            icon: "success",
                        });
                    },
                    onError: () => {
                        Swal.fire({
                            title: "Ocurrió un error",
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
                        Agregar
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
                                <th className="px-2 py-2">
                                    Proceso de Inscripción
                                </th>
                                <th className="px-2 py-2">Reglamentación</th>
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
                                            <td className="border border-gray-400 px-2 py-2">
                                                <img src={torneo.flayer} alt="Flayer" />
                                            </td>
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
                                            {torneo.procesoInscripcion}
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
                                            <a href="{torneo.reglamentacion}">
                                                {torneo.reglamentacion}
                                            </a>
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
                                                        torneo.sistemaJuego,
                                                        torneo.procesoInscripcion,
                                                        torneo.reglamentacion
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
                <form onSubmit={save} className="p-6">
                    <div className="mt-1">
                        <InputLabel
                            htmlFor="nombreTorneo"
                            value="Nombre del Torneo"
                        ></InputLabel>
                        <TextInput
                            id="nombreTorneo"
                            name="nombreTorneo"
                            ref={nombreTorneoInput}
                            value={data.nombreTorneo}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    nombreTorneo: e.target.value,
                                })
                            }
                            className="mt-1 block w-full"
                        ></TextInput>
                        <InputError
                            message={errors?.nombreTorneo}
                            className="mt-2"
                        ></InputError>
                    </div>

                    <div className="mt-1">
                        <InputLabel
                            htmlFor="flayer"
                            value="Flayer"
                        ></InputLabel>
                        <TextInput
                            id="flayer"
                            name="flayer"
                            ref={flayerInput}
                            value={data.flayer}
                            onChange={(e) =>
                                setData({ ...data, flayer: e.target.value })
                            }
                            className="mt-1 block w-full"
                        ></TextInput>
                        <InputError
                            message={errors?.flayer}
                            className="mt-2"
                        ></InputError>
                    </div>

                    <div className="mt-1">
                        <InputLabel
                            htmlFor="caracteristicas"
                            value="Caracteristicas"
                        ></InputLabel>
                        <TextInput
                            id="caracteristicas"
                            name="caracteristicas"
                            ref={caracteristicasInput}
                            value={data.caracteristicas}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    caracteristicas: e.target.value,
                                })
                            }
                            className="mt-1 block w-full"
                        ></TextInput>
                        <InputError
                            message={errors?.caracteristicas}
                            className="mt-2"
                        ></InputError>
                    </div>

                    <div className="mt-1">
                        <InputLabel
                            htmlFor="premiacion"
                            value="Premiación"
                        ></InputLabel>
                        <TextInput
                            id="premiacion"
                            name="premiacion"
                            ref={premiacionInput}
                            value={data.premiacion}
                            onChange={(e) =>
                                setData({ ...data, premiacion: e.target.value })
                            }
                            className="mt-1 block w-full"
                        ></TextInput>
                        <InputError
                            message={errors?.premiacion}
                            className="mt-2"
                        ></InputError>
                    </div>

                    <div className="mt-1">
                        <InputLabel
                            htmlFor="sistemaJuego"
                            value="Sistema de Juego"
                        ></InputLabel>
                        <TextInput
                            id="sistemaJuego"
                            name="sistemaJuego"
                            ref={sistemaJuegoInput}
                            value={data.sistemaJuego}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    sistemaJuego: e.target.value,
                                })
                            }
                            className="mt-1 block w-full"
                        ></TextInput>
                        <InputError
                            message={errors?.sistemaJuego}
                            className="mt-2"
                        ></InputError>
                    </div>

                    <div className="mt-1">
                        <InputLabel
                            htmlFor="procesoInscripcion"
                            value="Proceso de Inscripción"
                        ></InputLabel>
                        <TextInput
                            id="procesoInscripcion"
                            name="procesoInscripcion"
                            ref={procesoInscripcionInput}
                            value={data.procesoInscripcion}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    procesoInscripcion: e.target.value,
                                })
                            }
                            className="mt-1 block w-full"
                        ></TextInput>
                        <InputError
                            message={errors?.procesoInscripcion}
                            className="mt-2"
                        ></InputError>
                    </div>

                    <div className="mt-1">
                        <InputLabel
                            htmlFor="reglamentacion"
                            value="Reglamentación"
                        ></InputLabel>
                        <TextInput
                            id="reglamentacion"
                            name="reglamentacion"
                            ref={reglamentacionInput}
                            value={data.reglamentacion}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    reglamentacion: e.target.value,
                                })
                            }
                            className="mt-1 block w-full"
                        ></TextInput>
                        <InputError
                            message={errors?.reglamentacion}
                            className="mt-2"
                        ></InputError>
                    </div>
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
