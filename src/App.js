import React, { useState, useEffect } from "react";
import { SearchOutlined } from "@material-ui/icons";
import Moviecard from "./Component/MovieCard";
import MovieShow from "./Component/MovieShow";
import ImageShow from "./Component/ImageShow";
import "./App.css";

const $API_URl = "http://www.omdbapi.com/?apikey=b1237ce6";

// const movies = {
//   Title: "Amazing Spiderman Syndrome",
//   Year: "2012",
//   imdbid: "ttwi847ru",
//   Type: "movie",
//   Poster: "N/A",
// };

const movieC = {};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${$API_URl}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className='bodyWrapper'>
      <div className='head'>
        <h1>MovieSpice</h1>
        <div className='search'>
          <input
            placeholder='Search for Movies'
            value={searchTerm}
            className='searchbtn'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchOutlined
            alt='search'
            onClick={() => searchMovies(searchTerm)}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <MovieShow />
      <ImageShow />

      {movies?.length > 0 ? (
        <div className='Mcontainer'>
          {movies.map((movie) => {
            return <Moviecard movie={movie} style={movieC} />;
          })}
        </div>
      ) : (
        <div className='none'>
          <h2>No movies found</h2>
        </div>
      )}

      <div className='wrapper'></div>
    </div>
  );
};

export default App;
