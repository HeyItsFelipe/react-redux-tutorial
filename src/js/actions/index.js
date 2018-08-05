// src/js/actions/index.js

/*
The only way to change the state is by sending a signal to the store.
This is signal is called an action.
Redux actions are nothing more than Javascript objects.
Actions consist of a type and a payload.
The type property is just a string describing the action.
Sending this signal is called "dispatching an action".
It is best practice to wrap every action within a function.
This function would be called an "action creator".
*/

import { ADD_ARTICLE } from '../constants/action-types';

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
