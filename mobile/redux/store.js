import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { combineReducers } from "redux";
import rootReducer from "./reducers/reducers";
import createSagaMiddleware from "redux-saga";

const ReduxSaga = createSagaMiddleware();

const middlewares = [ReduxThunk, ReduxSaga];

const composeEnhancers = compose(applyMiddleware(...middlewares));

const store = createStore(combineReducers(rootReducer), composeEnhancers);

export default store;

// import { createStore, applyMiddleware, compose } from 'redux';
// import ReduxThunk from 'redux-thunk';
// import { combineReducers } from 'redux';
// import rootReducer from './reducers/reducers';

// // Dev
// // redux will break if
// // const composeEnhancers = compose(
// //   applyMiddleware(ReduxThunk),
// //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// // );

// // Production
// const composeEnhancers = compose(applyMiddleware(ReduxThunk));

// const store = createStore(combineReducers(rootReducer), composeEnhancers);

// export default store;
