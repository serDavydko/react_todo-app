import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './base.css';
import './index.css';
import App from './App';
import store from './redux/store';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
