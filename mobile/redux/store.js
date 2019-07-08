import { createStore, applyMiddleware, compose } from 'redux';
// import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
// import { composeWithDevTools } from 'remote-redux-devtools';
import { combineReducers } from 'redux';
import rootReducer from './reducers/reducers';

// const store = createStore(
//   reducers,
//   compose(
//     applyMiddleware(ReduxThunk),
//     devToolsEnhancer()
//   )
// );

// const store = createStore(
//   rootReducer,
//   {},
//   composeWithDevTools(applyMiddleware(ReduxThunk))
// );

// export default store;

const composeEnhancers = compose(
  applyMiddleware(ReduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(combineReducers(rootReducer), composeEnhancers);

export default store;
