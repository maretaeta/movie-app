import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tvs: [],
  tvDetails: null,
  tvCast: [],
};

const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    setTvs: (state, action) => {
      state.tvs = action.payload;
    },
    setTvsDetails: (state, action) => {
      state.tvDetails = action.payload;
    },
    setTvCast: (state, action) => {
      state.tvCast = action.payload;
    },
  },
});

export const { setTvs, setTvsDetails, setTvCast } = tvSlice.actions;

export default tvSlice.reducer;
