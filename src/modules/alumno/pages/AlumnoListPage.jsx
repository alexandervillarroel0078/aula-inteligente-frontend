import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAlumnos } from '../../../services/alumnoService';
import TablaAlumnos from '../../../components/TablaAlumnos';

const AlumnoListPage = () => {
  const [alumnos, setAlumnos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlumnos = async () => {
      try {
        const data = await getAlumnos();
        setAlumnos(data);  // <- guarda los datos
      } catch (error) {
        console.error("Error al cargar alumnos", error);
      }
    };

    fetchAlumnos();
  }, []);

  const handleVerAlumno = (alumno) => {
    navigate('/panel/alumnos/ver', { state: { alumno } });
  };

  return (
    <div className="p-6">

      {/* Encabezado y botón */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Listado de Alumnos Inscritos</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">+ Inscribir Alumno</button>
      </div>

      {/* Herramientas de búsqueda y filtros */}
      <div className="bg-white border p-4 rounded shadow mb-4">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <input type="text" placeholder="Buscar alumno..." className="border px-4 py-2 rounded w-full sm:w-1/3" />
          <div className="flex gap-2">
            <button className="bg-green-600 text-white px-4 py-2 rounded">Exportar</button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded">Filtros</button>
          </div>
        </div>
      </div>

      {/* Tabla */}
      <TablaAlumnos
        alumnos={alumnos}
        onVer={handleVerAlumno}
        onEditar={(alumno) => console.log('Editar', alumno)}
        onEliminar={(alumno) => console.log('Eliminar', alumno)}
      />

    </div>
  );
};

export default AlumnoListPage;
