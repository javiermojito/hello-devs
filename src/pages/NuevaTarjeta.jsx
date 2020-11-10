import React from "react";
import Tarjeta from "../components/Tarjeta";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TarjetaForm from "../components/TarjetaForm";

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
      <div>
        <Navbar />
        <div className="container">
          <TarjetaForm
            onChange={this.handleChange}
            formValues={this.state.form}
          />
          <Tarjeta
            nombre={this.state.form.nombre}
            apellido={this.state.form.apellido}
            twitter={this.state.form.twitter}
            rol={this.state.form.rol}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default NuevaTarjeta;
