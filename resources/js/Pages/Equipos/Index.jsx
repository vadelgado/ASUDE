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

export default function Index({
    auth,
    equipos,
    categorias,
    torneos,
    userRole,
}) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState("");
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
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    ⚽ Equipos 🥅
                </h2>
            }
        >
            {/* Head y otras importaciones... */}
            <Head title="⚽ Equipos 🥅" />
            <div className="grid py-6 overflow-x-auto bg-white v-screen place-items-center">
                <div className="flex justify-end mt-1 mb-1">
                    <PrimaryButton onClick={() => openModal(1)}>
                        <i
                            className="fa-solid fa-plus-circle"
                            style={{ marginRight: "10px" }}
                        ></i>
                        Agregar
                    </PrimaryButton>
                </div>
                <div className="grid py-6 bg-white v-screen place-items-center">
                    <table className="table border border-gray-400 rounded-t-lg rounded-bl-lg rounded-br-lg table-auto">
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
                                <th className="px-2 py-2">Preinscribir</th>
                                <th className="px-2 py-2">Editar</th>
                                <th className="px-2 py-2">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {equipos.length > 0 ? (
                                equipos.map((equipo, index) => (
                                    <tr key={equipo.id}>
                                        <td className="px-4 py-2 border border-gray-400">
                                            {index + 1}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-400">
                                            {equipo.nombreEquipo}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-400">
                                            {equipo.descripcion}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-400">
                                            <img
                                                src={`/storage/${equipo.escudoEquipo}`}
                                                alt={equipo.nombreEquipo}
                                                height={100}
                                                width={100}
                                            />
                                        </td>
                                        <td className="px-4 py-2 border border-gray-400">
                                            {equipo.numeroWhatsapp}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-400">
                                            {equipo.correoElectronico}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-400">
                                            {userRole === "admin" && (
                                                <a
                                                    className="text-white bg-[#5d1df2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
                                                    href={`/inscripciones?equipo_id=${equipo.id}`}
                                                >
                                                    <i
                                                        className="fa-solid fa-book"
                                                        style={{
                                                            marginRight: "5px",
                                                        }}
                                                    >
                                                        {" "}
                                                        Torneos
                                                    </i>
                                                </a>
                                            )}
                                            {userRole === "equipo" && (
                                                <a
                                                    className="text-white bg-[#5d1df2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
                                                    href={`/inscripcionesEquipo?equipo_id=${equipo.id}`}
                                                >
                                                    <i
                                                        className="fa-solid fa-book"
                                                        style={{
                                                            marginRight: "5px",
                                                        }}
                                                    >
                                                        {" "}
                                                        Torneos
                                                    </i>
                                                </a>
                                            )}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-400">
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
                                                        equipo.fk_user
                                                    )
                                                }
                                            >
                                                <i className="fa-solid fa-edit"></i>
                                            </WarningButton>
                                        </td>
                                        <td className="px-4 py-2 border border-gray-400">
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
                                        <td className="px-4 py-2 border border-gray-400">
                                            <a
                                                href={
                                                    userRole === "admin"
                                                        ? `/jugadoresAdmin?equipo_id=${equipo.id}`
                                                        : `/jugadores?equipo_id=${equipo.id}`
                                                }
                                                className="text-blue-600 hover:text-blue-900"
                                            >
                                                <i className="fa-solid fa-users"></i>
                                            </a>
                                        </td>
                                        <td className="px-4 py-2 border border-gray-400">
                                            <a
                                                href={
                                                    userRole === "admin"
                                                        ? `/cuerpoTecnicoAdmin?equipo_id=${equipo.id}`
                                                        : `/cuerpoTecnico?equipo_id=${equipo.id}`
                                                }
                                                className="text-blue-600 hover:text-blue-900"
                                            >
                                                <i className="fa-solid fa-person-chalkboard"></i>
                                            </a>
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
            
                    <div className="mt-1">
                        <PrimaryButton
                            processing={processing.toString()}
                            className="mt-2"
                        >
                            <i className="fa-solid fa-save"></i>Guardar
                        </PrimaryButton>
                    </div>
            
                    <div className="flex justify-end mt-6">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
