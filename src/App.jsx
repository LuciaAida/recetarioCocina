import Inicio from './Inicio.jsx'
import Recetas from './Recetas.jsx'
import NuevaReceta from './NuevaReceta.jsx'
import './App.css'
import { useState } from 'react'

function App() {
  const [mostrarRecetas, setMostrarRecetas] = useState(false);
  const [mostrarAnyadirRecetas, setMostrarAnyadirRecetas] = useState(false);

  return (
    <>
      { !mostrarRecetas && !mostrarAnyadirRecetas && (
        <Inicio verRecetas={() => setMostrarRecetas(true)} />
      )}

      { mostrarRecetas && !mostrarAnyadirRecetas && (
        <Recetas anyadirReceta={() => setMostrarAnyadirRecetas(true)} />
      )}

      { mostrarAnyadirRecetas && (
        <NuevaReceta guardar={() => setMostrarAnyadirRecetas(false)} />
      )}
    </>
  )
}

export default App
