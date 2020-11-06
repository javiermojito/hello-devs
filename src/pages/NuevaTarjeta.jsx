import React from "react";
import Tarjeta from "../components/Tarjeta";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TarjetaForm from "../components/TarjetaForm";

class NuevaTarjeta extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <TarjetaForm />
                    <Tarjeta
                        nombre="Pepe"
                        apellido="Devito"
                        twitter="pepitotwitter"
                        rol="Programador"
                    />
                </div>
                <Footer />
            </div>
        );
    }
}

export default NuevaTarjeta;
