import './index.css'

function Receta({ listaRecetas }){
    return(
        <div className="thumbnail">
            <h3>{listaRecetas.titulo}</h3>
            <p>{listaRecetas.descripcion}</p>
        </div>
    )
}

export default Receta