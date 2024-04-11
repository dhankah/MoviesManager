import React from 'react';
import '../styles/MovieTile.css';

const MovieTile = ({props}) => {
  

  const parseReleaseYear = (releaseDate) => {
    return releaseDate.substring(0, 4);
  }

  const parseGenres = (genres) => {
    return genres.join(', ');
}

  return (
       <div className = 'container' data-testid='movie-tile'>
          <img src = {props.poster_path} alt = 'Movie Poster'/>
          <br />
          <div className = 'caption'>
              <p className = 'movie'>{props.title}</p>
              <div className = 'border'>
                <p className = 'year'>{parseReleaseYear(props.release_date)}</p>
              </div>
           </div>
           <br />
           <p className = 'genre'>{parseGenres(props.genres)}</p>
        </div>
     )
}

MovieTile.defaultProps = {
  title: "Movie Title"
}

export default MovieTile;
