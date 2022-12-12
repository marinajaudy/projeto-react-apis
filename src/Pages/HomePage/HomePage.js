import React, { useContext } from 'react'
import { Header } from '../../components/Header/Header'

import { PokemonCard } from '../../components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../contexts/GlobalContext'

export const HomePage = () => {

    const context = useContext(GlobalContext)   
    const {pokemons} = context

  return (
    <>
    <Header/>
    {
        pokemons.map((pokemon)=>{
           return(<PokemonCard key={pokemon.id} pokemon={pokemon}/>)
        })
    }
    </>
  )
}
