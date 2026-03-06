import "./Search.css";

interface Props{
    alEscribir:(valor:string)=>void
}
const Search =({alEscribir}:Props)=>{
    return(
        <input type="text" className="search" placeholder="Buscar" onChange={(e)=>alEscribir(e.target.value)}/>
    )
}
export default Search;