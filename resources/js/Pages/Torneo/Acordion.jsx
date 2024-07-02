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
      className={`bg-gradient-to-r from-green-400 via-green-500 to-green-600 dark:from-green-700 dark:via-green-800 dark:to-green-900 flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-green-500 rounded-t-xl focus:ring-4 focus:ring-green-500 dark:focus:ring-green-800 dark:border-green-700 dark:text-white hover:bg-gradient-to-r hover:from-green-500 hover:via-green-600 hover:to-green-700 dark:hover:from-green-800 dark:hover:via-green-900 dark:hover:to-green-900 gap-3 ${openSection === 'accordion-collapse-body-1' ? 'active' : ''}`}
      onClick={() => handleAccordionClick('accordion-collapse-body-1')}
      aria-expanded={openSection === 'accordion-collapse-body-1'}
      aria-controls="accordion-collapse-body-1"
      data-accordion-target="#accordion-collapse-body-1"
    >
      <span>{'⚽CARACTERÍSTICAS'}</span>
      <svg
        data-accordion-icon
        className={`w-4 h-4 transform transition-transform ${openSection === 'accordion-collapse-body-1' ? 'rotate-180' : ''}`}
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
    className={`p-5 border border-b-0 border-green-500 dark:border-green-700 bg-green-100 dark:bg-green-800 ${openSection === 'accordion-collapse-body-1' ? 'block' : 'hidden'}`}
    aria-labelledby="accordion-collapse-heading-1"
  >
    <div className="mb-2 text-gray-800 dark:text-gray-200">
      {torneo.caracteristicas}
    </div>
  </div>

  <h2 id="accordion-collapse-heading-2">
    <button
      type="button"
      className={`bg-gradient-to-r from-green-400 via-green-500 to-green-600 dark:from-green-700 dark:via-green-800 dark:to-green-900 flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-green-500 focus:ring-4 focus:ring-green-500 dark:focus:ring-green-800 dark:border-green-700 dark:text-white hover:bg-gradient-to-r hover:from-green-500 hover:via-green-600 hover:to-green-700 dark:hover:from-green-800 dark:hover:via-green-900 dark:hover:to-green-900 gap-3 ${openSection === 'accordion-collapse-body-2' ? 'active' : ''}`}
      onClick={() => handleAccordionClick('accordion-collapse-body-2')}
      aria-expanded={openSection === 'accordion-collapse-body-2'}
      aria-controls="accordion-collapse-body-2"
      data-accordion-target="#accordion-collapse-body-2"
    >
      <span>{'🏆PREMIACIÓN'}</span>
      <svg
        data-accordion-icon
        className={`w-4 h-4 transform transition-transform ${openSection === 'accordion-collapse-body-2' ? 'rotate-180' : ''}`}
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
    className={`p-5 border border-b-0 border-green-500 dark:border-green-700 bg-green-100 dark:bg-green-800 ${openSection === 'accordion-collapse-body-2' ? 'block' : 'hidden'}`}
    aria-labelledby="accordion-collapse-heading-2"
  >
    <div className="mb-2 text-gray-800 dark:text-gray-200">
      {torneo.premiacion}
    </div>
  </div>
</div>


  );
}
