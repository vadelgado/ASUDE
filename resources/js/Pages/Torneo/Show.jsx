import { Link, Head } from "@inertiajs/react";
import Footer from "@/Components/DashBoard/Footer";
import Header from "@/Components/DashBoard/Header";
import Acordion from "./Acordion";
import Whatsapp from "@/Components/Whatsapp";
import PrimaryButton from "@/Components/PrimaryButton";

export default function ListarTorneos({ auth, torneo }) {
    console.log(torneo);
    return (
        <>
            <Header auth={auth} />
            <Head title={`Torneo ⚽ ${torneo.nombreTorneo}`} />
            <main className="max-w-6xl p-4 mx-auto mt-40">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="relative flex flex-col">
                        <picture className="mb-8">
                            <img
                                className="w-full h-auto transition-transform transform rounded-lg shadow-lg hover:scale-105"
                                src={`/storage/${torneo.flayer}`}
                                alt={`Torneo ⚽ ${torneo.nombreTorneo}`}
                            />
                        </picture>
                    </div>
                    <aside className="md:mt-0">
                        <h1 className="mb-4 text-4xl font-extrabold text-green-900">
                            {torneo.nombreTorneo}
                        </h1>
                        <p className="mb-4 text-lg font-semibold text-gray-800">
                            {torneo.caracteristicas}
                        </p>
                        <p className="mb-4 text-lg font-semibold text-gray-800">
                            <strong>Fecha Inicio:</strong> {torneo.fechaInicio}
                        </p>
                        <p className="mb-4 text-lg font-semibold text-gray-800">
                            <strong>Fecha Fin:</strong> {torneo.fechaFin}
                        </p>
                        <p className="mb-4 text-lg font-semibold text-gray-800">
                            <strong>Inscripción:</strong> {torneo.inscripcion}
                        </p>
                        <p className="mb-4 text-lg font-semibold text-gray-800">
                            <strong>Proceso Inscripción:</strong> {torneo.procesoInscripcion}
                        </p>
                        <p className="mb-4 text-lg font-semibold text-gray-800">
                            <strong>Reglamentación:</strong>{" "}
                            <a
                                href={torneo.reglamentacion}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                Ver Documento
                            </a>
                        </p>
                        <div className="flex flex-wrap items-center space-x-4">
                            <Whatsapp torneo={torneo} />
                            <Link href={route("preregistro.create")}>
                                <PrimaryButton className="mt-4 md:mt-0">
                                    Pre-registro
                                </PrimaryButton>
                            </Link>
                        </div>
                    </aside>
                </div>
                <Acordion torneo={torneo} />
            </main>
            <Footer />
            <style>{`
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
                html {
                    font-family: 'Onest Variable', system-ui, sans-serif;
                    background: #D9E5AB;
                }
                h1 {
                    font-size: 3.5em;
                    font-weight: 700;
                    line-height: 1.2;
                    margin-bottom: 1em;
                    color: green;
                    font-family: 'Onest Variable', system-ui, sans-serif;
                }
                h3 {
                    font-weight: 700;
                    line-height: 1.2;
                    margin-bottom: 1em;
                    color: green;
                    font-family: 'Onest Variable', system-ui, sans-serif;
                }
                p {
                    color: rgba(255, 255, 255, 0.9);
                    line-height: 1.4;
                    margin-bottom: 1em;
                    font-weight: 100;
                    font-size: 1em;
                    letter-spacing: 0.5px;
                    font-family: 'Onest Variable', system-ui, sans-serif;
                }
                p strong {
                    color: green;
                    font-weight: 700;
                    font-family: 'Onest Variable', system-ui, sans-serif;
                }
                @media (max-width: 768px) {
                    h1 {
                        font-size: 2.5em;
                    }
                }
                @media (max-width: 576px) {
                    h1 {
                        font-size: 2em;
                    }
                }
            `}</style>
        </>
    );
}
