import './index.css'

function Receta({ receta }){
    return(
        <div className="thumbnail">
            <h3>{receta.titulo}</h3>
            <p>{receta.descripcion}</p>
        </div>
    )
}

function Recetas({ anyadirReceta }) {
  const recetas = [
    { id: 1, titulo: "Tortilla de patatas", descripcion: "Clásica tortilla española" },
    { id: 2, titulo: "Ensalada César", descripcion: "Lechuga, pollo y aderezo César" },
    { id: 3, titulo: "Brownie de chocolate", descripcion: "Postre delicioso y chocolatoso" }
  ]

  return (
    <div>
        <h1>Lista de recetas</h1>
        {recetas.map(receta =>
            <Receta key={receta.id} receta={receta}/>
        )}
        <button onClick={anyadirReceta} >Nueva receta</button>
    </div>
  )
}

export default Recetas
