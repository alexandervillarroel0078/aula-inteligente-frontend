// src/modules/materia/pages/ExportacionesView.jsx
import React from 'react';

const ExportacionesView = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">📤 Exportar Información</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Exportar notas a PDF</li>
        <li>Descargar asistencia en Excel</li>
        <li>Exportar participación en CSV</li>
      </ul>
      <div className="mt-4 bg-gray-100 p-4 rounded text-gray-500 text-sm">
        [ Botones simulados de exportación ]
      </div>
    </div>
  );
};

export default ExportacionesView;
