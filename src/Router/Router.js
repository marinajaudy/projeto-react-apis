import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../Pages/HomePage/HomePage'
import {Pokedex} from '../Pages/PokedexPage/Pokedex'
import {Detalhes} from '../Pages/DetailsPage/Detalhes'

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='/pokedex' elemente={<Pokedex/>}/>
            <Route path='/detalhes' element={<Detalhes/>}/>
        </Routes>
        </BrowserRouter>
    )
    }