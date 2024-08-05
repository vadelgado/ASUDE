import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DangerButton from "@/Components/DangerButton";
import FormField from "@/Components/FormField";
import ImgField from "@/Components/ImgField";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import WarningButton from "@/Components/WarningButton";
import Footer from "@/Components/DashBoard/Footer";
import BackButton from "@/Components/BackButton";
import GuardarButton from "@/Components/GuardarButton";
import CancelarButton from "@/Components/CancelarButton";

export default function Dashboard({ auth, galleries, fase, torneo_id }) {
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
        put,
        processing,
    } = useForm(InitialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        setData("largeUrl", e.target.files[0]);
    };

    const handleModal = (op, id, largeUrl, width, height, fk_fase) => {
        setModal(true);
        setOperation(op);
        if (op === 1) {
            setTitle("Agregar Foto Fase");
            setData(InitialValues);
        } else {
            setTitle("Editar Foto Fase");
            setData({
                id: id,
                largeUrl: largeUrl,
                width: width,
                height: height,
                fk_fase: fk_fase,
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

    const columns = [
        {
            name: "#",
            selector: (row, index) => index + 1,
            sortable: true,
        },
        {
            name: "Foto",
            selector: (row) => row.largeUrl,
            cell: (row) => (
                <div className="flex items-center justify-center">
                    <img
                        src={`/storage/${row.largeUrl}`}
                        alt={row.largeUrl}
                        className="w-16 h-16 rounded-full"
                    />
                </div>
            ),
            sortable: false,
        },
        {
            name: "Ancho",
            selector: (row) => row.width,
            sortable: true,
        },
        {
            name: "Alto",
            selector: (row) => row.height,
            sortable: true,
        },
        {
            name: "Editar",
            cell: (row) => (
                <>
                    <button
                        onClick={() =>
                            handleModal(
                                2,
                                row.id,
                                row.largeUrl,
                                row.width,
                                row.height,
                                row.fk_fase
                            )
                        }
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200   focus:ring-4 focus:outline-none focus:ring-red-100"
                    >
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                            <i className="fa-solid fa-edit"></i>
                        </span>
                    </button>
                </>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
        {
            name: "Eliminar",
            cell: (row) => (
                <>
                    <button
                        onClick={() => eliminar(row.id)}
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200"
                    >
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                            <i className="fa-solid fa-trash"></i>
                        </span>
                    </button>
                </>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    const customStyles = {
        rows: {
            style: {
                minHeight: "72px", // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: "8px", // override the cell padding for head cells
                paddingRight: "8px",
            },
        },
        cells: {
            style: {
                paddingLeft: "8px", // override the cell padding for data cells
                paddingRight: "8px",
            },
        },
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
            <div className="flex flex-col min-h-screen">
                <main className="container flex-grow px-4 py-8 mx-auto">
                    <div className="container p-6 mx-auto mt-6 bg-white">
                        <div className="flex justify-end mt-1 mb-4 space-x-2 sm:space-x-4">
                            <PrimaryButton onClick={() => handleModal(1)}>
                                <i className="mr-2 fa-solid fa-plus-circle"></i>
                                Agregar Foto
                            </PrimaryButton>
                            <BackButton to={`/fases?torneo_id=${torneo_id}`} />
                        </div>

                        <DataTable
                            columns={columns}
                            data={galleries}
                            customStyles={customStyles}
                            pagination
                            highlightOnHover
                            responsive
                            striped
                            fixedHeader
                            noDataComponent={
                                <div>No hay Fotos Para Mostrar. </div>
                            }
                        />
                    </div>

                    <Modal show={modal} onClose={closeModal}>
                        <h2 className="p-4 text-2xl font-semibold text-white bg-gray-800 border-b border-gray-300 rounded-t-md">
                            {title}
                        </h2>
                        <form onSubmit={save} className="p-6">
                            <input
                                type="text"
                                value={data.fk_fase}
                                name="fk_fase"
                                hidden
                                readOnly
                            />

                            <ImgField
                                htmlFor="largeUrl"
                                label={
                                    <>
                                        <span>Foto</span>
                                        <span className="text-red-500">*</span>
                                    </>
                                }
                                id="largeUrl"
                                name="largeUrl"
                                ref={largeUrlInput}
                                onChange={handleFileChange}
                                value={data.largeUrl}
                                errorMessage={errors.largeUrl}
                                imageUrl={data.largeUrl}
                            />

                            <FormField
                                htmlFor="width"
                                label={
                                    <>
                                        <span>Ancho</span>
                                        <span className="text-red-500">*</span>
                                    </>
                                }
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
                                label={
                                    <>
                                        <span>Alto</span>
                                        <span className="text-red-500">*</span>
                                    </>
                                }
                                id="height"
                                type="number"
                                name="height"
                                ref={heightInput}
                                placeholder="Alto"
                                value={data.height}
                                onChange={handleInputChange}
                                errorMessage={errors.height}
                            />

                            <div className="flex justify-between mt-4">
                                <GuardarButton
                                    processing={processing.toString()}
                                    className="px-4 py-2 mt-2"
                                >
                                    Guardar
                                </GuardarButton>
                                <CancelarButton
                                    onClick={closeModal}
                                    className="px-4 py-2 mt-2"
                                >
                                    Cancelar
                                </CancelarButton>
                            </div>
                        </form>
                    </Modal>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}
