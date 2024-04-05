import React, {useState} from 'react';
import Dialog from '../components/Dialog';
import MovieForm from '../components/MovieForm';

const AddMovieComponent = () => {
    const title = 'ADD MOVIE';
    
     return (
        <Dialog title={title} children={<MovieForm></MovieForm>}>
        </Dialog>
     )
}

export default AddMovieComponent;
