import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DangerButton from "@/Components/DangerButton";
import FormField from "@/Components/FormField";
import ImgField from "@/Components/ImgField";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import WarningButton from "@/Components/WarningButton";

export default function Dashboard({ auth, lugarPartidos,torneo }) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
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

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Lugares Partidos para el torneo {torneo[0].nombreTorneo} del {torneo[0].fechaInicio} al {torneo[0].fechaFin}
                </h2>
            }
        >
            <Head title="Lugar Partido" />

            <div className="bg-white grid v-screen place-items-center">
                <div className="mt-2 mb-3 flex justify-end">
                    <PrimaryButton onClick={() => handleModal(1)}>
                        <i className="fa-solid fa-plus-circle"></i>
                        Añadir Lugar
                    </PrimaryButton>
                </div>
            </div>
            <div className="bg-white grid v-screen place-items-center py-6">
                <table className="table-auto border-gray-400">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-2 py-2">#</th>
                            <th className="px-2 py-2">Nombre</th>
                            <th className="px-2 py-2">Geolocalizacion</th>
                            <th className="px-2 py-2">Dirección</th>
                            <th className="px-2 py-2">Foto lugar</th>
                            <th className="px-2 py-2"></th>
                            <th className="px-2 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {lugarPartidos.length > 0 ? (
                            lugarPartidos.map((lugarPartido, i) => (
                                <tr key={lugarPartido.id}>
                                    <td className="border border-gray-400 px-4 py-2">
                                        {i + 1}
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        {lugarPartido.nomLugar}
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        <a
                                            href={lugarPartido.geolocalizacion}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Ver en Google Maps
                                        </a>
                                    </td>

                                    <td className="border border-gray-400 px-4 py-2">
                                        {lugarPartido.direccion}
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        <img
                                            src={`/storage/${lugarPartido.fotoLugar}`}
                                            alt={lugarPartido.nomLugar}
                                            className="w-16 h-16 rounded-full"
                                        />
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        <WarningButton
                                            onClick={() =>
                                                handleModal(
                                                    2,
                                                    lugarPartido.id,
                                                    lugarPartido.nomLugar,
                                                    lugarPartido.geolocalizacion,
                                                    lugarPartido.direccion,
                                                    lugarPartido.fotoLugar,
                                                    lugarPartido.fk_torneo
                                                )
                                            }
                                        >
                                            <i className="fa-solid fa-pencil"></i>
                                        </WarningButton>
                                    </td>
                                    <td className="border border-gray-400 px-4 py-2">
                                        <DangerButton
                                            onClick={() =>
                                                eliminar(
                                                    lugarPartido.id,
                                                    lugarPartido.nomLugar
                                                )
                                            }
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </DangerButton>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="7"
                                    className="border px-4 py-2 text-center"
                                >
                                    No hay lugar partidos
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
                    value={data.fk_torneo}
                    name="fk_torneo"
                    hidden
                    readonly                    
                    />

                    <FormField
                        htmlFor="nomLugar"
                        label="Nombre"
                        id="nomLugar"
                        type="text"
                        name="nomLugar"
                        ref={NomLugarInput}
                        placeholder={"Nombre del lugar"}
                        value={data.nomLugar}
                        onChange={handleInputChange}
                        errorMessage={errors.nomLugar}
                    />

                    <FormField
                        htmlFor="geolocalizacion"
                        label="Geolocalizacion"
                        id="geolocalizacion"
                        type="text"
                        name="geolocalizacion"
                        ref={GeolocalizacionInput}
                        placeholder={"Geolocalizacion"}
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
                        placeholder={"Dirección"}
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
                        value={data.fotoLugar}
                        errorMessage={errors.fotoLugar}
                        imageUrl={
                            data.fotoLugar
                                ? `http://127.0.0.1:8000/storage/${data.fotoLugar}`
                                : null
                        }
                    />

                    <div className="mt-6">
                        <PrimaryButton
                            processing={processing ? "true" : "false"}
                            className="mt-2"
                        >
                            <i className="fa-solid fa-save">
                                {processing ? "Procesando..." : "Guardar"}
                            </i>
                        </PrimaryButton>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
