import React from 'react';
import '../hojas-de-estilo/Habilidades.css'

function Habilidades () {
    return (
        <div className='contenedor-habilidades'>
            <div className='cont-habilidades-titulo'>
                <p className='habilidades-titulo'>Habilidades</p>
            </div>
            <div className='cont-habilidades-imagenes' >
            <img className='imagen-habilidades-1'
            src={require('../Imagenes/vectorweb.jpg')}
            alt='web logo'/>
            <img className='imagen-habilidades-2'
            src={require('../Imagenes/vectorresponsive.jpg')}
            alt='responsive logo'/>
            <img className='imagen-habilidades-3'
            src={require('../Imagenes/vectorservidor.jpg')}
            alt='servidor logo'/>
            </div>

        </div>
    )


}

export default Habilidades