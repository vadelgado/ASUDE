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
import DataTable from "react-data-table-component";
import Footer from "@/Components/DashBoard/Footer";
import BackButton from "@/Components/BackButton";
import GuardarButton from "@/Components/GuardarButton";
import CancelarButton from "@/Components/CancelarButton";

export default function Dashboard({ auth, fases, torneo, fk_torneo }) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const [filterText, setFilterText] = useState("");
    const NombreFaseInput = useRef();

    const initialValues = {
        nombreFase: "",
        fk_torneo: fk_torneo,
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

    const handleModal = (op, id, nombreFase) => {
        setModal(true);
        setOperation(op);

        if (op === 1) {
            setTitle("Agregar Fase");
            setData(initialValues);
        } else {
            setTitle("Editar Fase");
            setData({
                id: id,
                nombreFase: nombreFase,
                fk_torneo: fk_torneo,
            });
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    const save = (e) => {
        e.preventDefault();

        if (operation === 1) {
            post(route("fases.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    showSuccessMessage("Fase guardada.");
                },
            });
        } else {
            put(route("fases.update", data.id), {
                preserveScroll: true,
                onSuccess: () => {
                    showSuccessMessage("Fase actualizada");
                },
            });
        }
    };

    const showSuccessMessage = (message) => {
        closeModal();
        Swal.fire({ title: message, icon: "success" });
    };

    const deleteFase = (id, nombreFase) => {
        Swal.fire({
            title: `¿Estás seguro de eliminar ${nombreFase}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("fases.destroy", id), {
                    onSuccess: () => {
                        showSuccessMessage("Fase eliminada.");
                    },
                    onError: () => {
                        Swal.fire({
                            title: "Error",
                            text: "No se pudo eliminar la fase.",
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
            name: "Nombre Fase",
            selector: (row) => row.nombreFase,
            sortable: true,
        },
        {
            name: "Editar",
            cell: (row) => (
                <button
                    onClick={() => handleModal(2, row.id, row.nombreFase)}
                    className="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200   focus:ring-4 focus:outline-none focus:ring-red-100"
                >
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                        <i className="fa-solid fa-edit"></i>
                    </span>
                </button>
            ),
        },
        {
            name: "Eliminar",
            cell: (row) => (
                <button
                    onClick={() => deleteFase(row.id, row.nombreFase)}
                    className="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200"
                >
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        <i className="fa-solid fa-trash"></i>
                    </span>
                </button>
            ),
        },
        {
            name: "Partidos",
            cell: (row) => (
                <a
                    className="mt-2 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    href={`/programacionesFaces?fase_id=${row.id}`}
                >
                    <i className="mr-2 fa-regular fa-futbol"> </i>Partidos
                </a>
            ),
        },
        {
            name: "Fotos",
            cell: (row) => (
                <a
                    className="mt-2 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    href={`/galler y?fase_id=${row.id}`}
                >
                    <i className="mr-2 fa-regular fa-image"></i>Fotos
                </a>
            ),
        },
    ];

    const filteredNombreFase = fases.filter((fase) =>
        fase.nombreFase.toLowerCase().includes(filterText.toLowerCase())
    );

    const paginationComponentOptions = {
        rowsPerPageText: "Registros por página",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: "Todos",
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Fases para el torneo {torneo[0].nombreTorneo} del{" "}
                    {torneo[0].fechaInicio} al {torneo[0].fechaFin}
                </h2>
            }
        >
            <Head title="Fases Partidos" />
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow container mx-auto px-4 py-8">
                    <div className="container p-6 mx-auto mt-6 bg-white">
                        <div className="flex justify-end mt-1 mb-4 space-x-2 sm:space-x-4">
                            <PrimaryButton onClick={() => handleModal(1)}>
                                <i className="mr-2 fa-solid fa-plus-circle"></i>
                                Nueva Fase
                            </PrimaryButton>
                            <BackButton to={route("torneo.index")} />
                        </div>

                        <div className="mb-4">
                            <input
                                type="text"
                                className="w-full p-2 border rounded"
                                placeholder="Buscar por nombre"
                                value={filterText}
                                onChange={(e) => setFilterText(e.target.value)}
                            />
                        </div>

                        <div className="overflow-x-auto">
                            <DataTable
                                title="Fases"
                                columns={columns}
                                data={filteredNombreFase}
                                pagination
                                highlightOnHover
                                paginationComponentOptions={
                                    paginationComponentOptions
                                }
                                responsive
                                fixedHeader
                                noDataComponent={
                                    <div>No hay fases Registradas</div>
                                }
                            />
                        </div>
                    </div>

                    <Modal show={modal} onClose={closeModal}>
                        <h2 className="p-4 text-2xl font-semibold text-white bg-gray-800 border-b border-gray-300 rounded-t-md">
                            {title}
                        </h2>
                        <form onSubmit={save} className="p-6">
                            <input
                                type="text"
                                value={data.fk_torneo}
                                name="fk_torneo"
                                readOnly
                                className="hidden"
                            />
                            <FormField
                                htmlFor="nombreFase"
                                label="Nombre"
                                id="nombreFase"
                                type="text"
                                name="nombreFase"
                                ref={NombreFaseInput}
                                placeholder="Nombre de la Fase"
                                value={data.nombreFase}
                                onChange={handleInputChange}
                                errorMessage={errors.nombreFase}
                            />
                            <div className="flex justify-between col-span-2 mt-1">
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
