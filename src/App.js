import { GlobalContext } from "./contexts/GlobalContext";
import { Router } from "./Router/Router";
import axios from 'axios'
import { useEffect, useState } from 'react'
import { GlobalStyles } from "./GlobalStyles";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";

function App() {

  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [flow, setFlow] = useState(2)
  const { isOpen, onOpen, onClose } = useDisclosure()

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

        const addPokedex = (pokemon) => {
          const addPokemon = [...pokedex.sort((a, b) => {
            return a.id - b.id
        })]
          const newPokemon = addPokemon.find((item)=>item.id === pokemon.id)
          if (!newPokemon){
            const pokemonAdd = {...pokemon}
            addPokemon.push(pokemonAdd)
          }
          setPokedex(addPokemon)
          localStorage.setItem('pokedex',JSON.stringify(addPokemon))
        };
  
        const removePokedex = (pokemon) => {
          const filterDelete = pokedex.filter((poke)=>poke.id !== pokemon.id)
          localStorage.setItem('pokedex',JSON.stringify(filterDelete))
          setPokedex(filterDelete)
        }

const context = {
  pokemons,
  setPokemons,
  getPokemon,
  pokedex,
  setPokedex,
  addPokedex,
  removePokedex,
  flow,
  setFlow,
  isOpen,
  onOpen,
  onClose

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
