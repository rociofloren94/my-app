import React from 'react';
import '../hojas-de-estilo/NavBar.css';


function NavBar () {
    return (
        <nav className='contenedor-nav'>
            <div className='contenedor-texto-nav'>
            <p className='inicio-nav' >Inicio</p>
            <p className='proyectos-nav' >Proyectos</p>
            </div>
        </nav>
    )
}


export default NavBar