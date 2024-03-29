import React, { useState, useEffect } from 'react';
import { useSearchParams, Outlet } from "react-router-dom";

import Fetch from '../services/Fetch.js'
import MoviesList from './MoviesList.js'
import GenreSelectComponent from './GenreSelectComponent.js'
import SortControl from './SortControl.js'

function MovieListComponent() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [sortCriterion, setSortCriterion] = useState('');
    const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
    const [activeGenre, setActiveGenre] = useState('');



const initializeStateFromSearchParams = () => {
    const query = searchParams.get('searchQuery');
    const genre = searchParams.get('genre');
    const sortCriterion = searchParams.get('sortBy');

    if (query) {
      setSearchQuery(query);
    }

    if (genre) {
      setActiveGenre(genre);
    }

    if (sortCriterion) {
      setSortCriterion(sortCriterion);
    }

  };

    const handleSearchSubmit = (searchQueryFromInput) => {
        setSearchParams({ searchQuery: searchQueryFromInput});
        setSearchQuery(searchQueryFromInput);
        setActiveGenre('All');
      };
    

    useEffect(() => {
        initializeStateFromSearchParams();
    }, []);

    useEffect(() => {
      if (searchQuery !== '') {
        const genre = activeGenre === 'All' ? '' : activeGenre;
        fetchData(`movies?search=${searchQuery}&searchBy=title&sortBy=${sortCriterion}&filter=${genre}&sortOrder=asc`);
      }
    
    }, [searchQuery]);


    useEffect(() => {
      if (sortCriterion !== '') {
        const genre = activeGenre === 'All' ? '' : activeGenre;
        setSearchParams({ searchQuery: searchQuery, sortBy: sortCriterion, genre: activeGenre});

        fetchData(`movies?search=${searchQuery}&sortBy=${sortCriterion}&sortOrder=asc&filter=${genre}&searchBy=title`);
      }

    }, [sortCriterion]);


    const handleSortCriterionChange = (sortCriterion) => {

      setSortCriterion(sortCriterion);
    };


    const fetchData = async (url) => {
      const data = await Fetch(url);
      setSearchResults(data.data);
    }

    useEffect(() => {
        const genre = activeGenre === 'All' ? '' : activeGenre;
        fetchData(`movies?search=${searchQuery}&sortBy=${sortCriterion}&searchBy=title&sortOrder=asc&filter=${genre}`);
        setSearchParams({ searchQuery: searchQuery, genre: activeGenre, sortBy: sortCriterion}); 

    }, [activeGenre]);

    const handleActiveGenreChange = (genre) => {
      setActiveGenre(genre);
    };


    return (
        <div class='root' data-testid='movieList'>   
                <Outlet context={[searchQuery, handleSearchSubmit]} />      
   
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
