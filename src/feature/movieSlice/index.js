import { createSlice } from "@reduxjs/toolkit";
import data from "../../components/utils/constant/data";

const movieSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    movies: data,
  },
  reducers: {
    addMovie(state, action) {
      state.movies.push(action.payload);
    },
    updateMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

const { addMovie, updateMovies } = movieSlice.actions;
const moviesReducer = movieSlice.reducer;

export { addMovie, updateMovies };
export default moviesReducer;
