import { GlobalContext } from "./contexts/GlobalContext";
import { Router } from "./Router/Router";
import axios from 'axios'
import { useEffect, useState } from 'react'
import { GlobalStyles } from "./GlobalStyles";
import { ChakraProvider } from "@chakra-ui/react";

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

    const removePokemonPokedex = (pokemonToRemove ) =>{
      const newPokedex = [...pokedex]
      // const pokemonRemove = newPokedex.find((pokemonInPokedex) => pokemonInPokedex.id === pokemonToRemove.id)
      const pokemonRomeveIndex = newPokedex.find((pokemonInPokedex) => pokemonInPokedex.id === pokemonToRemove.id)
      newPokedex.splice(pokemonRomeveIndex, 1)
      setPokedex(newPokedex) 
    }

const context = {
  pokemons,
  setPokemons,
  getPokemon,
  pokedex,
  setPokedex,
  addPokedex,
  removePokemonPokedex,
}



  return (
    <GlobalContext.Provider value={context}>
      <GlobalStyles/>
      <ChakraProvider>     
      <Router/>
      </ChakraProvider>
    </GlobalContext.Provider>
  );
}

export default App;
