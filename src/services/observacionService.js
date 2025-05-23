import api from './api';

// GET - Listar todas las observaciones
export const listarObservaciones = async () => {
  const response = await api.get('/api/observaciones');
  return response.data;
};

// GET - Ver una observación por ID
export const verObservacion = async (id) => {
  const response = await api.get(`/api/observaciones/${id}`);
  return response.data;
};

// POST - Crear una nueva observación
export const crearObservacion = async (data) => {
  const response = await api.post('/api/observaciones', data);
  return response.data;
};

// PUT - Editar una observación
export const editarObservacion = async (id, data) => {
  const response = await api.put(`/api/observaciones/${id}`, data);
  return response.data;
};

// DELETE - Eliminar una observación
export const eliminarObservacion = async (id) => {
  const response = await api.delete(`/api/observaciones/${id}`);
  return response.data;
};
