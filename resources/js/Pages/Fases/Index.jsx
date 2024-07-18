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
            name: '#',
            selector: (row, index) => index + 1,
            sortable: true,
        },
        {
            name: 'Nombre Fase',
            selector: row => row.nombreFase,
            sortable: true,
        },
        {
            name: 'Editar',
            cell: row => (
                <WarningButton onClick={() => handleModal(2, row.id, row.nombreFase)}>
                    <i className="fa-solid fa-pencil"></i>
                </WarningButton>
            ),
        },
        {
            name: 'Eliminar',
            cell: row => (
                <DangerButton onClick={() => deleteFase(row.id, row.nombreFase)}>
                    <i className="fa-solid fa-trash"></i>
                </DangerButton>
            ),
        },
        {
            name: 'Partidos',
            cell: row => (
                <a
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300"
                    href={`/programacionesFaces?fase_id=${row.id}`}
                >
                    <i className="mr-2 fa-regular fa-futbol"> Partidos</i> 
                </a>
            ),
        },
        {
            name: 'Fotos',
            cell: row => (
                <a
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300"
                    href={`/gallery?fase_id=${row.id}`}
                >
                    <i className="mr-2 fa-regular fa-image"> Fotos</i> 
                </a>
            ),
        }
    ];
    
    const filteredNombreFase = fases.filter((fase) =>
        fase.nombreFase.toLowerCase().includes(filterText.toLowerCase())
    );

    const paginationComponentOptions = {
        rowsPerPageText: 'Registros por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Fases para el torneo {torneo[0].nombreTorneo} del {torneo[0].fechaInicio} al {torneo[0].fechaFin}
                </h2>
            }
        >
            <Head title="Fases Partidos" />
            <div className="flex flex-col min-h-screen">
            <main className="flex-grow container mx-auto px-4 py-8 mt-32">

            <div className="container p-6 mx-auto mt-6 bg-white">
                <div className="flex justify-end mt-2 mb-3">
                    <PrimaryButton onClick={() => handleModal(1)}>
                        <i className="mr-2 fa-solid fa-plus-circle">Añadir Fase</i> 
                    </PrimaryButton>
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
                        paginationComponentOptions={paginationComponentOptions}
                        responsive
                        fixedHeader
                        noDataComponent={<div>No hay fases Registradas</div>}
                    />
                </div>
            </div>

            <Modal show={modal} onClose={closeModal}>
            <h2 className="p-4 text-2xl font-semibold text-white bg-gray-800 border-b border-gray-300 rounded-t-md">
                            {title}
                        </h2>
                <form onSubmit={save} className="p-6">
                    <input type="text" value={data.fk_torneo} name="fk_torneo" readOnly className="hidden" />
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
            </main>
            </div>
            <Footer />
        </AuthenticatedLayout>
    );
}
