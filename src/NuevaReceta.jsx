import './index.css'
import { useState } from 'react';

function nuevaReceta({ guardarReceta, cancelar }){
    const [receta, setReceta] = useState({titulo:"", descripcion:""});

    //nuevo objeto, copia lo anterior y lo reemplaza
    const actualizarCampo = (campo, valor) => {
        setReceta({ ...receta, [campo]: valor })
    }

    function volverALista() {
        setReceta({ titulo: "", descripcion: "" }); // limpia los campos
        cancelar(); 
    }

    const handleGuardar = () =>{
        const nueva = {id: Date.now(), ...receta}
        guardarReceta(nueva)
    }

    return(
        <div>
            <h1>Nueva receta</h1>
            <file
            />
            <h3>Título</h3>
            <input 
                type="text"
                value={receta.titulo} //valor actual
                onChange={(e) => actualizarCampo("titulo", e.target.value)}/>

            <h3>Descripción</h3>
            <textarea 
                value={receta.descripcion}
                onChange={(e) => actualizarCampo("descripcion", e.target.value)}/>

            <button onClick={handleGuardar}>Guardar receta</button>
            <button onClick={volverALista}>Volver</button>
        </div>
    );
}


export default nuevaReceta