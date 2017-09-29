import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { signup, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.store = store;
  window.signup = signup;
  window.login = login;
  window.logout = logout;

  const rootElement = document.getElementById('root')
  ReactDOM.render(<Root store={store}/>, rootElement);
});

//for testing
// import { signup, login, logout } from './util/session_api_util';
// import { signup, login, logout } from './actions/session_actions';

// window.store = store;
// window.signup = signup;
// window.login = login;
// window.logout = logout;
//end testing
