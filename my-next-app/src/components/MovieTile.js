import React from 'react';
import styles from '../styles/MovieTile.module.css';

const MovieTile = ({props}) => {
  

  const parseReleaseYear = (releaseDate) => {
    return releaseDate.substring(0, 4);
  }

  const parseGenres = (genres) => {
    return genres.join(', ');
}

  return (
       <div className = {styles.container} data-testid='movie-tile'>
          <img className = {styles.img} src = {props.poster_path} alt = 'Movie Poster'/>
          <br />
          <div className = {styles.caption}>
              <p className = {styles.movie}>{props.title}</p>
              <div className = {styles.border}>
                <p className = {styles.year}>{parseReleaseYear(props.release_date)}</p>
              </div>
           </div>
           <br />
           <p className = {styles.genre}>{parseGenres(props.genres)}</p>
        </div>
     )
}

MovieTile.defaultProps = {
  title: "Movie Title"
}

export default MovieTile;
