import React from 'react';

const MovieList = ({ Trendingmovies }) => {
  return (
    <div>
      {Trendingmovies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        </div>
      ))}
     
    </div>
  );
};

export default MovieList;
