import React, {useState, useEffect} from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

import '../styles/MovieDetails.css';
import '../services/Fetch.js';
import Fetch from '../services/Fetch.js';


const MovieDetails = () => {
    const location = useLocation();

    const { movieId } = useParams();


    const [movie, setMovie] = useState(null);

    useEffect(() => {
        Fetch(`movies/${movieId}`).then(movieData => {
            setMovie(movieData);
        }).catch(error => {
            console.error('Error fetching movie data:', error);
        });
    }, [movieId]);


    const parseGenres = (genres) => {
        return genres.join(', ');
    }

     return (
        <>
        {movie ?
         <div className = 'detailsContainer'>
           <img src = {movie.poster_path} className = 'image' alt = 'Movie Poster'/>
           <div className = 'textFields'>
            <Link to={`/${location.search}`}>
           <button>Back to search</button>
           </Link>
           <div className = 'caption'>
           <p className = 'name'>{movie.title}</p>
           <p className='rating'> {movie.vote_average}</p>
           </div>
           <p className='genre'>{parseGenres(movie.genres)}</p>
           <div className = 'redCaptions'>
           <p>{movie.release_date}</p>
           <p className = 'duration'>{movie.runtime} min</p>
           </div>
           <p className ='overview'>{movie.overview}</p>
           </div>
         </div>
          : <div>Loading...</div> }
         </>
     )
}

export default MovieDetails;
