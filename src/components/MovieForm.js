import React, { useState } from 'react';
import '../styles/MovieForm.css';

const MovieForm = ({movieInfo = {}}) => {
    const [selectedGenre, setSelectedGenre] = useState(movieInfo.genres); 

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value); 
    };

    const genresList = ['Horror', 'Drama']

     return (
         <form class = 'movieForm'>
           <div class='column'>
           <label>Movie Title</label>
           <input type = 'text' value = {movieInfo.title}/>

           <label>Movie Url</label>
           <input type = 'text' value = {movieInfo.url}/>

           <label>Genre</label>
           <select class = 'genreSelect' value={selectedGenre} data-testid='select' onChange={handleGenreChange}>
           {genresList.map((genre) => (
                <option value={genre}>
                    {genre}
                </option>
             ))}
            </select>
           </div> 
           <div class='column'>
                <label>Release Year</label>
                <input type = 'text' value = {movieInfo.releaseYear}/>
                <label>Rating</label>
                <input type = 'text' value = {movieInfo.rating}/>
                <label>Runtime</label>
                <input type = 'text' value = {movieInfo.runtime}/>
           </div>
           <div class='description'>
                <label>Description</label>
                <input type = 'text-area' value = {movieInfo.description}/>
           </div>
           <button class='confirmBtn'>Submit</button>
         </form>
     )
}

export default MovieForm;
