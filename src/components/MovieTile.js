import React from 'react';
import '../styles/MovieTile.css';

export default function MovieTile ({props}) {
  

  const parseReleaseYear = (releaseDate) => {
    return releaseDate.substring(0, 4);
  }

  const parseGenres = (genres) => {
    return genres.join(', ');
}

  return (
       <div class = 'container' data-testid='movie-tile'>
          <img src = {props.poster_path} alt = 'Movie Poster'/>
          <br />
          <div class = 'caption'>
              <p class = 'movie'>{props.title}</p>
              <div class = 'border'>
                <p class = 'year'>{parseReleaseYear(props.release_date)}</p>
              </div>
           </div>
           <br />
           <p class = 'genre'>{parseGenres(props.genres)}</p>
        </div>
     )
}

MovieTile.defaultProps = {
  title: "Movie Title"
}
