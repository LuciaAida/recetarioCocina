import Inicio from './Inicio.jsx'
import Recetas from './Recetas.jsx'
import NuevaReceta from './NuevaReceta.jsx'
import './App.css'
import { useState } from 'react'


function App() {
  const recetasIniciales = [ 
    { id: 1, titulo: "Tortilla de patatas", descripcion: "Clásica tortilla española" }, 
    { id: 2, titulo: "Ensalada César", descripcion: "Lechuga, pollo y aderezo César" }, 
    { id: 3, titulo: "Brownie de chocolate", descripcion: "Postre delicioso y chocolatoso" } 
  ]

  const [listaRecetas, setListaRecetas] = useState(recetasIniciales)
  const [mostrarNueva, setMostrarNueva] = useState(false)
  const [mostrarInicio, setMostrarInicio] = useState(true);
  
  const guardarReceta = (nueva) =>{
    setListaRecetas([
        ...listaRecetas,
        nueva
      ])
    setMostrarNueva(false) //vuelve a la lista
  }
  return (
    <>
    {mostrarInicio && <Inicio verRecetas={() => setMostrarInicio(false)} />}
    
    {!mostrarInicio &&  mostrarNueva ?
      <NuevaReceta guardarReceta={guardarReceta} cancelar={() => setMostrarNueva(false)}/>
      : <Recetas listaRecetas={listaRecetas} irANueva={() => setMostrarNueva(true)} />}
    </>

  )
}

export default App
