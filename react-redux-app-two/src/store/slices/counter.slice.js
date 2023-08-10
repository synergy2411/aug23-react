import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter += 1;
    },
    decrement(state, action) {
      state.counter -= 1;
    },
    addCounter(state, action) {
      state.counter += action.payload;
    },
  },
});

export const { increment, decrement, addCounter } = counterSlice.actions;

const counterReducer = counterSlice.reducer;

export default counterReducer;
