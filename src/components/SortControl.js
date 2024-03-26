import React, {useState} from 'react';
import '../styles/SortControl.css';

const SortControl = ({currentSortOptionInput, handleSelect}) => {
    const sortOptions = ["Release Date", "Title"]

    const [currentSortOption, setCurrentSortOption] = useState(currentSortOptionInput);


    const sortMovies = (event) => {
        const selectedOption = event.target.value;
        setCurrentSortOption(selectedOption);
        handleSelect(selectedOption);
      };

     return (
         <div class='sortContainer'>
           <p>Sort by</p>
           <select value={currentSortOption} onChange={sortMovies} data-testid='select'>
           {sortOptions.map((sortOption) => (
                 <option value={sortOption}
                 >{sortOption}</option>
             ))}
            </select>
         </div>
     )
}

export default SortControl;
