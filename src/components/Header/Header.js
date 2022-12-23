import React, { useContext } from 'react'
import { ContainerHeader, AllPokemons, ImageLogo, LinkReturn, ButtonHeader } from './Header.styled'
import { Button } from '@chakra-ui/react'
import logoPokemon from '../../assets/logoPokemon.png'
import setaIcon from '../../assets/setaIcon.svg'
import { goToPokedexPage, goToHomePage } from '../../Router/coordinator'
import { useLocation, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../contexts/GlobalContext'

export const Header = () => {

  const navigate = useNavigate()
  const location = useLocation()

  return (

    <ContainerHeader>
      {location.pathname === '/' ?
        <>
          <ImageLogo src={logoPokemon} alt='Logo Pokemon' onClick={() => goToHomePage(navigate)} />
          <ButtonHeader onClick={() => goToPokedexPage(navigate)}>Pokedex</ButtonHeader>
        </> : location.pathname === '/pokedex' ?
          <>
            <AllPokemons>
              <img src={setaIcon} alt='Seta Icon' />
              <LinkReturn
                onClick={() => goToHomePage(navigate)}
              >Todos os Pokemóns</LinkReturn>
            </AllPokemons>
            <ImageLogo src={logoPokemon} alt='Logo Pokemon' onClick={() => goToHomePage(navigate)} />
          </> :
          <>
            <ImageLogo src={logoPokemon} alt='Logo Pokemon' onClick={() => goToHomePage(navigate)} />
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
          </>
      }
    </ContainerHeader>
  )
}
