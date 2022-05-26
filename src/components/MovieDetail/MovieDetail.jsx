import React, {useEffect} from 'react';
import "./MovieDetail.scss";
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMoviesOrShowDetail } from '../../features/movies/movieSlice';
import { getSelectedMovieOrShow } from '../../features/movies/movieSlice';
import { AiOutlineStar } from 'react-icons/ai';
import {BsFillHandThumbsUpFill} from 'react-icons/bs';
import {GiFilmSpool} from 'react-icons/gi';
import {AiFillCalendar} from 'react-icons/ai';
import { removeSelectedMovieOrShow } from '../../features/movies/movieSlice';

const MovieDetail = () => {
  const {imdbID} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
 console.log(
   data
 )
  useEffect(()=>{
    dispatch(fetchAsyncMoviesOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    }
  },[dispatch, imdbID]);
  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (<div>Loading...</div>) : (

      <>
      <div className="section-left">
        <div className="movie-title">
          <h1>{data.Title}</h1>
          <div className="movie-rating">
            <span>IMDB Rating <AiOutlineStar style={{color:'yellow'}}/> : {data.imdbRating}</span>
            <span>IMDB Votes <BsFillHandThumbsUpFill style={{color:"white"}}/> : {data.imdbRating}</span>
            <span>Run Time <GiFilmSpool style={{color:'white'}}/> : {data.imdbRating}</span>
            <span>Year <AiFillCalendar style={{color:"green"}}/> : {data.imdbRating}</span>
          </div>
          <div className="movie-plot">{data.Plot}</div>
          <div className="movie-info">
            <div>
              <span>Director</span>
              <span>{data.Director}</span>
            </div>
            <div>
              <span>Stars</span>
              <span>{data.Actors}</span>
            </div>
            <div>
              <span>Generes</span>
              <span>{data.Genre}</span>
            </div>
            <div>
              <span>Languages</span>
              <span>{data.Language}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{data.Awards}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title}/>
      </div>
      </>
      )}
    </div>
      
  )
}

export default MovieDetail