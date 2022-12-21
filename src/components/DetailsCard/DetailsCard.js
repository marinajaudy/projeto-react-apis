import { Box, Button, ChakraProvider, Container, Flex, Image } from '@chakra-ui/react'
import React, { useEffect, useState, useContext } from 'react'
import { InfoCard, ImageButton, TypeCard } from './DetailsCard.styled'
import axios from 'axios'
import pokebolaBackground from '../../assets/pokebolaFundoCard.png'
import { typesPokemon } from '../../constants/typesPokemon'
import { GlobalContext } from '../../contexts/GlobalContext'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { goToDetailsPage } from '../../Router/coordinator'

export const DetailsCard = () => {

  // const location = useLocation()
  // const navigate = useNavigate()
  const params = useParams()
  const [cardDetails, setCardDetails] = useState({})
  const [typeApi, setTypeApi] = useState({})

  const getDetailsByName = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      setCardDetails(response.data)
      setTypeApi(response.data.types[0].type.name)
      // console.log(typeApi)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDetailsByName()
  }, [])

  const capitalizeFistLetter = (string) => {
    return string && string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (

    <Container
      border='2px solid blue'
      borderRadius='38px'
      maxWidth='1389px'
      height='663px'
      display='flex'
      justifyContent='space-between'
      bg={typeApi && typesPokemon[typeApi]?.color}
      backgroundRepeat='no-repeat'
      backgroundPosition='180px'
      zIndex='3'
    >
      <Flex
        width='50%'
        justifyContent='center'
        alignContent='center'
        padding='24px 0px'
      >
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
        >
          <Image
            borderRadius='8px'
            width='282px'  
            height='282px'
            backgroundColor='white'
            src={cardDetails.sprites?.["front_default"]} alt='Imagem Pokemon de Costas' />
            <Image
            borderRadius='8px'
            width='282px'
            height='282px'
            backgroundColor='white'
            src={cardDetails.sprites?.["back_default"]} alt='Imagem Pokemon de Frente' />
        </Box>
        <Box
          backgroundColor='white'
          width='343px'
          height='100%'
          borderRadius='12px'
          color='black'
        >
          <h1>AQUI VAI O CARD CHAKRA COM MEDIDOR</h1>
        </Box>
      </Flex>
      <InfoCard>
        <Flex
        border='2px solid red'
        marginTop='-20px'
        width='100%'
        height='22vh'
        gap='16px'
        >
        <h3>#{cardDetails.id}</h3>
        <h2>{capitalizeFistLetter(cardDetails.name)}</h2>
        <TypeCard>
          {cardDetails.types?.map((typePokemon) => {
            return <img src={typesPokemon[typePokemon.type.name].image} alt='img' />
          })}
        </TypeCard>
        </Flex>
        <Image
        position= 'absolute'
        width= '270px'
        height= '270px'
        left= '320px'
        top= '-160px'
        src={cardDetails.sprites?.other["official-artwork"].front_default} alt='Imagem Pokémon' />
        <Flex
        border='2px solid green'
        width='100%'
        display='flex'
        justifyContent='flex-start'
        >
        <Box
            backgroundColor='white'
            width='292px'
            height='453px'
            color='black'
          >
            <h1> AQUI VEM INFO A MAIS DO POKEMON</h1>
          </Box>
        </Flex>
      </InfoCard>
    </Container>
  )
}
