import { useRef, useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Swal from "sweetalert2";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

//import DangerButton from "@/Components/DangerButton";
//import InputError from "@/Components/InputError";
//import InputLabel from "@/Components/InputLabel";
//import Modal from "@/Components/Modal";
//import SecondaryButton from "@/Components/SecondaryButton";
//import TextInput from "@/Components/TextInput";
//import PrimaryButton from "@/Components/PrimaryButton";
//import WarningButton from "@/Components/WarningButton";

export default function Dashboard({ auth, comprobantes }) { 
    
    
    return (
        <AuthenticatedLayout
            
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Pagos
                </h2>
            }
        >
            <Head title="Pagos" />
            
            <div className="grid py-6 overflow-x-auto bg-white v-screen place-items-center">
                <div className="grid py-6 bg-white v-screen place-items-center">
                    <table className="table border border-gray-400 rounded-t-lg rounded-bl-lg rounded-br-lg table-auto">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-2 py-2">#</th>
                                <th className="px-2 py-2">Identificación Estudiante</th>
                                <th className="px-2 py-2">Nombres</th>
                                <th className="px-2 py-2">Apellidos</th>
                                <th className="px-2 py-2">Fecha</th>
                                <th className="px-2 py-2">Imagen</th>
                                <th className="px-2 py-2">Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comprobantes.length > 0 ? (
                                comprobantes.map((comprobante, i) => (
                                    
                                    <tr key={comprobante.id}>
                                        <td className="px-4 py-2 border border-gray-400">
                                            {i + 1}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-400">
                                            {comprobante.alumno.identificacion}
                                        </td>
                                        <td className="px-2 py-2 border border-gray-400">
                                            {comprobante.alumno.nombres}
                                        </td>
                                        <td className="px-2 py-2 border border-gray-400">
                                            {comprobante.alumno.apellidos}
                                        </td>
                                        <td className="px-2 py-2 border border-gray-400">
                                            {comprobante.fecha}
                                        </td>

                                        <td className="px-2 py-2 border border-gray-400">
                                            <img src={comprobante.secureUrl} alt="Imagen del comprobante" />
                                        </td>
                                        <td className="px-2 py-2 border border-gray-400">
                                            {comprobante.valor.toLocaleString("es-CO", {
                                                style: "currency",
                                                currency: "COP",
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0,
                                            })}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="px-4 py-2 border border-gray-400">
                                    Usted no ha subido ningún comprobante. 👀
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            
        </AuthenticatedLayout>
    );
}