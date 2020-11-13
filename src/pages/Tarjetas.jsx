import React from "react";

import TarjetaLista from "../components/TarjetaLista";
import { Link } from "react-router-dom";
import "./css/Tarjetas.css";

class Tarjetas extends React.Component {
  //Inicializamos props y el estado
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: [],
    };

    console.log("constructor()");
  }

  //
  componentDidMount() {
    console.log("componentDidMount()");
    this.fetchPersonajes();
  }

  async fetchPersonajes() {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();

    this.setState({
      loading: false,
      data: data.results,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate()");

    //Antes de la actualización
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    //Actual
    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()");
    clearTimeout(this.timeout);
  }

  render() {
    if (this.state.loading === true) {
      return "CARGANDO...";
    }
    console.log("render()");
    return (
      <div className="tarjetas">
        <div className="tarjetas-container">
          <div className="tarjetas-hero">
            <Link to="/tarjetas/nueva">Añadir Tarjeta</Link>
          </div>
          <div className="tarjetas-list">
            <TarjetaLista data={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Tarjetas;
