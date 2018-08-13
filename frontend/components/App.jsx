import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/routes';
import LoginContainer from './auth/LoginContainer';
import SignupContainer from './auth/SignupContainer';
import Main from './chats/Main';

const App = () => (
  <div className="app">
    <Switch>
      <AuthRoute exact path="/" component={LoginContainer}/>
      <AuthRoute exact path="/signup" component={SignupContainer}/>
      <ProtectedRoute exact path="/chats" component={Main}/>
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
