import { createStore, applyMiddleware, compose } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import ReduxThunk from 'redux-thunk';
import { combineReducers } from 'redux';
import rootReducer from './reducers/reducers';

const composeEnhancers = compose(
  applyMiddleware(ReduxThunk),
  devToolsEnhancer()
);

const store = createStore(combineReducers(rootReducer), composeEnhancers);

export default store;
