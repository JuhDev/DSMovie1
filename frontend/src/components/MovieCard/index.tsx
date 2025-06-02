import React from 'react';
import MovieScore from "components/MovieScore";
import img from 'assets/img/images.jpg';

function MovieCard() {
  const movie = {
    id: 1,
    image: "images.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5
  };

  return (
    <div className="dsmovie-card">
      <img className="dsmovie-movie-card-image" src={img} alt={movie.title} />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore />
        <div className="btn btn-primary dsmovie-btn">Avaliar</div>
      </div>
    </div>
  );
}

export default MovieCard;
