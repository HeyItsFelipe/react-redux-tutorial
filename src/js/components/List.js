// src/js/components/List.js

/*
The List component will interact with the Redux store.
We will connect the List component to the Redux store with connect.
Since we want List to get a list of articles, it's a matter of
connecting state.articles with the component.  How?  With
mapStateToProps.
mapStateToProps connects a part of the Redux state to the props
of the React component.
By doing so, a connected React component will have access to the
exact part of the store it needs.
The List component receives the prop articles, which is a copy
of the articles array.  Such array lives inside the Redux state we
created earlier.  It comes from the reducer.
*/

import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
