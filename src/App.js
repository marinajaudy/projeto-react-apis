import { GlobalContext } from "./contexts/GlobalContext";
import { Router } from "./Router/Router";
import axios from 'axios'
import { useEffect, useState } from 'react'
import { GlobalStyles } from "./GlobalStyles";

function App() {

  const [pokemons, setPokemons] = useState([])

    const getPokemon = async () => {
        try{
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        	console.log(response.data)
        } catch (error) {
            console.log(error.response)
        }}

        useEffect(()=>{
            getPokemon()
        }, [pokemons])

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
