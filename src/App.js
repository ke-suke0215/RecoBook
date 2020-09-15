import React from 'react';
import Room from './components/pages/Room'
import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp'
import LoggedInRoute from './LoggedInRoute'
import AuthProvider from './AuthServuce'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <LoggedInRoute exact path='/' component={Room} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App
