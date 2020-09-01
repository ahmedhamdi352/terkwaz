import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from "redux-logger";

import categoriesReducer from './src/store/reducers/Categories'
import itemReducer from './src/store/reducers/Items'
import AppNavigator from './src/navigation'
const rootReducer = combineReducers({

  categories:categoriesReducer,
  item:itemReducer

});
const middlewares = [logger, ReduxThunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
    );
  }
}