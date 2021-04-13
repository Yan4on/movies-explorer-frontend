import React from 'react';
import './MoviesCard.css';
const apiUrl = 'https://api.nomoreparties.co';



function MoviesCard(props) {

    const movieButtonClassName = (
        `movies-card__button ${props.movie.isAlreadyAdded ? 'movies-card__like-button' : 'movies-card__dislike-button'}`
    );

    function handleToggleButton() {
        props.onToggleMovie(props.movie);
    }

    return (
            <figure className="movies-card" key={props.movie._id}>
                <a
                    className="movies-card__trailer-link"
                    href={props.savedMovies ? props.movie.trailer : props.movie.trailerLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="movies-card__image" src={
                        props.savedMovies
                            ? props.movie.image
                            : `${apiUrl}${props.movie.image ? props.movie.image.url : ''}`
                    }
                        alt={props.movie.nameRU} />
                </a>
                <figcaption className="movies-card__description-like-container">
                    <p className="movies-card__description">{props.movie.nameRU}</p>
                    {
                        props.savedMovies
                            ? <button type="button" className="movies-card__button movies-card__del-button" onClick={handleToggleButton} />
                            : <button type="button" className={movieButtonClassName} onClick={handleToggleButton} />
                    }
                </figcaption>
                <div className="movies__line"></div>
                <p className="movies-card__duration">{`${Math.floor(props.movie.duration / 60)}ч ${props.movie.duration % 60}м`}</p>
            </figure>
    );
}

export default MoviesCard;