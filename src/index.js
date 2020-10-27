import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { connectRouter, routerMiddleware } from "connected-react-router";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
});

const store = createStore(
  rootReducer,
);

ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
