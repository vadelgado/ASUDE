import { Link, Head } from "@inertiajs/react";
import Header from "@/Components/DashBoard/Header";
import Footer from "@/Components/DashBoard/Footer";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Políticas de Privacidad" />
            <Header auth={auth} />
            <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
            <div className="container px-4 py-8 mx-auto mt-32">
                <h1 className="mb-6 text-3xl font-bold text-center">Política de Privacidad</h1>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">Datos que recopilamos</h2>
                    <p className="mb-4">En Futuras Estrellas, no recopilamos datos personales de los usuarios en general ya que la página es solo informativa. Proporcionamos noticias sobre la escuela, catálogo de productos, información de las sedes y medios o canales para realizar pagos. Los pagos no se realizan a través de la página, solo se proporciona información sobre cómo realizarlos.</p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">Finalidad del tratamiento de los datos</h2>
                    <p>En el caso de los administradores, los datos personales se utilizan para la gestión de la información en el panel de administración. Futuras Estrellas asegura que toda la información proporcionada sea fidedigna y que se tengan los permisos necesarios para subir imágenes.</p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">Compartición de datos</h2>
                    <p>No compartimos los datos personales de los usuarios con terceros.</p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">Derechos de los usuarios</h2>
                    <p className="mb-4">En el caso de los administradores, tienen los siguientes derechos sobre sus datos personales:</p>
                    <ul className="ml-6 list-disc">
                        <li>Acceso a sus datos personales</li>
                        <li>Rectificación de datos incorrectos o incompletos</li>
                        <li>Eliminación de sus datos personales</li>
                        <li>Oposición al tratamiento de sus datos</li>
                    </ul>
                    <p>Para ejercer estos derechos, los administradores pueden contactarnos a través de nuestro correo electrónico: <a href="mailto:alianzafe24@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">alianzafe24@gmail.com</a></p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">Seguridad de los datos</h2>
                    <p>Implementamos medidas de seguridad técnicas y organizativas para proteger los datos personales contra acceso no autorizado, pérdida o destrucción.</p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">Cookies y tecnologías de seguimiento</h2>
                    <p className="mb-4">Utilizamos cookies para mejorar la experiencia de los usuarios en nuestro sitio web. Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario.</p>
                    <p>Los usuarios pueden gestionar las cookies a través de la configuración de su navegador.</p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">Contacto</h2>
                    <p className="mb-4">Si tienes alguna pregunta sobre nuestra política de privacidad, puedes contactarnos en: <a href="mailto:alianzafe24@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">alianzafe24@gmail.com</a></p>
                    <p className="mb-4">Teléfono: (+57) 318-3773718</p>
                    <p>Dirección: Carrera 6 # 14 - 94 Piso 2, Ipiales, Nariño</p>
                </section>
            </div>
            </main>
            </div>
            <Footer/>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
