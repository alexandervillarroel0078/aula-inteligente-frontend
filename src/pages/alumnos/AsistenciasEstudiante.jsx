import React, { useEffect, useState } from 'react';
import { obtenerAsistenciasAlumno } from '../../services/alumnoService';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const AsistenciasEstudiante = ({ alumnoId }) => {
  const [asistencias, setAsistencias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const total = asistencias.length;
  const presentes = asistencias.filter(a => a.presente).length;
  const porcentaje = total > 0 ? ((presentes / total) * 100).toFixed(1) : "0.0";
  const data = [
    { name: 'Presente', value: presentes },
    { name: 'Ausente', value: total - presentes },
  ];

  const COLORS = ['#22c55e', '#ef4444'];
  useEffect(() => {
    const fetchData = async () => {
      setCargando(true); // comienza cargando
      const data = await obtenerAsistenciasAlumno(alumnoId);
      setAsistencias(data);
      setCargando(false); // termina la carga
    };
    if (alumnoId) fetchData();
  }, [alumnoId]);


  return (


    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">Asistencias</h2>
      <p className="text-sm text-gray-600 mb-2">
        Porcentaje de asistencia: <span className="font-semibold text-blue-600">{porcentaje}%</span>
      </p>
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>


      {cargando ? (
        <p className="text-gray-500">Cargando asistencias...</p>
      ) : asistencias.length === 0 ? (
        <p className="text-gray-500">No hay asistencias registradas.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow text-xs sm:text-sm">
            <thead className="bg-gray-100">
              <tr className="text-center">
                <th className="px-4 py-2 border-b text-center">#</th>
                <th className="px-4 py-2 border-b text-center">Materia</th>
                <th className="px-4 py-2 border-b text-center">Fecha</th>
                <th className="px-4 py-2 border-b text-center">Estado</th>
              </tr>
            </thead>
            <tbody>
              {asistencias.map((a, index) => (
                <tr key={a.id} className="hover:bg-gray-50 text-center">
                  <td className="px-4 py-2 border-b">{index + 1}</td>
                  <td className="px-4 py-2 border-b">{a.materia_nombre}</td>
                  <td className="px-4 py-2 border-b">
                    {new Date(a.fecha).toLocaleDateString("es-BO", {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "2-digit"
                    })}
                  </td>
                  <td className="px-4 py-2 border-b">
                    <span
                      className={`px-2 py-1 rounded-full text-white text-xs ${a.presente ? "bg-green-500" : "bg-red-500"
                        }`}
                    >
                      {a.presente ? "Presente" : "Ausente"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AsistenciasEstudiante;
