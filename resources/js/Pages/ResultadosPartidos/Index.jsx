import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DangerButton from "@/Components/DangerButton";
import FormField from "@/Components/FormField";
import SelectField from "@/Components/SelectField";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Textarea2 from "@/Components/Textarea2";
import Footer from "@/Components/DashBoard/Footer";
import BackButton from "@/Components/BackButton";

export default function ResultadosPartidos({
    auth,
    jugadores,
    idPartido,
    resultados,
    partidoInfo,
}) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [operation, setOperation] = useState(1);

    const fk_jugador_idSelect = useRef();
    const golesInput = useRef();
    const tarjetas_amarillasInput = useRef();
    const tarjetas_rojasInput = useRef();
    const observacionesText = useRef();

    const InitialValues = {
        fk_programaciones_faces_id: idPartido[0].id,
        fk_jugador_id: "",
        goles: "",
        tarjetas_amarillas: "",
        tarjetas_rojas: "",
        observaciones: "",
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
        fk_jugador_id,
        goles,
        tarjetas_amarillas,
        tarjetas_rojas,
        observaciones
    ) => {
        setModal(true);
        setOperation(op);
        if (op === 1) {
            setTitle("Nuevo Resultado");
            setData(InitialValues);
        } else {
            setTitle("Editar Resultado");
            setData({
                id: id,
                fk_programaciones_faces_id: idPartido[0].id,
                fk_jugador_id: fk_jugador_id,
                goles: goles,
                tarjetas_amarillas: tarjetas_amarillas,
                tarjetas_rojas: tarjetas_rojas,
                observaciones: observaciones,
            });
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    const save = (e) => {
        e.preventDefault();
        if (operation === 1) {
            post(route("resultadosPartidos.store"), {
                preserveScroll: true,
                onSuccess: () => {
                    ok("Resultado creado correctamente");
                },
            });
        } else {
            put(route("resultadosPartidos.update", data.id), {
                preserveScroll: true,
                onSuccess: () => {
                    ok("Resultado actualizado correctamente");
                },
            });
        }
    };

    const ok = (message) => {
        closeModal();
        Swal.fire("¡Correcto!", message, "success");
    };

    const deleteResult = (id) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "No podrás revertir esto",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("resultadosPartidos.destroy", id));
            }
        });
    };

    const jugadoresOptions = [
        { value: "", label: "Seleccione ..." },
        ...jugadores
            .filter((jugador) => jugador.estado === 1)
            .map((jugador) => ({
                value: jugador.id,
                label: `${jugador.nombreCompleto} - ${jugador.nombreEquipo}`,
            })),
    ];

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Agrupar resultados por jugador y equipo
    const groupedResultados = resultados.reduce((acc, curr) => {
        const key = `${curr.fk_jugador_id}-${curr.nombreEquipo}`;
        if (!acc[key]) {
            acc[key] = {
                ...curr,
                goles: 0,
                tarjetas_amarillas: 0,
                tarjetas_rojas: 0,
            };
        }
        acc[key].goles += curr.goles;
        acc[key].tarjetas_amarillas += curr.tarjetas_amarillas;
        acc[key].tarjetas_rojas += curr.tarjetas_rojas;
        return acc;
    }, {});

    const resultadosAgrupados = Object.values(groupedResultados);

    // Filtrar resultados según el término de búsqueda
    const filteredResultados = resultadosAgrupados.filter((resultado) =>
        resultado.nombreCompleto
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    // Totalizar goles por equipo
    const totalGolesPorEquipo = resultadosAgrupados.reduce((acc, curr) => {
        if (!acc[curr.nombreEquipo]) {
            acc[curr.nombreEquipo] = 0;
        }
        acc[curr.nombreEquipo] += curr.goles;
        return acc;
    }, {});

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="flex flex-col min-h-screen">
                <main className="container flex-grow px-4 py-8 mx-auto">
                    <div className="flex flex-col items-center justify-between p-4 mb-4 text-blue-800 border border-blue-200 rounded-lg shadow-lg md:flex-row md:p-6 bg-gradient-to-r from-blue-100 to-blue-50">
                        <div className="flex items-center mb-2 md:mb-0">
                            <i className="mr-3 text-blue-600 fa-solid fa-circle-info fa-lg"></i>
                            <span className="text-lg font-semibold">Nota:</span>
                        </div>
                        <span className="text-sm text-center md:text-base md:text-left">
                            Si un equipo no ha anotado goles en un partido, por
                            favor, registre 0 a cualquier integrante de este.
                            Este valor indica que el equipo no logró anotar
                            durante el juego.
                        </span>
                    </div>

                    <div className="container min-h-screen p-6 mx-auto mt-1 bg-white">
                        <div className="flex flex-col items-start justify-between mb-6 md:flex-row md:items-center">
                            <h3 className="mb-2 text-xl font-semibold text-gray-800 md:text-2xl md:mb-0">
                                {`Partido: ${partidoInfo.equipoLocal} vs ${partidoInfo.equipoVisitante}`}
                            </h3>
                            <div className="text-sm text-gray-600 md:text-right md:ml-6">
                                <div>{`Fecha: ${partidoInfo.FechaPartido}`}</div>
                                <div>{`Hora: ${partidoInfo.HoraPartido}`}</div>
                                <div>{`Lugar: ${partidoInfo.nomLugar}`}</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-between mb-4 space-y-2 md:flex-row md:space-y-0 md:space-x-4">
                            <input
                                type="text"
                                placeholder="Buscar por nombre..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-200"
                            />
                            <div className="flex justify-end space-x-2">
                                <PrimaryButton
                                    onClick={() => handleModal(1)}
                                    className="flex items-center"
                                >
                                    <i className="mr-2 fa-solid fa-plus-circle"></i>
                                    Nuevo Resultado
                                </PrimaryButton>
                                <BackButton to={route("dashboard")} />
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg table-auto">
                                <thead>
                                    <tr className="text-sm leading-normal text-left text-gray-600 uppercase bg-blue-50">
                                        <th className="px-4 py-3 border-b border-gray-200">
                                            Equipo
                                        </th>
                                        <th className="px-4 py-3 border-b border-gray-200">
                                            Jugador
                                        </th>
                                        <th className="px-4 py-3 border-b border-gray-200">
                                            Goles
                                        </th>
                                        <th className="px-4 py-3 border-b border-gray-200">
                                            Tarjetas Amarillas
                                        </th>
                                        <th className="px-4 py-3 border-b border-gray-200">
                                            Tarjetas Rojas
                                        </th>
                                        <th className="px-4 py-3 border-b border-gray-200">
                                            Observaciones
                                        </th>
                                        <th className="px-4 py-3 border-b border-gray-200">
                                            Editar
                                        </th>
                                        <th className="px-4 py-3 border-b border-gray-200">
                                            Eliminar
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {filteredResultados.length > 0 ? (
                                        filteredResultados.map((resultado) => (
                                            <tr
                                                key={resultado.id}
                                                className="transition-colors hover:bg-blue-50"
                                            >
                                                <td className="px-4 py-2 border-b border-gray-200">
                                                    {resultado.nombreEquipo}
                                                </td>
                                                <td className="px-4 py-2 border-b border-gray-200">
                                                    {resultado.nombreCompleto}
                                                </td>
                                                <td className="px-4 py-2 border-b border-gray-200">
                                                    {resultado.goles}
                                                </td>
                                                <td className="px-4 py-2 border-b border-gray-200">
                                                    {
                                                        resultado.tarjetas_amarillas
                                                    }
                                                </td>
                                                <td className="px-4 py-2 border-b border-gray-200">
                                                    {resultado.tarjetas_rojas}
                                                </td>
                                                <td className="px-4 py-2 border-b border-gray-200">
                                                    {resultado.observaciones}
                                                </td>
                                                <td className="px-4 py-2 border-b border-gray-200">
                                                    <button
                                                        className="text-blue-600 hover:text-blue-900 focus:outline-none"
                                                        onClick={() =>
                                                            handleModal(
                                                                2,
                                                                resultado.id,
                                                                resultado.fk_jugador_id,
                                                                resultado.goles,
                                                                resultado.tarjetas_amarillas,
                                                                resultado.tarjetas_rojas,
                                                                resultado.observaciones
                                                            )
                                                        }
                                                    >
                                                        <i className="fa-solid fa-edit"></i>
                                                    </button>
                                                </td>
                                                <td className="px-4 py-2 border-b border-gray-200">
                                                    <button
                                                        className="text-red-600 hover:text-red-900 focus:outline-none"
                                                        onClick={() =>
                                                            deleteResult(
                                                                resultado.id
                                                            )
                                                        }
                                                    >
                                                        <i className="fa-solid fa-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="8"
                                                className="px-4 py-4 text-center border-b border-gray-200"
                                            >
                                                No hay resultados
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 overflow-x-auto">
                            <table className="min-w-full overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg table-auto">
                                <thead>
                                    <tr className="text-sm leading-normal text-left text-gray-600 uppercase bg-blue-50">
                                        <th className="px-4 py-3 border-b border-gray-200">
                                            Equipo
                                        </th>
                                        <th className="px-4 py-3 border-b border-gray-200">
                                            Total de Goles
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {Object.entries(totalGolesPorEquipo).map(
                                        ([equipo, goles]) => (
                                            <tr
                                                key={equipo}
                                                className="transition-colors hover:bg-blue-50"
                                            >
                                                <td className="px-4 py-2 border-b border-gray-200">
                                                    {equipo}
                                                </td>
                                                <td className="px-4 py-2 border-b border-gray-200">
                                                    {goles > 0
                                                        ? goles
                                                        : "0 (Ningún gol anotado)"}
                                                </td>
                                            </tr>
                                        )
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
                            <input
                                type="text"
                                value={data.fk_programaciones_faces_id}
                                name="fk_programaciones_faces_id"
                                readOnly
                                hidden
                            />

                            <SelectField
                                label={
                                    <>
                                        <span>Jugador</span>
                                        <span className="text-red-500">*</span>
                                    </>
                                }
                                id="fk_jugador_id"
                                ref={fk_jugador_idSelect}
                                name="fk_jugador_id"
                                value={data.fk_jugador_id}
                                onChange={handleInputChange}
                                errorMessage={errors.fk_jugador_id}
                                options={jugadoresOptions}
                            />
                            <FormField
                                label="Goles"
                                id="goles"
                                type="number"
                                name="goles"
                                ref={golesInput}
                                placeholder="Goles"
                                value={data.goles}
                                onChange={handleInputChange}
                                errorMessage={errors.goles}
                            />
                            <FormField
                                label="Tarjetas Amarillas"
                                id="tarjetas_amarillas"
                                type="number"
                                name="tarjetas_amarillas"
                                ref={tarjetas_amarillasInput}
                                placeholder="Tarjetas Amarillas"
                                value={data.tarjetas_amarillas}
                                onChange={handleInputChange}
                                errorMessage={errors.tarjetas_amarillas}
                            />
                            <FormField
                                label="Tarjetas Rojas"
                                id="tarjetas_rojas"
                                type="number"
                                name="tarjetas_rojas"
                                ref={tarjetas_rojasInput}
                                placeholder="Tarjetas Rojas"
                                value={data.tarjetas_rojas}
                                onChange={handleInputChange}
                                errorMessage={errors.tarjetas_rojas}
                            />
                            <Textarea2
                                label="Observaciones"
                                type="text"
                                ref={observacionesText}
                                name="observaciones"
                                value={data.observaciones}
                                onChange={handleInputChange}
                                errorMessage={errors.observaciones}
                            />
                            <div className="mt-6">
                                <PrimaryButton
                                    processing={processing ? "true" : "false"}
                                    className="mt-2"
                                >
                                    <i className="fa-solid fa-save">
                                        {processing
                                            ? " Procesando..."
                                            : " Guardar"}
                                    </i>
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
        </AuthenticatedLayout>
    );
}
