import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Consultar from './View/Consultar'

import Inicio from './View/Inicio'
import Sobre from './View/Sobre'


export default function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/consultar" component={Consultar} />
                <Route exact path="/sobre" component={Sobre} />
                <Redirect path="*" to="/" />
            </Switch>
        </BrowserRouter>
    )
} 