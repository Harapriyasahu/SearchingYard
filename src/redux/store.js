import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './reducer';

const rootReducer = combineReducers({
  products: productsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

