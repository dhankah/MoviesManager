import React from 'react';
import { Link } from "react-router-dom";
import SearchComponent from './SearchComponent.js';
import '../styles/Header.css';

const Header = ({searchQuery, onSearchSubmit}) => {
    return (
        <header className='header'>
            <Link to={'new'}>Add movie</Link>
            <p className='siteTitle'>netflixroulette</p>
            <p className='searchLabel'>FIND YOUR MOVIE</p>
                <SearchComponent 
                searchQuery={searchQuery} 
                handleSearchSubmit={onSearchSubmit}
            />
        </header>
     )
}

export default Header;
