import 'babel-polyfill'; // eslint-disable-line
import { AppContainer } from 'react-hot-loader';  // eslint-disable-line
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/main.scss';

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Router>
        <Component />
      </Router>
    </AppContainer>,
    document.getElementById('root'),
  );

render(App);
if (module.hot) module.hot.accept('./App', () => render(App));
