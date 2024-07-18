import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import WarningButton from "@/Components/WarningButton";
import DragDrop from "@/Components/DragDrop";

export default function Dashboard({ auth, alumnos }) {
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [title, setTitle] = useState("");
    const [operation, setOperation] = useState(1);
    const [selectedAlumnoId, setSelectedAlumnoId] = useState(null);
    const identificacionInput = useRef();
    const nombresInput = useRef();
    const apellidosInput = useRef();
    const fechaNacimientoInput = useRef();
    const generoInput = useRef();
    const direccionInput = useRef();
    const barrioInput = useRef();
    const celularInput = useRef();
    const sedeEntrenamientoInput = useRef();
    const fk_user = auth.user.id;


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
        identificacion: "",
        nombres: "",
        apellidos: "",
        fecha_nacimiento: "",
        genero: "",
        direccion: "",
        barrio: "",
        celular: "",
        sedeEntrenamiento: "",
        fk_user: fk_user,
        alumno: '',
        fecha: "",
        comprobante: "",
        valor: "",       

    });

    const openModal = (
        op,
        id,
        identificacion,
        nombres,
        apellidos,
        fecha_nacimiento,
        genero,
        direccion,
        barrio,
        celular,
        sedeEntrenamiento,
        fk_user
    ) => {
        setModal(true);
        setOperation(op);

        if (op === 1) {
            setTitle("Agregar Alumno");
            setData({
                id: "",
                identificacion: "",
                nombres: "",
                apellidos: "",
                fecha_nacimiento: "",
                genero: "",
                direccion: "",
                barrio: "",
                celular: "",
                sedeEntrenamiento: "",
                fk_user: fk_user,
            });
        } else {
            setTitle("Editar Alumno");
            setData({
                id: id,
                identificacion: identificacion,
                nombres: nombres,
                apellidos: apellidos,
                fecha_nacimiento: fecha_nacimiento,
                genero: genero,
                direccion: direccion,
                barrio: barrio,
                celular: celular,
                sedeEntrenamiento: sedeEntrenamiento,
                fk_user: fk_user,
            });
        }
    };

    const closeModal = () => {
        setModal(false);
    };

    const save = (e) => {
        e.preventDefault();
        if (operation === 1) {
            post(route("alumno.store"), {
                onSuccess: () => {
                    ok("Alumno Agregado");
                },
                onError: () => {
                    if (errors?.identificacion) {
                        reset("identificacion");
                        identificacionInput.current.focus();
                    }
                    if (errors?.nombres) {
                        reset("nombres");
                        nombresInput.current.focus();
                    }
                    if (errors?.apellidos) {
                        reset("apellidos");
                        apellidosInput.current.focus();
                    }
                    if (errors?.fecha_nacimiento) {
                        reset("fecha_nacimiento");
                        fechaNacimientoInput.current.focus();
                    }
                    if (errors?.genero) {
                        reset("genero");
                        generoInput.current.focus();
                    }
                    if (errors?.direccion) {
                        reset("direccion");
                        direccionInput.current.focus();
                    }
                    if (errors?.barrio) {
                        reset("barrio");
                        barrioInput.current.focus();
                    }
                    if (errors?.celular) {
                        reset("celular");
                        celularInput.current.focus();
                    }
                    if (errors?.sedeEntrenamiento) {
                        reset("sedeEntrenamiento");
                        sedeEntrenamientoInput.current.focus();
                    }
                },
            });
        } else {
            put(route("alumno.update", { alumno: data.id }), {
                onSuccess: () => {
                    ok("Alumno Actualizado");
                },
                onError: () => {
                    if (errors?.identificacion) {
                        reset("identificacion");
                        identificacionInput.current.focus();
                    }
                    if (errors?.nombres) {
                        reset("nombres");
                        nombresInput.current.focus();
                    }
                    if (errors?.apellidos) {
                        reset("apellidos");
                        apellidosInput.current.focus();
                    }
                    if (errors?.fecha_nacimiento) {
                        reset("fecha_nacimiento");
                        fechaNacimientoInput.current.focus();
                    }
                    if (errors?.genero) {
                        reset("genero");
                        generoInput.current.focus();
                    }
                    if (errors?.direccion) {
                        reset("direccion");
                        direccionInput.current.focus();
                    }
                    if (errors?.barrio) {
                        reset("barrio");
                        barrioInput.current.focus();
                    }
                    if (errors?.celular) {
                        reset("celular");
                        celularInput.current.focus();
                    }
                    if (errors?.sedeEntrenamiento) {
                        reset("sedeEntrenamiento");
                        sedeEntrenamientoInput.current.focus();
                    }
                },
            });
        }
    };

    const ok = (mensaje) => {
        reset();
        closeModal();
        Swal.fire({ title: mensaje, icon: "success" });
    };
//Modal para Pago

    const openModalPago = (
        op,
        id,
        fk_user,       
        fecha,
        comprobante,
        valor,
    ) => {
        setModal2(true);
        setOperation(op);
        setSelectedAlumnoId(id);

        if (op === 1) {
            setTitle("Agregar Pago");
            setData({
                fk_user: fk_user,
                alumno: id,
                fecha: fecha,
                comprobante: comprobante,
                valor: valor,
        });
        };
    };

    const closeModal2 = () => {
        setModal2(false);
        setSelectedAlumnoId(null);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Alumnos
                </h2>
            }
        >
            <Head title="Alumnos" />

            <div className="grid py-6 mt-6 overflow-x-auto bg-white v-screen place-items-center">
                <div className="flex justify-end mt-1 mb-1">
                    <PrimaryButton onClick={() => openModal(1)}>
                        <i className="fa-solid fa-plus-circle" style={{ marginRight: '10px' }}></i>
                        Agregar
                    </PrimaryButton>
                </div>

                <div className="grid py-6 bg-white v-screen place-items-center">
                    <table className="table border border-gray-400 rounded-t-lg rounded-bl-lg rounded-br-lg table-auto">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-2 py-2">#</th>
                                <th className="px-2 py-2">Identificación</th>
                                <th className="px-2 py-2">Nombres</th>
                                <th className="px-2 py-2">Apellidos</th>
                                <th className="px-2 py-2">
                                    Fecha de Nacimiento
                                </th>
                                <th className="px-2 py-2">Género</th>
                                <th className="px-2 py-2">Dirección</th>
                                <th className="px-2 py-2">Barrio</th>
                                <th className="px-2 py-2">Celular</th>
                                <th className="px-2 py-2">Sede</th>
                                <th className="px-2 py-2"></th>
                                <th className="px-2 py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {alumnos.length > 0 ? (
                                alumnos.map((alumno, i) => (
                                    <tr key={alumno.id}>
                                        <td className="px-4 py-2 border border-gray-400">
                                            {i + 1}
                                        </td>
                                        <td className="px-2 py-2 border border-gray-400">
                                            {alumno.identificacion}
                                        </td>
                                        <td className="px-2 py-2 border border-gray-400">
                                            {alumno.nombres}
                                        </td>
                                        <td className="px-2 py-2 border border-gray-400">
                                            {alumno.apellidos}
                                        </td>
                                        <td className="px-2 py-2 border border-gray-400">
                                            {alumno.fecha_nacimiento}
                                        </td>
                                        <td className="px-2 py-2 border border-gray-400">
                                            {alumno.genero === "M"
                                                ? "Masculino"
                                                : "Femenino"}
                                        </td>
                                        <td className="px-2 py-2 border border-gray-400">
                                            {alumno.direccion}
                                        </td>
                                        <td className="px-2 py-2 border border-gray-400">
                                            {alumno.barrio}
                                        </td>
                                        <td className="px-2 py-2 border border-gray-400">
                                            {alumno.celular}
                                        </td>
                                        <td className="px-2 py-2 border border-gray-400">
                                            {alumno.sedeEntrenamiento}
                                        </td>
                                        <td className="px-2 py-2 border border-gray-400">
                                            <WarningButton
                                                onClick={() =>
                                                    openModal(
                                                        2,
                                                        alumno.id,
                                                        alumno.identificacion,
                                                        alumno.nombres,
                                                        alumno.apellidos,
                                                        alumno.fecha_nacimiento,
                                                        alumno.genero,
                                                        alumno.direccion,
                                                        alumno.barrio,
                                                        alumno.celular,
                                                        alumno.sedeEntrenamiento
                                                    )
                                                }
                                            >
                                                <i className="fa-solid fa-edit"></i>
                                            </WarningButton>
                                        </td>
                                        <td className="px-2 py-2 border border-gray-400">
                                            <SecondaryButton className="bg-green-500"
                                                onClick={() =>
                                                    openModalPago(
                                                        1,
                                                        alumno.id,
                                                        alumno.identificacion,
                                                    )
                                                }
                                            >
                                                
                                                <i  className="text-white fa-solid fa-money-bill"></i>
                                            </SecondaryButton>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="11" className="text-center">
                                        Favor Registrar estudiante Futuras
                                        Estrellas
                                    </td>
                                </tr>
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
                    <div className="mt-1">
                        
                        <InputLabel htmlFor="identificacion" value="Identificación"></InputLabel>
                        <TextInput
                            id="identificacion"
                            name="identificacion"
                            ref={identificacionInput}
                            value={data.identificacion}
                            type="number"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    identificacion: e.target.value,
                                })
                            }
                            className="block w-full mt-1"
                            isFocused
                        ></TextInput>
                        <InputError message={errors?.identificacion} className="mt-2"></InputError>
                    </div>

                    <div className="mt-1">
                        <InputLabel htmlFor="nombres" value="Nombres"></InputLabel>
                        <TextInput
                            id="nombres"
                            name="nombres"
                            ref={nombresInput}
                            value={data.nombres}
                            onChange={(e) =>
                                setData({ ...data, nombres: e.target.value })
                            }
                            className="block w-full mt-1"
                        ></TextInput>
                        <InputError message={errors?.nombres} className="mt-2"></InputError>
                    </div>

                    <div className="mt-1">
                        <InputLabel htmlFor="apellidos" value="Apellidos"></InputLabel>
                        <TextInput
                            id="apellidos"
                            name="apellidos"
                            ref={apellidosInput}
                            value={data.apellidos}
                            onChange={(e) =>
                                setData({ ...data, apellidos: e.target.value })
                            }
                            className="block w-full mt-1"
                        ></TextInput>
                        <InputError message={errors?.apellidos} className="mt-2"></InputError>
                    </div>

                    <div className="mt-1">
                        <InputLabel htmlFor="fecha_nacimiento" value="Fecha de Nacimiento"></InputLabel>
                        <TextInput
                            id="fecha_nacimiento"
                            name="fecha_nacimiento"
                            ref={fechaNacimientoInput}
                            value={data.fecha_nacimiento}
                            type="date"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    fecha_nacimiento: e.target.value,
                                })
                            }
                            className="block w-full mt-1"
                        ></TextInput>
                        <InputError message={errors?.fecha_nacimiento} className="mt-2"></InputError>
                    </div>

                    <div className="mt-1">
                        <InputLabel htmlFor="genero" value="Género"></InputLabel>
                        <select
                            id="genero"
                            name="genero"
                            ref={generoInput}
                            value={data.genero}
                            onChange={(e) =>
                                setData({ ...data, genero: e.target.value })
                            }
                            className="block w-full mt-1"
                        >
                            <option value="" disabled>
                                Selecciones...
                            </option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </select>
                        <InputError message={errors?.genero} className="mt-2"></InputError>
                    </div>

                    <div className="mt-1">
                        <InputLabel htmlFor="direccion" value="Dirección"></InputLabel>
                        <TextInput
                            id="direccion"
                            name="direccion"
                            ref={direccionInput}
                            value={data.direccion}
                            onChange={(e) =>
                                setData({ ...data, direccion: e.target.value })
                            }
                            className="block w-full mt-1"
                        ></TextInput>
                        <InputError message={errors?.direccion} className="mt-2"></InputError>
                    </div>

                    <div className="mt-1">
                        <InputLabel htmlFor="barrio" value="Ciudad y Barrio"></InputLabel>
                        <TextInput
                            id="barrio"
                            name="barrio"
                            ref={barrioInput}
                            value={data.barrio}
                            onChange={(e) =>
                                setData({ ...data, barrio: e.target.value })
                            }
                            className="block w-full mt-1"
                        ></TextInput>
                        <InputError message={errors?.barrio} className="mt-2"></InputError>
                    </div>

                    <div className="mt-1">
                        <InputLabel htmlFor="celular" value="Celular"></InputLabel>
                        <TextInput
                            id="celular"
                            name="celular"
                            ref={celularInput}
                            value={data.celular}
                            type="number"
                            onChange={(e) =>
                                setData({ ...data, celular: e.target.value })
                            }
                            className="block w-full mt-1"
                        ></TextInput>
                        <InputError message={errors?.celular} className="mt-2"></InputError>
                    </div>

                    <div className="mt-1">
                        <InputLabel htmlFor="sedeEntrenamiento" value="Sede de Entrenamiento"></InputLabel>
                        <select
                            id="sedeEntrenamiento"
                            name="sedeEntrenamiento"
                            ref={sedeEntrenamientoInput}
                            value={data.sedeEntrenamiento}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    sedeEntrenamiento: e.target.value,
                                })
                            }
                            className="block w-full mt-1"
                        >
                            <option value="" disabled>
                                Selecciones...
                            </option>
                            <option value="Ipiales">Ipiales</option>
                            <option value="Pupiales">Pupiales</option>
                            <option value="Chiles">Chiles</option>
                            <option value="Guachucal">Guachucal</option>
                            <option value="Puerres">Puerres</option>
                            <option value="Laguna de Bacca">Laguna de Bacca</option>
                            <option value="Gran Cumbal">Gran Cumbal</option>
                        </select>
                        <InputError message={errors?.sedeEntrenamiento} className="mt-2"></InputError>
                    </div>

                    <div className="mt-1">
                        <PrimaryButton processing={processing.toString()} className="mt-2">
                            <i className="fa-solid fa-save"></i>Guardar
                        </PrimaryButton>
                    </div>
                    <div className="flex justify-end mt-6">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
                    </div>
                </form>
            </Modal>

            <Modal show={modal2} onClose={closeModal2}>
                <h2 className="p-3 text-lg font-medium text-gray-900">{title}</h2>
                <div className="p-6">
                        
                    <DragDrop fk_user={fk_user} alumnoId={selectedAlumnoId} ></DragDrop>


                    <div className="flex justify-end mt-6">
                        <SecondaryButton onClick={closeModal2}>Cerrar</SecondaryButton>
                    </div>
                </div>
            </Modal>
            
        </AuthenticatedLayout>
    );
}
