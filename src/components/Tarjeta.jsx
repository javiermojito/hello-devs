import React from "react";
import "./css/Tarjeta.css";

class Tarjeta extends React.Component {
  /* constructor(props) {
        super(props);
        this.state = {
            mostrarWeb: false,
        };
    }

    comprobarWeb() {
        if (this.state.mostrarWeb) {
            return <a href="http://google.com">Website</a>;
        }
    }

    handleClick = () => {
        this.setState({
            mostrarWeb: !this.state.mostrarWeb,
        });
    };
 */
  render() {
    return (
      <div className="tarjeta">
        <div className="tarjeta-foto">
          <img src={this.props.foto} alt="foto" />
        </div>
        <div className="tarjeta-info">
          <span id="tarjeta-nombre">
            {this.props.nombre} {this.props.apellido}
          </span>
          <br />
          <span id="tarjeta-rol">{this.props.rol}</span>
          <br />
          <span id="tarjeta-twitter">@{this.props.twitter}</span>
        </div>
      </div>
    );
  }
}

export default Tarjeta;
