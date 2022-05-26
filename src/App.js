import React from 'react-router-dom';
import './App.scss';
import { Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';


function App() {
  return (
    <div className="App">

      <Header/>
      <div className="container">
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/movie/:imdbID" element={<MovieDetail/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
