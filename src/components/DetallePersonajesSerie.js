import React, { Component } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from './Global'

export default class DetallePersonajesSerie extends Component {

    state = {
        personajes: [],
    }

    loadPersonajesSerie = () => {   
        let idSerie = this.props.idserie;
        let request = "api/Series/PersonajesSerie/"+idSerie;
        let url = Global.urlApiPersonajes + request;

        axios.get(url).then(response => {
            this.setState({
                personajes: response.data
            })
        })

    }

    componentDidMount = () => {
        this.loadPersonajesSerie();
    }


  render() {
    return (
      <div>
        <h1>Personajes Serie</h1>
        <NavLink to="/">Back</NavLink>
        <table>
            <thead>
                <tr>
                    <th>Personaje</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.personajes &&
                    this.state.personajes.map((personaje, index) => {
                        return(
                            <tr key={index}>
                                <td>{personaje.nombre}</td>
                                <td>
                                    <img src={personaje.imagen} style={{width:"100px",height:"100px"}}/>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
