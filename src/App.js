import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LayoutRoute from './LayoutRoute';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen';

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
            <LayoutRoute path="/" exact={true} component={HomeScreen} />
            <LayoutRoute path="/about" exact={true} component={AboutScreen} />
            <LayoutRoute path="/register" exact={true} component={RegistrationScreen} />
            <LayoutRoute path="/login" exact={true} component={LoginScreen} />
        </Switch>
    </BrowserRouter>
  )
}

export default App;