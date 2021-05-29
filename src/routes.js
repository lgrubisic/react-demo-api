import React from 'react';
import { Character } from './components/Character';
import { About } from './components/About';
import { Navigation } from './components/Navigation';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/Character" component={Character} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={About} />
      </Switch>
    </div>
  );
};
