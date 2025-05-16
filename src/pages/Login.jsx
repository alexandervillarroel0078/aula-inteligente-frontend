import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", {
        nombre_usuario: correo,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/panel");

    } catch (err) {
      setMensaje("❌ Credenciales incorrectas o error de conexión");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-200 to-yellow-200 flex items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden max-w-4xl w-full">
        {/* IZQUIERDA */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-purple-500 text-white p-10 w-1/2">
          <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
          <p className="text-sm text-center">To keep connected with us please login with your personal information</p>
        </div>

        {/* DERECHA: FORMULARIO */}
        <div className="w-full md:w-1/2 bg-white/20 p-8 backdrop-blur-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-1 text-center">Login</h2>
          <p className="text-sm text-gray-600 text-center mb-6">Sign in to your account</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Username / Email"
                className="w-full px-4 py-2 rounded-full border border-gray-300 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded-full border border-gray-300 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <button type="button" className="text-blue-600 hover:underline">Forgot password?</button>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-semibold transition"
            >
              Login
            </button>
          </form>

          {mensaje && (
            <p className="text-red-600 mt-4 text-center">{mensaje}</p>
          )}

          <p className="text-sm text-center mt-4 text-gray-600">
            Don’t have an account?{" "}
            <button type="button" className="text-blue-600 font-semibold hover:underline">Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
