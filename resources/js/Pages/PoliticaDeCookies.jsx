import { Head } from "@inertiajs/react";
import Header from "@/Components/DashBoard/Header";
import Footer from "@/Components/DashBoard/Footer";

export default function PoliticaDeCookies({ auth }) {
    return (
        <>
            <Head title="Política de Cookies" />
            <Header auth={auth} />
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow">
                    <div className="container px-4 py-8 mx-auto mt-16 md:mt-24 lg:mt-32">
                        <h1 className="mb-6 text-3xl font-bold text-center">Política de Cookies</h1>
                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold">¿Qué son las cookies?</h2>
                            <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Estas cookies nos ayudan a mejorar tu experiencia al recordar tus preferencias y visitas anteriores.</p>
                        </section>
                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold">¿Cómo utilizamos las cookies?</h2>
                            <p>Utilizamos cookies para:</p>
                            <ul className="ml-4 list-disc list-inside">
                                <li>Recordar tus preferencias y configuraciones.</li>
                                <li>Entender cómo utilizas nuestro sitio web.</li>
                                <li>Mejorar la funcionalidad y rendimiento del sitio.</li>
                            </ul>
                        </section>
                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold">Tipos de cookies que utilizamos</h2>
                            <p>Utilizamos los siguientes tipos de cookies:</p>
                            <ul className="ml-4 list-disc list-inside">
                                <li><strong>Cookies esenciales:</strong> Son necesarias para el funcionamiento básico del sitio web.</li>
                                <li><strong>Cookies de rendimiento:</strong> Nos ayudan a entender cómo interactúas con nuestro sitio web, lo que nos permite mejorarlo.</li>
                                <li><strong>Cookies de funcionalidad:</strong> Permiten recordar tus preferencias y mejorar la funcionalidad del sitio.</li>
                            </ul>
                        </section>
                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold">Gestionar cookies</h2>
                            <p>Puedes gestionar y desactivar las cookies a través de la configuración de tu navegador. Ten en cuenta que al desactivar las cookies, algunas funcionalidades del sitio pueden verse afectadas.</p>
                        </section>
                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold">Cambios en la Política de Cookies</h2>
                            <p>Nos reservamos el derecho de actualizar esta Política de Cookies en cualquier momento. Te notificaremos sobre cualquier cambio publicando la nueva política en nuestro sitio web.</p>
                        </section>
                        <section className="mb-8">
                            <h2 className="mb-4 text-2xl font-semibold">Contacto</h2>
                            <p>Si tienes alguna pregunta sobre nuestra Política de Cookies, puedes contactarnos en: <a href="mailto:alianzafe24@gmail.com" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">alianzafe24@gmail.com</a></p>
                            <p className="mb-4">Teléfono: <a href="tel:+573183773718" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">(+57) 318-3773718</a></p>
                            <p>Dirección: Carrera 6 # 14 - 94 Piso 2, Ipiales, Nariño</p>
                        </section>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}
