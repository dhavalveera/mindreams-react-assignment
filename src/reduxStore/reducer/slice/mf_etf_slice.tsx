import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// Data
import { MFETFType } from '../../../data'

type InitialStateValueType = {
  data: MFETFType[]
}

const initialStateValue: InitialStateValueType = {
  data: [],
}

const dataSlice = createSlice({
  name: 'mfEtf',
  initialState: initialStateValue,
  reducers: {
    fetchData: (state: InitialStateValueType, action: PayloadAction<MFETFType[]>) => {
      state.data = action.payload
    },
  },
})

export const { fetchData } = dataSlice.actions

export default dataSlice.reducer
