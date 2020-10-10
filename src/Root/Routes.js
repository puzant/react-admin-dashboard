import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Login from '../Components/Login/Login'
import Dashboard from '../Components/Dashboard/Dashboard'
import Table from '../Components/Table/Table'
import Users from '../Components/Users/Users'
import GuardedRoute from './GuardedRoute'

const Routes = () => {
  return (
    <Switch>
      <GuardedRoute path="/" exact component={Dashboard} />
      <GuardedRoute path="/users" exact component={Users} />
      <GuardedRoute path="/table" exact component={Table}/>
      <Route path="/login" component={Login} />
    </Switch>
  )
}

export default Routes