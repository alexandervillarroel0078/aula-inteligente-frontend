import api from './api';

// GET - Listar todos los profesores
export const listarProfesores = async () => {
  const response = await api.get('/api/profesores');
  return response.data;
};

// GET - Obtener un profesor por ID
export const obtenerProfesor = async (id) => {
  const response = await api.get(`/api/profesores/${id}`);
  return response.data;
};

export const obtenerMateriasDelProfesor = async (profesorId) => {
  try {
    const response = await api.get(`/api/profesores/${profesorId}/materias`);
    return response.data;
  } catch (error) {
    console.error('❌ Error al obtener materias del profesor:', error);
    throw error;
  }
};

export const obtenerNotasPorMateria = async (materiaId) => {
  try {
    const response = await api.get(`/api/materias/${materiaId}/notas`);
    return response.data;
  } catch (error) {
    console.error('❌ Error al obtener notas por materia:', error);
    throw error;
  }
};

export const obtenerAsistenciasPorMateria = async (materiaId) => {
  try {
    const response = await api.get(`/api/materias/${materiaId}/asistencias`);
    return response.data;
  } catch (error) {
    console.error('❌ Error al obtener asistencias por materia:', error);
    throw error;
  }
};

// sObtener participaciones por materia
export const obtenerParticipacionesPorMateria = async (materiaId) => {
  try {
    const response = await api.get(`/api/materias/${materiaId}/participaciones`);
    return response.data;
  } catch (error) {
    console.error('❌ Error al obtener participaciones por materia:', error);
    throw error;
  }
};

// 🔹 Obtener estudiantes por materia
export const obtenerEstudiantesPorMateria = async (materiaId) => {
  try {
    const response = await api.get(`/api/materias/${materiaId}/estudiantes`);
    return response.data;
  } catch (error) {
    console.error('❌ Error al obtener estudiantes por materia:', error);
    throw error;
  }
};




