import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { LOGIN_ROUTE, TABLE_ROUTE } from '../utils/consts';
import {privateRoutes, publicRoutes} from './routes'
import 'core-js/es/array';

const AppRouter = () => {

    const user = false;

    return user ?
            (
                <Switch>
                    {privateRoutes.map(({path, Component}) =>
                        <Route path = {path} component = {Component} exact = {true} />
                    )}

                    <Redirect to = {TABLE_ROUTE} />
                </Switch>
            )
            :
            (
                <Switch>
                     {publicRoutes.map(({path, Component}) =>
                        <Route path = {path} component = {Component} exact = {true} />
                    )}

                    <Redirect to = {LOGIN_ROUTE} />  
                </Switch>
            )
}

export default AppRouter;