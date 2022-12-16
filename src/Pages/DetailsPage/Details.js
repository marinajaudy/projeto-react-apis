import React, { useContext, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { GlobalContext } from '../../contexts/GlobalContext'
import { ContainerDetails } from './Details.styles'
import {DetailsCard} from '../../components/DetailsCard/DetailsCard'
import { useLocation } from 'react-router-dom'

export const Details = () => {

  const context = useContext(GlobalContext)
  const { pokemons } = context
  const location = useLocation()

  // const [pokemonDetails, setPokemonDetails] = useState()

  // const getPokemonByName = async () => {
  //   try {
  //     const response = await axios.get(pokemon.url)
  //     setPokemonDetails(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getPokemonByName()
  // }, [])

  return (
    <>
    <Header/>
    <ContainerDetails>
    <h1>Todos Pokémons</h1>
          {pokemons.map((pokemon) => {
            return (<DetailsCard key={pokemon.id} pokemon={pokemon} />)
          })
          }
    </ContainerDetails>
    
    </>
  )
}
