import api from './api';

// GET - Listar todos los alumnos
export const listarAlumnos = async () => {
  const response = await api.get('/api/alumnos');
  return response.data;
};

// GET - Ver un alumno por ID
export const verAlumno = async (id) => {
  const response = await api.get(`/api/alumnos/${id}`);
  return response.data;
};

// POST - Crear un nuevo alumno
export const crearAlumno = async (alumnoData) => {
  const response = await api.post('/api/alumnos', alumnoData);
  return response.data;
};

// PUT - Editar un alumno
export const editarAlumno = async (id, alumnoData) => {
  const response = await api.put(`/api/alumnos/${id}`, alumnoData);
  return response.data;
};

// DELETE - Eliminar un alumno
export const eliminarAlumno = async (id) => {
  const response = await api.delete(`/api/alumnos/${id}`);
  return response.data;
};
