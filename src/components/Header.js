import React from 'react';
import SearchComponent from './SearchComponent.js';
import '../styles/Header.css';

const Header = ({onSearchSubmit}) =>
        <div className='header'>
            <p className='siteTitle'>netflixroulette</p>
            <p className='searchLabel'>FIND YOUR MOVIE</p>
                <SearchComponent 
                onSearchSubmit={onSearchSubmit}  
            />
        </div>

export default Header;
