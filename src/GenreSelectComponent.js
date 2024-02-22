import React, {useState} from 'react';

const GenreSelectComponent = ({genresList, currentGenreInput, callBack}) => {
    const [currentGenre, setCurrentGenre] = useState(currentGenreInput);
    const handleSelect = (genre) => {
        callBack(genre);
        setCurrentGenre(genre);
    };

     return (
         <div>
            <ul>
            {genresList.map((genre) => (
                 <li key={genre}
                 style={{ fontWeight: genre === currentGenre ? 'bold' : 'normal' }}
                 onClick={() => handleSelect(genre)}
                 >{genre}</li>
             ))}
            </ul>
         </div>
     )
}

export default GenreSelectComponent;
