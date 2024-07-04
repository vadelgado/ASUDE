import { useRef, useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FormField from "@/Components/FormField";
import SelectField from "@/Components/SelectField";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import ImgField from "@/Components/ImgField";
import SecondaryButton from "@/Components/SecondaryButton";
import WarningButton from "@/Components/WarningButton";

export default function Index({
    auth,
    cuerposTecnicos,
    equipo_id,
    equipo,
    userRole,
}) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const fk_equipoInput = useRef();
    const fotoCuerpoTecnicoInput = useRef();
    const cargoInput = useRef();
    const nombreCompletoInput = useRef();
    const tipoIdentificacionInput = useRef();
    const numeroIdentificacionInput = useRef();
    const telefonoFijoInput = useRef();
    const telefonoCelularInput = useRef();
    const correoElectronicoInput = useRef();

    const InitialValues = {
        id: "",
        fk_equipo: equipo_id,
        fotoCuerpoTecnico: "",
        cargo: "",
        nombreCompleto: "",
        tipoIdentificacion: "",
        numeroIdentificacion: "",
        telefonoFijo: "",
        telefonoCelular: "",
        correoElectronico: "",
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

    const handleInputChangeMayus = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value.toUpperCase(),
        }));
    };

    const handleFileChange = (e) => {
        setData("fotoCuerpoTecnico", e.target.files[0]);
    };

    const handleInputChangeFirst = (event) => {
        const { name, value } = event.target;
        const valueWithCapitalLetters = value
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        setData((prevData) => ({
            ...prevData,
            [name]: valueWithCapitalLetters,
        }));
    };

    const openModal = (
        op,
        id,
        fk_equipo,
        fotoCuerpoTecnico,
        cargo,
        nombreCompleto,
        tipoIdentificacion,
        numeroIdentificacion,
        telefonoFijo,
        telefonoCelular,
        correoElectronico
    ) => {
        setModal(true);
        setOperation(op);

        if (op === 1) {
            setTitle("Crear Cuerpo Técnico");
            setData(InitialValues);
        } else {
            setTitle("Editar Cuerpo Técnico");
            setData({
                id: id,
                fk_equipo: fk_equipo,
                fotoCuerpoTecnico: fotoCuerpoTecnico,
                cargo: cargo,
                nombreCompleto: nombreCompleto,
                tipoIdentificacion: tipoIdentificacion,
                numeroIdentificacion: numeroIdentificacion,
                telefonoFijo: telefonoFijo,
                telefonoCelular: telefonoCelular,
                correoElectronico: correoElectronico,
            });
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    const ok = (message) => {
        closeModal();
        Swal.fire({
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500,
        }).then(() => {
            setData(InitialValues);
        });
    };

    const save = (e) => {
        e.preventDefault();
        if (operation === 1) {
            post(
                userRole === "admin"
                    ? route("cuerpoTecnicoAdmin.store")
                    : route("cuerpoTecnico.store"),
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        ok("Cuerpo Técnico creado correctamente");
                    },
                }
            );
        } else {
            post(
                userRole === "admin"
                    ? route("cuerpoTecnicoAdmin.updatepost", data.id)
                    : route("cuerpoTecnico.updatepost", data.id),
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        ok("Cuerpo Técnico actualizado correctamente");
                    },
                }
            );
        }
    };

    const toggleCuerpoTecnico = (id, nombreCompleto) => {
        Swal.fire({
            title: "Activar/Desactivar Miembro del Cuerpo Técnico",
            text: `¿Está seguro cambiar el estado del Miembro Cuerpo Técnico ${nombreCompleto}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                post(
                    userRole === "admin"
                        ? route("cuerpoTecnicoAdmin.toggle", id)
                        : route("cuerpoTecnico.toggle", id),
                    {
                        preserveScroll: true,
                        onSuccess: () => {
                            ok(
                                "El miembro del Cuerpo Técnico ha cambiado de estado correctamente"
                            );
                        },
                        onError: () => {
                            Swal.fire({
                                title: "Error",
                                text: "El miembro del Cuerpo Técnico no ha sido actualizado",
                                icon: "error",
                            });
                        },
                    }
                );
            }
        });
    };

    const eliminar = (id, nombreCompleto) => {
        Swal.fire({
            title: "Eliminar Miembro del Cuerpo Técnico",
            text: `¿Está seguro de eliminar el Miembro del Cuerpo Técnico ${nombreCompleto}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("cuerpoTecnico.destroy", id), {
                    preserveScroll: true,
                    onSuccess: () => {
                        ok(
                            "El miembro del Cuerpo Técnico ha sido eliminado correctamente"
                        );
                    },
                    onError: () => {
                        Swal.fire({
                            title: "Error",
                            text: "El miembro del Cuerpo Técnico no ha sido eliminado",
                            icon: "error",
                        });
                    },
                });
            }
        });
    };

    const handletipoDocIdentidad = [
        { value: "", label: "Seleccione ...", disabled: true },
        { value: "CC", label: "Cédula de Ciudadanía" },
        { value: "CE", label: "Cédula de Extranjería" },
        { value: "TI", label: "Tarjeta de Identidad" },
        { value: "PA", label: "Pasaporte" },
    ];

    const handlecargo = [
        { value: "", label: "Seleccione ...", disabled: true },
        { value: "D.L.", label: "Director Logístico o Delegado" },
        { value: "D.T.", label: "Director Técnico (Entrenador Principal)" },
        { value: "A.T.", label: "Asistente Técnico" },
        { value: "P.F.", label: "Preparador Físico" },
        { value: "P.S.", label: "Preparador Salud" },
        { value: "U.T.", label: "Utilero" },
        { value: "T.N.", label: "Tribuna" },
    ];
    const cargos = {
        "D.L.": "Director Logístico o Delegado",
        "D.T.": "Director Técnico (Entrenador Principal)",
        "A.T.": "Asistente Técnico",
        "P.F.": "Preparador Físico",
        "P.S.": "Preparador Salud",
        "U.T.": "Utilero",
        "T.N.": "Tribuna",
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    ⚽ Cuerpo Técnico 👦👧
                </h2>
            }
        >
            <Head title="⚽ Cuerpo Técnico 👦👧" />

            <div className="py-6">
                <div className="container p-6 mx-auto overflow-x-auto bg-white rounded-lg shadow-md">
                    <div className="flex justify-end mt-1 mb-4">
                        <PrimaryButton onClick={() => openModal(1)}>
                            <i className="mr-2 fa-solid fa-plus-circle"></i>
                            Agregar Miembro
                        </PrimaryButton>
                    </div>

                    <div className="w-full mt-2 text-left">
                        <span className="italic font-bold">
                            NOMBRE EQUIPO:{" "}
                        </span>
                        <span>{equipo}</span>
                    </div>

                    <table className="w-full mt-4 border border-gray-400 table-auto">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-2 py-2">N°</th>
                                <th className="px-2 py-2">
                                    NOMBRES Y APELLIDOS
                                </th>
                                <th className="px-2 py-2">FOTO</th>
                                <th className="px-2 py-2">CARGO</th>
                                <th className="px-2 py-2">TIPO DOC</th>
                                <th className="px-2 py-2"># DOC</th>
                                <th className="px-2 py-2">TELÉFONO CELULAR</th>
                                <th className="px-2 py-2">
                                    CORREO ELECTRÓNICO
                                </th>
                                <th className="px-2 py-2">ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cuerposTecnicos.length > 0 ? (
                                cuerposTecnicos.map((cuerpoTecnico, i) => (
                                    <tr key={cuerpoTecnico.id}>
                                        <td className="px-2 py-2 border">
                                            {i + 1}
                                        </td>
                                        <td className="px-2 py-2 border">
                                            {cuerpoTecnico.nombreCompleto}
                                        </td>
                                        <td className="flex items-center justify-center px-2 py-2 border">
                                            <img
                                                src={`/storage/${cuerpoTecnico.fotoCuerpoTecnico}`}
                                                alt={
                                                    cuerpoTecnico.nombreCompleto
                                                }
                                                className="object-cover w-16 h-16 border rounded-full"
                                            />
                                        </td>
                                        <td className="px-2 py-2 border">
                                        {cargos[cuerpoTecnico.cargo]}
                                        </td>
                                        <td className="px-2 py-2 border">
                                            {cuerpoTecnico.tipoIdentificacion}
                                        </td>
                                        <td className="px-2 py-2 border">
                                            {cuerpoTecnico.numeroIdentificacion}
                                        </td>
                                        <td className="px-2 py-2 border">
                                            {cuerpoTecnico.telefonoCelular}
                                        </td>
                                        <td className="px-2 py-2 border">
                                            {cuerpoTecnico.correoElectronico}
                                        </td>
                                        <td className="px-2 py-2 space-x-2 border">
                                            <WarningButton
                                                onClick={() =>
                                                    openModal(
                                                        2,
                                                        cuerpoTecnico.id,
                                                        cuerpoTecnico.fk_equipo,
                                                        cuerpoTecnico.fotoCuerpoTecnico,
                                                        cuerpoTecnico.cargo,
                                                        cuerpoTecnico.nombreCompleto,
                                                        cuerpoTecnico.tipoIdentificacion,
                                                        cuerpoTecnico.numeroIdentificacion,
                                                        cuerpoTecnico.telefonoFijo,
                                                        cuerpoTecnico.telefonoCelular,
                                                        cuerpoTecnico.correoElectronico
                                                    )
                                                }
                                            >
                                                <i className="fa-solid fa-pencil"></i>
                                            </WarningButton>
                                            <SecondaryButton
                                                onClick={() =>
                                                    toggleCuerpoTecnico(
                                                        cuerpoTecnico.id,
                                                        cuerpoTecnico.nombreCompleto
                                                    )
                                                }
                                            >
                                                <i className="fa-solid fa-eye"></i>
                                                {cuerpoTecnico.estadoCuerpoTecnico ===
                                                1
                                                    ? "Desactivar"
                                                    : "Activar"}
                                            </SecondaryButton>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="9"
                                        className="px-2 py-2 text-center border"
                                    >
                                        Usted no ha subido ningún Miembro del
                                        Cuerpo Técnico. 👀
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal show={modal} close={closeModal}>
                <h2 className="p-3 text-lg font-medium text-gray-900">
                    {title}
                </h2>
                <form
                    onSubmit={save}
                    className="grid grid-cols-2 gap-4 p-6"
                    encType="multipart/form-data"
                >
                    <FormField
                        htmlFor="nombreCompleto"
                        label="Nombres y Apellidos"
                        id="nombreCompleto"
                        type="text"
                        name="nombreCompleto"
                        value={data.nombreCompleto}
                        onChange={handleInputChangeMayus}
                        errorMessage={errors.nombreCompleto}
                        ref={nombreCompletoInput}
                    />
                    <SelectField
                        htmlFor="cargo"
                        label="Cargo"
                        id="cargo"
                        name="cargo"
                        value={data.cargo}
                        options={handlecargo}
                        onChange={handleInputChange}
                        errorMessage={errors.cargo}
                        ref={cargoInput}
                    />
                    <SelectField
                        htmlFor="tipoIdentificacion"
                        label="Tipo Documento Identidad"
                        id="tipoIdentificacion"
                        name="tipoIdentificacion"
                        value={data.tipoIdentificacion}
                        options={handletipoDocIdentidad}
                        onChange={handleInputChange}
                        errorMessage={errors.tipoIdentificacion}
                        ref={tipoIdentificacionInput}
                    />
                    <FormField
                        htmlFor="numeroIdentificacion"
                        label="Número Documento Identidad"
                        id="numeroIdentificacion"
                        type="number"
                        name="numeroIdentificacion"
                        value={data.numeroIdentificacion}
                        onChange={handleInputChange}
                        errorMessage={errors.numeroIdentificacion}
                        ref={numeroIdentificacionInput}
                    />
                    <FormField
                        htmlFor="telefonoFijo"
                        label="Teléfono Fijo"
                        id="telefonoFijo"
                        type="number"
                        name="telefonoFijo"
                        value={data.telefonoFijo}
                        onChange={handleInputChange}
                        errorMessage={errors.telefonoFijo}
                        ref={telefonoFijoInput}
                    />
                    <FormField
                        htmlFor="telefonoCelular"
                        label="Teléfono Celular"
                        id="telefonoCelular"
                        type="number"
                        name="telefonoCelular"
                        value={data.telefonoCelular}
                        onChange={handleInputChange}
                        errorMessage={errors.telefonoCelular}
                        ref={telefonoCelularInput}
                    />
                    <FormField
                        htmlFor="correoElectronico"
                        label="Correo Electrónico"
                        id="correoElectronico"
                        type="email"
                        name="correoElectronico"
                        value={data.correoElectronico}
                        onChange={handleInputChange}
                        errorMessage={errors.correoElectronico}
                        ref={correoElectronicoInput}
                    />
                    <ImgField
                        htmlFor="fotoCuerpoTecnico"
                        label="Foto Cuerpo Técnico"
                        id="fotoCuerpoTecnico"
                        name="fotoCuerpoTecnico"
                        value={data.fotoCuerpoTecnico}
                        onChange={handleFileChange}
                        errorMessage={errors.fotoCuerpoTecnico}
                        ref={fotoCuerpoTecnicoInput}
                        imageUrl={
                            data.fotoCuerpoTecnico
                                ? `http://127.0.0.1:8000/storage/${data.fotoCuerpoTecnico}`
                                : null
                        }
                    />
                    <div className="flex justify-between col-span-2 mt-1">
                        <PrimaryButton
                            processing={processing.toString()}
                            className="mt-2"
                        >
                            <i className="mr-2 fa-solid fa-save"></i>Guardar
                        </PrimaryButton>
                        <SecondaryButton onClick={closeModal}>
                            Cancelar
                        </SecondaryButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
