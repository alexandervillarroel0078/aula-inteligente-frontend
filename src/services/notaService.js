import api from './api';

// GET - Listar todas las notas
export const listarNotas = async () => {
  const response = await api.get('/api/notas');
  return response.data;
};

// GET - Ver una nota por ID
export const verNota = async (id) => {
  const response = await api.get(`/api/notas/${id}`);
  return response.data;
};

// POST - Crear una nueva nota
export const crearNota = async (notaData) => {
  const response = await api.post('/api/notas', notaData);
  return response.data;
};

// PUT - Editar una nota
export const editarNota = async (id, notaData) => {
  const response = await api.put(`/api/notas/${id}`, notaData);
  return response.data;
};

// DELETE - Eliminar una nota
export const eliminarNota = async (id) => {
  const response = await api.delete(`/api/notas/${id}`);
  return response.data;
};
