import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";


function Movie({ poster, title, genres, synopsis }) {
    return (
        <div className="Movie">
            <div className="Movie_Columns">
                <MoviePoster poster={poster} />
            </div>
            <div className="Movie_Columns">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie_Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

function MovieGenre({ genre }) {
    return (
        < span className="Movie_Genre" > {genre}</span >
    )
}

function MoviePoster({ poster }) {
    return (
        <img src={poster} alt="Move poster" className="Movie_Poster" />
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}
export default Movie;
