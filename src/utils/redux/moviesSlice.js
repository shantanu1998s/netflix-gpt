import { createSlice } from "@reduxjs/toolkit";

 const Movies= createSlice({
    name:"movies",
    initialState:{
        nowPlayingMoviesList:null,
        trailerVideo:null,
    },
    reducers:{
        addNowplayingMoviesList:(state, action)=>{
          state.nowPlayingMoviesList=action.payload;
        },
        addTrailerMovies:(state, action)=>{
          state.trailerVideo=action.payload;
        }
    }
 })


export const {addNowplayingMoviesList, addTrailerMovies}=Movies.actions;
 export default Movies.reducer;