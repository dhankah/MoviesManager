import React from 'react';
import MovieTile from './MovieTile.js';

const MoviesList = ({movies, onSelect}) => {

     return (
        <>
        {movies.map((movie) => (
            <MovieTile props={movie}
            onClick = {onSelect}/>
             ))}
        </>
     )
}

MovieTile.defaultProps = {
  movieName: "Movie Title"
}

export default MoviesList;
