import React from 'react'
import { Header } from '../../components/Header/Header'
import { ContainerDetails } from './Details.styles'
import { DetailsCard } from '../../components/DetailsCard/DetailsCard'

export const Details = () => {

  return (
    <>
      <Header />
      <ContainerDetails>
        <h1>Detalhes</h1>
        <DetailsCard />
      </ContainerDetails>
    </>
  )
}
