import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

import Fetch from '../services/Fetch.js'
import MoviesList from './MoviesList.js'
import GenreSelectComponent from './GenreSelectComponent.js'
import SortControl from './SortControl.js'
import Header from './Header.js'

const MovieListComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('searchQuery'));
    const [searchResults, setSearchResults] = useState(null);
    const [sortCriterion, setSortCriterion] = useState(searchParams.get('sortBy'));
    const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
    const [activeGenre, setActiveGenre] = useState(searchParams.get('genre'));

    const handleSearchSubmit = (searchQueryFromInput) => {
        setSearchParams({ searchQuery: searchQueryFromInput});
        setSearchQuery(searchQueryFromInput);
        setActiveGenre('All');
      };

    useEffect(() => {
      if (searchQuery !== '') {
        const genre = activeGenre === 'All' ? '' : activeGenre;
        setSearchParams({ searchQuery: searchQuery, genre: activeGenre, sortBy: sortCriterion});
        fetchData(`movies?search=${searchQuery}&searchBy=title&sortBy=${sortCriterion}&filter=${genre}&sortOrder=asc`);
      }

    }, [searchQuery, sortCriterion, activeGenre]);



    const handleSortCriterionChange = (sortCriterion) => {

      setSortCriterion(sortCriterion);
    };

    const fetchData = async (url) => {
      const data = await Fetch(url);
      setSearchResults(data.data);
    }

    const handleActiveGenreChange = (genre) => {
      setActiveGenre(genre);
    };


    return (
        <div class='root' data-testid='movieList'>
                <Header searchQuery={searchQuery} onSearchSubmit={handleSearchSubmit}/>

                <SortControl currentSortOptionInput="Title" handleSelect={handleSortCriterionChange}></SortControl>
                <GenreSelectComponent genresList={genres} onSelect={handleActiveGenreChange}></GenreSelectComponent>
                {searchResults !== null && (
                <>
                 <p>{searchResults.length} movies found </p> 
                 <MoviesList movies = {searchResults} ></MoviesList>
                </>)}
        
        </div>
      )

};
export default MovieListComponent;
