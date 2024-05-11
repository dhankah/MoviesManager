import React, {useState} from 'react';
import { useSearch } from '../context/SearchContext';
import styles from '../styles/GenreSelect.module.css';

const GenreSelectComponent = ({genresList, currentGenreInput}) => {
    const { activeGenre, handleGenreChange } = useSearch();
    const [currentGenre, setCurrentGenre] = useState(currentGenreInput);

     return (
            <ul className={styles.ul}>
            {genresList.map((genre) => (
                 <li className={styles.li} key={genre} data-testid='genreOption'
                 style={{ fontWeight: genre === currentGenre ? 'bold' : 'normal' }}
                 onClick={() => handleGenreChange(genre)}
                 >{genre}</li>
             ))}
            </ul>
     )
}

export default GenreSelectComponent;
