
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const participaciones = [
  {
    nombre: 'Juan Pérez',
    registros: [
      { fecha: '2025-05-10', nota: 8, comentario: 'Respondió una pregunta compleja' },
      { fecha: '2025-05-14', nota: 9, comentario: 'Expuso un tema' },
    ]
  },
  {
    nombre: 'María López',
    registros: [
      { fecha: '2025-05-11', nota: 7, comentario: 'Participó en debate' },
    ]
  },
];

const ParticipacionPorMateria = () => {
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = () => setModalAbierto(true);
  const cerrarModal = () => setModalAbierto(false);

  return (
    <div className="p-6">
     <div className="flex items-center justify-between mb-6">
  <h2 className="text-xl font-semibold">📚 Historial de Participaciones - Matemáticas</h2>
  <button
    onClick={abrirModal}
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
  >
    + Agregar Participación
  </button>
</div>

      {/* Tabla de historial de participaciones */}
      <table className="min-w-full border border-gray-300 text-sm mb-6">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Estudiante</th>
            <th className="px-4 py-2">Fecha</th>
            <th className="px-4 py-2">Nota</th>
            <th className="px-4 py-2">Comentario</th>
          </tr>
        </thead>
        <tbody>
          {participaciones.flatMap((alumno, i) =>
            alumno.registros.map((reg, j) => (
              <tr key={`${i}-${j}`} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{j + 1}</td>
                <td className="px-4 py-2">{alumno.nombre}</td>
                <td className="px-4 py-2">{reg.fecha}</td>
                <td className="px-4 py-2">{reg.nota}</td>
                <td className="px-4 py-2">{reg.comentario}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>



      {/* Modal visual */}
      <Modal
        isOpen={modalAbierto}
        onRequestClose={cerrarModal}
        contentLabel="Agregar Participación"
        className="max-w-lg mx-auto mt-24 bg-white p-6 rounded shadow outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start"
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Agregar Participación</h3>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Estudiante</label>
            <select className="w-full border rounded px-2 py-1">
              <option>Juan Pérez</option>
              <option>María López</option>
              <option>Carlos García</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Fecha</label>
            <input
              type="date"
              className="w-full border rounded px-2 py-1 bg-gray-100 text-gray-600"
              defaultValue={new Date().toISOString().split('T')[0]}
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Nota</label>
            <input type="number" className="w-full border rounded px-2 py-1" placeholder="0-10" />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Comentario</label>
            <textarea className="w-full border rounded px-2 py-1" rows="3" placeholder="Descripción breve" />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={cerrarModal}
              className="text-gray-600 hover:text-black px-4 py-2"
            >
              Cancelar
            </button>
            <button
              type="button"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Guardar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};



export default ParticipacionPorMateria;
