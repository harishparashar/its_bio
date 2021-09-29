import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore,applyMiddleware,combineReducers  } from 'redux';
import AuthReducer from './Reducers/authReducer';
import AddClientReducer from './Reducers/addClientReducer';
import ProfileImgReducer from './Reducers/propfileImg';
import ProfileReducer from './Reducers/profileReduce'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {reducer as FormReducer} from 'redux-form'

const rootReducer  = combineReducers({
  AuthReducer,AddClientReducer,ProfileImgReducer,ProfileReducer,
form : FormReducer
})
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))


const createStore = () => reduxCreateStore(rootReducer,composedEnhancer);

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);