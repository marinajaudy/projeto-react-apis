import { GlobalContext } from "./contexts/GlobalContext";
import { Router } from "./Router/Router";
import axios from 'axios'
import { useEffect, useState } from 'react'
import { GlobalStyles } from "./GlobalStyles";

function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(()=>{
    getPokemon()
}, [])

    const getPokemon = async () => {
        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=30&limit=20`)
        	// console.log(response.data)
          setPokemons(response.data.results)
        } catch (error) {
            console.log(error.response)
        }}

console.log(pokemons)

const context = {
  pokemons,
  setPokemons,
  getPokemon
}

  return (
    <GlobalContext.Provider value={context}>
      <GlobalStyles/>
      <Router/>
    </GlobalContext.Provider>
  );
}

export default App;
