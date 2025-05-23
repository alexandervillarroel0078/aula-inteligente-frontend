import api from './api';

// GET - Listar todas las predicciones
export const listarPredicciones = async () => {
  const response = await api.get('/api/predicciones');
  return response.data;
};

// GET - Ver una predicción por ID
export const verPrediccion = async (id) => {
  const response = await api.get(`/api/predicciones/${id}`);
  return response.data;
};

// POST - Crear una nueva predicción
export const crearPrediccion = async (data) => {
  const response = await api.post('/api/predicciones', data);
  return response.data;
};

// PUT - Editar una predicción
export const editarPrediccion = async (id, data) => {
  const response = await api.put(`/api/predicciones/${id}`, data);
  return response.data;
};

// DELETE - Eliminar una predicción
export const eliminarPrediccion = async (id) => {
  const response = await api.delete(`/api/predicciones/${id}`);
  return response.data;
};
