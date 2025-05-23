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

// POST - Crear un nuevo profesor
export const crearProfesor = async (data) => {
  const response = await api.post('/api/profesores', data);
  return response.data;
};

// PUT - Actualizar un profesor
export const actualizarProfesor = async (id, data) => {
  const response = await api.put(`/api/profesores/${id}`, data);
  return response.data;
};

// DELETE - Eliminar un profesor
export const eliminarProfesor = async (id) => {
  const response = await api.delete(`/api/profesores/${id}`);
  return response.data;
};
