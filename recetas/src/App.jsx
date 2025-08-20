import titulo from './assets/title.png'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="src/add.jsx" target="_blank">
          <img src={titulo} className="logo" alt="Titulo logo" />
        </a>
      </div>
      <h1>Mi recetario de cocina</h1>
      <p className="read-the-docs">
        © 2025 Lucía Pérez Aída. Todos los derechos reservados.
      </p>
    </>
  )
}

export default App
