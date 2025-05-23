import api from './api';

// GET - Listar todas las participaciones
export const listarParticipaciones = async () => {
  const response = await api.get('/api/participaciones');
  return response.data;
};

// GET - Ver una participación por ID
export const verParticipacion = async (id) => {
  const response = await api.get(`/api/participaciones/${id}`);
  return response.data;
};

// POST - Crear una nueva participación
export const crearParticipacion = async (data) => {
  const response = await api.post('/api/participaciones', data);
  return response.data;
};

// PUT - Editar una participación
export const editarParticipacion = async (id, data) => {
  const response = await api.put(`/api/participaciones/${id}`, data);
  return response.data;
};

// DELETE - Eliminar una participación
export const eliminarParticipacion = async (id) => {
  const response = await api.delete(`/api/participaciones/${id}`);
  return response.data;
};
