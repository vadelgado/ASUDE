import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DangerButton from "@/Components/DangerButton";
import FormField from "@/Components/FormField";
import SelectField from "@/Components/SelectField";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Textarea2 from "@/Components/Textarea2";
import Footer from "@/Components/DashBoard/Footer";

export default function ResultadosPartidos({ auth, resultados, torneo }) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);

    const categoriaInput = useRef();
    const resultadoInput = useRef();

    const InitialValues = {
        categoria: "",
        resultado: "",
        fk_torneo: torneo[0].id,
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

    const handleModal = (op, id, categoria, resultado) => {
        setModal(true);
        setOperation(op);
        if (op === 1) {
            setTitle("Nuevo Resultado");
            setData(InitialValues);
        } else {
            setTitle("Editar Resultado");
            setData({
                id: id,
                categoria: categoria,
                resultado: resultado,
                fk_torneo: torneo[0].id,
            });
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    const save = (e) => {
        e.preventDefault();
        if (operation === 1) {
            post(route("resultadosTorneo.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    ok("Resultado creado correctamente");
                },
            });
        } else {
            put(route("resultadosTorneo.update", data.id), {
                preserveScroll: true,
                onSuccess: () => {
                    ok("Resultado actualizado correctamente");
                },
            });
        }
    };

    const ok = (message) => {
        closeModal();
        Swal.fire("¡Correcto!", message, "success");
    };

    const deleteResult = (id) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "No podrás revertir esto",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("resultadosTorneo.destroy", id));
            }
        });
    };
    return (
        <AuthenticatedLayout user={auth.user}>
                                <div className="flex flex-col min-h-screen">
                                <main className="flex-grow container mx-auto px-4 py-8">
            <div className="grid bg-white v-screen place-items-center">
                <div className="flex justify-end mt-2 mb-3">
                    <PrimaryButton onClick={() => handleModal(1)}>
                        <i className="fa-solid fa-plus-circle">
                            {" "}
                            Añadir Resultado
                        </i>
                    </PrimaryButton>
                </div>
            </div>

            <div className="grid py-6 bg-white v-screen place-items-center">
                <table className="border-gray-400 table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Categoria</th>
                            <th className="px-4 py-2 border">Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultados.length > 0 ? (
                            resultados.map((resultado) => (
                                <tr key={resultado.id}>
                                    <td className="px-4 py-2 border">
                                        {resultado.categoria}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        {resultado.resultado}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <PrimaryButton
                                            onClick={() =>
                                                handleModal(
                                                    2,
                                                    resultado.id,
                                                    resultado.categoria,
                                                    resultado.resultado
                                                )
                                            }
                                        >
                                            <i className="fa-solid fa-edit"></i>
                                        </PrimaryButton>
                                        <DangerButton
                                            onClick={() =>
                                                deleteResult(resultado.id)
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
                                    No hay resultados
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Modal show={modal} onClose={closeModal}>
            <h2 className="p-4 text-2xl font-semibold text-white bg-gray-800 border-b border-gray-300 rounded-t-md">
                            {title}
                        </h2>
                <form onSubmit={save} className="p-6">
                    <FormField
                        htmlFor="categoria"
                        label="Categoria"
                        id="categoria"
                        type="text"
                        name="categoria"
                        ref={categoriaInput}
                        placeholder="Nombre de la Categoria"
                        value={data.categoria}
                        onChange={handleInputChange}
                        errorMessage={errors.categoria}
                    />
                    <FormField
                        htmlFor="resultado"
                        label="Resultado"
                        id="resultado"
                        type="text"
                        name="resultado"
                        ref={resultadoInput}
                        placeholder="Quien gano el premio"
                        value={data.resultado}
                        onChange={handleInputChange}
                        errorMessage={errors.resultado}
                    />

                    <div className="mt-6">
                        <PrimaryButton
                            processing={processing ? "true" : "false"}
                            className="mt-2"
                        >
                            <i className="fa-solid fa-save">
                                {processing ? " Procesando..." : " Guardar"}
                            </i>
                        </PrimaryButton>
                    </div>
                    <div className="flex justify-end mt-6">
                        <SecondaryButton onClick={closeModal}>
                            Cancelar
                        </SecondaryButton>
                    </div>
                </form>
            </Modal>
            </main>
            </div>
        </AuthenticatedLayout>
    );
}
