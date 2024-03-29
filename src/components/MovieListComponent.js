import React, {useState, useEffect} from 'react';
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
  console.log(searchParams);
    const query = searchParams.get('searchQuery');
    const genre = searchParams.get('genre');
    const sortCriterion = searchParams.get('sortBy');


    console.log("INITIALISING");

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
        fetchData2(`movies?search=${searchQuery}&searchBy=title&sortBy=${sortCriterion}&filter=${activeGenre}&sortOrder=asc`);
      }
    
    }, [searchQuery]);


    useEffect(() => {
      console.log("SORT");
      if (sortCriterion !== '') {
        const genre = activeGenre === 'All' ? '' : activeGenre;
        setSearchParams({ searchQuery: searchQuery, sortBy: sortCriterion, genre: activeGenre});

        fetchData2(`movies?search=${searchQuery}&sortBy=${sortCriterion}&sortOrder=asc&filter=${genre}&searchBy=title`);
      }

    }, [sortCriterion]);


    const handleSortCriterionChange = (sortCriterion) => {

      setSortCriterion(sortCriterion);
    };


    const fetchData2 = async (url) => {
      const data = await Fetch(url);
      setSearchResults(data.data);
    }

    useEffect(() => {
      console.log("GENRES")
      if (activeGenre == 'All') {
        fetchData2(`movies?search=${searchQuery}&sortBy=${sortCriterion}&searchBy=title&sortOrder=asc`);    
        setSearchParams({ searchQuery: searchQuery, genre: activeGenre, sortBy: sortCriterion});
      } else if (genres.includes(activeGenre)){
        fetchData2(`movies?search=${searchQuery}&sortBy=${sortCriterion}&searchBy=title&sortOrder=asc&filter=${activeGenre}`);
        setSearchParams({ searchQuery: searchQuery, genre: activeGenre, sortBy: sortCriterion});
      } 

    }, [activeGenre]);

    const handleActiveGenreChange = (genre) => {
      setActiveGenre(genre);
    };


    return (
        <div class='root'>   
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
