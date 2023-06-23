import { createSlice } from "@reduxjs/toolkit";
import data from "../../components/utils/constant/data";

const movieSlice = createSlice({
    name: "Movies Slice",
    initialState:{
        movies: data,
    },
    reducers: {
        addMovie(state,action) {
            state.movies.push(action.payload);
        },
    },
});

const {addMovie} = movieSlice.actions;
const moviesReducer = movieSlice.reducer;

export {addMovie};
export default moviesReducer;