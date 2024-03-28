import React, {useState} from 'react';
import '../styles/Search.css';


const SearchComponent = ({searchQuery, onSearchSubmit}) => {
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
    onSearchSubmit(searchText, searchQuery);
  };

  return (
      <div class='searchContainer'>
          <input type = "text" placeholder = {defaultValue} onChange={handleChange} onKeyDown={handleSearchOnEnter}/>
          <button onClick={handleSubmit} class='searchBtn'>Search</button>
      </div>
       )
}

export default SearchComponent;
