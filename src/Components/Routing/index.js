import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {AuthProvider} from '../SignUp/Context/AuthContext'
import {Container} from 'react-bootstrap'
import Employees from '../Employees/index';
import Med from '../Disabilities/index';
import Home from '../Home';
import SignUp from '../SignUp/signUp';
import Users from '../Users/index';
import Navbar from '../NavBar/Navbar';
import Table from '../Disabilities/Table'
import Login from '../SignUp/Login'

function Routing() {
    return (
    <div>
        <Router>
          <AuthProvider>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/employees'component={Employees}/>
                    <Route path='/med'component={Med}/>
                    <Route path='/md' component={Table}/>
                    <Route path='/users' component={Users}/>
                    <Route path='/signup'component={SignUp}/>
                    <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
  )
}

export default Routing;