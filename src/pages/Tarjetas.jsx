import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TarjetaLista from "../components/TarjetaLista";
import "./css/Tarjetas.css";

class Tarjetas extends React.Component {
  state = {
    data: [
      {
        id: "5E03BC19-FE22-419F-98C0-C3E84FEE4E83",
        nombre: "Murphy",
        apellido: "Joseph",
        twitter: "semper",
        rol: "Maecenas mattis",
      },
      {
        id: "BCF94215-8D4E-4497-84EC-1EEA2A0249EE",
        nombre: "Cedric",
        apellido: "Pittman",
        twitter: "gravida",
        rol: "ridiculus",
      },
      {
        id: "3D3774FD-9045-465E-A5CD-2E96F8F27F6E",
        nombre: "Shelley",
        apellido: "Barker",
        twitter: "hendrerit",
        rol: "sagittis Integer Sed",
      },
      {
        id: "99DF8F36-61C1-42D2-9CD3-97DC4D4356AF",
        nombre: "Baker",
        apellido: "Mendez",
        twitter: "non",
        rol: "Lorem",
      },
      {
        id: "297C92E6-7E86-4A1D-8535-7A267A19025C",
        nombre: "Madeson",
        apellido: "Mathews",
        twitter: "fringilla",
        rol: "fames amet venenatis",
      },
    ],
  };

  render() {
    return (
      <div className="tarjetas">
        <Navbar />
        <div className="tarjetas-container">
          <div className="tarjetas-hero">
            <a href="">Añadir Tarjeta</a>
          </div>
          <div className="tarjetas-list">
            <TarjetaLista data={this.state.data} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Tarjetas;
