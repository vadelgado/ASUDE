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

export default function Dashboard({ auth, lugarPartidos, torneo }) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const [filterText, setFilterText] = useState("");
    const NomLugarInput = useRef();
    const GeolocalizacionInput = useRef();
    const DireccionInput = useRef();
    const FotoLugarInput = useRef();
    const InitialValues = {
        nomLugar: "",
        geolocalizacion: "",
        direccion: "",
        fotoLugar: null,
        fk_torneo: torneo[0].id,
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
        setData("fotoLugar", e.target.files[0]);
    };

    const handleModal = (
        op,
        id,
        nomLugar,
        geolocalizacion,
        direccion,
        fotoLugar,
        fk_torneo
    ) => {
        setModal(true);
        setOperation(op);
        if (op === 1) {
            setTitle("Agregar Lugar Partido");
            setData({
                nomLugar: "",
                geolocalizacion: "",
                direccion: "",
                fotoLugar: null,
                fk_torneo: torneo[0].id,
            });
        } else {
            setTitle("Editar Lugar Partido");
            setData({
                id: id,
                nomLugar: nomLugar,
                geolocalizacion: geolocalizacion,
                direccion: direccion,
                fotoLugar: fotoLugar,
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
            post(route("lugarPartido.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    ok("Lugar partido guardado.");
                },
            });
        } else {
            post(route("lugarPartido.updatepost", data.id), {
                preserveScroll: true,
                onSuccess: () => {
                    ok("Lugar partido actualizado.");
                },
            });
        }
    };

    const ok = (mensaje) => {
        closeModal();
        Swal.fire({ title: mensaje, icon: "success" });
    };

    const eliminar = (id, nomLugar) => {
        Swal.fire({
            title: `¿Estás seguro de eliminar ${nomLugar}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("lugarPartido.destroy", id), {
                    onSuccess: () => {
                        ok("Lugar partido eliminado.");
                    },
                    onError: () => {
                        Swal.fire({
                            title: "Error",
                            text: "No se pudo eliminar el lugar partido.",
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
            name: "Nombre",
            selector: (row) => row.nomLugar,
            sortable: true,
        },
        {
            name: "Geolocalización",
            cell: (row) => (
                <a href={row.geolocalizacion} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    Ver en Google Maps
                </a>
            ),
            sortable: true,
        },
        {
            name: "Dirección",
            selector: (row) => row.direccion,
            sortable: true,
        },
        {
            name: "Foto lugar",
            cell: (row) => (
                <div className="flex items-center justify-center px-2 py-2">
                    <img src={`/storage/${row.fotoLugar}`} alt={row.nomLugar} className="w-16 h-16 rounded-full" />
                </div>
            ),
            sortable: false,
        },
        {
            name: "Editar",
            cell: (row) => (
                <WarningButton
                    onClick={() =>
                        handleModal(2, row.id, row.nomLugar, row.geolocalizacion, row.direccion, row.fotoLugar, row.fk_torneo)
                    }
                >
                    <i className="fa-solid fa-pencil"></i>
                </WarningButton>
            ),
            ignoreRowClick: true,
        },
        {
            name: "Eliminar",
            cell: (row) => (
                <DangerButton onClick={() => eliminar(row.id, row.nomLugar)}>
                    <i className="fa-solid fa-trash"></i>
                </DangerButton>
            ),
            ignoreRowClick: true,
        },
    ];

    const filteredLugarPartidos = lugarPartidos.filter((lugarPartido) =>
        lugarPartido.nomLugar.toLowerCase().includes(filterText.toLowerCase())
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
                    Lugares Partidos para el torneo {torneo[0].nombreTorneo} del {torneo[0].fechaInicio} al {torneo[0].fechaFin}
                </h2>
            }
        >
            <Head title="Lugar Partido" />

            <div className="flex flex-col min-h-screen">
            <main className="flex-grow container mx-auto px-4 py-8 mt-32">

            <div className="container p-6 mx-auto mt-6 bg-white">
                <div className="flex justify-end mt-2 mb-3">
                    <PrimaryButton onClick={() => handleModal(1)}>
                        <i className="mr-2 fa-solid fa-plus-circle"></i> Añadir Lugar
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
                        title="Lugares Partidos"
                        columns={columns}
                        data={filteredLugarPartidos}
                        pagination
                        paginationComponentOptions={paginationComponentOptions}
                        responsive
                        fixedHeader
                        noDataComponent={<div>No hay lugares Registrados</div>}
                    />
                </div>
            </div>

            <Modal show={modal} onClose={closeModal}>
            <h2 className="p-4 text-2xl font-semibold text-white bg-gray-800 border-b border-gray-300 rounded-t-md">
                            {title}
                        </h2>
                <form onSubmit={save} className="p-6">
                    <input type="text" value={data.fk_torneo} name="fk_torneo" hidden readOnly />

                    <FormField
                        htmlFor="nomLugar"
                        label="Nombre"
                        id="nomLugar"
                        type="text"
                        name="nomLugar"
                        ref={NomLugarInput}
                        placeholder="Nombre del lugar"
                        value={data.nomLugar}
                        onChange={handleInputChange}
                        errorMessage={errors.nomLugar}
                    />

                    <FormField
                        htmlFor="geolocalizacion"
                        label="Geolocalización"
                        id="geolocalizacion"
                        type="text"
                        name="geolocalizacion"
                        ref={GeolocalizacionInput}
                        placeholder="Geolocalización"
                        value={data.geolocalizacion}
                        onChange={handleInputChange}
                        errorMessage={errors.geolocalizacion}
                    />

                    <FormField
                        htmlFor="direccion"
                        label="Dirección"
                        id="direccion"
                        type="text"
                        name="direccion"
                        ref={DireccionInput}
                        placeholder="Dirección"
                        value={data.direccion}
                        onChange={handleInputChange}
                        errorMessage={errors.direccion}
                    />

                    <ImgField
                        htmlFor="fotoLugar"
                        label="Foto Lugar"
                        id="fotoLugar"
                        name="fotoLugar"
                        ref={FotoLugarInput}
                        onChange={handleFileChange}
                        errorMessage={errors.fotoLugar}
                    />

                    <div className="flex justify-end mt-4">
                        <SecondaryButton onClick={closeModal}>Cancelar</SecondaryButton>
                        <PrimaryButton className="ml-2" type="submit" disabled={processing}>
                            {processing ? "Guardando..." : "Guardar"}
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
