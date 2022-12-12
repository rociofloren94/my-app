
import './App.css';
import Presentacion from './Componentes/Presentacion';
import Proyectos from './Componentes/Proyectos';
import NavBar from './Componentes/NavBar';
import Habilidades from './Componentes/Habilidades';




let entrada = prompt("Ingresa tu nombre");
let salida = entrada + " " + "bienvenido/a a mi portfolio!";
alert(salida);





function App() {

  return (
    <div className="App">
      <NavBar/>
      <div className='contenedor-principal'>
      <h1> Mi Portfolio</h1>
      <Presentacion />
      <Proyectos
        pagina='Artes Visuales'
        descripcion='mis estudios en Artes Visuales, donde se podrán ver algunas de mis obras artísticas y contactarme.'
        imagen='artes'
        link='https://rociofloren94.github.io/BAMc42/'
        />
        <Proyectos 
        pagina='E-commerce'
        descripcion='ventas en tienda de ropa deportiva, donde se pueden ver distintos productos ofrecidos por el comercio.'
        imagen='ropa'
        link='https://bootstrap-sand.vercel.app/'
        />
        <Habilidades/>
      </div>
    </div>
  );
}

export default App;
