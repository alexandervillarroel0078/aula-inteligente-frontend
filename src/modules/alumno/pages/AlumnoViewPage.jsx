import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaCommentDots } from 'react-icons/fa';
import TabsPerfilEstudiante from './TabsPerfilEstudiante';

const AlumnoViewPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const alumno = location.state?.alumno || {
    id: 1,
    nombre_completo: 'Juan Carlos Pérez',
    fecha_nacimiento: '2008-04-12',
    genero: 'Masculino',
    email: 'juan.perez@gmail.com',
    telefono: '71234567',
    direccion: 'Calle Bolívar #123, Zona Central',
    grado: '5to de Secundaria',
    grupo: 'B',
    fecha_registro: '2024-02-01',
    estado: 'Activo',
    ciudad: 'Santa Cruz',
    pais: 'Bolivia',
    zona_horaria: 'America/La_Paz',
    rol: 'Estudiante',
    cursos: [
      '[1-2025] Sistemas de Información I - SA',
      '[1-2025] Preparación y Evaluación de Proyectos - SI',
      '[1-2025] Sistemas de Información II - SA'
    ]
  };

  return (
    <div className="p-6">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-700">
            {alumno.nombre_completo?.charAt(0) || 'A'}
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            {alumno.nombre_completo || 'Estudiante'}
          </h1>
        </div>

        <div className="flex items-center gap-2 text-gray-800 hover:text-black cursor-pointer">
          <FaCommentDots className="text-lg" />
          <span className="text-sm font-medium">Mensaje</span>
        </div>
      </div>

      {/* Tabs con todas las secciones del estudiante */}
      <TabsPerfilEstudiante alumno={alumno} />
    </div>
  );
};

export default AlumnoViewPage;
