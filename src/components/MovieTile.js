import React from 'react';
import '../styles/MovieTile.css';

export default function MovieTile (props) {

     return (
         <div class = 'container' onClick={props.onSelect} data-testid='movie-tile'>
           <img src = {props.imageUrl} alt='Movie Poster'/>
           <br />
           <div class = 'caption'>
              <p class = 'movie'>{props.title}</p>
              <div class = 'border'>
                  <p class = 'year'>{props.releaseYear}</p>
              </div>
           </div>
           <br />
           <p class = 'genre'>{props.genres}</p>
         </div>
     )
}

MovieTile.defaultProps = {
  title: "Movie Title"
}