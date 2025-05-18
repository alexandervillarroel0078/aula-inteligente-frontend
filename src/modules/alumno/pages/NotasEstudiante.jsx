import React from 'react';

const notas = [
  {
    materia: 'Matemáticas',
    periodo: 'Bimestre 1',
    nota: 78,
    observacion: 'Buen desempeño',
  },
  {
    materia: 'Lenguaje',
    periodo: 'Bimestre 1',
    nota: 85,
    observacion: 'Participación destacada',
  },
  {
    materia: 'Historia',
    periodo: 'Bimestre 1',
    nota: 52,
    observacion: 'Debe reforzar lectura',
  },
];

const getNotaColor = (nota) => {
  if (nota >= 80) return 'bg-green-600';
  if (nota >= 60) return 'bg-yellow-500';
  return 'bg-red-600';
};

const NotasEstudiante = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-4">📝 Notas por Materia y Periodo</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Materia</th>
              <th className="px-4 py-2 text-left">Periodo</th>
              <th className="px-4 py-2 text-left">Nota</th>
              <th className="px-4 py-2 text-left">Observación</th>
            </tr>
          </thead>
          <tbody>
            {notas.map((item, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{item.materia}</td>
                <td className="px-4 py-2">{item.periodo}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full text-white font-semibold text-sm ${getNotaColor(
                      item.nota
                    )}`}
                  >
                    {item.nota}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">{item.observacion || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Esta tabla muestra las calificaciones por materia y periodo. Los colores indican desempeño general.
      </p>
    </div>
  );
};

export default NotasEstudiante;
