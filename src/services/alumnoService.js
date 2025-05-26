import api from './api';

// CRUD Básico
export const listarAlumnos = async () => {
  const response = await api.get('/api/alumnos/');
  return response.data;
};

export const verAlumno = async (id) => {
  const response = await api.get(`/api/alumnos/${id}`);
  return response.data;
};

export const crearAlumno = async (data) => {
  const response = await api.post('/api/alumnos/', data);
  return response.data;
};

export const editarAlumno = async (id, data) => {
  const response = await api.put(`/api/alumnos/${id}`, data);
  return response.data;
};

export const eliminarAlumno = async (id) => {
  const response = await api.delete(`/api/alumnos/${id}`);
  return response.data;
};

// Funciones del Alumno
export const obtenerPerfilAlumno = async (id) => {
  const response = await api.get(`/api/alumnos/${id}/perfil`);
  return response.data;
};

export const obtenerNotasAlumno = async (id) => {
  const response = await api.get(`/api/alumnos/${id}/notas`);
  return response.data;
};

export const obtenerAsistenciasAlumno = async (id) => {
  const response = await api.get(`/api/alumnos/${id}/asistencias`);
  return response.data;
};

export const obtenerParticipacionesAlumno = async (id) => {
  const response = await api.get(`/api/alumnos/${id}/participaciones`);
  return response.data;
};

export const obtenerPrediccionesAlumno = async (id) => {
  const response = await api.get(`/api/alumnos/${id}/predicciones`);
  return response.data;
};

export const obtenerHistorialAlumno = async (id) => {
  const response = await api.get(`/api/alumnos/${id}/historial`);
  return response.data;
};

export const obtenerMateriasAlumno = async (id) => {
  const response = await api.get(`/api/alumnos/${id}/materias`);
  return response.data;
};

// 🟢 Obtener nota por alumno y materia
export const obtenerNotasPorMateria = async (alumnoId, materiaId) => {
  const response = await api.get(`/api/alumnos/${alumnoId}/materias/${materiaId}/notas`);
  return response.data;
};

// 🟢 Obtener asistencias por alumno y materia
export const obtenerAsistenciasPorMateria = async (alumnoId, materiaId) => {
  const response = await api.get(`/api/alumnos/${alumnoId}/materias/${materiaId}/asistencias`);
  return response.data;
};

// 🟢 Obtener asistencia total por alumno, materia y periodo
export const obtenerAsistenciaTotal = async (alumnoId, materiaId, periodoId) => {
  const response = await api.get(`/api/alumnos/${alumnoId}/materias/${materiaId}/periodos/${periodoId}/asistencia`);
  return response.data;
};

// Servicio para obtener el detalle de la asistencia
export const obtenerDetalleAsistencia = async (alumnoId, materiaId, periodoId) => {
  const response = await api.get(`/api/alumnos/${alumnoId}/materias/${materiaId}/periodos/${periodoId}/asistencia/detalle`);
  return response.data;
};

