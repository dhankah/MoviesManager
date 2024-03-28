import React, {useState, useEffect} from 'react';
import { useSearchParams } from "react-router-dom";

import Header from './Header.js'
import MoviesList from './MoviesList.js'
import GenreSelectComponent from './GenreSelectComponent.js'
import SortControl from './SortControl.js'
import MovieDetails from './MovieDetails.js'

function MovieListComponent() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [sortCriterion, setSortCriterion] = useState('');
    const [selectedMovie, setSelectedMovie] = useState(null);
    const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
    const [activeGenre, setActiveGenre] = useState('');


const initializeStateFromSearchParams = () => {
  console.log(searchParams);
    const query = searchParams.get('searchQuery');
    const genre = searchParams.get('genre');
    const sortCriterion = searchParams.get('sortCriterion');


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
      };
    

    useEffect(() => {
        initializeStateFromSearchParams();
    }, []);

    useEffect(() => {
      console.log("SEARCH QUERY");
      if (searchQuery !== '') {
        console.log("calling with " + searchQuery)
        fetchData(`http://localhost:4000/movies?search=${searchQuery}&searchBy=title`);
      }

    }, [searchQuery]);


    useEffect(() => {
      console.log("SORT");
      if (sortCriterion !== '') {
        console.log("look " + sortCriterion);
        setSearchParams({ searchQuery: searchQuery, sortCriterion: sortCriterion});

        fetchData(`http://localhost:4000/movies?search=${searchQuery}&sortBy=${sortCriterion}&sortOrder=asc&searchBy=title`);
      }

    }, [sortCriterion]);


    const handleSortCriterionChange = (sortCriterion) => {

      setSortCriterion(sortCriterion);
    };


    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        setSearchResults(data.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    useEffect(() => {
      console.log("GENRES")
      if (activeGenre == 'All') {
          fetchData(`http://localhost:4000/movies`);    
          setSearchParams({ genre: activeGenre});
      } else if (genres.includes(activeGenre)){
          fetchData(`http://localhost:4000/movies?search=${activeGenre}&searchBy=genres`);
          setSearchParams({ genre: activeGenre});
      }
      

    }, [activeGenre]);

    const handleActiveGenreChange = (genre) => {
      setActiveGenre(genre);
    };

    const handleMovieClick = (movie) => {
      const clickedResult = searchResults.find(result => result.id === movie.id);
      setSelectedMovie(clickedResult);
    };

    const handleBackToSearch = (movie) => {  
      setSelectedMovie(null);
    };

    return (
        <div class='root'>    
        {selectedMovie !== null ? (
                <MovieDetails movie={selectedMovie} onButtonClick={handleBackToSearch}/>
            ) : (
                <Header 
                searchQuery={searchQuery} 
                onSearchSubmit={handleSearchSubmit}  
                />
            )}    
                
                <SortControl currentSortOptionInput="Title" handleSelect={handleSortCriterionChange}></SortControl>
                <GenreSelectComponent genresList={genres} onSelect={handleActiveGenreChange}></GenreSelectComponent>
                {searchResults !== null && (
                <>
                 <p>{searchResults.length} movies found </p> 
                 <MoviesList movies = {searchResults} onSelect = {handleMovieClick}></MoviesList>
                </>)}
        
        </div>
      )

};
export default MovieListComponent;
