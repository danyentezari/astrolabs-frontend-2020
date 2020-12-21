import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import AppContext from './AppContext';
import LayoutRoute from './LayoutRoute';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen';

const App = () => {

  const [globalState, setGlobalState] = useState(
    {
      loggedIn: localStorage.getItem('jwt') ? true : false
    }
  )

  // useEffect(
  //   () => {
  //     alert("loggedIn status changed!")
  //   },
  //   [ globalState.loggedIn ]
  // )

  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      <BrowserRouter>
          <Switch>
              <LayoutRoute path="/" exact={true} component={HomeScreen} />
              <LayoutRoute path="/about" exact={true} component={AboutScreen} />
              <LayoutRoute path="/register" exact={true} component={RegistrationScreen} />
              <LayoutRoute path="/login" exact={true} component={LoginScreen} />
          </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;