import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import MovieTile from './MovieTile.js';

import '../styles/MoviesList.css';

const MoviesList = ({movies}) => {

  const {search} = useLocation();

     const splitMovieList = (movies, rowSize) => {
          const movieRows = [];
          for (let i = 0; i < movies.length; i += rowSize) {
            movieRows.push(movies.slice(i, i + rowSize));
          }
          return movieRows;
        };
        
        const movieRows = splitMovieList(movies, 3);

     return (
        <>
          {movieRows.map((row) => (
               <div>
                    {row.map((movie) => (
                          <Link to={`${movie.id}${search}`}>
                    <MovieTile 
                    props={movie}
                    />
                      </Link>
                    ))}
               </div>
          ))}
          </>
        
     )
}

MovieTile.defaultProps = {
  movieName: "Movie Title"
}

export default MoviesList;
