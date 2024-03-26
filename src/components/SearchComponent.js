import React, {useState} from 'react';
import '../styles/Search.css';

const SearchComponent = ({onSearch, defaultValue}) => {
    const [inputValue, setInputValue] = useState(defaultValue);

    const handleSearchOnEnter = (event) => {
        if (event.key === 'Enter') {
            onSearch(inputValue);
        }
    };

    const handleSearch = () => {
        onSearch(inputValue);
    };


     return (
         <div class='searchContainer'>
             <input type = "text" value = {inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleSearchOnEnter}/>
             <button onClick={handleSearch} class='searchBtn'>Search</button>
         </div>
         )
}

export default SearchComponent;
