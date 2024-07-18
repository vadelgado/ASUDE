import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DangerButton from "@/Components/DangerButton";
import FormField from "@/Components/FormField";
import SelectField from "@/Components/SelectField";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import WarningButton from "@/Components/WarningButton";
import Textarea2 from "@/Components/Textarea2";
import Footer from "@/Components/DashBoard/Footer";

export default function Index({
    auth,
    torneo,
    equipo,
    inscripciones,
    fk_equipo,
    userRole,
}) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const fk_torneoInput = useRef();
    const estadoInscripcionInput = useRef();
    const observacionInput = useRef();
    const InitialValues = {
        fk_user: auth.user.id,
        fk_torneo: "",
        fk_equipo: fk_equipo,
        estadoInscripcion: "",
        observacion: "",
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

    const handleModal = (
        op,
        id,
        fk_torneo,
        fk_equipo,
        estadoInscripcion,
        observacion
    ) => {
        setModal(true);
        setOperation(op);
        if (op === 1) {
            setTitle("Realizar Pre Inscripción");
            setData(InitialValues);
        } else {
            setTitle("Editar Pre Inscripción");
            setData({
                id: id,
                fk_torneo: fk_torneo,
                fk_equipo: fk_equipo,
                estadoInscripcion: estadoInscripcion,
                observacion: observacion,
            });
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (operation === 1) {
            post(
                userRole === "admin"
                    ? route("inscripciones.store")
                    : route("inscripcionesEquipo.store"),
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        ok("Pre Inscripción realizada correctamente");
                    },
                }
            );
        } else {
            put(
                userRole === "admin"
                    ? route("inscripciones.update", data.id)
                    : route("inscripcionesEquipo.update", data.id),
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        ok("Pre Inscripción actualizada correctamente");
                    },
                }
            );
        }
    };
    const ok = (mensaje) => {
        closeModal();
        Swal.fire({ title: mensaje, icon: "success" });
    };

    const handleSelectTorneos = [
        { value: "", label: "Seleccione un torneo" },
        ...torneo.map((torneo) => ({
            value: torneo.id,
            label: `${torneo.nombreTorneo} - ${torneo.estadoTorneo}`,
        })),
    ];

    const [selectedTorneo, setSelectedTorneo] = useState(null);

    // Modifica la función handleInputChangeFlayer para actualizar el torneo seleccionado
    const handleInputChangeFlayer = (event) => {
        const { name, value } = event.target;
        setData((prevState) => ({ ...prevState, [name]: value }));

        if (name === "fk_torneo") {
            const selectedTorneo = torneo.find(
                (torneo) => torneo.id === parseInt(value)
            );
            setSelectedTorneo(selectedTorneo);
        }
    };

    const handleSelectestadoInscripcion = [
        { value: "", label: "Seleccione un estado" },
        { value: "Pendiente", label: "Pendiente" },
        { value: "Aceptada", label: "Aceptada" },
        { value: "Rechazada", label: "Rechazada" },
    ];

    const eliminar = (id, nombreTorneo) => {
        Swal.fire({
            title: `¿Estás seguro de eliminar la inscripcion al torneo ${nombreTorneo}?`,
            text: "No podrás revertir esto",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("inscripciones.destroy", id), {
                    onSuccess: () => {
                        ok("Inscripcion eliminada correctamente");
                    },
                    onError: () => {
                        Swal.fire({
                            title: "Error",
                            text: "El jugador no ha sido eliminado",
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
            name: 'Torneo',
            selector: (row) => row.nombreTorneo,
            sortable: true,
        },
        {
            name: 'Estado',
            selector: (row) => row.estadoInscripcion,
            sortable: true,
            cell: (row) => (
                <span
                    className={`flex gap-x-2 rounded-full text-xs text-white py-1 px-2 ${
                        row.estadoInscripcion === "Pendiente"
                            ? "bg-yellow-600"
                            : row.estadoInscripcion === "Aceptada"
                            ? "bg-green-600"
                            : row.estadoInscripcion === "Rechazada"
                            ? "bg-red-600"
                            : ""
                    }`}
                >
                    {row.estadoInscripcion}
                </span>
            ),
        },
        {
            name: 'Observación',
            selector: (row) => row.observacion,
        },
        ...(auth.user.role === "admin"
            ? [
                {
                    name: 'Editar',
                    cell: (row) => (
                        <PrimaryButton
                            onClick={() =>
                                handleModal(
                                    2,
                                    row.id,
                                    row.fk_torneo,
                                    row.fk_equipo,
                                    row.estadoInscripcion,
                                    row.observacion
                                )
                            }
                        >
                            Editar
                        </PrimaryButton>
                    ),
                },
                {
                    name: 'Eliminar',
                    cell: (row) => (
                        <DangerButton
                            onClick={() =>
                                eliminar(row.id, row.nombreTorneo)
                            }
                        >
                            <i className="fa-solid fa-trash"></i>
                        </DangerButton>
                    ),
                },
            ]
            : []),
    ];

    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };

    const paginationOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        noRowsPerPage: false,
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    const filterComponent = (
        <input
            type="text"
            placeholder="Buscar por Torneo"
            className="p-2 border border-gray-300 rounded-lg"
            onChange={(e) => setData({ ...data, search: e.target.value })}
        />
    );

    const filteredItems = inscripciones.filter(
        (item) =>
            item.nombreTorneo &&
            item.nombreTorneo
                .toLowerCase()
                .includes(data.search?.toLowerCase() || "")
    );

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-center px-2 py-1">
                    <h2 className="flex items-center text-xl font-semibold leading-tight text-gray-800">
                        Pre Inscripciones equipo
                        {["admin", "equipo"].includes(auth.user.role) && (
                            <>
                                <img
                                    src={`/storage/${equipo.escudoEquipo}`}
                                    alt={`Escudo equipo ${equipo.nombreEquipo}`}
                                    className="w-10 h-10 ml-2 rounded-full"
                                />
                                {equipo.nombreEquipo}
                            </>
                        )}
                    </h2>
                </div>
            }
        >
            <Head title="Programación Torneo" />
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow container mx-auto px-4 py-8 mt-32">
                    <div className="container min-h-screen p-6 mx-auto mt-6 bg-white">
                        <div className="flex justify-end mt-2 mb-3">
                            <PrimaryButton onClick={() => handleModal(1)}>
                                <i className="mr-2 fa-solid fa-plus-circle"></i>
                                Realizar Pre Inscripción
                            </PrimaryButton>
                        </div>

                        <div className="overflow-x-auto">
                            {filterComponent}
                            <DataTable
                                columns={columns}
                                data={filteredItems}
                                customStyles={customStyles}
                                pagination
                                paginationComponentOptions={paginationOptions}
                                highlightOnHover
                                responsive
                                striped
                                fixedHeader
                                noDataComponent={
                                    <div>
                                        No hay Inscripciones para mostrar
                                    </div>
                                }
                            />
                        </div>
                    </div>

                    <Modal show={modal} onClose={closeModal}>
                        
                        <h2 className="p-4 text-2xl font-semibold text-white bg-gray-800 border-b border-gray-300 rounded-t-md">
                            {title}                                
                                <img
                                    src={`/storage/${equipo.escudoEquipo}`}
                                    alt={`Escudo equipo ${equipo.nombreEquipo}`}
                                    className="w-10 h-10 ml-2 rounded-full"
                                />
                                {equipo.nombreEquipo}
                            </h2>
                        
                        <form onSubmit={handleSubmit} className="p-6">
                            {["admin", "equipo"].includes(auth.user.role) && (
                                <SelectField
                                    htmlFor="fk_torneo"
                                    label={
                                        <>
                                            <span>Torneo</span>
                                            <span className="text-red-500">*</span>
                                        </>
                                    }
                                    id="fk_torneo"
                                    ref={fk_torneoInput}
                                    name="fk_torneo"
                                    value={data.fk_torneo}
                                    onChange={handleInputChange}
                                    options={handleSelectTorneos}
                                    errorMessage={errors.fk_torneo}
                                />
                            )}
                            {auth.user.role === "equipo" && selectedTorneo && (
                                <img
                                    className="w-1/2 mx-auto mt-4 h-1/2"
                                    src={`/storage/${selectedTorneo.flayer}`}
                                    alt={`Torneo ⚽ ${selectedTorneo.nombreTorneo}`}
                                />
                            )}
                            {auth.user.role === "admin" && (
                                <>
                                    <SelectField
                                        htmlFor="estadoInscripcion"
                                        label={
                                            <>
                                                <span>Estado Inscripción</span>
                                                <span className="text-red-500">*</span>
                                            </>
                                        }
                                        id="estadoInscripcion"
                                        ref={estadoInscripcionInput}
                                        name="estadoInscripcion"
                                        value={data.estadoInscripcion || ""}
                                        onChange={handleInputChange}
                                        options={handleSelectestadoInscripcion}
                                        errorMessage={errors.estadoInscripcion}
                                    />
                                    <Textarea2
                                        htmlFor="observacion"
                                        label="Observación"
                                        id="observacion"
                                        ref={observacionInput}
                                        name="observacion"
                                        placeholder="Observación"
                                        value={data.observacion || ""}
                                        onChange={handleInputChange}
                                        errorMessage={errors.observacion}
                                    />
                                </>
                            )}
                            <div className="flex justify-end mt-4">
                                <SecondaryButton onClick={closeModal}>
                                    Cancelar
                                </SecondaryButton>
                                <PrimaryButton type="submit" className="ml-2">
                                    Guardar
                                </PrimaryButton>
                            </div>
                        </form>
                    </Modal>
                </main>
            </div>
            <Footer />
        </AuthenticatedLayout>
    );
}
