import { createSlice } from "@reduxjs/toolkit";

const Movies = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMoviesList: null,
    trailerVideo: null,
    popularMovies: null,
    topRated: null,
    upComing:null,
  },
  reducers: {
    addNowplayingMoviesList: (state, action) => {
      state.nowPlayingMoviesList = action.payload;
    },
    addTrailerMovies: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addpopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addUpComing: (state, action) => {
      state.upComing = action.payload;
    },
  },
});

export const {
  addNowplayingMoviesList,
  addTrailerMovies,
  addpopularMovies,
  addTopRated,
  addUpComing,
} = Movies.actions;
export default Movies.reducer;
