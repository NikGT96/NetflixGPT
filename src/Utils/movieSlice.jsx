import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    trending: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailer: (state, action) => {
        state.trailer = action.payload;
    },
    addTrending: (state, action) => {
      state.trending = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailer, addTrending } = movieSlice.actions;
export default movieSlice.reducer;
 