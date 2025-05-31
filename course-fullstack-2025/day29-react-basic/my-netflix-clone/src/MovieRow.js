// MovieRow.js
import React from "react";
// MovieRow.js
import "./MovieRow.css";

function MovieRow({ title, movies }) {
  return (
    <div className="movie-row">
      <h2 className="row-title">{title}</h2>
      <div className="row-movies">
        {movies.map(({ name, img }, index) => (
          <div key={index} className="movie-card">
            <img className="poster" src={img} alt={name} />
            <p className="movie-name">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
