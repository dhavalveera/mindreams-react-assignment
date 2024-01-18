import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// Data
import { ChartValueType } from '../../../data'

type InitialStateValueType = {
  data: ChartValueType[]
}

const initialStateValue: InitialStateValueType = {
  data: [],
}

const chartDataSlice = createSlice({
  name: 'chartValue',
  initialState: initialStateValue,
  reducers: {
    fetchChartData: (state: InitialStateValueType, action: PayloadAction<ChartValueType[]>) => {
      state.data = action.payload
    },
  },
})

export const { fetchChartData } = chartDataSlice.actions

export default chartDataSlice.reducer
