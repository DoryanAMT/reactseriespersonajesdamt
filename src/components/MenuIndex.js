import React, { Component } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from './Global'

export default class MenuIndex extends Component {

    state = {
        series: []
    }

    loadSeries = () => {
        let request = "api/Series"
        let url = Global.urlApiSeries+request;

        axios.get(url).then(response => {
            this.setState({
                series: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadSeries();
    }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Series/personajes</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample03">
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to='/create'>Create Coche</NavLink>
                        </li> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Series</a>
                            <ul className="dropdown-menu">
                                {
                                    this.state.series.map((serie, index) => {
                                        return(
                                            <li key={index} ><NavLink className="dropdown-item" to={"/serie/"+serie.idSerie}>{serie.nombre}</NavLink></li>
                                        );
                                    })
                                }
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to='/create/personaje'>Crear Personaje</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to='/update/personajesSeries'>Modificar Personaje</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}
