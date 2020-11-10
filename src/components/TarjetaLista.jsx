import React from "react";
import Tarjeta from "../components/Tarjeta";
import "./css/TarjetaLista.css";

class TarjetaLista extends React.Component {
  render() {
    return (
      <div className="tarjetalista">
        <ul>
          {this.props.data.map(({ id, nombre, apellido, twitter, rol }) => {
            return (
              <li key={id}>
                <Tarjeta
                  nombre={nombre}
                  apellido={apellido}
                  twitter={twitter}
                  rol={rol}
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
