import React, { Component } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from './Global'

export default class HomeSeries extends Component {

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
        <h1>Home Series</h1>
        {
            this.state.series &&
            this.state.series.map((serie, index) =>{
                return(
                    <ul key={index}>
                        <li>
                            <img src={serie.imagen} style={{width:"150px",height:"150px"}}/>
                        </li>
                        <li>{serie.nombre}</li>
                        <li>{serie.puntuacion}</li>
                        <NavLink to={"/serie/"+serie.idSerie+"/personajes"}>Personajes</NavLink>
                    </ul>
                );
            })
        }
      </div>
    )
  }
}
