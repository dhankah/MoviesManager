import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import '../styles/MovieDetails.css';
import '../services/Fetch.js';
import Fetch from '../services/Fetch.js';
import MovieDetails from './MovieDetails.js';


const MovieLoader = () => {

    const { movieId } = useParams(); // Accessing movieId parameter from the URL

    const [movie, setMovie] = useState(null);

    // Fetch movie data directly inside the component body
    Fetch(`movies/${movieId}`).then(movieData => {
        console.log("fetched")
        setMovie(movieData);
    }).catch(error => {
        console.error('Error fetching movie data:', error);
    });
    

     return (
         <MovieDetails movie={movie}/>
     )
}

export default MovieLoader;
