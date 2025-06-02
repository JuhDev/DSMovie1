import React from 'react';
import MovieScore from "components/MovieScore";
import img from 'assets/img/images.jpg';
import { Link } from 'react-router-dom';

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

                <Link to='/form/${movie.id}'>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>

            </div>
        </div>
    );
}

export default MovieCard;
