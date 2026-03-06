import './App.css' //Importamos el css
import {Card, Search} from './components' //Importamos el componente Card
import { usePokemons } from './hooks' //Importamos el hook usePokemons, que es un hook personalizado que maneja el estado de los pokemons y la lógica de evolución.

//Componente
//hook -> useState es un hook de estado
function App() {
  const {pokemons, evolucionar, setFiltro} = usePokemons()
  return(
    <> 
    <Search alEscribir={(valor)=>setFiltro(valor)}/>
    <div className="container-card">
    {
      pokemons.map((p)=>(
        <Card 
        key={p.id}
        estado={p.evo}
        imagen={p.evo?p.imgEvo:p.imgBase} 
        nombre={p.evo?p.nombreEvo:p.nombreBase} 
        descripcion='pokemon' 
        texto={p.evo?'Volver':'Shiny'} 
        accion={()=>evolucionar(p.id)} 
        />
      ))
    } 
    </div>
    </>//Fragmento de un componente, es un contenedsor que maneja las cartas.
  )
}
export default App