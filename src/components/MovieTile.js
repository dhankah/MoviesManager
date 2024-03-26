import React from 'react';
import '../styles/MovieTile.css';

export default function MovieTile ({props, onClick}) {
  
  const handleTileClick = () => {
    onClick(props);
};


     return (
         <div class = 'container' onClick={handleTileClick} data-testid='movie-tile'>
           <img src = {props.poster_path} alt = 'Movie Poster'/>
           <br />
           <div class = 'caption'>
           <p class = 'movie'>{props.title}</p>
           <div class = 'border'>
           <p class = 'year'>{props.release_date}</p>
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
