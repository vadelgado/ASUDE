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
    
    console.log(comprobantes);
    
    return (
        <AuthenticatedLayout
            
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Pagos
                </h2>
            }
        >
            <Head title="Pagos" />
            
            <div className="bg-white grid v-screen place-items-center py-6 overflow-x-auto">
                <div className="bg-white grid v-screen place-items-center py-6">
                    <table className="table table-auto border border-gray-400 rounded-t-lg rounded-br-lg rounded-bl-lg">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-2 py-2">#</th>
                                <th className="px-2 py-2">Identificación Estudiante</th>
                                <th className="px-2 py-2">Fecha</th>
                                <th className="px-2 py-2">Imagen</th>
                                <th className="px-2 py-2">Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comprobantes.length > 0 ? (
                                comprobantes.map((comprobante, i) => (
                                    <tr key={comprobante.id}>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {i + 1}
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            {comprobante.alumno.identificacion}
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
                                            {comprobante.fecha}
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
                                            <img src={comprobante.secureUrl} alt="Imagen del comprobante" />
                                        </td>
                                        <td className="border border-gray-400 px-2 py-2">
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
                                    <td colSpan="11" className="text-center">
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
