//import { POKEMON_MOCK } from "../data"
import { useState, useEffect } from "react"
import type { Pokemon } from "../types"

const usePokemons =() =>{
    //Manejo de estado
    //const [pokemons, setPokemon] = useState(POKEMON_MOCK)
    const [filtro, setFiltro] = useState("") //Estado para el filtro de búsqueda, que se inicializa como una cadena vacía
    const [pokemons, setPokemon] = useState<Pokemon[]>([])
    const traerPokemons = async()=>{
        try{
            //Mensajer que va por los datos
            const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100') //URL de la API de pokemon, con un límite de 20 pokemons
            //Paquete que vamos a abrir
            const datos = await respuesta.json() //Se convierte la respuesta a un JSON, que es un formato de datos que se puede manipular en JavaScript
            //Usar map para selecionar sololos datos que quiero
            const listadoReal = datos.results.map((p:any, index:number)=>({ //Se crea un nuevo arreglo de objetos con las propiedades que necesitamos, usando map para iterar sobre el arreglo de resultados de la API
                id: index+1,
                nombreBase: p.name,
                nombreEvo: "Pokemon Shiny",
                imgBase: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`,
                imgEvo: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index+1}.png`,
                estado: false
            }))
            setPokemon(listadoReal) //Actualizamos el estado con el listado real de pokemons, que es un arreglo de objetos con las propiedades
        }
        catch(error){
            console.error("Hubo error al traer los datos", error)
        }
    }
    useEffect(()=>{
        traerPokemons() //Se llama a la función traerPokemons cuando el componente se monta, para obtener los datos de la API y actualizar el estado de los pokemons
    },[])

    //Funcion de evolucionar
    const evolucionar = (id:number)=>{
    setPokemon(prev => prev.map(p=> p.id==id?{...p,evo:!p.evo}:p))
    } //Función que recibe un id de pokemon y actualiza el estado de los pokemons, usando map para iterar sobre el arreglo de pokemons y cambiar el estado del pokemon con el id correspondiente
    
    const PokemonFiltrado = pokemons.filter((p)=>{
        return p.nombreBase.toLowerCase().includes(filtro.toLowerCase()); //Se crea un nuevo arreglo de pokemons filtrados, usando filter para iterar sobre el arreglo de pokemons y seleccionar solo aquellos cuyo nombre base incluye el texto del filtro, ignorando mayúsculas y minúsculas
    })
    return{
        pokemons:PokemonFiltrado,
        evolucionar,
        setFiltro
    }
}
export default usePokemons