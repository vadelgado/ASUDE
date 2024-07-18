import { Link, Head } from "@inertiajs/react";
import Header from "@/Components/DashBoard/Header";
import Footer from "@/Components/DashBoard/Footer";

export default function TermsAndConditions({ auth }) {
    return (
        <>
            <Head title="Términos y Condiciones" />
            <Header auth={auth} />
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow container mx-auto px-4 py-8 mt-32">
                    <h1 className="text-3xl font-bold mb-4">
                        Términos y Condiciones
                    </h1>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">
                            Introducción
                        </h2>
                        <p>
                            Bienvenido a la plataforma de Alianza Sureña. Al
                            acceder y utilizar nuestro sitio web, usted acepta
                            cumplir y estar sujeto a los siguientes términos y
                            condiciones. Estos términos se aplican a todos los
                            usuarios y visitantes de nuestra plataforma. Si no
                            está de acuerdo con estos términos, le rogamos que
                            no utilice nuestra plataforma.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">
                            Definiciones
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>
                                <strong>"Usuario"</strong>: cualquier persona
                                que accede y utiliza la plataforma de Alianza
                                Sureña.
                            </li>
                            <li>
                                <strong>"Plataforma"</strong>: el sitio web y
                                cualquier otro servicio en línea proporcionado
                                por Alianza Sureña.
                            </li>
                            <li>
                                <strong>"Contenido"</strong>: cualquier
                                información, datos, textos, software, música,
                                sonidos, fotografías, gráficos, videos, mensajes
                                u otros materiales disponibles en la plataforma.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">
                            Uso de la Plataforma
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>
                                La plataforma de Alianza Sureña se utiliza
                                exclusivamente para la gestión y organización de
                                torneos de fútbol en el suroccidente colombiano.
                            </li>
                            <li>
                                Los usuarios deben proporcionar información
                                precisa y actualizada durante el proceso de
                                registro y uso de la plataforma.
                            </li>
                            <li>
                                Los usuarios se comprometen a no utilizar la
                                plataforma para cualquier propósito ilegal o no
                                autorizado.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">
                            Registro y Cuenta de Usuario
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>
                                Para acceder a ciertas funcionalidades de la
                                plataforma, los usuarios deben registrarse y
                                crear una cuenta.
                            </li>
                            <li>
                                Los usuarios son responsables de mantener la
                                confidencialidad de sus datos de inicio de
                                sesión y son responsables de todas las
                                actividades que ocurran bajo su cuenta.
                            </li>
                            <li>
                                Los usuarios deben notificar inmediatamente a
                                Alianza Sureña de cualquier uso no autorizado de
                                su cuenta o cualquier otra violación de
                                seguridad.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">
                            Propiedad Intelectual
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>
                                Todo el contenido de la plataforma, incluyendo
                                pero no limitado a textos, gráficos, logotipos,
                                imágenes, clips de audio, descargas digitales y
                                compilaciones de datos, es propiedad de Alianza
                                Sureña o sus proveedores de contenido y está
                                protegido por las leyes de derechos de autor de
                                Colombia y otras leyes internacionales de
                                propiedad intelectual.
                            </li>
                            <li>
                                No se permite el uso del contenido de la
                                plataforma sin el permiso expreso y por escrito
                                de Alianza Sureña.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">
                            Conducta del Usuario
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>
                                Los usuarios se comprometen a no cargar,
                                publicar, enviar por correo electrónico,
                                transmitir o poner a disposición cualquier
                                contenido que sea ilegal, dañino, amenazante,
                                abusivo, acosador, difamatorio, vulgar, obsceno,
                                invasivo de la privacidad de otra persona,
                                odioso, o racial, étnicamente o de otra manera
                                objetable.
                            </li>
                            <li>
                                Alianza Sureña se reserva el derecho de eliminar
                                cualquier contenido que viole estos términos y
                                condiciones y de tomar las acciones legales
                                apropiadas contra los infractores.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">
                            Privacidad
                        </h2>
                        <p>
                            Alianza Sureña se compromete a proteger la
                            privacidad de los usuarios. Nuestra Política de
                            Privacidad explica cómo recopilamos, usamos y
                            compartimos su información personal. Al utilizar la
                            plataforma, usted acepta la recopilación y el uso de
                            información de acuerdo con nuestra Política de
                            Privacidad.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">
                            Limitación de Responsabilidad
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>
                                Alianza Sureña no será responsable de ningún
                                daño indirecto, incidental, especial,
                                consecuente o punitivo, incluyendo pero no
                                limitado a, pérdida de beneficios, datos, uso,
                                fondo de comercio u otras pérdidas intangibles,
                                resultantes de (i) su uso o incapacidad para
                                usar la plataforma; (ii) cualquier acceso no
                                autorizado o uso de nuestros servidores y/o
                                cualquier información personal almacenada en
                                ellos.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">
                            Modificaciones de los Términos
                        </h2>
                        <p>
                            Alianza Sureña se reserva el derecho de modificar
                            estos términos y condiciones en cualquier momento.
                            Las modificaciones serán efectivas inmediatamente
                            después de su publicación en la plataforma. El uso
                            continuo de la plataforma después de la publicación
                            de las modificaciones constituye su aceptación de
                            los nuevos términos y condiciones.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-4 text-2xl font-semibold">
                            Ley Aplicable y Jurisdicción
                        </h2>
                        <p>
                            Estos Términos y Condiciones se rigen por las leyes
                            de Colombia. Cualquier disputa relacionada con estos
                            términos estará sujeta a la jurisdicción exclusiva
                            de los tribunales colombianos.
                        </p>
                        <ul className="ml-4 list-disc list-inside">
                            <li>
                                <a
                                    href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline"
                                >
                                    Ley 1581 de 2012 (Protección de Datos
                                    Personales)
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=53646"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline"
                                >
                                    Decreto 1377 de 2013 (Reglamentación de la
                                    Ley de Protección de Datos Personales)
                                </a>
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">
                            Contacto
                        </h2>
                        <p>
                            Si tiene alguna pregunta sobre estos términos y
                            condiciones, por favor contáctenos a través de:
                        </p>
                        <p>
                            Correo Electrónico:{" "}
                            <a
                                href="mailto:CIMA_FUTURASESTRELLAS@hotmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                CIMA_FUTURASESTRELLAS@hotmail.com
                            </a>
                            <br />
                            Teléfono:{" "}
                            <a
                                href="tel:+573183773718"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                +57 318 3773718
                            </a>
                        </p>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}
