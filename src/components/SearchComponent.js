import React, {useState} from 'react';
import { useOutletContext } from "react-router-dom";

import '../styles/Search.css';


const SearchComponent = () => {
    const [searchQuery, handleSearchSubmit] = useOutletContext();
    const defaultValue = 'What do you want to watch';
    const [searchText, setSearchText] = useState('');

    const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchOnEnter = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    handleSearchSubmit(searchText, searchQuery);
  };

  return (
      <div class='searchContainer'>
          <input type = "text" placeholder = {defaultValue} onChange={handleChange} onKeyDown={handleSearchOnEnter}/>
          <button onClick={handleSubmit} class='searchBtn'>Search</button>
      </div>
       )
}

export default SearchComponent;
