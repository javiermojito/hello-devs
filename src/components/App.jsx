import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NuevaTarjeta from "../pages/NuevaTarjeta";
import Tarjetas from "../pages/Tarjetas";
import Layout from "./Layout";
import NotFound from "./NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/hello-devs" component={Tarjetas} />
          <Route exact path="/tarjetas/nueva" component={NuevaTarjeta} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
