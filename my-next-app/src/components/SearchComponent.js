import React, {useState} from 'react';
import { useSearch } from '../context/SearchContext';

import styles from '../styles/Search.module.css';


const SearchComponent = () => {
    const { searchQuery, handleSearchSubmit } = useSearch();
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
    console.log("handleSubmit");

    handleSearchSubmit(searchText, searchQuery);
  };

  return (
      <div className='searchContainer'>
          <input className = {styles.input} type = "text" placeholder = {defaultValue} onChange={handleChange} onKeyDown={handleSearchOnEnter} data-testid='searchField'/>
          <button onClick={handleSubmit} className={styles.searchBtn}>Search</button>
      </div>
       )
}

export default SearchComponent;
