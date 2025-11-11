import './index.css'
import { useState } from 'react';

function nuevaReceta(){
    const [receta, setReceta] = useState({titulo:"", descripcion:""});


//nuevo objeto, copia lo anterior y lo reemplaza
function actualizarCampo( campo, valor ){
    setReceta({
        ...receta,
        [campo]:valor
    })
}


    return(
        <div>
            <h1>Nueva receta</h1>
            <h3>Título</h3>
            <input 
                type="text"
                value={receta.titulo} //valor actual
                onChange={(e) => actualizarCampo("titulo", e.target.value)}/>

            <h3>Descripción</h3>
            <textarea 
                value={receta.descripcion}
                onChange={(e) => actualizarCampo("descripcion", e.target.value)}/>

            {/* <button onClick={guardarReceta}>Guardar receta</button> */}
        </div>
    );
}


export default nuevaReceta