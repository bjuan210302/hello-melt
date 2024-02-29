import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'doubler',
  initialState: {
    value: 1
  },
  reducers: {
    double: state => { state.value *= 2 },
    halv: state => { state.value /= 1 },
    doubleNTimes: (state, action) => {
      state.value *= 2 * action.payload
    }
  }
})

export const { double, halv, doubleNTimes } = counterSlice.actions

export default counterSlice.reducer