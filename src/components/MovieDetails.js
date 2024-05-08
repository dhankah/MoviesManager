import React from 'react';
import '../styles/MovieDetails.css';

const MovieDetails = ({movie, onButtonClick}) => {

    const parseGenres = (genres) => {
        return genres.join(', ');
    }

     return (
         <div class = 'detailsContainer'>
           <img src = {movie.poster_path} class = 'image' alt = 'Movie Poster'/>
           <div class = 'textFields'>
           <button onClick={onButtonClick}>Back to search</button>
           <div class = 'caption'>
           <p class = 'name'>{movie.title}</p>
           <p class='rating'> {movie.vote_average}</p>
           </div>
           <p class='genre'>{parseGenres(movie.genres)}</p>
           <div class = 'redCaptions'>
           <p>{movie.release_date}</p>
           <p class = 'duration'>{movie.runtime} min</p>
           </div>
           <p class ='overview'>{movie.overview}</p>
           </div>
         </div>
     )
}

export default MovieDetails;
