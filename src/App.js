import { GlobalContext } from "./contexts/GlobalContext";
import { Router } from "./Router/Router";
import axios from 'axios'
import { useEffect, useState } from 'react'
import { GlobalStyles } from "./GlobalStyles";

function App() {

  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])

  useEffect(()=>{
    getPokemon()
}, [])

    const getPokemon = async () => {
        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`)
          setPokemons(response.data.results)
        } catch (error) {
            console.log(error.response)
        }}

    const addPokedex = (pokemon) =>{
      return setPokedex([...pokedex, pokemon] )
    } 

const context = {
  pokemons,
  setPokemons,
  getPokemon,
  pokedex,
  setPokedex,
  addPokedex
}

  return (
    <GlobalContext.Provider value={context}>
      <GlobalStyles/>
      <Router/>
    </GlobalContext.Provider>
  );
}

export default App;
