import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  postDetails: null,
  postCast: [],
  postSearch: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPostDetails: (state, action) => {
      state.postDetails = action.payload;
    },
    setCast: (state, action) => {
      state.postCast = action.payload;
    },
    setSearch: (state, action) => {
      state.postSearch = action.payload;
    },
  },
});

export const { setPosts, setPostDetails, setCast, setSearch } =
  postSlice.actions;

export default postSlice.reducer;
