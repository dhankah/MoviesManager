import React, {useState} from 'react';
import '../styles/SortControl.css';

const SortControl = ({currentSortOptionInput, handleSelect}) => {
    const sortOptions = new Map([["title", "Title"], ["release_date", "Release Date"]]);

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
           {Array.from(sortOptions.entries()).map(([key, value]) =>  (
                 <option value={key}
                 >{value}</option>
             ))}
            </select>
         </div>
     )
}

export default SortControl;
