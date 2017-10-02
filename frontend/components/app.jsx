import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';

//components
import SessionFormContainer from './session/session_form_container'
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div>
    <header>
      <Link to='/'>
        <h1>Take A Seat</h1>
      </Link>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
