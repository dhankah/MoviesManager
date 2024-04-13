import React, {useState} from 'react';
import '../styles/Search.css';

const SearchComponent = ({onSearchSubmit}) => {
    const defaultValue = 'What do you want to watch';

    function debounce(func, delay) {
      let debounceTimer;
      return function() {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
      };
    }
  
    const handleChange = debounce((event) => {
      const searchQuery = event.target.value;
      handleSubmit(searchQuery);
    }, 500);  

  const handleSearchOnEnter = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = (searchQuery) => {
    onSearchSubmit(searchQuery);
  };


     return (
         <div class='searchContainer'>
             <input type = "text" placeholder = {defaultValue} onChange={handleChange} onKeyDown={handleSearchOnEnter}/>
             <button onClick={handleSubmit} class='searchBtn'>Search</button>
         </div>
         )
}

export default SearchComponent;
