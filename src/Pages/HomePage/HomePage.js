import React, { useContext } from 'react'
import { Header } from '../../components/Header/Header'
import { PokemonCard } from '../../components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../contexts/GlobalContext'
import { ContainerHomePage, PokemonMain } from './HomePage.styles'

export const HomePage = () => {

  const context = useContext(GlobalContext)
  const { pokemons } = context

  return (
    <>
      <Header />
      <ContainerHomePage>
        <h1>Todos Pokémons</h1>
        <PokemonMain>
          {pokemons.map((pokemon) => {
            return (<PokemonCard key={pokemon.name} pokemon={pokemon} />)
          })
          }
        </PokemonMain>

      </ContainerHomePage>
    </>
  )
}
