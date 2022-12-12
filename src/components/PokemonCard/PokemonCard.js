import React from 'react'
import { ContainerCard } from './PokemonCard.styled'

export const PokemonCard = (props) => {
  const {pokemon} = props
  return (
    <>
    <ContainerCard> 
    <h1>{pokemon}</h1>
    </ContainerCard>
    </>
  )
}
