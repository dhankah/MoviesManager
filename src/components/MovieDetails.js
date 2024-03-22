import React from 'react';
import '../styles/MovieDetails.css';

const MovieDetails = ({movie, onButtonClick}) => {

     return (
         <div class = 'detailsContainer'>
           <img src = {movie.poster_path} class = 'image'/>
           <div class = 'textFields'>
           <button onClick={onButtonClick}>Back to search</button>
           <div class = 'caption'>
           <p class = 'name'>{movie.title}</p>
           <p class='rating'> {movie.vote_average}</p>
           </div>
           <p class='genre'>{movie.genres}</p>
           <div class = 'redCaptions'>
           <p>{movie.release_date}</p> 
           <p class = 'duration'>{movie.runtime} min</p>
           </div>
           <p class ='genre'>{movie.overview}</p>
           </div>
         </div>
     )
}

export default MovieDetails;
