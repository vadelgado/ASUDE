import { Link, Head } from "@inertiajs/react";
import Footer from "@/Components/DashBoard/Footer";
import Header from "@/Components/DashBoard/Header";
import Acordion from "./Acordion"; 
import Whatsapp from "@/Components/Whatsapp";
import PrimaryButton from "@/Components/PrimaryButton";

export default function ListarTorneos({ auth, torneo }) {
        return (
                
                <>
                        <Header auth={auth}></Header>
                        <Head title={`Torneo ⚽ ${torneo.nombreTorneo}`} />
                        <br />
                        <main className="max-w-4xl m-auto mt-40">
                                <div className="grid grid-cols-1 mt-20 md:grid-cols-2 gap-x-12">
                                        <div className="relative flex flex-col w-full">
                                                <picture className="mb-8">
                                                        <img
                                                                className="w-full h-auto rounded-lg shadow-lg"
                                                                src={`/storage/${torneo.flayer}`}
                                                                alt={`Torneo ⚽ ${torneo.nombreTorneo}`}
                                                        />
                                                </picture>
                                        </div>

                                        <aside className="mt-10 md:mt-0">
                                                <h1 className="mb-4 text-3xl font-black">
                                                        {torneo.nombreTorneo}
                                                </h1>
                                                <p className="mb-4 text-lg font-semibold text-green-700 ">{torneo.caracteristicas}</p>
                                                
                                                <div className="flex flex-wrap">
                                                        <div className="flex items-center">
                                                                <Whatsapp torneo={torneo}></Whatsapp>
                                                        </div>
                                                        <div className="flex items-center">
                                                                <Link href={route('preregistro.create')}>
                                                                        <PrimaryButton className="mt-4 md:mt-0">Pre-registro</PrimaryButton>
                                                                </Link>
                                                        </div>
                                                </div>
                                        </aside>                                        
                                </div>
                                <Acordion torneo={torneo}></Acordion>
                        </main>

                        <Footer></Footer>
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

                                /* Media queries for responsiveness */
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
