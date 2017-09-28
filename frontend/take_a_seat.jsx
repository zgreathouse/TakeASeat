import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

//for testing
import { signup, login, logout } from './util/session_api_util';
//end testing

document.addEventListener('DOMContentLoaded', () => {
  window.signup = signup;
  window.login = login;
  window.logout = logout;

  const rootElement = document.getElementById('root')
  ReactDOM.render(<h1>Please, Take A Seat.</h1>, rootElement);
});
