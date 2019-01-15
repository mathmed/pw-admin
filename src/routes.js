import React from "react";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import Primeiro from "./components/PrimeiroAcesso.js";


const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component = {Login}/>
            <Route exact path = "/home" component = {Home}/>
            <Route exact path = "/first" component = {Primeiro}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;