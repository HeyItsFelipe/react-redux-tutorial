// src/js/store/index.js
/*
The store orchestrates all the moving parts in Redux.
The store in Redux is like the human brain.
The Redux store is fundamental, the state of the whole application
lives inside the store.
So we should create a store for wrapping up the state with createStore.
*/

import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer);

export default store;
