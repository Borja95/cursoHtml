import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from '../pages/index';
import Contacto from '../pages/contacto';
import Gifs from '../pages/gifs';
import Layout from '../components/layout'; 
import Producto from '../pages/producto';
import Venta from '../pages/venta';
import Exito from '../pages/exito';
import Error from '../pages/error';

function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Switch>
        <Route exact path='/' component={Index} />
        <Route exact path='/contacto' component={Contacto} />
        <Route exact path='/gifs' component={Gifs} />
        <Route exact path='/producto' component={Producto} />
        <Route exact path='/venta' component={Venta}/>
        <Route exact path='/exito' component={Exito}/>
        <Route exact path='/error' component={Error}/>
    </Switch>
    </Layout>
    </BrowserRouter>
  )}

export default App;