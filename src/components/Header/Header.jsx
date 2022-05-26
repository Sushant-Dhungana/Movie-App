import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import User from "../../images/user.png";
import "./Header.scss";
import {FaSearchengin} from 'react-icons/fa';
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if(term === "") return alert("Please enter a search term");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  }
  return (
    <div className="header">
      <div className="logo">
      <Link to="/">Box Hub</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" value={term}  placeholder="Search Movies or shows " onChange={(e)=>setTerm(e.target.value)}/>
          <button type="submit"><FaSearchengin/></button>
        </form>
      </div>

      <div className="user-image">
        <img src={User} alt="user" />
      </div>
    </div>
  );
};

export default Header;
