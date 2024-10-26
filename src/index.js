import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Asegúrate de que este archivo exista o quítalo si no lo necesitas
import App from './App'; // Ajusta la ruta si tu App.js está en la carpeta src
import reportWebVitals from './reportWebVitals'; // Si no usas esto, puedes eliminar esta línea

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si quieres medir el rendimiento de tu aplicación, puedes dejar esto
reportWebVitals();
