import React from "react";
import Tarjeta from "../components/Tarjeta";
import TarjetaForm from "../components/TarjetaForm";
import "./css/NuevaTarjeta.css";

class NuevaTarjeta extends React.Component {
  state = {
    form: {
      nombre: "",
      apellido: "",
      twitter: "",
      rol: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div>
            <TarjetaForm
              onChange={this.handleChange}
              formValues={this.state.form}
            />
          </div>

          <div className="nuevatarjeta-preview">
            <Tarjeta
              nombre={this.state.form.nombre}
              apellido={this.state.form.apellido}
              twitter={this.state.form.twitter}
              rol={this.state.form.rol}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NuevaTarjeta;
