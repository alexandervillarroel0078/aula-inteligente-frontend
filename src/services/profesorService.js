import api from './api';
import axios from 'axios';
export const listarProfesores = async () => {
  const response = await api.get('/api/profesores');
  return response.data;
};

export const obtenerProfesor = async (id) => {
  const response = await api.get(`/api/profesores/${id}`);
  return response.data;
};

export const obtenerMateriasDelProfesor = async (profesorId) => {
  const response = await api.get(`/api/profesores/${profesorId}/materias`);
  return response.data;
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

export const obtenerAsistenciasPorProfesorMateriaGrado = async (profesorId, materiaId, gradoId, periodoId = null) => {
  let url = `/api/asistencias/profesor/alumno?profesor_id=${profesorId}&materia_id=${materiaId}&grado_id=${gradoId}`;
  if (periodoId) {
    url += `&periodo_id=${periodoId}`;
  }
  const response = await api.get(url);
  return response.data;
};

export const obtenerEstudiantesPorMateria = async (materiaId) => {
  const response = await api.get(`/api/materias/${materiaId}/estudiantes`);
  return response.data;
};




