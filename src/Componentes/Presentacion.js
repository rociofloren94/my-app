import React from 'react';
import '../hojas-de-estilo/Presentacion.css'

function Presentacion() {
    return (
        <div className='contenedor-presentacion'>
            <img className='imagen-presentacion'
            src={require('../Imagenes/bird-g2036da5fc_1280.png')}
            alt='Imagen Kawaii'/>
            <div className='contenedor-texto-presentacion'>
                <p className='nombre-presentacion'>Rocio Florencia</p>
                <p className='acerca-presentacion'>Acerca de mí</p>
                <p className='texto-presentacion'>¡Hola! Soy Rocio, soy profesora de Artes y durante la
                cursada de mi carrera conocí distintas herramientas informáticas que me despertaron interés 
                en las nuevas tecnologías. Es por esto que actualmente me encuentro estudiando Desarrollo Web
                especializándome en Front-End. Este es mi portfolio y en él se encontrarán mis proyectos. </p>
            </div>
        </div>

    )
}

export default Presentacion;

//exportacion nombrada: export va arriba: export function Presentacion (){}
//en el archivo app.js va import { Presentacion } from ...todo igual
//exportacion nombrada permite exportar varias partes de un mismo archivo