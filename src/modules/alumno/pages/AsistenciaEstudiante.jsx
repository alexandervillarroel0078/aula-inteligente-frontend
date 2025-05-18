import React from 'react';

const asistencias = [
  {
    fecha: '2025-05-01',
    curso: '5to de Secundaria',
    grupo: 'B',
    materia: 'Matemáticas',
    estado: 'Presente',
    observacion: 'Participó activamente',
  },
  {
    fecha: '2025-05-01',
    curso: '5to de Secundaria',
    grupo: 'B',
    materia: 'Lenguaje',
    estado: 'Ausente',
    observacion: 'Faltó sin aviso',
  },
  {
    fecha: '2025-05-02',
    curso: '5to de Secundaria',
    grupo: 'B',
    materia: 'Historia',
    estado: 'Justificado',
    observacion: 'Presentó justificativo médico',
  },
  {
    fecha: '2025-05-03',
    curso: '5to de Secundaria',
    grupo: 'B',
    materia: 'Ciencias Naturales',
    estado: 'Presente',
    observacion: '',
  },
];

const AsistenciaEstudiante = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-4">📅 Historial de Asistencia por Materia</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Fecha</th>
              <th className="px-4 py-2 text-left">Curso</th>
              <th className="px-4 py-2 text-left">Grupo</th>
              <th className="px-4 py-2 text-left">Materia</th>
              <th className="px-4 py-2 text-left">Estado</th>
              <th className="px-4 py-2 text-left">Observación</th>
            </tr>
          </thead>
          <tbody>
            {asistencias.map((item, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{item.fecha}</td>
                <td className="px-4 py-2">{item.curso}</td>
                <td className="px-4 py-2">{item.grupo}</td>
                <td className="px-4 py-2">{item.materia}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-white text-sm ${
                      item.estado === 'Presente'
                        ? 'bg-green-600'
                        : item.estado === 'Ausente'
                        ? 'bg-red-600'
                        : 'bg-yellow-500'
                    }`}
                  >
                    {item.estado}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {item.observacion || '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Este es solo un diseño visual. El registro real será manejado por el backend.
      </p>
    </div>
  );
};

export default AsistenciaEstudiante;
