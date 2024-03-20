import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import WarningButton from "@/Components/WarningButton";
import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import Swal from "sweetalert2";
import TextInput from "@/Components/TextInput";
import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";

export default function Index({ auth, resultadoSorteos, equipos }) {



    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const GrupoInput = useRef();
    const posicionInput = useRef();
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
        grupo: "",
        posicion: "",
        fk_equipo: "",
    });

    const openModal = (op, id, grupo, posicion, fk_equipo) => {
        setModal(true);
        setOperation(op);
        setData({ grupo: "", posicion: "", fk_equipo: "" });
        if (op === 1) {
            setTitle("Agregar Resultado Sorteo");
        } else {
            setTitle("Editar Resultado Sorteo");
            setData({
                id: id,
                grupo: grupo,
                posicion: posicion,
                fk_equipo: fk_equipo,
            });
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    const save = (e) => {
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
                        GrupoInput.current.focus();
                    } else if (errors.posicion) {
                        posicionInput.current.focus();
                    } else if (errors.fk_equipo) {
                        fk_equipoInput.current.focus();
                    }
                },
            });
        } else {
            put(route("resultadoSorteo.update",data.id) , {
                onSuccess: () => {
                    closeModal();
                    ok("Resultado Sorteo actualizado correctamente");
                },
                onError: (errors) => {
                    if (errors.grupo) {
                        GrupoInput.current.focus();
                    } else if (errors.posicion) {
                        posicionInput.current.focus();
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
                        <thead >
                            <tr className="bg-gray-100">                                
                                <th className="px-2 py-2">Grupo</th>
                                <th className="px-2 py-2">Pocisión</th>
                                <th className="px-2 py-2">Escudo</th>
                                <th className="px-2 py-2">Equipo</th>
                                <th className="px-2 py-2">Editar</th>
                                <th className="px-2 py-2">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultadoSorteos.length > 0 ? (
                                resultadoSorteos.map((resultadoSorteo) => (
                                    <tr key={resultadoSorteo.id}>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {resultadoSorteo.grupo}
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
                                            {resultadoSorteo.posicion}
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
                                        <img
                                                src={`/escudos/${resultadoSorteo.escudoEquipo}`}
                                                alt="Foto Jugador"
                                                className="h-10 w-10 rounded-full"
                                            />                                            
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
                                            {resultadoSorteo.nombreEquipo}
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
                                            <WarningButton
                                                onClick={() =>
                                                    openModal(
                                                        2,
                                                        resultadoSorteo.id,
                                                        resultadoSorteo.grupo,
                                                        resultadoSorteo.posicion,
                                                        resultadoSorteo.fk_equipo
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
                <form
                    onSubmit={save}
                    className="p-6"
                    encType="multipart/form-data"
                >
                    <div className="mt-4">
                        <InputLabel
                            htmlFor="grupo"
                            value="Grupo"
                            className="block text-sm font-medium text-gray-700"
                        />
                        <select
                            name="grupo"
                            id="grupo"
                            ref={GrupoInput}
                            value={data.grupo}
                            onChange={(e) => setData("grupo", e.target.value)}
                            className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                                errors["grupo"] ? "border-red-500" : ""
                            }`}
                        >
                            <option value="" disabled>
                                Seleccione...
                            </option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                            <option value="G">G</option>
                            <option value="H">H</option>
                        </select>
                        <p className="mt-2 text-sm text-red-600">
                            {errors["grupo"]}
                        </p>
                    </div>
                    <div className="mt-4">
                        <InputLabel
                            htmlFor="posicion"
                            value="Posición"
                            className="block text-sm font-medium text-gray-700"
                        />
                        <select
                            name="posicion"
                            id="posicion"
                            ref={posicionInput}
                            value={data.posicion}
                            onChange={(e) =>
                                setData("posicion", e.target.value)
                            }
                            className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                                errors["posicion"] ? "border-red-500" : ""
                            }`}
                        >
                            <option value="" disabled>
                                Seleccione...
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <p className="mt-2 text-sm text-red-600">
                            {errors["posicion"]}
                        </p>
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="fk_equipo"
                            value="Equipo"
                            className="block text-sm font-medium text-gray-700"
                        />
                        <select
                            name="fk_equipo"
                            id="fk_equipo"
                            ref={fk_equipoInput}
                            value={data.fk_equipo}
                            onChange={(e) =>
                                setData("fk_equipo", e.target.value)
                            }
                            className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                                errors["fk_equipo"] ? "border-red-500" : ""
                            }`}
                        >
                            <option value="" disabled>
                                Seleccione...
                            </option>
                            {equipos.map((equipo) => (
                                <option key={equipo.id} value={equipo.id}>
                                    {equipo.nombreEquipo}
                                </option>
                            ))}
                        </select>
                        <p className="mt-2 text-sm text-red-600">
                            {errors["fk_equipo"]}
                        </p>
                    </div>

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
