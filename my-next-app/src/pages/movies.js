import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSearch } from '../context/SearchContext';

import Fetch from '../services/Fetch.js'
import MoviesList from '../components/MoviesList.js'
import GenreSelectComponent from '../components/GenreSelectComponent.js'
import SortControl from '../components/SortControl.js'
import Header from '../components/Header.js';

const MovieListComponent = ({movies}) => {
    const router = useRouter();
    const { query } = router;
    const [sortCriterion, setSortCriterion] = useState(query.sortBy || '');
    const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
    const [activeGenre, setActiveGenre] = useState(query.genre || 'All');
    const { searchResults } = useSearch();
    const content = searchResults || movies || [];   

    const handleSortCriterionChange = (sortCriterion) => {
      setSortCriterion(sortCriterion);
    };

    const handleActiveGenreChange = (genre) => {
      setActiveGenre(genre);
    };

    console.log(content + " my content")
    return (
        <div class='root' data-testid='movieList'>  
                <Header></Header>
                <SortControl currentSortOptionInput="Title" handleSelect={handleSortCriterionChange}></SortControl>
                <GenreSelectComponent genresList={genres} onSelect={handleActiveGenreChange}></GenreSelectComponent>
                {content !== null && (
                <>
                 <p>{content.length} movies found </p> 
                 <MoviesList movies = {content} ></MoviesList>
                </>)}
        
        </div>
      )

};
export default MovieListComponent;


export async function getServerSideProps(context) {
    const { query } = context;
    console.log("happe " +  query); 
    const searchQuery = query.search || ''; 
    const sortCriterion = query.sortBy || '';
    const genre = query.genre || ''; 
    const activeGenre = genre == 'All' ? '' : genre;
    console.log("my pars: " + searchQuery, sortCriterion, activeGenre); 
  
    const data = await Fetch(`movies?search=${searchQuery}&searchBy=title&sortBy=${sortCriterion}&filter=${activeGenre}&sortOrder=asc`);
      
    return { props: { movies: data.data || [] } };
}