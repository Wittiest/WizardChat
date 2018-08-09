import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/routes';
import LoginContainer from './auth/LoginContainer';
import SignupContainer from './auth/SignupContainer';
import ChatIndex from './chats/index';
import Footer from './Footer';

const App = () => (
  <div className="app">
    <Switch>
      <AuthRoute exact path="/" component={LoginContainer}/>
      <AuthRoute exact path="/signup" component={SignupContainer}/>
      <ProtectedRoute exact path="/chats" component={ChatIndex}/>
      <Redirect to="/" />
    </Switch>
    <Footer />
  </div>
);

export default App;
