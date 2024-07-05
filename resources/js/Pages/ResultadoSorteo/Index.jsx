import DataTable from "react-data-table-component";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import WarningButton from "@/Components/WarningButton";
import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import Swal from "sweetalert2";
import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import SelectField from "@/Components/SelectField";

export default function Index({
    auth,
    resultadoSorteos,
    equipos,
    cantidadEquiposParticipantes,
    torneo_id,
}) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const [filterText, setFilterText] = useState("");
    const puestoInput = useRef();
    const fk_equipoInput = useRef();
    const {
        data,
        setData,
        delete: destroy,
        post,
        put,
        processing,
        reset,
        errors,
    } = useForm({
        id: "",
        puesto: "",
        fk_equipo: "",
        fk_torneo: torneo_id,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const openModal = (op, id, puesto, fk_equipo, fk_torneo) => {
        setModal(true);
        setOperation(op);
        if (op === 1) {
            setTitle("Agregar Resultado Sorteo");
            setData({
                id: "",
                puesto: "",
                fk_equipo: "",
                fk_torneo: torneo_id,
            });
        } else {
            setTitle("Editar Resultado Sorteo");
            setData({
                id: id,
                puesto: puesto,
                fk_equipo: fk_equipo,
                fk_torneo: torneo_id,
            });
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (operation === 1) {
            post(route("resultadoSorteo.store"), {
                onSuccess: () => {
                    closeModal();
                    Swal.fire({
                        title: "Resultado Sorteo agregado correctamente",
                        icon: "success",
                    });
                },
                onError: (errors) => {
                    if (errors.grupo) {
                        grupoPosicionInput.current.focus();
                    } else if (errors.fk_equipo) {
                        fk_equipoInput.current.focus();
                    }
                },
            });
        } else {
            put(route("resultadoSorteo.update", data.id), {
                onSuccess: () => {
                    closeModal();
                    ok("Resultado Sorteo actualizado correctamente");
                },
                onError: (errors) => {
                    if (errors.grupo) {
                        grupoPosicionInput.current.focus();
                    } else if (errors.fk_equipo) {
                        fk_equipoInput.current.focus();
                    }
                },
            });
        }
    };

    const ok = (mensaje) => {
        closeModal();
        Swal.fire({ title: mensaje, icon: "success" });
    };

    const eliminar = (id) => {
        const alerta = Swal.mixin({ buttonsStyling: true });
        alerta
            .fire({
                title: "¿Estás seguro?",
                text: "No podrás revertir esto!",
                icon: "question",
                showCancelButton: true,
                confirmButtonText:
                    '<i className="fa-solid fa-check"></i> Si, eliminarlo!',
                cancelButtonText:
                    '<i className="fa-solid fa-ban"></i> Cancelar!',
            })
            .then((result) => {
                if (result.isConfirmed) {
                    destroy(route("resultadoSorteo.destroy", id), {
                        onSuccess: () => {
                            ok("Resultado Sorteo eliminado correctamente");
                        },
                    });
                }
            });
    };

    const handleSelectPuestos = [
        { value: "", label: "Seleccione ..." },
        ...Array.from({ length: cantidadEquiposParticipantes }, (_, i) => ({
            value: i + 1,
            label: `Equipo ${i + 1}`,
        })),
    ];

    const handleSelectEquipos = [
        { value: "", label: "Seleccione ..." },
        ...equipos.map((equipo) => ({
            value: equipo.id,
            label: equipo.nombreEquipo,
        })),
    ];

    const columns = [
        { name: 'Grupo y Posición', selector: row => row.puesto, sortable: true },
        {
            name: 'Equipo',
            selector: row => (
                <div className="flex items-center">
                    <img
                        src={`/storage/${row.escudoEquipo}`}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/escudo.svg";
                            e.target.style.filter = "brightness(0.5)";
                        }}
                        alt={`Foto de ${row.nombreEquipo}`}
                        className="w-10 h-10 mr-2 rounded-full"
                    />
                    {row.nombreEquipo}
                </div>
            ),
            sortable: true,
        },
        {
            name: 'Editar',
            cell: row => (
                <WarningButton
                    onClick={() =>
                        openModal(
                            2,
                            row.id,
                            row.puesto,
                            row.fk_equipo,
                            row.fk_torneo
                        )
                    }
                >
                    <i className="fa-solid fa-edit"></i>
                </WarningButton>
            ),
        },
        {
            name: 'Eliminar',
            cell: row => (
                <DangerButton
                    onClick={() => eliminar(row.id)}
                >
                    <i className="fa-solid fa-trash"></i>
                </DangerButton>
            ),
        },
    ];

    const filteredResultados = resultadoSorteos.filter((resultadoSorteo) =>
        resultadoSorteo.nombreEquipo
            .toLowerCase()
            .includes(filterText.toLowerCase())
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
                    ✋Sorteo
                </h2>
            }
        >
            <Head title="✋Sorteo" />

            <div className="container p-6 mx-auto mt-6 bg-white">
                <div className="flex justify-end mt-2 mb-3">
                    <PrimaryButton onClick={() => openModal(1)}>
                        <i className="mr-2 fa-solid fa-plus-circle"></i> Añadir
                    </PrimaryButton>
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        placeholder="Buscar por nombre de equipo..."
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                </div>

                <div className="overflow-x-auto">
                    <DataTable
                        columns={columns}
                        data={filteredResultados}
                        pagination
                        paginationComponentOptions={paginationComponentOptions}
                        highlightOnHover
                        responsive
                        noDataComponent="No hay resultados. 👀"
                    />
                </div>
            </div>

            <Modal show={modal} onClose={closeModal}>
                <h2 className="p-3 text-lg font-medium text-gray-900">
                    {title}
                </h2>
                <form onSubmit={handleSubmit} className="p-6">
                    <input
                        type="text"
                        value={data.fk_torneo}
                        name="fk_torneo"
                        hidden
                        readOnly
                    />

                    <SelectField
                        htmlFor="puesto"
                        label={
                            <>
                                <span>Puesto</span>
                                <span className="text-red-500">*</span>
                            </>
                        }
                        id="puesto"
                        ref={puestoInput}
                        name="puesto"
                        value={data.puesto}
                        onChange={handleInputChange}
                        options={handleSelectPuestos}
                        errorMessage={errors.puesto}
                    />

                    <SelectField
                        htmlFor="fk_equipo"
                        label={
                            <>
                                <span>Equipo</span>
                                <span className="text-red-500">*</span>
                            </>
                        }
                        id="fk_equipo"
                        ref={fk_equipoInput}
                        name="fk_equipo"
                        value={data.fk_equipo}
                        onChange={handleInputChange}
                        options={handleSelectEquipos}
                        errorMessage={errors.fk_equipo}
                    />

                    <div className="mt-6">
                        <PrimaryButton
                            processing={processing ? "true" : "false"}
                        >
                            <i className="mr-2 fa-solid fa-save"></i>Guardar
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
