import { Link, Head } from "@inertiajs/react";
import Footer from "@/Components/DashBoard/Footer";
import Header from "@/Components/DashBoard/Header";
import Intro from "@/Components/DashBoard/Intro";
import PreFooter from "@/Components/DashBoard/PreFooter";
import Video from "@/Components/DashBoard/Video";
import Gallery from "@/Components/Gallery";
//import '@fontsource-variable/onest';

export default function ListarTorneos({ auth,torneos }) {
    return (
        <>
            <Header auth={auth}></Header>
            <Head title="Torneos ⚽" />
            <main className="m-auto max-w-4xl">                
                <h1 className="font-black uppercase text-8xl text-center py-40">
                    Administración 
                    <span className="block text-5xl"> de Torneos</span>
                </h1>
                {torneos.length > 0 ? (
                   torneos.map((torneo,i) =>(
                <ul key={torneo.id} className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <li>
                        <a className="hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl" href="{torneo.id}">
                        <img className="aspect-[389/500] h-full object-cover w-full max-w-full rounded"
                         src={torneo.flayer} alt="Flayer" 
                         />
                        </a>
                    </li>
                </ul>
                   ))
                ):(
                    <p>No hay torneos disponibles</p>                
                ) }


            </main>

            <Footer></Footer>
            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
                html {
                    font-family: 'Onest Variable', system-ui, sans-serif;
                    background: #151a36;
                }

                h1 {
                    font-size: 3.5em;
                    font-weight: 700;
                    line-height: 1.2;
                    margin-bottom: 1em;
                    color: white;
                    font-family: 'Onest Variable', system-ui, sans-serif;
                }

                h3 {
                    font-weight: 700;
                    line-height: 1.2;
                    margin-bottom: 1em;
                    color: white;
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
                    color: white;
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
