import React from "react"; // Analogía del createElement
import ReactDOM from "react-dom"; //Analogía del appendChild
import "./index.css";
import App from "./App";
import Stateful from "./components/Stateful";
import Stateless from "./components/Stateless";
import Presentational from "./components/Presentational";

//const jsx = <h1>Hola Mundo</h1>; //JSX
//                                  elem  atri  childre
//const element = React.createElement("h1", {}, "Hola children");
/* const element = React.createElement(
    "a",
    { href: "http://javiermojito.com" },
    "Ir a mi página web."
); */

var nombre = "Angela";
//const element = React.createElement("h1", {}, `Hola soy ${nombre}`);
//const jsx = <h1>Hola soy {nombre}</h1>;
//const jsx = <h1>Hola soy {5 >= 18 ? "Soy mayor" : "Soy menor"}</h1>;

//const sum = () => 72 + 8;
//const jsx = <h1>Hola soy {sum()}</h1>;
//const jsx = <h1>Hola soy {null}</h1>;

const jsx = (
    <div>
        <h1>Hola, soy Javier</h1>
        <p>Soy Ingeniero de Sistemas</p>
        <a href="https://javiermojito.com">Visita mi página</a>
    </div>
);

const element = React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hola, soy Javier"),
    React.createElement("p", {}, "Soy Ingeniero"),
    React.createElement(
        "a",
        { href: "http://javiermojito.com" },
        "Visita mi página."
    )
);

const container = document.getElementById("root");

//              Qué      Dónde
ReactDOM.render(<Presentational />, container);

/* const element = document.createElement("h1");   // <<---
element.innerText = "Hola Gente";

const container = document.getElementById("root"); 
container.appendChild(element);   // <<---- */
