/*
import store from '../js/store/index';
import { addArticle } from '../js/actions/index';

window.store = store;
window.addArticle = addArticle;
*/
/*
There are three Redux methods to use.
getState: for accessing the current state
dispatch: for dispatching an action, this is to change the state
in Redux
subscribe: for listening on state changes, accepts a
callback method that will fire whenever an action is dispatched
*/

/*
We connect Redux with React using a Provider.
The Provider wraps your React application and makes it aware
of the entire Redux's store.
The Provider gets the store as a prop.
*/

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
