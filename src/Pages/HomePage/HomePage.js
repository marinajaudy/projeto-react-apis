import React, { useContext, useEffect } from 'react'
import { Header } from '../../components/Header/Header'
import { PokemonCard } from '../../components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../contexts/GlobalContext'
import { ContainerHomePage, PokemonMain } from './HomePage.styles'

export const HomePage = () => {

  const context = useContext(GlobalContext)
  const { pokemons, pokedex } = context

  localStorage.setItem('pokedex', JSON.stringify(pokedex))

  return (
    <>
      <Header />
      <ContainerHomePage>
        <h1>Todos Pokémons</h1>
        <PokemonMain>
          {pokemons.map((pokemon) => {
            return (<PokemonCard key={pokemon.id} pokemon={pokemon} />)
          })
          }
        </PokemonMain>
      </ContainerHomePage>
    </>
  )
}
