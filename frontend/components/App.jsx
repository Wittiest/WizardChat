import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/routes';
import Login from './auth/Login';
import Signup from './auth/Signup';
import ChatIndex from './chats/index';
import Footer from './Footer';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute exact path="/chats" component={ChatIndex}/>
      <AuthRoute exact path="/" component={Login}/>
      <AuthRoute exact path="/signup" component={Signup}/>
      <Redirect to="/" />
    </Switch>
    <Footer />
  </div>
);

export default App;
