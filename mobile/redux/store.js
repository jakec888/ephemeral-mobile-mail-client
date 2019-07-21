import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { combineReducers } from 'redux';
import rootReducer from './reducers/reducers';

// import devToolsEnhancer from 'remote-redux-devtools';
// Dev tools enhancer does not work

const composeEnhancers = compose(
  applyMiddleware(ReduxThunk),
  // devToolsEnhancer()
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(combineReducers(rootReducer), composeEnhancers);

export default store;
