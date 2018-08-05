// src/js/reducers/index.js
/*
In Redux, the state must return entirely from reducers.
A reducers is just a Javascript function.
Reducers take in two parameters: the current state and an action.
Reducers must be pure functions.
Reducers produce the state of the application.
Reducers calculate the next state depending on action type.
Reducer should return the initial state by default.
We avoid mutations of the initial state.
To avoid mutations, we use:
concat, slice, and the spread operator for arrays
Object.assign, and the spread operator for objects
Note: Your reducer will grow as your app gets bigger.
You can split a big reducer into separate functions and
combine them with combineReducers.
*/

import { ADD_ARTICLE } from '../constants/action-types';

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
