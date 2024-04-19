import React, {useState} from 'react';
import { useSearch } from '../context/SearchContext';
import styles from '../styles/SortControl.module.css';

const SortControl = ({currentSortOptionInput}) => {
    const sortOptions = new Map([["title", "Title"], ["release_date", "Release Date"]]);

    const [currentSortOption, setCurrentSortOption] = useState(currentSortOptionInput);
    const { handleSortCriterionChange } = useSearch();

    const sortMovies = (event) => {
        const selectedOption = event.target.value;
        setCurrentSortOption(selectedOption);
        handleSortCriterionChange(selectedOption);
      };

     return (
         <div className={styles.sortContainer}>
           <p className={styles.label}>Sort by</p>
           <select value={currentSortOption} onChange={sortMovies} data-testid='select'>
           {Array.from(sortOptions.entries()).map(([key, value]) =>  (
                 <option value={key}
                 key={key}
                 >{value}</option>
             ))}
            </select>
         </div>
     )
}

export default SortControl;
