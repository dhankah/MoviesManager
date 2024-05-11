import React, {useState} from 'react';
import '../styles/Search.css';


const SearchComponent = ({searchQuery, handleSearchSubmit}) => {

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
      <div className='searchContainer'>
          <input type = "text" placeholder = {defaultValue} onChange={handleChange} onKeyDown={handleSearchOnEnter} data-testid='searchField'/>
          <button onClick={handleSubmit} className='searchBtn'>Search</button>
      </div>
       )
}

export default SearchComponent;
