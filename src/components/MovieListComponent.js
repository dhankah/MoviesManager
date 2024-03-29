import React, {useState, useEffect} from 'react';
import { useSearchParams, Outlet, useNavigate } from "react-router-dom";

import Fetch from '../services/Fetch.js'
import MoviesList from './MoviesList.js'
import GenreSelectComponent from './GenreSelectComponent.js'
import SortControl from './SortControl.js'

function MovieListComponent() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [sortCriterion, setSortCriterion] = useState('');
    const [selectedMovie, setSelectedMovie] = useState(null);
    const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
    const [activeGenre, setActiveGenre] = useState('');
    const navigate = useNavigate();



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
      if (searchQuery !== '') {
        fetchData2(`movies?search=${searchQuery}&searchBy=title&sortBy=${sortCriterion}&sortOrder=asc`);
      }
    
    }, [searchQuery]);


    useEffect(() => {
      console.log("SORT");
      if (sortCriterion !== '') {
        console.log("look " + sortCriterion);
        setSearchParams({ searchQuery: searchQuery, sortCriterion: sortCriterion, genre: activeGenre});

        fetchData2(`movies?search=${searchQuery}&sortBy=${sortCriterion}&sortOrder=asc&filter=${activeGenre}&searchBy=title`);
      }

    }, [sortCriterion]);


    const handleSortCriterionChange = (sortCriterion) => {

      setSortCriterion(sortCriterion);
    };


    const fetchData2 = async (url) => {
      const data = await Fetch(url);
      setSearchResults(data.data);
    }

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
        fetchData2(`movies?search=${searchQuery}&sortBy=${sortCriterion}&searchBy=title&sortOrder=asc`);    
        setSearchParams({ searchQuery: searchQuery, genre: activeGenre});
      } else if (genres.includes(activeGenre)){
        fetchData2(`movies?search=${searchQuery}&sortBy=${sortCriterion}&searchBy=title&sortOrder=asc&filter=${activeGenre}`);
        setSearchParams({ searchQuery: searchQuery, genre: activeGenre});
      } 

    }, [activeGenre]);

    const handleActiveGenreChange = (genre) => {
      setActiveGenre(genre);
    };


    const handleBackToSearch = (movie) => {  
      setSelectedMovie(null);
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
