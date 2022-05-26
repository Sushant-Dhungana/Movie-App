import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../common/apis/movieApiKey";
import movieApi from "../../common/apis/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
   
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMoviesOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMoviesOrShowDetail",
  async (id) => {
    const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: [],
  shows: [],
  selectedMovieOrShow: [],

};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
        state.selectedMovieOrShow = {};
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected!");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return { ...state, shows: payload };
    },
    [fetchAsyncMoviesOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;

export default movieSlice.reducer;
