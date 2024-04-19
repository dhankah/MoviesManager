import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../styles/MovieDetails.module.css';

const MovieDetails = ({movieProp}) => {
    const router = useRouter();

    const { movieId } = router.query;
    

    const [movie, setMovie] = useState(movieProp);
    


    const parseGenres = (genres) => {
        return genres.join(', ');
    }
 
     return (
        <>
        {movie ? 
         <div className = {styles.detailsContainer}>
           <img src = {movie.poster_path} className = {styles.image} alt = 'Movie Poster'/>
           <div className = {styles.textFields}>
            <Link href={`/`}>
           <button>Back to search</button>
           </Link>
           <Link href={`${movieId}/edit`}>
           <button>Edit</button>
           </Link>
           <div className = {styles.caption}>
           <p className = {styles.name}>{movie.title}</p>
           <p className={styles.rating}> {movie.vote_average}</p>
           </div>
           <p className={styles.genre}>{parseGenres(movie.genres)}</p>
           <div className = {styles.redCaptions}>
           <p>{movie.release_date}</p> 
           <p className = {styles.duration}>{movie.runtime} min</p>
           </div>
           <p className ={styles.overview}>{movie.overview}</p>
           </div>
         </div>
          : <div>Loading...</div> }
         </>
     )
}

export default MovieDetails;
