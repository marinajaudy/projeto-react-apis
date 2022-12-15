import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../Pages/HomePage/HomePage'
import {Detalhes} from '../Pages/DetailsPage/Detalhes'
import { PokedexPage } from '../Pages/PokedexPage/PokedexPage'

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='/pokedex' element={<PokedexPage/>}/>
            <Route path='/detalhes' element={<Detalhes/>}/>
        </Routes>
        </BrowserRouter>
    )
    }