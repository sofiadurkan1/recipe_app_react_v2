import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Navbar from '../components/navbar/Navbar'
import Home from '../pages/home/Home';
import Details from '../pages/details/Details'
import About from '../pages/about/About'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>

        <Switch>
            <Route path = "/" exact component={Home}/>
            <Route path = "/about" component={About}/>
            <Route path = "/details" component={Details}/>

        </Switch>
            
        </BrowserRouter>
    )
}

export default AppRouter
