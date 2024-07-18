import React, { useState } from "react";
import DataTable from "react-data-table-component";

const TablaTorneos = ({ torneoEnCurso }) => {
    const [filterText, setFilterText] = useState("");

    const paginationComponentOptions = {
        rowsPerPageText: 'Torneos por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    const columns = [
        {
            name: 'Nombre del Torneo',
            selector: row => (
                <div className="mb-4 text-center">
                    <a
                        href={`/listarTorneos/${row.id}`}
                        className="text-2xl font-bold text-orange-600 transition-colors duration-300 hover:underline hover:text-orange-700"
                    >
                        {row.nombreTorneo}
                    </a>
                </div>
            ),
            sortable: true,
        },
        {
            name: '',
            cell: row => (
                <div className="flex flex-col items-center mt-4 space-y-2 md:flex-row md:space-y-0 md:space-x-4">
                    <a
                        href={`/tablaGrupos?torneo_id=${row.id}`}
                        className="inline-flex items-center px-4 py-2 text-blue-600 transition-colors duration-300 bg-blue-100 rounded-lg shadow hover:text-blue-700 hover:bg-blue-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h3.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293h5.172a1 1 0 00.707-.293l1.414-1.414A1 1 0 0116.414 3H20a1 1 0 011 1v6a1 1 0 01-1 1h-1v6a1 1 0 01-1 1h-5v2h2a1 1 0 010 2H7a1 1 0 010-2h2v-2H4a1 1 0 01-1-1V11H2a1 1 0 01-1-1V4zm1 2h4v2H4V6z" />
                        </svg>
                        Ver Grupos
                    </a>
                    <a
                        href={`/tablasJuego?torneo_id=${row.id}`}
                        className="inline-flex items-center px-4 py-2 text-blue-600 transition-colors duration-300 bg-blue-100 rounded-lg shadow hover:text-blue-700 hover:bg-blue-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                        </svg>
                        Ver Partidos
                    </a>
                    <a
                        href={`/verResultados?torneo_id=${row.id}`}
                        className="inline-flex items-center px-4 py-2 text-blue-600 transition-colors duration-300 bg-blue-100 rounded-lg shadow hover:text-blue-700 hover:bg-blue-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 5h.01M19 12h.01M12 19h.01M7 7h10M7 12h10M7 17h10" />
                        </svg>
                        Ver Resultados
                    </a>
                </div>
            ),
        },
    ];

    const customStyles = {
        rows: {
            style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '20px',
                padding: '20px',
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s',
                textAlign: 'center',
            },
            highlightOnHoverStyle: {
                backgroundColor: '#e2e8f0',
                borderBottomColor: '#94a3b8',
                borderRadius: '10px',
                outline: '1px solid #94a3b8',
                transform: 'scale(1.02)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            },
        },
        headCells: {
            style: {
                display: 'none',
            },
        },
        cells: {
            style: {
                paddingLeft: '0',
                paddingRight: '0',
            },
        },
    };

    const filteredItems = torneoEnCurso.filter(
        item => item.nombreTorneo && item.nombreTorneo.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <section className="pt-40 mx-4 lg:mx-20">
            <h2 className="p-4 text-2xl font-semibold text-center text-white uppercase rounded-lg shadow-lg lg:text-4xl bg-gradient-to-r from-blue-500 via-green-500 to-green-500">
                CAMPEONATOS
            </h2>
            <div className="w-full mt-12">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Buscar por nombre del torneo"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        value={filterText}
                        onChange={e => setFilterText(e.target.value)}
                    />
                </div>
                <DataTable
                    columns={columns}
                    data={filteredItems}
                    pagination
                    paginationPerPage={5}
                    paginationComponentOptions={paginationComponentOptions}
                    noDataComponent="No hay registros para mostrar"
                    highlightOnHover
                    responsive
                    fixedHeader
                    customStyles={customStyles}
                />
            </div>
        </section>
    );
};

export default TablaTorneos;
