import React from "react";
import "./Moviecard.css";

const img = {
  height: "20rem",
  width: "20rem",
};

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className='movieWrap'>
      <div className='movie' keys={movie.imdbID}>
        <div>
          <img
            style={img}
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
            // height='400'
          />
          <p>{movie.Genre}</p>
          <div>
            {/* <span>{movie.Type}</span> */}
            <h3>{movie.Title}</h3>
            {/* <p>{movie.Genre}</p>
            <p>{movie.Actors}</p>
            <p>{movie.Runtime}</p> */}
          </div>
          <div>
            <p>Year: {movie.Year}</p>
          </div>
        </div>
        {/* <button class='check'>Check</button> */}
      </div>
    </div>
  );
};

export default MovieCard;
