import React, { useState } from "react";

export default function Accordion({ torneo }) {
    const [openSection, setOpenSection] = useState(null);

    const handleAccordionClick = (sectionId) => {
        setOpenSection((prev) => (prev === sectionId ? null : sectionId));
    };

    return (
        <div id="accordion-collapse" className="max-w-4xl mx-auto my-8">
            <h2 id="accordion-collapse-heading-1">
                <button
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-bold text-lg text-white border border-b-0 rounded-t-xl transition-transform ${
                        openSection === "accordion-collapse-body-1"
                            ? "bg-blue-600"
                            : "bg-blue-500"
                    } hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 dark:focus:ring-blue-800`}
                    onClick={() =>
                        handleAccordionClick("accordion-collapse-body-1")
                    }
                    aria-expanded={openSection === "accordion-collapse-body-1"}
                    aria-controls="accordion-collapse-body-1"
                    data-accordion-target="#accordion-collapse-body-1"
                >
                    <span>⚽ CARACTERÍSTICAS</span>
                    <svg
                        data-accordion-icon
                        className={`w-4 h-4 transform transition-transform ${
                            openSection === "accordion-collapse-body-1"
                                ? "rotate-180"
                                : ""
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            </h2>
            <div
                id="accordion-collapse-body-1"
                className={`p-5 border border-b-0 bg-white dark:bg-gray-800 ${
                    openSection === "accordion-collapse-body-1"
                        ? "block"
                        : "hidden"
                }`}
                aria-labelledby="accordion-collapse-heading-1"
            >
                <div className="mb-2 text-gray-800 dark:text-gray-200">
                    <p className="font-semibold text-black dark:text-white">
                        {torneo.caracteristicas} 
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-gray-300">
                        Apoya: {torneo.ApoyoPrincipal}
                    </p>
                </div>
                <p className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Organiza: {torneo.Aval}
                </p>
                <p className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Cantidad de Equipos Participantes: {torneo.cantidadEquiposParticipantes}
                </p>
                <p className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Cantidad de Grupos: {torneo.cantidadGrupos}
                </p>
            </div>

            <h2 id="accordion-collapse-heading-2">
                <button
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-bold text-lg text-white border border-b-0 transition-transform ${
                        openSection === "accordion-collapse-body-2"
                            ? "bg-blue-600"
                            : "bg-blue-500"
                    } hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 dark:focus:ring-blue-800`}
                    onClick={() =>
                        handleAccordionClick("accordion-collapse-body-2")
                    }
                    aria-expanded={openSection === "accordion-collapse-body-2"}
                    aria-controls="accordion-collapse-body-2"
                    data-accordion-target="#accordion-collapse-body-2"
                >
                    <span>🏆 PREMIACIÓN</span>
                    <svg
                        data-accordion-icon
                        className={`w-4 h-4 transform transition-transform ${
                            openSection === "accordion-collapse-body-2"
                                ? "rotate-180"
                                : ""
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            </h2>
            <div
                id="accordion-collapse-body-2"
                className={`p-5 border border-b-0 bg-white dark:bg-gray-800 ${
                    openSection === "accordion-collapse-body-2"
                        ? "block"
                        : "hidden"
                }`}
                aria-labelledby="accordion-collapse-heading-2"
            >
                <div className="mb-2 text-gray-800 dark:text-gray-200">
                    <p className="font-semibold text-black dark:text-white">
                        {torneo.premiacion}
                    </p>
                </div>
            </div>
        </div>
    );
}
