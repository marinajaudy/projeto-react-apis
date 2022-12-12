import React from 'react'
import { ContainerHeader } from './Header.styled'
import { Button, ChakraProvider } from '@chakra-ui/react'
import logoPokemon from '../../assets/logoPokemon.png'
// import setaIcon from '../../assets/setaIcon.svg'
import {goToPokedexPage, goToHomePage} from '../../Router/coordinator'
import { useNavigate } from 'react-router-dom'
// import { HomePage } from '../../Pages/HomePage/HomePage'

export const Header = () => {

  const navigate = useNavigate()

  return (
    <ChakraProvider>
      <ContainerHeader>
        {/* <div>
        <img src={setaIcon} alt='Seta Icon'/>
        <Button width='14vw'
        height='8vh'
        fontSize='24px'
        border='none'
        backgroundColor='transparent'
        onClick={()=>goToHomePage(navigate)}
        >Todos os Pokemóns</Button>
        </div> */}
        <img src={logoPokemon} alt='Logo Pokemon'/>
        <Button colorScheme='blue'
        width='17vw'
        height='8vh'
        fontSize='24px'
        onClick={()=>goToPokedexPage(navigate)}
        >Pokedex</Button>
      </ContainerHeader>
    </ChakraProvider>
    
  )
}
