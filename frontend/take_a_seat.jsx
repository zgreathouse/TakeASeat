import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

//for testing
// import { signup, login, logout } from './util/session_api_util';
import { signup, login, logout } from './actions/session_actions';
//end testing

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.store = store;
  window.signup = signup;
  window.login = login;
  window.logout = logout;

  const rootElement = document.getElementById('root')
  ReactDOM.render(<h1>Please, Take A Seat.</h1>, rootElement);
});
