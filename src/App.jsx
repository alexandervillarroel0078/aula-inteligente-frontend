 // src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Bienvenido from './pages/Bienvenido';
import App from './App.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/bienvenido" element={<Bienvenido />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
