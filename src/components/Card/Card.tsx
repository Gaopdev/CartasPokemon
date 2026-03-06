import "./card.css" //Importamos el css del componente Card

interface Props{
    imagen: string, //Propiedad que recibe la imagen del pokemon, es cadena de texto
    nombre: string, //Propiedad que recibe el nombre del pokemon, es cadena de texto
    descripcion: string, //Propiedad que recibe la descripción del pokemon, es cadena de texto
    texto: string, //Propiedad que recibe el texto del botón, es cadena de texto
    
    accion:()=>void, //Propiedad que recibe una función que se ejecuta al hacer clic en el botón, es una función sin parámetros que no devuelve nada

    estado:boolean //Propiedad que recibe el estado del pokemon, es un valor booleano que indica si es shiny o no
}
function Card({imagen,nombre,descripcion,texto,accion,estado}:Props){
    return(
        <div className="card-container">
            <div className={`card ${estado?"card-evo":"card-normal"}`} >
                <img src={imagen} alt=""/>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <span onClick={accion}>{texto}</span>
            </div>
        </div>
    )
} //Componente Card, es un componente funcional que recibe las propiedades

export default Card;