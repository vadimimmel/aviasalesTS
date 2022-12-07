import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { aviasales } from './reducers/aviasales'

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const store = createStore(
  aviasales,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

export { store }
