import React from "react";
import "./css/Tarjeta.css";

class Tarjeta extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            mostrarWeb: true
        }
    }

    comprobarWeb(){
        if(this.state.mostrarWeb){
            return <a href="http://google.com">Website</a>
        }
    }

    handleClick = () =>{
        this.setState({
            mostrarWeb: !this.state.mostrarWeb
        })
    }

    render(){
        return(
            <div className="tarjeta">
                <div className="tarjeta-foto">
                    <img src="https://s.tcdn.co/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/1.png" alt="foto"/>
                </div>
                <div className="tarjeta-info">
                    <h1>¡Hola Mundo!</h1>
                    <h2>Soy {this.props.nombre}</h2>
                    <p>@{this.props.twitter}</p>   
                    <button type="button" onClick={this.handleClick}>Mostrar/Ocultar Sitio</button>
                    <br/>
                    <br/>
    
                    {/* {mostrarWeb ? <a href="http://google.com">Website</a> : "No hay sitio web."} */}
                    {/* {mostrarWeb && <a href="http://google.com">Website</a>} */}
                    {this.comprobarWeb()}
                    
                </div>
            </div>
        )
    }
}

export default Tarjeta;
