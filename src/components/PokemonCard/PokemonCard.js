import { Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { ContainerCard, InfoCard, ImageButton } from './PokemonCard.styled'
import axios from 'axios'

export const PokemonCard = (props) => {
  const {pokemon} = props
  const [cardPokemon, setCardPokemon] = useState([])

  const getPokemonByName = async (namePokemon) => {
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon.name}`)
      // console.log(response.data)
      setCardPokemon(response.data.results)
    } catch (error) {
        console.log(error.response)
    }}

    useEffect(()=>{
      getPokemonByName()
    }, [])

  return (
    <>
    <ContainerCard> 
      <InfoCard>
        <h3>#ID</h3>
        <h2>{pokemon.name}</h2>
        <div>
          <Button>Type</Button>
          <Button>Type</Button>
        </div>
        <Button alignSelf='flex-start'>Detalhes</Button>
      </InfoCard>

      <ImageButton>
        <img src='imagemPokemon' alt='Imagem Pokémon'/>
        <Button>Capturar!</Button>
      </ImageButton>
    </ContainerCard>
    </>
  )
}
