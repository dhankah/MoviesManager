import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';

import '../styles/MovieDetails.css';
import '../services/Fetch.js';
import Fetch from '../services/Fetch.js';


const MovieDetails = () => {
    
    const { movieId } = useParams();
    
    const [movie, setMovie] = useState(null);


    useEffect(() => {
        console.log("not fetched");
        Fetch(`movies/${movieId}`).then(movieData => {
            console.log("fetched");
            setMovie(movieData);
        }).catch(error => {
            console.error('Error fetching movie data:', error);
        });
    }, [movieId]);


    const parseGenres = (genres) => {
        return genres.join(', ');
    }

    
    if (!movie) {
        return <div>Loading...</div>;
    }

     return (
         <div class = 'detailsContainer'>
           <img src = {movie.poster_path} class = 'image' alt = 'Movie Poster'/>
           <div class = 'textFields'>
            <Link to="/">
           <button>Back to search</button>
           </Link>
           <div class = 'caption'>
           <p class = 'name'>{movie.title}</p>
           <p class='rating'> {movie.vote_average}</p>
           </div>
           <p class='genre'>{parseGenres(movie.genres)}</p>
           <div class = 'redCaptions'>
           <p>{movie.release_date}</p> 
           <p class = 'duration'>{movie.runtime} min</p>
           </div>
           <p class ='overview'>{movie.overview}</p>
           </div>
         </div>
     )
}

export default MovieDetails;
