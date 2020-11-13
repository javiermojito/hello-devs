import React from "react";
import Tarjeta from "../components/Tarjeta";
import "./css/TarjetaLista.css";

class TarjetaLista extends React.Component {
  render() {
    return (
      <div className="tarjetalista">
        <ul>
          {this.props.data.map(({ id, name, status, species, image }) => {
            return (
              <li key={id}>
                <Tarjeta
                  nombre={name}
                  twitter={status}
                  rol={species}
                  foto={image}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TarjetaLista;
