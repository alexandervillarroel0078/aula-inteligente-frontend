// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // cambia esto según tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
