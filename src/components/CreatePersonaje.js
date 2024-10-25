import React, { Component } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from './Global'

export default class CreatePersonaje extends Component {

    state = {
        series: [],
        status: false
    }

    cajaNombre = React.createRef();
    cajaImagen = React.createRef();
    selectSerie = React.createRef();

    loadSeries = () => {
        let request = "api/Series/"
        let url = Global.urlApiSeries + request;

        axios.get(url).then(response => {
            this.setState({
                series: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadSeries();
    }

    // ========================================================================================================================

    insertarSerie = (e) => {
        e.preventDefault();
        let idPersonaje = 100;
        let nombre = this.cajaNombre.current.value;
        let imagen = this.cajaImagen.current.value;
        let idSerie = parseInt(this.selectSerie.current.value);

        let personaje = {
            idPersonaje: idPersonaje,
            nombre: nombre,
            imagen: imagen,
            idSerie: idSerie
        }

        let request = "api/personajes";
        let url = Global.urlApiPersonajes + request;
        // console.log(url);
        axios.post(url,personaje).then(response => {
            this.setState({
                status: true
            })
        })
    }

    render() {


        if (this.state.status === true) {
            return (
                <Navigate to="/" />
            );
        } else {
            return (
                <div>
                    <h1>Nuevo Personaje</h1>
                    <form>
                        <label>Nombre:</label>
                        <input type='text' ref={this.cajaNombre} className='form form-control' />
                        <label>Imagen:</label>
                        <input type='text' ref={this.cajaImagen} className='form form-control' />
                        <label>Serie</label>
                        <select className='form form-control' ref={this.selectSerie}>
                            {
                                this.state.series.map((serie, index) => {
                                    return (
                                        <option key={index} value={serie.idSerie}>{serie.nombre}</option>
                                    );
                                })
                            }
                        </select>
                        <button onClick={this.insertarSerie}>Insertar Perosnaje</button>
                    </form>
                </div>
            )
        }
    }
}
