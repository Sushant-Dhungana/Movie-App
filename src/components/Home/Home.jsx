import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieListing from "../MovieListing/MovileListing";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";


const Home = () => {
  const movieText = "Harry";
  const showText = "Friends";

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};

export default Home;
