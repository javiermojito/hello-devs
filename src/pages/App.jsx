import React from "react";
import Presentational from "../components/Presentational";
import Stateful from "../components/Stateful";
import Tarjeta from "../components/Tarjeta";

const App = () => {
    return (
        <div>
            <Presentational />
            <Tarjeta nombre="Pepe Devito" twitter="pepitotwitter" />
            <Stateful />
        </div>
    );
};

export default App;
