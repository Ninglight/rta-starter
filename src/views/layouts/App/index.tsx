// define
import React from 'react'
import {hot} from "react-hot-loader"
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from '../../../routes'


const App = () => {


    return (
        <>
            <header>
                <h1>Hello world</h1>
            </header>
            <Router>
                <main>
                    {routes.map((route) => (
                        <Route key={route.path} {...route} />
                    ))}
                </main>
            </Router>
        </>
    )


}

export default (hot(module)(App));