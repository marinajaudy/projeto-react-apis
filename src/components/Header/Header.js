import React from 'react'
import { ContainerHeader } from './Header.styled'
import { Button } from '@chakra-ui/react'
import logoPokemon from '../../assets/logoPokemon.png'

export const Header = () => {
  return (
    <ContainerHeader>
        <img src={logoPokemon} alt='Logo Pokemon'/>
        <Button colorScheme='blue'>Button</Button>
    </ContainerHeader>
  )
}
