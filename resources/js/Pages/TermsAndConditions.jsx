import { Link, Head } from "@inertiajs/react";
import Header from "@/Components/DashBoard/Header";
import Footer from "@/Components/DashBoard/Footer";

export default function TermsAndConditions({ auth }) {
    return (
        <>
            <Head title="Términos y Condiciones" />
            <Header auth={auth} />
            <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
            <div className="container px-4 py-8 mx-auto mt-16 md:mt-24 lg:mt-32">
                <h1 className="mb-6 text-3xl font-bold text-center">Términos y Condiciones</h1>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">Introducción</h2>
                    <p>Bienvenido a Futuras Estrellas. Estos Términos y Condiciones rigen el uso de nuestro sitio web. Al acceder a nuestro sitio, aceptas estos términos en su totalidad. Si no estás de acuerdo con alguna parte de estos términos, no deberías utilizar nuestro sitio web.</p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">Uso del Sitio Web</h2>
                    <p>Nuestro sitio web es solo para fines informativos. Proporcionamos noticias sobre la escuela de fútbol, un catálogo de productos, información sobre nuestras sedes y medios o canales para realizar pagos. Los pagos no se realizan a través de nuestro sitio web; solo proporcionamos información sobre cómo realizarlos.</p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">Contenido del Sitio</h2>
                    <p>Toda la información y contenido publicados en nuestro sitio web son propiedad de Futuras Estrellas o están licenciados para su uso. No puedes reproducir, distribuir, o transmitir ningún contenido sin nuestro permiso previo por escrito.</p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">Propiedad Intelectual</h2>
                    <p>Todos los derechos de propiedad intelectual sobre el contenido del sitio web, incluidos textos, gráficos, logotipos, imágenes y software, son propiedad de Futuras Estrellas o de sus licenciantes. Está prohibido el uso de estos materiales sin autorización expresa.</p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">Limitación de Responsabilidad</h2>
                    <p>Futuras Estrellas no se hace responsable de cualquier daño directo, indirecto, incidental, consecuente, o de cualquier otro tipo derivado del uso o la imposibilidad de uso de nuestro sitio web. No garantizamos la exactitud o integridad de la información proporcionada en el sitio.</p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">Enlaces a Sitios de Terceros</h2>
                    <p>Nuestro sitio web puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan solo para tu conveniencia y no implican ningún respaldo por nuestra parte del contenido de dichos sitios web. No tenemos control sobre el contenido de estos sitios y no asumimos ninguna responsabilidad por ellos.</p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">Cambios en los Términos y Condiciones</h2>
                    <p>Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Te notificaremos sobre cualquier cambio publicando los nuevos términos en nuestro sitio web. Es tu responsabilidad revisar estos términos periódicamente.</p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">Ley Aplicable y Jurisdicción</h2>
                    <p>Estos Términos y Condiciones se rigen por las leyes de Colombia. Cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales colombianos.</p>
                    <ul className="ml-4 list-disc list-inside">
                        <li><a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Ley 1581 de 2012 (Protección de Datos Personales)</a></li>
                        <li><a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=53646" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Decreto 1377 de 2013 (Reglamentación de la Ley de Protección de Datos Personales)</a></li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-2xl font-semibold">Contacto</h2>
                    <p>Si tienes alguna pregunta sobre estos Términos y Condiciones, puedes contactarnos en: <a href="mailto:alianzafe24@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">alianzafe24@gmail.com</a></p>
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
