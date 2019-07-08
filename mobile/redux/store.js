// import { createStore, applyMiddleware, compose } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers from './reducers';

// const store = createStore(
//   reducers,
//   compose(
//     applyMiddleware(ReduxThunk),
//     devToolsEnhancer()
//   )
// );

const store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;
