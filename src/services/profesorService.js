import api from './api';

//funciona
export const listarProfesores = async () => {
  const response = await api.get('/api/profesores');
  return response.data;
};
//funciona
export const obtenerProfesor = async (id) => {
  const response = await api.get(`/api/profesores/${id}`);
  return response.data;
};

//funciona
export const obtenerMateriasDelProfesor = async (profesorId) => {
  const response = await api.get(`/api/profesores/${profesorId}/materias`);
  return response.data;
};
//fuciona
export const obtenerAsistenciasPorGrado = async (gradoId, profesorId, nivelId) => {
  const url = `/api/asistencias/por-grado?grado_id=${gradoId}&profesor_id=${profesorId}&nivel=${nivelId}`;
  const response = await api.get(url);
  return response.data;
};
//funciona
export const obtenerEstudiantesPorMateria = async (profesorId, materiaId) => {
  const response = await api.get(`/api/profesores/${profesorId}/materias/${materiaId}/estudiantes`);
  return response.data;
};

export const obtenerParticipacionesPorGrado = async (gradoId, profesorId, nivelId) => {
  try {
    const url = `/api/participaciones/por-grado?grado_id=${gradoId}&profesor_id=${profesorId}&nivel_id=${nivelId}`;
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('Error al obtener participaciones:', error);
    throw error;
  }
};
//proceso
export const obtenerParticipacionesPorMateria = async (gradoId, profesorId, nivelId, materiaId) => {
  try {
    const url = `/api/participaciones/por-materia-grado?grado_id=${gradoId}&profesor_id=${profesorId}&nivel_id=${nivelId}&materia_id=${materiaId}`;
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('Error al obtener participaciones por materia:', error);
    throw error;
  }
};
//funciona
export const obtenerNotasPorMateriaYGrado = async (gradoId, profesorId, nivelId, materiaId) => {
  try {
    const url = `/api/notas/por-materia-grado?grado_id=${gradoId}&profesor_id=${profesorId}&nivel_id=${nivelId}&materia_id=${materiaId}`;
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las notas por materia y grado:', error);
    throw error;
  }
};








export const obtenerNotasPorMateriaProfesorGrado = async (profesorId, materiaId, gradoId, periodoId = null) => {
  let url = `/api/notas/profesor?profesor_id=${profesorId}&materia_id=${materiaId}&grado_id=${gradoId}`;
  if (periodoId) {
    url += `&periodo_id=${periodoId}`;
  }
  const response = await api.get(url);
  return response.data;
};

export const obtenerParticipacionPorProfesorMateriaGrado = async (profesorId, materiaId, gradoId, periodoId = null) => {
  let url = `/api/participaciones/profesor?profesor_id=${profesorId}&materia_id=${materiaId}&grado_id=${gradoId}`;
  if (periodoId) {
    url += `&periodo_id=${periodoId}`;
  }
  const response = await api.get(url);
  return response.data;
};







