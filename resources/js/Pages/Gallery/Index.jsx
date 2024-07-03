import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DangerButton from "@/Components/DangerButton";
import FormField from "@/Components/FormField";
import ImgField from "@/Components/ImgField";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import WarningButton from "@/Components/WarningButton";

export default function Dashboard({ auth, galleries,fase }) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const largeUrlInput = useRef();
    const widthInput = useRef();
    const heightInput = useRef();

    const InitialValues = {
        largeUrl: null,
        width: "",
        height: "",
        fk_fase: fase[0].id, 
    };
    const {
        data,
        setData,
        errors,
        delete: destroy,
        post,
        processing,
    } = useForm(InitialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        setData("largeUrl", e.target.files[0]);
    };

    const handleModal = (
        op,
        id,
        largeUrl,
        width,
        height,
        fk_fase
    ) => {
        setModal(true);
        setOperation(op);
        if (op === 1) {
            setTitle("Agregar Foto Fase");
            setData({
                largeUrl: null,
                width: "",
                height: "",
                fk_fase: fase[0].id,
            });
        } else {
            setTitle("Editar Foto Fase");
            setData({
                id: id,
                largeUrl: largeUrl,
                width: width,
                height: height,
                fk_fase:  fase[0].id,
            });
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    const save = (e) => {
        e.preventDefault();
        if (operation === 1) {
            post(route("gallery.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    ok("Foto Guardada.");
                },
            });
        } else {
            post(route("gallery.updatepost", data.id), {
                preserveScroll: true,
                onSuccess: () => {
                    ok("Foto Actualizada.");
                },
            });
        }
    };

    const ok = (mensaje) => {
        closeModal();
        Swal.fire({ title: mensaje, icon: "success" });
    };

    const eliminar = (id) => {
        Swal.fire({
            title: `¿Estás seguro de eliminar?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("gallery.destroy", id), {
                    onSuccess: () => {
                        ok("Foto Eliminada.");
                    },
                    onError: () => {
                        Swal.fire({
                            title: "Error",
                            text: "No se pudo eliminar la foto.",
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
            Fotos de la fase {fase[0].nombreFase}
        </h2>
    }
>
    <Head title="Fotos Fase" />

    <div className="container p-6 mx-auto mt-6 bg-white">
        <div className="flex justify-end mt-2 mb-3">
            <PrimaryButton onClick={() => handleModal(1)}>
                <i className="mr-2 fa-solid fa-plus-circle">Agregar Foto</i> 
            </PrimaryButton>
        </div>
        
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-400 rounded-lg table-auto">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Foto</th>
                        <th className="px-4 py-2">Ancho</th>
                        <th className="px-4 py-2">Alto</th>
                        <th className="px-4 py-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {galleries.length > 0 ? (
                        galleries.map((foto, i) => (
                            <tr key={foto.id} className="border-b last:border-0">
                                <td className="px-4 py-2">{i + 1}</td>                                                               
                                <td className="flex items-center justify-center px-2 py-2">
                                    <img src={`/storage/${foto.largeUrl}`} alt={foto.largeUrl} className="w-16 h-16 rounded-full" />
                                </td>
                                <td className="px-4 py-2">{foto.width}</td>
                                <td className="px-4 py-2">{foto.height}</td>                                
                                <td className="px-4 py-2">
                                    <WarningButton onClick={() => handleModal(
                                        2, 
                                        foto.id,
                                        foto.largeUrl,
                                        foto.width,
                                        foto.height,
                                        foto.fk_fase
                                         )}>
                                        <i className="fa-solid fa-pencil"></i>
                                    </WarningButton>
                                </td>
                                <td className="px-4 py-2">
                                    <DangerButton onClick={() => eliminar(
                                        foto.id)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </DangerButton>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="px-4 py-2 text-center">
                                No hay Fotos de la fase {fase[0].nombreFase}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>

    <Modal show={modal} onClose={closeModal}>
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        <form onSubmit={save} className="p-6">
            <input type="text" value={data.fk_fase} name="fk_fase" hidden readOnly />

            <ImgField
                htmlFor="largeUrl"
                label="Foto"
                id="largeUrl"
                name="largeUrl"
                ref={largeUrlInput}
                onChange={handleFileChange}

                value={data.largeUrl}
                errorMessage={errors.largeUrl}
                imageUrl={data.largeUrl ? `http://127.0.0.1:8000/storage/${data.fotoLugar}` : null}
            />




            <FormField
                htmlFor="width"
                label="Ancho"
                id="width"
                type="number"
                name="width"
                ref={widthInput}
                placeholder="Ancho"
                value={data.width}
                onChange={handleInputChange}
                errorMessage={errors.width}
            />

            <FormField
                htmlFor="height"
                label="Alto"
                id="height"
                type="number"
                name="height"
                ref={heightInput}
                placeholder="Alto"
                value={data.height}
                onChange={handleInputChange}
                errorMessage={errors.height}
            />



            <div className="mt-6">
                <PrimaryButton processing={processing ? "true" : "false"} className="mt-2">
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
