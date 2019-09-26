import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers/reducers'
import rootSagas from './saga'

const ReduxSaga = createSagaMiddleware()

const middlewares = [ReduxThunk, ReduxSaga]

const composeEnhancers = compose(applyMiddleware(...middlewares))

const store = createStore(combineReducers(rootReducer), composeEnhancers)

ReduxSaga.run(rootSagas)

export default store

// import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import ReduxThunk from 'redux-thunk'

// import rootReducer from './reducers/reducers'

// // Dev
// // redux will break if
// // const composeEnhancers = compose(
// //   applyMiddleware(ReduxThunk),
// //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// // );

// // Production
// const composeEnhancers = compose(applyMiddleware(ReduxThunk))

// const store = createStore(combineReducers(rootReducer), composeEnhancers)

// export default store
