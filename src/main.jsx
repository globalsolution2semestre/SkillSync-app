import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Importando o arquivo que estou te enviando
import './index.css'      // Seu CSS do Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)