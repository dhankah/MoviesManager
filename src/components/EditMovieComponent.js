import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Dialog from '../components/Dialog';
import MovieForm from '../components/MovieForm';
import Fetch from '../services/Fetch.js';

const EditMovieComponent = () => {
    const title = 'EDIT MOVIE';

    const { movieId } = useParams();
    

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        Fetch(`movies/${movieId}`).then(movieData => {
            setMovie(movieData);
        }).catch(error => {
            console.error('Error fetching movie data:', error);
        });
    }, [movieId]);

    if (!movie) {
        return <div>Loading...</div>;
    }

     return (
        <Dialog title={title} children={<MovieForm movieInfo={movie}></MovieForm>}>
        </Dialog>
     )
}

export default EditMovieComponent;