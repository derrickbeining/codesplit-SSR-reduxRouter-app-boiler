import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import { connectRoutes } from 'redux-first-router' // RFR

import routesMap from './routesMap'
import options from './options'
import * as actionCreators from './actions'
import * as allReducers from './reducers'

const { form, ...remainingReducers } = allReducers

export default (history, preLoadedState) => {
  const RFR = connectRoutes(history, routesMap, options)

  const rootReducer = combineReducers({
    ...remainingReducers,
    ...form,
    location: RFR.reducer
  })
  const middlewares = applyMiddleware(RFR.middleware)
  const enhancers = composeEnhancers(RFR.enhancer, middlewares)
  const store = createStore(rootReducer, preLoadedState, enhancers)

  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('./reducers/index', () => {
      const allReducers = require('./reducers/index')
      const { form, ...otherReducers } = allReducers
      const rootReducer = combineReducers({
        ...otherReducers,
        ...form,
        location: RFR.reducer
      })
      store.replaceReducer(rootReducer)
    })
  }

  return { store, thunk: RFR.thunk }
}

const composeEnhancers = (...args) =>
  typeof window !== 'undefined'
    ? composeWithDevTools({ actionCreators })(...args)
    : compose(...args)
