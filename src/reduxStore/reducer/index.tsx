import { combineReducers } from 'redux'

import mfETFSlice from './slice/mf_etf_slice'

export const rootReducer = combineReducers({
  mfETF: mfETFSlice,
})

export type RootState = ReturnType<typeof rootReducer>
