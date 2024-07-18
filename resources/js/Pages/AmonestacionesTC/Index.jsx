import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DangerButton from "@/Components/DangerButton";
import FormField from "@/Components/FormField";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import WarningButton from "@/Components/WarningButton";
import Textarea2 from "@/Components/Textarea2";
import SelectField from "@/Components/SelectField";

export default function Dashboard({ auth, amonestacionesTC }) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const valueInput = useRef();
    const descriptionInput = useRef();
    const activeInput = useRef();

    const initialValues = {
        value: "",
        description: "",
        active: "0",
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleModal = (op, id, value, description, active) => {
        setModal(true);
        setOperation(op);

        if (op === 1) {
            setTitle("Agregar Falta");
            setData(initialValues);
        } else {
            setTitle("Editar Falta");
            setData({
                id: id,
                value: value,
                description: description,
                active: active ? "1" : "0",
            });
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    const save = (e) => {
        e.preventDefault();

        if (operation === 1) {
            post(route("amonestacionesTC.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    showSuccessMessage("Falta guardada.");
                },
            });
        } else {
            put(route("amonestacionesTC.update", data.id), {
                preserveScroll: true,
                onSuccess: () => {
                    showSuccessMessage("Falta actualizada");
                },
            });
        }
    };

    const showSuccessMessage = (message) => {
        closeModal();
        Swal.fire({ title: message, icon: "success" });
    };

    const deleteFase = (id) => {
        Swal.fire({
            title: `¿Estás seguro de eliminar?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("amonestacionesTC.destroy", id), {
                    onSuccess: () => {
                        showSuccessMessage("Falta eliminada.");
                    },
                    onError: () => {
                        Swal.fire({
                            title: "Error",
                            text: "No se pudo eliminar la falta.",
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
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Faltas del Sistema
        </h2>
    }
>
    <Head title="Faltas" />

    <div className="container p-6 mx-auto mt-6 bg-white">
        <div className="flex justify-end mt-2 mb-3">
            <PrimaryButton onClick={() => handleModal(1)}>
                <i className="mr-2 fa-solid fa-plus-circle"></i> Añadir Falta
            </PrimaryButton>
        </div>
        
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-400 rounded-lg table-auto">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Valor</th>
                        <th className="px-4 py-2">Descripción</th>
                        <th className="px-4 py-2">Estado</th>
                        <th className="px-4 py-2">Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {amonestacionesTC.length > 0 ? (
                        amonestacionesTC.map((amonestacion, i) => (
                            <tr key={amonestacion.id} className="border-b last:border-0">
                                <td className="px-4 py-2">{i + 1}</td>
                                <td className="px-4 py-2">{amonestacion.value}</td>
                                <td className="px-4 py-2">{amonestacion.description}</td>
                                <td className="px-4 py-2">
                                    {amonestacion.active === 1 ? "Activo" : "Inactivo"}
                                </td>
                                <td className="px-4 py-2">
                                    <WarningButton
                                        onClick={() =>
                                            handleModal(
                                                2,
                                                amonestacion.id,
                                                amonestacion.value,
                                                amonestacion.description,
                                                amonestacion.active
                                            )
                                        }
                                    >
                                        <i className="fa-solid fa-pencil"></i>
                                    </WarningButton>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="px-4 py-2 text-center">
                                No hay Faltas Registradas
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>

    <Modal show={modal} onClose={closeModal}>
    <h2 className="p-4 text-2xl font-semibold text-white bg-gray-800 border-b border-gray-300 rounded-t-md">
                            {title}
                        </h2>
        <form onSubmit={save} className="p-6">
            <FormField
                htmlFor="value"
                label="Valor"
                id="value"
                type="number"
                name="value"
                ref={valueInput}
                placeholder="Valor de la falta."
                value={data.value}
                onChange={handleInputChange}
                errorMessage={errors.value}
            />

            <Textarea2
                htmlFor="description"
                label="Descripción"
                id="description"
                name="description"
                ref={descriptionInput}
                placeholder="Descripción de la falta."
                value={data.description}
                onChange={handleInputChange}
                errorMessage={errors.description}
            />

            <SelectField 
                htmlFor="active"
                label={
                    <>
                        <span>Estado</span>
                        <span className="text-red-500">*</span>
                    </>
                }
                id="active"
                ref={activeInput}
                name="active"
                value={data.active}
                onChange={handleInputChange}
                errorMessage={errors.active}
                options={[
                    {
                        value: "",
                        label: "Seleccione...",
                        disabled: true,
                    },
                    { value: "1", label: "Activo" },
                    { value: "0", label: "Inactivo" },
                ]}
            />

            <div className="mt-6">
                <PrimaryButton processing={processing ? "true" : "false"}>
                    <i className="mr-2 fa-solid fa-save"></i>
                    {processing ? "Procesando..." : "Guardar"}
                </PrimaryButton>
            </div>
            
            <div className="flex justify-end mt-6">
                <SecondaryButton onClick={closeModal}>
                    Cancelar
                </SecondaryButton>
            </div>
        </form>
    </Modal>
</AuthenticatedLayout>

    );
}
