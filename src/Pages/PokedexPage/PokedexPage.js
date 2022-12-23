import React, { useContext, useEffect } from 'react'
import { Header } from '../../components/Header/Header'
import { GlobalContext } from '../../contexts/GlobalContext'
import { ContainerPokedex, PokedexMain } from './PokedexPage.styles'
import { PokemonCard } from '../../components/PokemonCard/PokemonCard'

export const PokedexPage = () => {

  const context = useContext(GlobalContext)
  const { setPokedex, pokedex } = context

  useEffect(() => {
    const pokemonPokedex = localStorage.getItem('pokedex')
    const myPokedex = JSON.parse(pokemonPokedex)
    setPokedex(myPokedex)
  }, [])

  return (
    <>
      <Header />
      <ContainerPokedex>
        <h1>Meus Pokémons</h1>
        <PokedexMain>
          {pokedex.map((pokedex) => {
            return (<PokemonCard key={pokedex.id} pokedex={pokedex} />)
          })
          }
        </PokedexMain>
      </ContainerPokedex>
    </>
  )
}
