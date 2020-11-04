import React, { Component } from "react";

class Temporal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>
                Hola {this.props.nombre} tengo {this.props.edad} años
            </h1>
        );
    }
}

export default Temporal;
