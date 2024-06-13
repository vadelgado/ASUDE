import { Link, Head } from "@inertiajs/react";
import Footer from "@/Components/DashBoard/Footer";
import Header from "@/Components/DashBoard/Header";
import React from "react";

export default function Index({ auth, torneo, programaciones_faces }) {
  // Agrupar partidos por nombreFase
  const groupedByFase = programaciones_faces.reduce((acc, programacion) => {
    const { nombreFase } = programacion;
    if (!acc[nombreFase]) {
      acc[nombreFase] = [];
    }
    acc[nombreFase].push(programacion);
    return acc;
  }, {});

  // Ordenar partidos por FechaPartido y HoraPartido dentro de cada fase
  Object.keys(groupedByFase).forEach((fase) => {
    groupedByFase[fase].sort((a, b) => {
      if (a.FechaPartido === b.FechaPartido) {
        return a.HoraPartido.localeCompare(b.HoraPartido);
      }
      return a.FechaPartido.localeCompare(b.FechaPartido);
    });
  });

  // Obtener las fases en orden de la fecha más temprana
  const orderedFases = Object.keys(groupedByFase).sort((a, b) => {
    const firstMatchA = groupedByFase[a][0];
    const firstMatchB = groupedByFase[b][0];
    if (firstMatchA.FechaPartido === firstMatchB.FechaPartido) {
      return firstMatchA.HoraPartido.localeCompare(firstMatchB.HoraPartido);
    }
    return firstMatchA.FechaPartido.localeCompare(firstMatchB.FechaPartido);
  });

  return (
    <>
      <Header auth={auth} />
      <Head title={`Partidos`} />
      <h2 className="mt-32 text-3xl font-bold text-center">
        <span>👉📝Partidos👈</span>
      </h2>

      <main className="px-2">
        <div className="flex items-center justify-center py-8">
          <img
            src={`/storage/${torneo.imgBannerSuperior}`}
            alt={torneo.nombreTorneo}
            className="flex items-center w-auto h-auto mr-2"
          />
        </div>
        <div className="text-xs text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          {orderedFases.map((fase, index) => (
            <div key={index} className="mb-8">
              <h3 className="mb-4 font-bold text-center">
                Fase: {fase}
              </h3>
              <div className="overflow-x-auto">
                <div className="min-w-full overflow-hidden overflow-x-auto">
                  <table className="w-full text-black">
                    <thead>
                      <tr className="p-4 bg-gradient-to-b from-white/20 via-transparent to-transparent">
                        <th className="px-4 py-2 font-bold text-center">Fecha</th>
                        <th className="px-4 py-2 font-bold text-center">Hora</th>
                        <th className="px-4 py-2 font-bold text-center">Equipo Local</th>
                        <th className="px-4 py-2 font-bold text-center">Marcador</th>
                        <th className="px-4 py-2 font-bold text-center">Equipo Visitante</th>
                      </tr>
                    </thead>
                    <tbody>
                      {groupedByFase[fase].map((programacion, subIndex) => (
                        <tr
                          key={subIndex}
                          className="p-4 bg-gradient-to-b from-white/20 via-transparent to-transparent"
                        >
                          <td className="px-4 py-2 text-center">
                            {programacion.FechaPartido || "Por definir"}
                          </td>
                          <td className="px-4 py-2 text-center">
                            {programacion.HoraPartido || "Por definir"}
                          </td>
                          <td className="flex flex-row items-center px-4 py-2 text-center flex-nowrap">
                            <span
                              className="text-xs font-bold text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
                              style={{ transform: "scale(0.70)" }}
                            >
                              {programacion.puestoLocal}
                            </span>
                            {programacion.nombreEquipoLocal ? (
                              <>
                                <img
                                  src={`/storage/${programacion.escudoEquipoLocal}`}
                                  alt={`Escudo equipo ${programacion.nombreEquipoLocal}`}
                                  className="w-10 h-10 ml-2 rounded-full"
                                />
                                {programacion.nombreEquipoLocal}
                              </>
                            ) : (
                              <>
                                <span className="ml-2">
                                  Posición: {programacion.posicion_local}
                                </span>
                              </>
                            )}
                          </td>
                          <td className="px-4 py-2 text-center"></td>
                          <td className="flex flex-row items-center px-4 py-2 text-center flex-nowrap">
                            <span
                              className="text-xs font-bold text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
                              style={{ transform: "scale(0.70)" }}
                            >
                              {programacion.puestoVisitante}
                            </span>
                            {programacion.nombreEquipoVisitante ? (
                              <>
                                <img
                                  src={`/storage/${programacion.escudoEquipoVisitante}`}
                                  alt={`Escudo equipo ${programacion.nombreEquipoVisitante}`}
                                  className="w-10 h-10 ml-2 rounded-full"
                                />
                                {programacion.nombreEquipoVisitante}
                              </>
                            ) : (
                              <>
                                <span className="ml-2">
                                  Posición: {programacion.posicion_visitante}
                                </span>
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <style>{`
        html {
          font-family: 'Onest Variable', system-ui, sans-serif;
          background: #D5D5D5;
        }
      `}</style>
    </>
  );
}
