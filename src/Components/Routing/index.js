import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Employees from '../paginas/Employees';
import MD from '../paginas/MD';
import Home from '../paginas/Home';
import SignUp from '../paginas/SignUp';
import Users from '../paginas/Users';
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