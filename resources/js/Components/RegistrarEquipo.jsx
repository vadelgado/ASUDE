import React, { useState } from "react";
import axios from "axios";

const SubirEscudo = () => {
  const [data, setData] = useState({
    escudoEquipo: null,
  });

  const escudoEquipoInput = React.createRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setData({ ...data, escudoEquipo: file });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("escudoEquipo", data.escudoEquipo);

    try {
      await axios.post("/api/subir-escudo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Realizar alguna acción después de la carga exitosa
    } catch (error) {
      console.error("Error al subir el escudo del equipo:", error);
    }
  };

  return (
    <div className="mt-4">
      <label
        htmlFor="escudoEquipo"
        className="block text-sm font-medium text-gray-700"
      >
        Escudo del Equipo
      </label>
      <input
        type="file"
        id="escudoEquipo"
        ref={escudoEquipoInput}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        onChange={handleFileChange}
      />
      <button onClick={handleSubmit}>Subir Escudo</button>
    </div>
  );
};

export default SubirEscudo;
