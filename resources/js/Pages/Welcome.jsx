import { Link, Head } from '@inertiajs/react';
import Footer from '@/Components/DashBoard/Footer';
import Header from '@/Components/DashBoard/Header';
import Intro from '@/Components/DashBoard/Intro';
import PreFooter from '@/Components/DashBoard/PreFooter';
import Video from '@/Components/DashBoard/Video';
import TablaTorneos from '@/Components/DashBoard/TablaTorneos';

//import '@fontsource-variable/onest';

export default function Welcome({ auth, torneoEnCurso }) {
    return (
        <>
            <Header auth={auth}></Header>            
            <Head title="Futuras Estrellas" />            
            <Video></Video>  
            <TablaTorneos torneoEnCurso={torneoEnCurso}/>
            <Intro></Intro>            
            <PreFooter></PreFooter>
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
