import React from 'react';

const DataTable = ({ columns, data }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
          <tr>
            {columns.map((column, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-blue-500 border-b border-blue-400" : "bg-blue-600 border-b border-blue-400"}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-6 py-4">
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
