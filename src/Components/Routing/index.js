import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Employees from '../Employees/index';
import Med from '../Disabilities/index';
import Home from '../Home';
import SignUp from '../SignUp';
import Users from '../Users/index';
import Navbar from '../NavBar/Navbar';
import Table from '../Disabilities/Table'

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
                        <Med/>
                    </Route>
                    <Route path='/md'>
                        <Table/>
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