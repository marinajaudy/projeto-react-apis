import React from 'react'
import { ContainerHeader, AllPokemons, ImageLogo, LinkReturn, ButtonHeader } from './Header.styled'
import { Button, ChakraProvider} from '@chakra-ui/react'
import logoPokemon from '../../assets/logoPokemon.png'
import setaIcon from '../../assets/setaIcon.svg'
import { goToPokedexPage, goToHomePage } from '../../Router/coordinator'
import { useLocation, useNavigate } from 'react-router-dom'

export const Header = () => {

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <ChakraProvider>
      <ContainerHeader>
        {location.pathname === '/pokedex' &&
        <AllPokemons>
          <img src={setaIcon} alt='Seta Icon' />
          <LinkReturn 
            onClick={() => goToHomePage(navigate)}
            >Todos os Pokemóns</LinkReturn>
        </AllPokemons>
        }
        {location.pathname === '/details' &&
          <AllPokemons>
          <img src={setaIcon} alt='Seta Icon' />
          <LinkReturn 
            onClick={() => goToHomePage(navigate)}
            >Todos os Pokemóns</LinkReturn>
        </AllPokemons>
        }
      <ImageLogo src={logoPokemon} alt='Logo Pokemon' onClick={() => goToHomePage(navigate)} />
      {location.pathname === '/' &&
        <ButtonHeader
        onClick={() => goToPokedexPage(navigate)}
        >Pokedex</ButtonHeader>
      }
      {location.pathname === '/details' &&
        <Button 
            bg="#FF6262"
            width='13vw'
            height='6.5vh'
            fontSize='16px'
            borderRadius='8px'
            fontFamily="'Poppins', sans-serif"
            fontWeight='400'
            lineHeight='24px'
            color='#FFFFFF'
            // onClick={()=>goToPokedexPage(navigate)}
            >Excluir do Pokedex</Button>
      }
      
          
      </ContainerHeader>
    </ChakraProvider>

  )
}
