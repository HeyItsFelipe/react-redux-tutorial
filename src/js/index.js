import store from '../js/store/index';
import { addArticle } from '../js/actions/index';

window.store = store;
window.addArticle = addArticle;

/*
There are three Redux methods to use.
getState: for accessing the current state
dispatch: for dispatching an action, this is to change the state
in Redux
subscribe: for listening on state changes, accepts a
callback method that will fire whenever an action is dispatched
*/
