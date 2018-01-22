import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import appReducers from './reducers'
// import redirect from '../middleware/redirect';

const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, createLogger({ collapsed: true })]

export default function configureStore(initialState = {}) {
  const store = createStore(
    appReducers,
    initialState,
    applyMiddleware(...middleware),
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(appReducers)
    })
  }

  return store
}
