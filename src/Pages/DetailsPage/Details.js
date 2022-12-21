import React, { useContext, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { ContainerDetails, Circle } from './Details.styles'
import {DetailsCard} from '../../components/DetailsCard/DetailsCard'
import pokebolaBackground from '../../assets/pokebolaFundoCard.png'

export const Details = () => {

  return (
    <>
      <Header />
      <ContainerDetails>
      <Circle></Circle>
        <h1>Detalhes</h1>
       <DetailsCard/>
      </ContainerDetails>
    </>
  )
}
