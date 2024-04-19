import React from 'react';
import SearchComponent from './SearchComponent.js';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {

    return (
        <header className={styles.header}>
            <p className={styles.siteTitle}>netflixroulette</p>
            <p className={styles.searchLabel}>FIND YOUR MOVIE</p>
            <Link href={`/movies/new`}>
            <button>Add movie</button>
            </Link>
                <SearchComponent />
        </header>
     )
}

export default Header;
