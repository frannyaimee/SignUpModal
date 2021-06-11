import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialCustomerForm } from './forms';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      ...createForms({
        customer: InitialCustomerForm
      })
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
}