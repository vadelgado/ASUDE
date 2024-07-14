import { useRef, useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DangerButton from "@/Components/DangerButton";
import FormField from "@/Components/FormField";
import ImgField from "@/Components/ImgField";
import SelectField from "@/Components/SelectField";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import WarningButton from "@/Components/WarningButton";
import Footer from "@/Components/DashBoard/Footer";

export default function Index({
    auth,
    equipos,
    categorias,
    torneos,
    userRole,
}) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const [filterText, setFilterText] = useState("");
    const nombreEquipoInput = useRef();
    const fk_categoria_equipoInput = useRef();
    const escudoEquipoInput = useRef();
    const numeroWhatsAppInput = useRef();
    const correoElectronicoInput = useRef();

    const InitialValues = {
        id: "",
        nombreEquipo: "",
        fk_categoria_equipo: "",
        escudoEquipo: null,
        numeroWhatsapp: "",
        correoElectronico: "",
        fk_user: auth.user.id,
    };

    const {
        data,
        setData,
        delete: destroy,
        post,
        processing,
        errors,
    } = useForm(InitialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        setData("escudoEquipo", e.target.files[0]);
    };

    const openModal = (
        op,
        id,
        nombreEquipo,
        fk_categoria_equipo,
        escudoEquipo,
        numeroWhatsapp,
        correoElectronico,
        fk_user
    ) => {
        setModal(true);
        setOperation(op);

        if (op === 1) {
            setTitle("Agregar Equipo");
            setData(InitialValues);
        } else {
            setTitle("Editar Equipo");
            setData({
                id: id,
                nombreEquipo: nombreEquipo,
                fk_categoria_equipo: fk_categoria_equipo,
                escudoEquipo: escudoEquipo,
                numeroWhatsapp: numeroWhatsapp,
                correoElectronico: correoElectronico,
                fk_user: fk_user,
            });
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    const save = (e) => {
        e.preventDefault();

        let routeAction = "store";
        let message = "El equipo ha sido guardado.";

        if (operation !== 1) {
            routeAction = "update";
            message = "El equipo ha sido actualizado.";
        }

        let routeBase = "equipos";
        if (userRole === "equipo") {
            routeBase = "equiposInvitados";
        }

        const routeName = buildRouteName(routeBase, routeAction);
        const routeParams = {};
        if (operation !== 1) {
            routeParams.id = data.id;
        }

        post(route(routeName, routeParams), {
            preserveScroll: true,
            onSuccess: () => {
                ok(message);
            },
            onError: () => {
                error("Hubo un error al procesar la solicitud.");
            },
        });
    };

    const buildRouteName = (base, action) => {
        return `${base}.${action}`;
    };

    const ok = (mensaje) => {
        closeModal();
        Swal.fire({ title: mensaje, icon: "success" });
    };

    const eliminar = (id, nombreEquipo) => {
        Swal.fire({
            title: "¿Está seguro?",
            text: `¿Está seguro que desea eliminar el equipo ${nombreEquipo}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("equipos.destroy", id), {
                    preserveScroll: true,
                    onSuccess: () => {
                        ok("El equipo ha sido eliminado.");
                    },
                    onError: () => {
                        Swal.fire(
                            "¡Error!",
                            "El equipo no ha sido eliminado.",
                            "error"
                        );
                    },
                });
            }
        });
    };

    const handletorneos = [
        { value: "", label: "Seleccione ...", disabled: true },
        ...torneos.map((torneo) => ({
            value: torneo.id,
            label: torneo.nombreTorneo,
        })),
    ];

    const handleCategorias = [
        { value: "", label: "Seleccione ...", disabled: true },
        ...categorias.map((categoria) => ({
            value: categoria.id,
            label: categoria.descripcion,
        })),
    ];

    const columns = [
        { name: "No.", selector: (row, index) => index + 1, sortable: true },
        {
            name: "Nombre del Equipo",
            selector: (row) => row.nombreEquipo,
            sortable: true,
        },
        {
            name: "Categoría",
            selector: (row) => row.descripcion,
            sortable: true,
        },
        {
            name: "Escudo del Equipo",
            selector: (row) => (
                <img
                    src={`/storage/${row.escudoEquipo}`}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/escudo.svg";
                        e.target.style.filter = "brightness(0.5)";
                    }}
                    alt={row.nombreEquipo}
                    className="w-16 h-16 rounded-full"
                />
            ),
        },
        {
            name: "Número de WhatsApp",
            selector: (row) => row.numeroWhatsapp,
            sortable: true,
        },
        {
            name: "Correo Electrónico",
            selector: (row) => row.correoElectronico,
            sortable: true,
        },
        {
            name: "Preinscribir",
            cell: (row) =>
                userRole === "admin" ? (
                    <a
                        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                        href={`/inscripciones?equipo_id=${row.id}`}
                    >
                        <i className="mr-2 fa-solid fa-book"></i>Torneos
                    </a>
                ) : (
                    <a
                        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                        href={`/inscripcionesEquipo?equipo_id=${row.id}`}
                    >
                        <i className="mr-2 fa-solid fa-book"></i>Torneos
                    </a>
                ),
        },
        {
            name: "Editar",
            cell: (row) => (
                <WarningButton
                    onClick={() =>
                        openModal(
                            2,
                            row.id,
                            row.nombreEquipo,
                            row.fk_categoria_equipo,
                            row.escudoEquipo,
                            row.numeroWhatsapp,
                            row.correoElectronico,
                            row.fk_user
                        )
                    }
                >
                    <i className="fa-solid fa-edit"></i>
                </WarningButton>
            ),
        },
        {
            name: "Eliminar",
            cell: (row) => (
                <DangerButton
                    onClick={() => eliminar(row.id, row.nombreEquipo)}
                >
                    <i className="fa-solid fa-trash"></i>
                </DangerButton>
            ),
        },
        {
            name: "Miembros del Equipo",
            cell: (row) => (
                <a
                    href={
                        userRole === "admin"
                            ? `/jugadoresAdmin?equipo_id=${row.id}`
                            : `/jugadores?equipo_id=${row.id}`
                    }
                    className="text-blue-600 hover:text-blue-900"
                >
                    <i className="fa-solid fa-users"></i>
                </a>
            ),
        },
    ];

    const filteredNombreEquipo = equipos.filter((equipo) =>
        equipo.nombreEquipo.toLowerCase().includes(filterText.toLowerCase())
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
                <h2 className="text-2xl font-semibold leading-tight text-gray-800">
                    ⚽ Equipos 🥅
                </h2>
            }
        >
            <Head title="⚽ Equipos 🥅" />
            <div className="flex flex-col min-h-screen">
            <main className="flex-grow container mx-auto px-4 py-8 mt-32">
            <div className="container min-h-screen p-6 mx-auto mt-1 bg-white">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Lista de Equipos</h3>
                    <PrimaryButton onClick={() => openModal(1)}>
                        <i className="mr-2 fa-solid fa-plus-circle"></i>Agregar
                    </PrimaryButton>
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        placeholder="Buscar por nombre Equipo..."
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                </div>

                <div className="overflow-x-auto">
                    <DataTable
                        title="Equipos"
                        columns={columns}
                        data={filteredNombreEquipo}
                        pagination
                        paginationComponentOptions={paginationComponentOptions}
                        highlightOnHover
                        responsive
                        noDataComponent="Usted no ha subido ningún Equipo. 👀"
                    />
                </div>
            </div>
            <Modal show={modal} onClose={closeModal}>
            <h2 className="p-4 text-2xl font-semibold text-white bg-gray-800 border-b border-gray-300 rounded-t-md">
                            {title}
                        </h2>
                <form
                    onSubmit={save}
                    className="p-6"
                    encType="multipart/form-data"
                >
                    <FormField
                        htmlFor="nombreEquipo"
                        label="Nombre del Equipo"
                        id="nombreEquipo"
                        type="text"
                        ref={nombreEquipoInput}
                        name="nombreEquipo"
                        placeholder="Nombre del Equipo"
                        value={data.nombreEquipo}
                        onChange={handleInputChange}
                        errorMessage={errors.nombreEquipo}
                    />
                    <SelectField
                        htmlFor="fk_categoria_equipo"
                        label="Categoría"
                        id="fk_categoria_equipo"
                        ref={fk_categoria_equipoInput}
                        name="fk_categoria_equipo"
                        value={data.fk_categoria_equipo}
                        onChange={handleInputChange}
                        errorMessage={errors.fk_categoria_equipo}
                        options={handleCategorias}
                    />
                    <ImgField
                        htmlFor="escudoEquipo"
                        label="Escudo del Equipo"
                        id="escudoEquipo"
                        ref={escudoEquipoInput}
                        name="escudoEquipo"
                        value={data.escudoEquipo}
                        onChange={handleFileChange}
                        errorMessage={errors.escudoEquipo}
                        imageUrl={
                            data.escudoEquipo
                                ? `http://127.0.0.1:8000/storage/${data.escudoEquipo}`
                                : null
                        }
                    />
                    <FormField
                        htmlFor="numeroWhatsApp"
                        label="Número de WhatsApp"
                        id="numeroWhatsApp"
                        type="number"
                        ref={numeroWhatsAppInput}
                        name="numeroWhatsapp"
                        placeholder="Número de WhatsApp"
                        value={data.numeroWhatsapp}
                        onChange={handleInputChange}
                        errorMessage={errors.numeroWhatsapp}
                    />
                    <FormField
                        htmlFor="correoElectronico"
                        label="Correo Electrónico"
                        id="correoElectronico"
                        type="email"
                        ref={correoElectronicoInput}
                        name="correoElectronico"
                        placeholder="Correo Electrónico"
                        value={data.correoElectronico}
                        onChange={handleInputChange}
                        errorMessage={errors.correoElectronico}
                    />
                    <div className="mt-4">
                        <PrimaryButton
                            processing={processing.toString()}
                            className="mt-2"
                        >
                            <i className="fa-solid fa-save"></i>Guardar
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
