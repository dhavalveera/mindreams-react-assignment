import { combineReducers } from 'redux'

import mfETFSlice from './slice/mf_etf_slice'
import chartSlice from './slice/chart_slice'

export const rootReducer = combineReducers({
  mfETF: mfETFSlice,
  chart: chartSlice,
})

export type RootState = ReturnType<typeof rootReducer>
