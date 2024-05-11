import React from 'react';
import { Link, Outlet } from "react-router-dom";
import SearchComponent from './SearchComponent.js';
import '../styles/Header.css';

const Header = ({searchQuery, onSearchSubmit}) => {
    return (
        <div className='header'>
            <Link to={'new'}>Add movie</Link>
            <p className='siteTitle'>netflixroulette</p>
            <p className='searchLabel'>FIND YOUR MOVIE</p>
                <SearchComponent 
                searchQuery={searchQuery} 
                onSearchSubmit={onSearchSubmit}  
            />
            <Outlet />
        </div>
     )
}

export default Header;
