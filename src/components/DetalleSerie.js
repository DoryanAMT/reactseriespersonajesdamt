import React, { Component } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from './Global'

export default class DetalleSerie extends Component {
    state = {
        serie: []
    }

    loadSeries = () => {
        let idSerie = this.props.idserie
        let request = "api/Series/" + idSerie
        let url = Global.urlApiSeries + request;

        axios.get(url).then(response => {
            this.setState({
                serie: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadSeries();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idserie !== this.props.idserie) {
            this.loadSeries();
        }
    }
    render() {
        return (
            <div>
                <h1>DetalleSerie : {this.props.idserie}</h1>
                <ul >
                    <li>
                        <img src={this.state.serie.imagen} style={{ width: "150px", height: "150px" }} />
                    </li>
                    <li>{this.state.serie.nombre}</li>
                    <li>{this.state.serie.puntuacion}</li>
                    <NavLink to={"/serie/" + this.state.serie.idSerie + "/personajes"}>Personajes</NavLink>
                </ul>
            </div>
        )
    }
}
