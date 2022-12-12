import React from 'react';
import '../hojas-de-estilo/Proyectos.css'


function Proyectos(props) {
    return (
        <div className='contenedor-proyectos'>
            <img className='imagen-proyectos'
            src={require(`../Imagenes/imagen-${props.imagen}.jpg`)}
            alt='imagen-arte' />
            <div className='contenedor-texto-proyectos'>
                <p className='nombre-proyecto'>{props.pagina}</p>
                <p className='texto-proyecto'>Proyecto de página web sobre {props.descripcion}</p>
                <p className='link-proyecto' >Link al proyecto: {props.link} </p>
            </div>
        </div>
    )
}




export default Proyectos