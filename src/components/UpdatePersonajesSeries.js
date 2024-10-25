import React, { Component } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from './Global'

export default class UpdatePersonajesSeries extends Component {
  state = {
    series: [],
    personajes: [],
    status: false
  }

  selectSerie = React.createRef();
  selectPersonaje = React.createRef();

  loadSeries = () => {
    let request = "api/Series"
    let url = Global.urlApiSeries + request;

    axios.get(url).then(response => {
      this.setState({
        series: response.data
      })
    })
  }

  loadPersonajes = () => {
    let request = "api/personajes"
    let url = Global.urlApiSeries + request;

    axios.get(url).then(response => {
      this.setState({
        personajes: response.data
      })
    })
  }

  componentDidMount = () => {
    this.loadSeries();
    this.loadPersonajes();
  }


  guardarCambios = (e) => {
    e.preventDefault();
    let idSerie = this.selectSerie.current.value;
    let idPersonaje = this.selectPersonaje.current.value;

    let request = "api/Personajes/" + idPersonaje + "/" + idSerie;
    let url = Global.urlApiPersonajes + request;
    
    console.log(url)
    axios.put(url).then(response => {
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
          <h1>UpdatePersonajesSeries</h1>

          <form>
            <label>Seleccione una serie</label>
            <select className='form form-control' ref={this.selectSerie}>
              {
                this.state.series.map((serie, index) => {
                  return (
                    <option key={index} value={serie.idSerie}>{serie.nombre}</option>
                  );
                })
              }
            </select>
            <label>Seleccione una personaje</label>
            <select className='form form-control' ref={this.selectPersonaje}>
              {
                this.state.personajes.map((personaje, index) => {
                  return (
                    <option key={index} value={personaje.idPersonaje}>{personaje.nombre}</option>
                  );
                })
              }
            </select>
            <button onClick={this.guardarCambios}>Guardar cambios</button>
          </form>
        </div>
      )
    }

  }
}
