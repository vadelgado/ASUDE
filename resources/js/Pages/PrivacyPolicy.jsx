import { Link, Head } from "@inertiajs/react";
import Header from "@/Components/DashBoard/Header";
import Footer from "@/Components/DashBoard/Footer";

export default function TermsAndConditions({ auth }) {
    return (
        <>
            <Head title="Políticas de Privacidad" />
            <Header auth={auth} />
            <div className="flex flex-col min-h-screen ">
                <main className="flex-grow container mx-auto mt-36 p-6">
                    <h1 className="text-4xl font-bold mb-4">Políticas de Privacidad</h1>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Introducción</h2>
                        <p className="mb-2">
                            Bienvenido a la página web de Alianza Sureña. La protección de sus datos personales es de suma importancia para nosotros. Este documento describe cómo recopilamos, usamos, protegemos y compartimos su información personal.
                        </p>
                        <p>
                            <strong>Entidad Responsable:</strong><br />
                            Alianza Sureña<br />
                            Dirección: Carrera 6 # 14 - 94 Piso 2, Ipiales, Nariño <br />
                            Correo Electrónico: CIMA_FUTURASESTRELLAS@hotmail.com<br />
                            Teléfono: +57 318 3773718
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Información que se recopila</h2>
                        <p className="mb-2"><strong>Para el encargado de los equipos de fútbol:</strong></p>
                        <ul className="list-disc list-inside mb-2">
                            <li>Identificación (Cédula de ciudadanía)</li>
                            <li>Nombre completo</li>
                            <li>Email</li>
                            <li>Número de celular</li>
                            <li>Contraseña y confirmación de contraseña</li>
                        </ul>
                        <p className="mb-2"><strong>Para los equipos registrados:</strong></p>
                        <ul className="list-disc list-inside mb-2">
                            <li>Nombre del equipo</li>
                            <li>Categoría (Sub-6, Sub-7, Sub-8, etc.)</li>
                            <li>Imagen del escudo del equipo</li>
                            <li>Número de WhatsApp para contactar a los miembros o al director técnico</li>
                            <li>Correo electrónico</li>
                        </ul>
                        <p className="mb-2"><strong>Para los miembros del equipo:</strong></p>
                        <ul className="list-disc list-inside mb-2">
                            <li>Nombres y apellidos</li>
                            <li>Foto</li>
                            <li>Tipo de documento de identidad</li>
                            <li>Número de documento de identidad</li>
                            <li>Serial, folio, registro civil (si corresponde)</li>
                            <li>Fecha de nacimiento</li>
                            <li>Lugar de nacimiento</li>
                            <li>Institución educativa</li>
                            <li>Grado</li>
                            <li>Ciudad de la institución educativa</li>
                            <li>Teléfono de la institución educativa</li>
                            <li>Estado EPS</li>
                            <li>Nombre EPS</li>
                            <li>Lugar de atención EPS</li>
                            <li>Aceptación de exoneración de responsabilidades bajo la Ley 1581 de 2012 de Protección de Datos Personales</li>
                        </ul>
                        <p className="mb-2"><strong>Para los miembros del cuerpo técnico:</strong></p>
                        <ul className="list-disc list-inside mb-2">
                            <li>Grado más alto de educación</li>
                        </ul>
                        <p className="mb-2"><strong>Para los administradores del sistema:</strong></p>
                        <ul className="list-disc list-inside mb-2">
                            <li>Identificación</li>
                            <li>Nombre completo</li>
                            <li>Email</li>
                            <li>Número de celular</li>
                            <li>Contraseña y confirmación de contraseña</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Finalidades del uso de los datos personales</h2>
                        <p>
                            Los datos personales recopilados se utilizarán para:
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Proveer servicios de gestión y organización de torneos de fútbol</li>
                            <li>Mejorar nuestro sitio web</li>
                            <li>Enviar comunicaciones relevantes sobre los torneos</li>
                            <li>Verificar la elegibilidad de los jugadores</li>
                            <li>Organizar eventos y mantener comunicación con los representantes legales</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Bases legales para el procesamiento de los datos</h2>
                        <p>
                            El procesamiento de los datos personales se realiza bajo las siguientes bases legales:
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Consentimiento del titular de los datos</li>
                            <li>Cumplimiento de obligaciones legales</li>
                            <li>Interés legítimo de la organización</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Compartición de la información</h2>
                        <p>
                            La información de los equipos y sus miembros se comparte con cualquier persona que ingrese a la plataforma ASUDEG para fines exclusivos de gestión y organización de torneos. Esto incluye:
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Fotos de jugadores durante los partidos</li>
                            <li>Fotos de jugadores para resultados de goleadores</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Protección de la información</h2>
                        <p>
                            Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, alteración, divulgación o destrucción. En caso de violaciones de seguridad, se seguirán procedimientos establecidos para mitigar el impacto.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Derechos de los usuarios</h2>
                        <p>
                            Los titulares de los datos tienen derecho a:
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Acceder a sus datos personales</li>
                            <li>Rectificar datos inexactos</li>
                            <li>Oponerse al procesamiento de sus datos</li>
                        </ul>
                        <p>
                            Para ejercer estos derechos, contacte a:
                        </p>
                        <p>
                            Correo Electrónico: CIMA_FUTURASESTRELLAS@hotmail.com<br />
                            Teléfono: +57 318 3773718
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Cookies y tecnologías similares</h2>
                        <p>
                            Nuestra página utiliza cookies y tecnologías de seguimiento para mejorar la experiencia del usuario. Los tipos de cookies utilizadas y su propósito serán detallados en la sección de cookies de nuestro sitio web. Los usuarios pueden gestionar o desactivar las cookies a través de la configuración de su navegador.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Transferencias internacionales de datos</h2>
                        <p>
                            En caso de transferir datos personales a otros países, se aplicarán medidas de protección adecuadas conforme a la normativa colombiana.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Retención de la información</h2>
                        <p>
                            Los datos personales se conservarán mientras la plataforma ASUDEG esté activa, como historial de la participación del equipo y sus miembros en los torneos. Los criterios para determinar el periodo de retención se basarán en las normativas colombianas aplicables.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Enlaces a otros sitios web</h2>
                        <p>
                            Nuestra página puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad de esos sitios. Recomendamos leer sus políticas de privacidad.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Actualizaciones de la Política de Privacidad</h2>
                        <p>
                            Podemos actualizar esta Política de Privacidad en cualquier momento. Las actualizaciones serán notificadas a los usuarios a través de nuestro sitio web.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Contacto</h2>
                        <p>
                            Para consultas, reclamaciones o ejercer sus derechos, por favor contacte a:
                        </p>
                        <p>
                            Correo Electrónico: CIMA_FUTURASESTRELLAS@hotmail.com<br />
                            Teléfono: +57 318 3773718
                        </p>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}
