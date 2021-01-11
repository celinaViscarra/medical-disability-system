import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {AuthProvider} from '../SignUp/Context/AuthContext'
import Employees from '../Employees/index';
import Med from '../Disabilities/index';
import Home from '../Home';
import SignUp from '../SignUp/signUp';
import Table from '../Disabilities/Table'
import Login from '../SignUp/Login'
import TableEmployees from '../Employees/Table';
import ForgotPassword from '../SignUp/utilities/ForgotPassword';

function Routing() {
    return (
    <div>
        <Router>
          <AuthProvider>
                <Switch>
                    <Route exact path='/' component={SignUp}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/employees'component={Employees}/>
                    <Route path='/listE' component={TableEmployees}/>
                    <Route path='/med'component={Med}/>
                    <Route path='/listMD' component={Table}/>
                    <Route path='/signup'component={SignUp}/>
                    <Route path="/login" component={Login} />
                    <Route parth='/forgot-password' component={ForgotPassword}/>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
  )
}

export default Routing;