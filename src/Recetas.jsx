import './index.css'
import Receta from './Receta.jsx'

function Recetas({ listaRecetas=[], irANueva }) {
  
  return (
    <div>
        <h1>Lista de recetas</h1>
        {listaRecetas.length == 0 ?(
          <p>No hay recetas</p>
        ):(
        listaRecetas.map(receta =>
            <Receta key={receta.id} listaRecetas={receta}/>
        )
        )}
        <button onClick={irANueva} >Nueva receta</button>
    </div>
    
  )
  
}

export default Recetas
