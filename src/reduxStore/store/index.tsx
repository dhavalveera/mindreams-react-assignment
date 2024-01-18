import { configureStore } from '@reduxjs/toolkit'

// Saga
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from '../reducer'

import mySaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(mySaga)

export default store
