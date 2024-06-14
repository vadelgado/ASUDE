import { useState } from "react";
import { useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DangerButton from "@/Components/DangerButton";
import FormField from "@/Components/FormField";
import SelectField from "@/Components/SelectField";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";

export default function ResultadosPartidos({ auth, programaciones, jugadores }) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const [jugadoresData, setJugadoresData] = useState([]);

    // Valores iniciales del formulario.
    const initialValues = {
        fk_programaciones_faces_id: "",
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
        post,
        processing,
    } = useForm(initialValues);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedJugadoresData = [...jugadoresData];
        updatedJugadoresData[index][name] = value;
        setJugadoresData(updatedJugadoresData);
    };

    const addJugador = () => {
        setJugadoresData([...jugadoresData, { ...initialValues }]);
    };

    const save = (e) => {
        e.preventDefault();
        const validData = jugadoresData.filter(jugador => jugador.goles || jugador.tarjetas_amarillas || jugador.tarjetas_rojas);
        if (validData.length > 0) {
            post(route("resultadosPartidos.store"), {
                data: validData,
                onSuccess: () => {
                    setModal(false);
                    Swal.fire({ title: "Resultados guardados.", icon: "success" });
                },
            });
        } else {
            Swal.fire({ title: "Debe registrar al menos un evento (gol, tarjeta amarilla o roja).", icon: "warning" });
        }
    };

    const jugadoresOptions = [
        { value: "", label: "Seleccione ..." },
        ...jugadores.map(jugador => ({
            value: jugador.id,
            label: `${jugador.nombreCompleto}`,
        })),
    ];

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="py-6">
                <PrimaryButton onClick={() => setModal(true)}>
                    Agregar Resultados
                </PrimaryButton>
            </div>

            <Modal show={modal} onClose={() => setModal(false)}>
                <h2 className="text-lg font-medium text-gray-900">{title}</h2>
                <form onSubmit={save} className="p-6">
                    {jugadoresData.map((jugador, index) => (
                        <div key={index} className="mb-4">
                            <SelectField
                                label="Jugador"
                                name="fk_jugador_id"
                                value={jugador.fk_jugador_id}
                                onChange={(e) => handleInputChange(e, index)}
                                options={jugadoresOptions}
                                errorMessage={errors.fk_jugador_id}
                            />
                            <FormField
                                type="number"
                                label="Goles"
                                name="goles"
                                value={jugador.goles}
                                onChange={(e) => handleInputChange(e, index)}
                                errorMessage={errors.goles}
                            />
                            <FormField
                                type="number"
                                label="Tarjetas Amarillas"
                                name="tarjetas_amarillas"
                                value={jugador.tarjetas_amarillas}
                                onChange={(e) => handleInputChange(e, index)}
                                errorMessage={errors.tarjetas_amarillas}
                            />
                            <FormField
                                type="number"
                                label="Tarjetas Rojas"
                                name="tarjetas_rojas"
                                value={jugador.tarjetas_rojas}
                                onChange={(e) => handleInputChange(e, index)}
                                errorMessage={errors.tarjetas_rojas}
                            />
                            <FormField
                                type="text"
                                label="Observaciones"
                                name="observaciones"
                                value={jugador.observaciones}
                                onChange={(e) => handleInputChange(e, index)}
                                errorMessage={errors.observaciones}
                            />
                        </div>
                    ))}
                    <PrimaryButton onClick={addJugador}>
                        Agregar otro Jugador
                    </PrimaryButton>
                    <div className="flex items-center justify-end mt-4">
                        <SecondaryButton onClick={() => setModal(false)}>
                            Cancelar
                        </SecondaryButton>
                        <PrimaryButton
                            className="ml-4"
                            type="submit"
                            disabled={processing}
                        >
                            Guardar
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
