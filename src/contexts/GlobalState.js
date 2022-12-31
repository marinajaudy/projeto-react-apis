import axios from 'axios'
import { useEffect, useState } from 'react'
import { typesPokemon } from '../constants/typesPokemon'

export const GlobalState = () => {
  
  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [flow, setFlow] = useState(2)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenDel, setIsOpenDel] = useState(false)

  console.log(isOpen)

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

        const addPokedex = (pokemon, index) => {
          const addPokemon = [...pokedex.sort((a, b) => {
            return a.id - b.id
        })]
          const newPokemon = addPokemon.find((item)=>item.id === pokemon.id)
          if (!newPokemon){
            const pokemonAdd = {...pokemon}
            addPokemon.push(pokemonAdd)
          }
          pokemons.splice(index, 1)
          setPokedex(addPokemon)
          setIsOpen(true)
          localStorage.setItem('poke', JSON.stringify(pokemons))
          localStorage.setItem('pokedex',JSON.stringify(addPokemon))
        };

        // const addPokedex = (pokemon, index) => {
        //   const addPokemon = [...pokedex, pokemon];
        //   setPokedex(addPokemon);
        //   console.log(addPokemon);
        //   pokemons.splice(index, 1);
        //   localStorage.setItem("poke", JSON.stringify(pokemons));
        //   localStorage.setItem("pokedex", JSON.stringify(addPokemon));
        // };
  
        const removePokedex = (pokemon) => {
          const filterDelete = pokedex.filter((poke)=>poke.id !== pokemon.id)
          pokemons.push(pokemon)
          localStorage.setItem('poke', JSON.stringify(pokemons))
          localStorage.setItem('pokedex',JSON.stringify(filterDelete))
          setPokedex(filterDelete)
          setIsOpenDel(true)
        }
  
    return {
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
        setIsOpen,
        isOpenDel,
        setIsOpenDel
    }
  }
  
  export default GlobalState