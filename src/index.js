import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {Router, Route, Redirect, Switch} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

//custom components.
import App from './App';
import Login from './components/Login';
import history from './history';

//styles.
import './index.css';

import rootReducer from './reducers/index';
const store = createStore(rootReducer, applyMiddleware(thunk));

const authentication = () => localStorage.getItem('user') ? <App /> : <Redirect to="/login" />;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" render={authentication} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
