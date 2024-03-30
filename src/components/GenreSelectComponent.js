import React, {useState} from 'react';
import '../styles/GenreSelectComponent.css';

const GenreSelectComponent = ({genresList, currentGenreInput, onSelect}) => {
    const [currentGenre, setCurrentGenre] = useState(currentGenreInput);
    const handleSelect = (genre) => {
        onSelect(genre);
        setCurrentGenre(genre);
    };

     return (
            <ul>
            {genresList.map((genre) => (
                 <li key={genre} data-testid='genreOption'
                 style={{ fontWeight: genre === currentGenre ? 'bold' : 'normal' }}
                 onClick={() => handleSelect(genre)}
                 >{genre}</li>
             ))}
            </ul>
     )
}

export default GenreSelectComponent;
