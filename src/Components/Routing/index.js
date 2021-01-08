import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Employees from '../Employees/index';
import MD from '../Disabilities/index';
import Home from '../Home';
import SignUp from '../SignUp';
import Users from '../Users/index';
import Navbar from '../NavBar/Navbar';

function Routing() {
    return (
        <div>
            <HashRouter>
                <Navbar/>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/employees'>
                        <Employees />
                    </Route>
                    <Route path='/med'>
                        <MD/>
                    </Route>
                    <Route path='/users'>
                        <Users/>
                    </Route>
                    <Route path='/signup'>
                        <SignUp/>
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default Routing;