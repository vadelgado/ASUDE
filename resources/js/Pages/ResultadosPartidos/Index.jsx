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

export default function ResultadosPartidos({
    auth,
    jugadores,    
    idPartido,
    resultados
}) {
    //console.log('idPartido:', idPartido[0].id);
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
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
        ...jugadores.map((jugador) => ({
            value: jugador.id,
            label: `${jugador.nombreCompleto} - ${jugador.nombreEquipo}`,
        })),
    ];

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="grid bg-white v-screen place-items-center">
                <div className="flex justify-end mt-2 mb-3">
                    <PrimaryButton onClick={() => handleModal(1)}>
                        <i className="fa-solid fa-plus-circle"> Añadir Resultado</i>
                    </PrimaryButton>
                </div>
            </div>

            <div className="grid py-6 bg-white v-screen place-items-center">
            <table className="border-gray-400 table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">Equipo</th>
                        <th className="px-4 py-2 border">Jugador</th>
                        <th className="px-4 py-2 border">Goles</th>
                        <th className="px-4 py-2 border">Tarjetas Amarillas</th>
                        <th className="px-4 py-2 border">Tarjetas Rojas</th>
                        <th className="px-4 py-2 border">Observaciones</th>
                        <th className="px-4 py-2 border">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {resultados.length > 0 ? (
                        resultados.map((resultado) => (
                            <tr key={resultado.id}>
                                 <td className="px-4 py-2 border">{resultado.nombreEquipo}</td>
                            <td className="px-4 py-2 border">{resultado.nombreCompleto}</td>
                            <td className="px-4 py-2 border">{resultado.goles}</td>
                            <td className="px-4 py-2 border">{resultado.tarjetas_amarillas}</td>
                            <td className="px-4 py-2 border">{resultado.tarjetas_rojas}</td>
                            <td className="px-4 py-2 border">{resultado.observaciones}</td>
                            <td className="px-4 py-2 border">
                                <PrimaryButton onClick={() => handleModal(2, resultado.id, resultado.fk_jugador_id, resultado.goles, resultado.tarjetas_amarillas, resultado.tarjetas_rojas, resultado.observaciones)}>
                                    <i className="fa-solid fa-edit"></i>
                                </PrimaryButton>
                                <DangerButton onClick={() => deleteResult(resultado.id)}>
                                    <i className="fa-solid fa-trash"></i>
                                </DangerButton>
                            </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="px-4 py-2 text-center border">
                                No hay resultados
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>

            </div>

            <Modal show={modal} onClose={closeModal}>
                <h2 className="text-lg font-medium text-gray-900">{title}</h2>
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
                                {processing ? " Procesando..." : " Guardar"}
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
        </AuthenticatedLayout>
    );
}
