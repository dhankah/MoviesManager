import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MovieTile from '../components/MovieTile.js';

import styles from '../styles/MovieList.module.css';

const MoviesList = ({movies}) => {
  const router = useRouter();
    

     const splitMovieList = (movies, rowSize) => {
          const movieRows = [];
          for (let i = 0; i < movies.length; i += rowSize) {
            movieRows.push(movies.slice(i, i + rowSize));
          }
          return movieRows;
        };
        
        const movieRows = splitMovieList(movies, 3);

     return (
        <div className={styles.background}>
          {movieRows.map((row) => (
               <div>
                    {row.map((movie) => (
                          <Link href={`${router.pathname}/${movie.id}`}>
                    <MovieTile 
                    props={movie}
                    />
                      </Link>
                    ))}
               </div>
          ))}
          </div>
        
     )
}

MovieTile.defaultProps = {
  movieName: "Movie Title"
}

export default MoviesList;
