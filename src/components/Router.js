import React, { Component } from 'react'

import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import HomeSeries from './HomeSeries'
import MenuIndex from './MenuIndex'
import DetalleSerie from './DetalleSerie'
import DetallePersonajesSerie from './DetallePersonajesSerie'
import CreatePersonaje from './CreatePersonaje'
import UpdatePersonajesSeries from './UpdatePersonajesSeries'

export default class Router extends Component {
  render() {

    function DetalleSerieElement () {
        let { idserie} = useParams();
        return(<DetalleSerie idserie={idserie}/>);
    }
    
    function DetallePersonajesSerieElement () {
        let { idserie} = useParams();
        return(<DetallePersonajesSerie idserie={idserie}/>);
    }
    

    return (
      <BrowserRouter>
      <MenuIndex/>
        <Routes>
            <Route path='/' element={<HomeSeries/>}/>
            <Route path='/serie/:idserie' element={<DetalleSerieElement/>}/>
            <Route path='/serie/:idserie/personajes' element={<DetallePersonajesSerieElement/>}/>
            <Route path='/create/personaje' element={<CreatePersonaje/>}/>
            <Route path='/update/personajesSeries' element={<UpdatePersonajesSeries/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
