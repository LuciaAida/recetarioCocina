import { useState } from 'react'
import './index.css'
import Receta from './Receta.jsx'

function Recetas({ listaRecetas=[], irANueva }) {
  const[filtroTexto, setFiltroTexto] = useState('')
  
    const recetasFiltradas = listaRecetas.filter(re =>
      re.titulo.toLowerCase().indexOf(
         filtroTexto.toLowerCase()
      ) !== -1)

  return (
    <div>
        <BuscarRec 
          filtroTexto ={filtroTexto}
          onFiltroTextoCambia = {setFiltroTexto}
        />

        <h1>Lista de recetas</h1>

        {listaRecetas.length === 0 && <p>No hay recetas</p>}
        
        {recetasFiltradas.map(r => <Receta key={r.id} listaRecetas={r}/>)})
        
        <button onClick={irANueva} >Nueva receta</button>
    </div>
    
  )
  
}
function BuscarRec({filtroTexto, onFiltroTextoCambia}){
  return (
    <form>
      <input 
        type="text" 
        value={filtroTexto} 
        placeholder="Buscar..."
        onChange={(e) => onFiltroTextoCambia(e.target.value)}
        />
    </form>
  );
}

export default Recetas
