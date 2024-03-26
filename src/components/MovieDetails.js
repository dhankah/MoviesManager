import React from 'react';
import '../styles/MovieDetails.css';

const MovieDetails = ({imageUrl, movieName, releaseYear, genres, rating, duration, description}) => {

     return (
         <div class = 'detailsContainer'>
           <img src = {imageUrl} class = 'image'/>
           <div class = 'textFields'>
           <div class = 'caption'>
           <p class = 'name'>{movieName}</p>
           <p class='rating'> {rating}</p>
           </div>
           <p class='genre'>{genres}</p>
           <div class = 'redCaptions'>
           <p>{releaseYear}</p> 
           <p class = 'duration'>{duration}</p>
           </div>
           <p class ='genre'>{description}</p>
           </div>
         </div>
     )
}

export default MovieDetails;
