import { useRef, useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FormField from "@/Components/FormField";
import ImgField from "@/Components/ImgField";
import SelectField from "@/Components/SelectField";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import Footer from "@/Components/DashBoard/Footer";
import GuardarButton from "@/Components/GuardarButton";
import CancelarButton from "@/Components/CancelarButton";
import BackButton from "@/Components/BackButton";

export default function Index({ auth, torneos }) {
    const [filterText, setFilterText] = useState("");

    const filteredNombreTorneo = torneos.filter((torneo) =>
        torneo.nombreTorneo.toLowerCase().includes(filterText.toLowerCase())
    );

    const columns = [
        { name: "N.º", selector: (row, index) => index + 1, sortable: true },
        {
            name: "Torneo",
            selector: (row) => row.nombreTorneo,
            sortable: true,
            wrap: true,
        },
        {
            name: "Ver Fases",
            cell: (row) => (
                <button
                    className="mt-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() => window.location.href = `/fases?torneo_id=${row.id}`}
                >
                    <i className="mr-2 fa-solid fa-flag"></i> Ver Fases
                </button>
            ),
        },
        {
            name: "Ver Sorteos",
            cell: (row) => (
                <button
                    className="mt-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() => window.location.href = `/resultadoSorteo?torneo_id=${row.id}`}
                >
                    <i className="mr-2 fa-solid fa-dice"></i> Ver Sorteos
                </button>
            ),
        },
        {
            name: "Resultados",
            cell: (row) => (
                <button
                    className="mt-2 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() => window.location.href = `/resultadosTorneo?torneo_id=${row.id}`}
                >
                    <i className="mr-2 fa-solid fa-trophy"></i> Resultados
                </button>
            ),
        },
    ];
    

    const paginationComponentOptions = {
        rowsPerPageText: "Registros por página",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: "Todos",
    };
    const customStyles = {
        headCells: {
            style: {
                justifyContent: 'center',
                textAlign: 'center',
            },
        },
        cells: {
            style: {
                justifyContent: 'center',
                textAlign: 'center',
            },
        },
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-2xl font-semibold leading-tight text-gray-800">
                    ⚽ Equipos 🥅
                </h2>
            }
        >
            <Head title=" Torneos 🏆" />
            <div className="flex flex-col min-h-screen">
                <main className="container flex-grow px-4 py-8 mx-auto">
                    <div className="container min-h-screen p-6 mx-auto mt-1 bg-white">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold">
                                Lista de Torneos
                            </h3>
                            <div className="flex justify-end mt-1 mb-4 space-x-2 sm:space-x-4">
                                <BackButton to={route("dashboard")} />
                            </div>
                        </div>

                        <div className="mb-4">
                            <input
                                type="text"
                                className="w-full p-2 border rounded"
                                placeholder="Buscar por nombre Torneo..."
                                value={filterText}
                                onChange={(e) => setFilterText(e.target.value)}
                            />
                        </div>

                        <div className="overflow-x-auto">
                            <DataTable
                                title="Torneos"
                                columns={columns}
                                data={filteredNombreTorneo}
                                pagination
                                paginationComponentOptions={
                                    paginationComponentOptions
                                }
                                highlightOnHover
                                responsive
                                noDataComponent="Usted no ha subido ningún Equipo. 👀"
                                customStyles={customStyles}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}
