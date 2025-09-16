import titulo from './assets/title.png'

function Inicio({verRecetas}) {

  return (
    <>
      <div>
          <img src={titulo} className="logo" alt="Titulo logo"  onClick={verRecetas}/>
      </div>
      <h1>Mi recetario de cocina</h1>
      <p className="read-the-docs">
        © 2025 Lucía Pérez Aída. Todos los derechos reservados.
      </p>
    </>
  )
}

export default Inicio
