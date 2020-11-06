import React from "react";
import "./css/TarjetaForm.css";

class TarjetaForm extends React.Component {
    state = {
        nombre: "",
        apellido: "",
        twitter: "",
        rol: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });

        /*  console.log({
            campo: e.target.name,
            valor: e.target.value,
        }); */
    };

    handleClick = () => {
        console.log("Me han presionado.");
    };

    handleSubmit = (e) => {
        e.preventDefault(); //STOP THERE
        console.log("Por aquí paramos el submit");
    };

    render() {
        return (
            <div className="tarjetaform">
                <div className="tarjetaform-title">
                    <h1>Nueva Tarjeta</h1>
                </div>
                <div className="tarjetaform-form">
                    <form onSubmit={this.handleSubmit}>
                        <label>Nombre</label>
                        <br />
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="nombre"
                            value={this.state.nombre}
                        />
                        <br />
                        <br />

                        <label>Apellido</label>
                        <br />
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="apellido"
                            value={this.state.apellido}
                        />
                        <br />
                        <br />

                        <label>Twitter</label>
                        <br />
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="twitter"
                            value={this.state.twitter}
                        />
                        <br />
                        <br />

                        <label>Rol</label>
                        <br />
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="rol"
                            value={this.state.rol}
                        />
                        <br />
                        <br />

                        {/* 2 SOLUCIONES */}

                        <button /* type="button" */ onClick={this.handleClick}>
                            Guardar
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TarjetaForm;
