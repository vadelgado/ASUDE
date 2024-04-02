import { useRef, useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DangerButton from "@/Components/DangerButton";
import FormField from "@/Components/FormField";
import ImgField from "@/Components/ImgField";
import SelectField from "@/Components/SelectField";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import WarningButton from "@/Components/WarningButton";

export default function Index({ auth, equipos, categorias, torneos, userRole }) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState("");
    const nombreEquipoInput = useRef();
    const fk_categoria_equipoInput = useRef();
    const escudoEquipoInput = useRef();
    const numeroWhatsAppInput = useRef();
    const correoElectronicoInput = useRef();
    const fk_torneoInput = useRef();

    const InitialValues = {
        id: "",
        nombreEquipo: "",
        fk_categoria_equipo: "",
        escudoEquipo: null,
        numeroWhatsapp: "",
        correoElectronico: "",
        fk_user: auth.user.id,
        fk_torneo: "",
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
        fk_user,
        fk_torneo
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
                fk_torneo: fk_torneo,
            });
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    const save = (e) => {
        e.preventDefault();
    
        let routeAction = 'store';
        let message = 'El equipo ha sido guardado.';
    
        if (operation !== 1) {
            routeAction = 'update';
            message = 'El equipo ha sido actualizado.';
        }
    
        let routeBase = 'equipos';
        if (userRole === 'equipo') {
            routeBase = 'equiposInvitados';
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
            }
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
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    ⚽ Equipos 🥅
                </h2>
            }
        >
            {/* Head y otras importaciones... */}
            <Head title="⚽ Equipos 🥅" />
            <div className="bg-white grid v-screen place-items-center py-6 overflow-x-auto">
                <div className="mt-1 mb-1 flex justify-end">
                    <PrimaryButton onClick={() => openModal(1)}>
                        <i
                            className="fa-solid fa-plus-circle"
                            style={{ marginRight: "10px" }}
                        ></i>
                        Agregar
                    </PrimaryButton>
                </div>
                <div className="bg-white grid v-screen place-items-center py-6">
                    <table className="table table-auto border border-gray-400 rounded-t-lg rounded-br-lg rounded-bl-lg">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-2 py-2">No.</th>
                                <th className="px-2 py-2">Nombre del Equipo</th>
                                <th className="px-2 py-2">Categoría</th>
                                <th className="px-2 py-2">Escudo del Equipo</th>
                                <th className="px-2 py-2">
                                    Número de WhatsApp
                                </th>
                                <th className="px-2 py-2">
                                    Correo Electrónico
                                </th>
                                <th className="px-2 py-2">Torneo</th>
                                <th className="px-2 py-2">Editar</th>
                                <th className="px-2 py-2">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {equipos.length > 0 ? (
                                equipos.map((equipo, index) => (
                                    <tr key={equipo.id}>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {index + 1}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {equipo.nombreEquipo}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {equipo.descripcion}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            <img
                                                src={`/storage/${equipo.escudoEquipo}`}
                                                alt={equipo.nombreEquipo}
                                                height={100}
                                                width={100}
                                            />
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {equipo.numeroWhatsapp}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {equipo.correoElectronico}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {equipo.nombreTorneo}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            <WarningButton
                                                onClick={() =>
                                                    openModal(
                                                        2,
                                                        equipo.id,
                                                        equipo.nombreEquipo,
                                                        equipo.fk_categoria_equipo,
                                                        equipo.escudoEquipo,
                                                        equipo.numeroWhatsapp,
                                                        equipo.correoElectronico,
                                                        equipo.fk_user,
                                                        equipo.fk_torneo
                                                    )
                                                }
                                            >
                                                <i className="fa-solid fa-edit"></i>
                                            </WarningButton>
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            <DangerButton
                                                onClick={() =>
                                                    eliminar(
                                                        equipo.id,
                                                        equipo.nombreEquipo
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
                                    <td colSpan="11" className="text-center">
                                        Usted no ha subido ningún Equipo. 👀
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal show={modal} onClose={closeModal}>
                <h2 className="p-3 text-lg font-medium text-gray-900">
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

                    <SelectField
                        htmlFor="fk_torneo"
                        label="Torneo"
                        id="fk_torneo"
                        ref={fk_torneoInput}
                        name="fk_torneo"
                        value={data.fk_torneo}
                        onChange={handleInputChange}
                        errorMessage={errors.fk_torneo}
                        options={handletorneos}
                    />

                    <div className="mt-1">
                        <PrimaryButton
                            processing={processing.toString()}
                            className="mt-2"
                        >
                            <i className="fa-solid fa-save"></i>Guardar
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
