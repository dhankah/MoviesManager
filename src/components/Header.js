import React from 'react';
import SearchComponent from './SearchComponent.js';
import '../styles/Header.css';

const Header = ({searchQuery, onSearchSubmit}) => {
    return (
        <header className='header'>
            <p className='siteTitle'>netflixroulette</p>
            <p className='searchLabel'>FIND YOUR MOVIE</p>
                <SearchComponent 
                searchQuery={searchQuery} 
                onSearchSubmit={onSearchSubmit}  
            />
        </header>
     )
}

export default Header;
