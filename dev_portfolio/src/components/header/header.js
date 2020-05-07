import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from "../home/home";
import Contact from "../contact/contact";
import NotFound from "../notFound/notFound";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Header = () => (
    <BrowserRouter>
            <div className="nav-wrapper">
                {/* <a href="/" className="center brand-logo">Emilly Moura</a> */}
                <nav>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink exact={true} activeStyle={{fontWeight: "bold"}} to="/">Home</NavLink></li>
                    <li><NavLink activeStyle={{fontWeight: "bold"}} to="/contact">Contato</NavLink></li>
                </ul>
                </nav>
                <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/contact' component={Contact}/>
        <Route component={NotFound}/>
      </Switch>
            </div>
    </BrowserRouter>
    )

export default Header;