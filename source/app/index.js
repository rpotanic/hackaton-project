import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import Thunk from 'redux-thunk';

import Reducers from '../reducers';


import registerServiceWorker from './assets/sw';
import App from './app';

const container = document.getElementById('app');
const Logger = createLogger({
  predicate: () => process.env.NODE_ENV !== 'production',
  collapsed: true
});

const createStoreWithMiddleware = applyMiddleware(Thunk, Logger)(createStore);
export const store = createStoreWithMiddleware(Reducers);

class ReactApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  }
}

if (container) ReactDOM.render(<ReactApp />, document.getElementById('app'));
registerServiceWorker();
