import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import rootReducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

//custom components.
import App from './App';

//styles.
import './index.css';
import {getEvent} from "./actions/events";

const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" render={() =><h1>Login</h1>} />
        <Route path="/" render={() => false ? <App /> : <Redirect to="/login" />} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
