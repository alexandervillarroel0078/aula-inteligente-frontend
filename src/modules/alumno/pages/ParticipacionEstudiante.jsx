import React from 'react';

const participaciones = [
  {
    fecha: '2025-05-01',
    curso: '5to de Secundaria',
    grupo: 'B',
    materia: 'Matemáticas',
    tipo: 'Activa',
    observacion: 'Respondió correctamente a varias preguntas.',
  },
  {
    fecha: '2025-05-02',
    curso: '5to de Secundaria',
    grupo: 'B',
    materia: 'Lenguaje',
    tipo: 'Baja',
    observacion: 'No participó en la clase.',
  },
  {
    fecha: '2025-05-03',
    curso: '5to de Secundaria',
    grupo: 'B',
    materia: 'Historia',
    tipo: 'Media',
    observacion: 'Respondió cuando se le preguntó directamente.',
  },
];

const ParticipacionEstudiante = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-4">💬 Registro de Participación por Materia</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Fecha</th>
              <th className="px-4 py-2 text-left">Curso</th>
              <th className="px-4 py-2 text-left">Grupo</th>
              <th className="px-4 py-2 text-left">Materia</th>
              <th className="px-4 py-2 text-left">Nivel de Participación</th>
              <th className="px-4 py-2 text-left">Observación</th>
            </tr>
          </thead>
          <tbody>
            {participaciones.map((p, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{p.fecha}</td>
                <td className="px-4 py-2">{p.curso}</td>
                <td className="px-4 py-2">{p.grupo}</td>
                <td className="px-4 py-2">{p.materia}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-white text-sm ${
                      p.tipo === 'Activa'
                        ? 'bg-green-600'
                        : p.tipo === 'Media'
                        ? 'bg-yellow-500'
                        : 'bg-red-600'
                    }`}
                  >
                    {p.tipo}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">{p.observacion || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Este es un diseño visual de las participaciones registradas. El almacenamiento será manejado por backend.
      </p>
    </div>
  );
};

export default ParticipacionEstudiante;
