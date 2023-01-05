import React, { useContext } from 'react'
import { Header } from '../../components/Header/Header'
import { PokemonCard } from '../../components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../contexts/GlobalContext'
import { ContainerHomePage, PokemonMain } from './HomePage.styles'

export const HomePage = () => {

  const context = useContext(GlobalContext)
  const { pokemons, pokedex } = context

  localStorage.setItem('pokedex', JSON.stringify(pokedex))
  console.log(pokedex)
  return (
    <>
      <Header />
      <ContainerHomePage>
        <h1>Todos Pokémons</h1>
        <PokemonMain>
          {pokemons
            .filter((pokemon) => {
              return !(pokedex.find((item) => item.name === pokemon.name))
            })
            .map((pokemon) => {
              return (<PokemonCard key={pokemon.name} pokemon={pokemon} />)
            })
          }
        </PokemonMain>
      </ContainerHomePage>
    </>
  )
}