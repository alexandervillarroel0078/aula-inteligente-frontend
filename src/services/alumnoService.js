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

// 🟢 Funciones del Alumno
export const obtenerPerfilAlumno = async (id) => {
  const response = await api.get(`/api/alumnos/${id}/perfil`);
  return response.data;
};

export const obtenerNotasAlumno = async (id) => {
  const response = await api.get(`/api/alumnos/${id}/notas`);
  return response.data;
};

// Función para obtener las asistencias de un alumno por grado
export const obtenerAsistenciasAlumno = async (alumnoId, gradoId) => {
  try {
    // Llamada a la API con los parámetros en la URL
    const response = await api.get(`/api/alumnos/asistencias?alumno_id=${alumnoId}`);
    return response.data;  // Retorna los datos de la respuesta
  } catch (error) {
    console.error("Error al obtener las asistencias:", error);
    throw error;  // Lanza el error para manejarlo en el componente
  }
};


export const obtenerParticipacionAlumno = async (alumnoId) => {
  try {
    // Llamada a la API con el alumno_id
    const response = await api.get(`/api/alumnos/participacion?alumno_id=${alumnoId}`);
    return response.data;  // Retorna los datos de la respuesta
  } catch (error) {
    console.error("Error al obtener las participaciones:", error);
    throw error;  // Lanza el error para manejarlo en el componente
  }
};


// Función para obtener las materias de un alumno por su ID
export const obtenerMateriasAlumno = async (alumnoId) => {
  try {
    // Hacemos una solicitud GET al endpoint para obtener las materias del alumno
    const response = await api.get(`/api/alumnos/materias?alumno_id=${alumnoId}`);
    
    // Retornamos los datos de la respuesta
    return response.data;
  } catch (error) {
    // Si ocurre un error, lo mostramos en consola y lo lanzamos
    console.error("Error al obtener las materias del alumno:", error);
    throw error;
  }
};

export const obtenerPrediccionesAlumno = async (id) => {
  const response = await api.get(`/api/alumnos/${id}/predicciones`);
  return response.data;
};

export const obtenerHistorialAlumno = async (id) => {
  const response = await api.get(`/api/alumnos/${id}/historial`);
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

