import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//custom components.
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/index';

//css files.
import './index.css';

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
