//pages/profesores/RegistroAsistenciaMateria.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { registrarAsistenciaMasiva, obtenerDetalleEstudiantesMateriaRegistroAsistencia } from '../../services/profesorService';

const RegistroAsistenciaMateria = () => {
  const { gradoId, profesorId } = useParams();
  const [searchParams] = useSearchParams();
  const nivelId = searchParams.get('nivel_id');
  const materiaId = searchParams.get('materia_id');

  const [alumnos, setAlumnos] = useState([]);
  const [fecha, setFecha] = useState(new Date().toISOString().split('T')[0]);
  const [asistencias, setAsistencias] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const cargarAlumnos = async () => {
      try {
        const lista = await obtenerDetalleEstudiantesMateriaRegistroAsistencia(profesorId, materiaId);
        console.log('📦 Params:', { profesorId, gradoId, nivelId, materiaId });

        setAlumnos(lista);
      } catch (error) {
        console.error('❌ Error al obtener estudiantes:', error);
      }
    };

    if (profesorId && materiaId) {
      cargarAlumnos();
    }
  }, [profesorId, materiaId]);


  const manejarCambio = (alumnoId, valor) => {
    setAsistencias((prev) => ({
      ...prev,
      [alumnoId]: valor
    }));
  };

  const enviarRegistro = async () => {
    const datos = Object.entries(asistencias).map(([alumnoId, valor]) => ({
      alumno_id: parseInt(alumnoId),
      grado_id: parseInt(gradoId),
      periodo_id: 10,
      tipo: 'asistencia',
      valor: parseFloat(valor),
      fecha,
      materia_id: parseInt(materiaId),
      observaciones:
        valor >= 95
          ? 'Presente'
          : valor >= 80
            ? 'Llegó tarde'
            : valor >= 50
              ? 'Muy tarde'
              : 'Ausente'
    }));

    try {
      await registrarAsistenciaMasiva(datos);
      alert('✅ Asistencia registrada correctamente');
      navigate(-1);
    } catch (err) {
      alert('❌ Error: ' + err.message);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-blue-800">
        Registro de Asistencia – Grado {gradoId}
      </h2>

      <label className="block mb-2 text-sm text-gray-700">
        Fecha:{' '}
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="border px-2 py-1 rounded"
        />
      </label>

      <table className="min-w-full mt-4 bg-white border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-3 py-2 border">#</th>
            <th className="px-3 py-2 border">Nombre</th>
            <th className="px-3 py-2 border">Apellido</th>
            <th className="px-3 py-2 border">Valor (%)</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((a, i) => (
            <tr key={a.id}>
              <td className="border px-2 py-1 text-center">{i + 1}</td>
              <td className="border px-2 py-1 text-center">{a.nombre}</td>
              <td className="border px-2 py-1 text-center">{a.apellido}</td>
              <td className="border px-2 py-1 text-center">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={asistencias[a.id] || ''}
                  onChange={(e) => manejarCambio(a.id, e.target.value)}
                  className="w-20 border rounded px-2 py-1 text-center"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={enviarRegistro}
        className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        ✅ Registrar Asistencias
      </button>

      <button
        onClick={() => navigate(-1)}
        className="mt-4 px-4 py-2 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
      >
        ⬅️ Volver
      </button>
    </div>
  );
};

export default RegistroAsistenciaMateria;
