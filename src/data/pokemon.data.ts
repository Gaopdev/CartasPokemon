import { pikachu, raichu, charmander, charmeleon } from '../assets'
import type {Pokemon} from '../types'

const POKEMON_MOCK:Pokemon[]=[ 
    {
        id:1,
        nombreBase:"Pikachu",
        nombreEvo:"Raichu",
        imgBase:pikachu,
        imgEvo:raichu,
        evo:false
    },
    {
        id:2,
        nombreBase:"Charmander",
        nombreEvo:"Charmeleon", 
        imgBase:charmander,
        imgEvo:charmeleon,
        evo:false
    }
] //Arreglo de objetos que representa a los pokemons, con sus propiedades id, nombreBase, nombreEvo, imgBase, imgEvo y evo. Es un mock de datos que se puede usar para probar la aplicación sin necesidad de hacer una petición a una API. Cada objeto representa un pokemon con su información básica y su evolución.

export default POKEMON_MOCK