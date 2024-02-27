import React, { useState } from 'react';

export default function Accordion({ torneo }) {
  const [openSection, setOpenSection] = useState(null);

  const handleAccordionClick = (sectionId) => {
    setOpenSection((prev) => (prev === sectionId ? null : sectionId));
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${openSection === 'accordion-collapse-body-1' ? 'active' : ''}`}
          onClick={() => handleAccordionClick('accordion-collapse-body-1')}
          aria-expanded={openSection === 'accordion-collapse-body-1'}
          aria-controls="accordion-collapse-body-1"
          data-accordion-target="#accordion-collapse-body-1"
        >
            <span>{'⚽Caraterísticas'.toUpperCase()}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-180 shrink-0 ${openSection === 'accordion-collapse-body-1' ? 'open' : ''}`}
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
        className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${openSection === 'accordion-collapse-body-1' ? 'block' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="mb-2 text-gray-500 dark:text-gray-400">
          {torneo.caracteristicas}
        </div>
      </div>

      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${openSection === 'accordion-collapse-body-2' ? 'active' : ''}`}
          onClick={() => handleAccordionClick('accordion-collapse-body-2')}
          aria-expanded={openSection === 'accordion-collapse-body-2'}
          aria-controls="accordion-collapse-body-2"
          data-accordion-target="#accordion-collapse-body-2"
        >
          <span>{'🏆Premiación'.toUpperCase()}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-180 shrink-0 ${openSection === 'accordion-collapse-body-2' ? 'open' : ''}`}
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
        className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${openSection === 'accordion-collapse-body-2' ? 'block' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div className="mb-2 text-gray-500 dark:text-gray-400">
         {torneo.premiacion}
        </div>
      </div>

      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${openSection === 'accordion-collapse-body-3' ? 'active' : ''}`}
          onClick={() => handleAccordionClick('accordion-collapse-body-3')}
          aria-expanded={openSection === 'accordion-collapse-body-3'}
          aria-controls="accordion-collapse-body-3"
          data-accordion-target="#accordion-collapse-body-3"
        >
          <span>{'📝Sistema de juego'.toUpperCase()}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-180 shrink-0 ${openSection === 'accordion-collapse-body-3' ? 'open' : ''}`}
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
        id="accordion-collapse-body-3"
        className={`p-5 border border-t-0 border-gray-200 dark:border-gray-700 ${openSection === 'accordion-collapse-body-3' ? 'block' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          {torneo.sistemaJuego}
        </p>
      </div>
    </div>
  );
}
