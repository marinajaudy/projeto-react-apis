import { Box, Button, Container, Flex, Image, Progress, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { InfoCard, TypeCard, StatsStyle, ContainerInfoPokemon} from './DetailsCard.styled'
import axios from 'axios'
import { typesPokemon } from '../../constants/typesPokemon'
import { useParams } from 'react-router-dom'

export const DetailsCard = () => {

  const params = useParams()
  const [cardDetails, setCardDetails] = useState({})
  const [typeApi, setTypeApi] = useState({})

  const getDetailsByName = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      setCardDetails(response.data)
      setTypeApi(response.data.types[0].type.name)
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

  console.log(cardDetails)
  return (

    <Container
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
          <Text
            fontSize='28px'
            fontWeight='700'
            padding='10px 18px'

            >Base Stat</Text>
          {cardDetails.stats?.map((stat, i)=>{
              return (
                <StatsStyle key={stat.i}>
                  <span>{capitalizeFistLetter(stat.stat.name)}</span>
                  <span>{stat.base_stat}</span> 
                <Progress width='200px' bg='none' colorScheme='orange' value={stat.base_stat}/>
                <hr></hr>
                </StatsStyle>
              )
            })
          }
        </Box>
      </Flex>
      <InfoCard>
        <ContainerInfoPokemon>
          {
            cardDetails.id < 10 ?
            <h3>#0{cardDetails.id}</h3>:
            <h3>#{cardDetails.id}</h3>
          }
        
        <h2>{capitalizeFistLetter(cardDetails.name)}</h2>
        <TypeCard>
          {cardDetails.types?.map((typePokemon) => {
            return <img key={typePokemon.id} src={typesPokemon[typePokemon.type.name].image} alt='img' />
          })}
        </TypeCard>
        </ContainerInfoPokemon>
        <Image
        position= 'absolute'
        width= '270px'
        height= '270px'
        right= '40px'
        top= '-130px'
        src={cardDetails.sprites?.other["official-artwork"].front_default} alt='Imagem Pokémon' />
        <Flex
            backgroundColor='#FFFFFF'
            borderRadius='8px'
            width='292px'
            height='453px'
            color='black'
            position='absolute'
            bottom='24px'
            flexDirection='column'
            gap='20px'
            padding='18px 18px'

          >
            <Text
            fontSize='24px'
            fontWeight='700'
            >Moves:</Text>
            {cardDetails.moves?.filter((move, index)=> index<4).map((move)=>{
                console.log(move)
                return(
                  <Button key={move}
                  width= 'fit-content'
                  height= '37px'
                  bg= '#ECECEC'
                  border= '1px dashed rgba(0, 0, 0, 0.14)'
                  borderRadius= '12px'
                  display= 'inline-block'           
                  >
                    {/* <p>{move.move.name}</p> */}
                  <p>{capitalizeFistLetter(move.move.name)}</p>
                  </Button>
                )
              })
            } 
          </Flex>
      </InfoCard>
    </Container>
  )
}
