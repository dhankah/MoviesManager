import React, { useState } from 'react';
import '../styles/MovieForm.css';

const MovieForm = ({movieInfo = {}}) => {
    const [selectedGenre, setSelectedGenre] = useState(movieInfo.genres); 

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value); 
    };

    const genresList = ["Horror", "Drama"]

     return (
         <div class = 'movieForm'>
           <div class="column">
           <p>movieTitle</p>
           <input type = "text" value = {movieInfo.title}/>

           <p>movieUrl</p>
           <input type = "text" value = {movieInfo.url}/>

           <p>genre</p>
           <select class = 'genreSelect' value={selectedGenre} data-testid='select' onChange={handleGenreChange}>
           {genresList.map((genre) => (
                 <option value={genre}
                 >{genre}</option>
             ))}
            </select>
           </div> 
           <div class="column">
           <p>releaseYear</p>
           <input type = "text" value = {movieInfo.releaseYear}/>
           <p>rating</p>
           <input type = "text" value = {movieInfo.rating}/>
           <p>runtime</p>
           <input type = "text" value = {movieInfo.runtime}/>
           </div>
           <div class='description'>
           <p>description</p>
           <input type = "text-area" value = {movieInfo.description}/>
           </div>
           <button class='confirmBtn'>Submit</button>
         </div>
     )
}

export default MovieForm;
