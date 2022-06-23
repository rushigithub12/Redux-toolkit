import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numberOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfCakes--; //it is not mutating state but under the hood it uses immer library for immutable state
    },
    restocked: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions