import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import LoginReducer from './Reducers/loginReducer';

const createStore = () => reduxCreateStore(LoginReducer);

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);