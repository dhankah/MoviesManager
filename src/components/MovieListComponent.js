import React, {useState, useEffect} from 'react';

import SearchComponent from './SearchComponent.js'
import MoviesList from './MoviesList.js'
import GenreSelectComponent from './GenreSelectComponent.js'
import SortControl from './SortControl.js'
import MovieDetails from './MovieDetails.js'

function MovieListComponent() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [sortCriterion, setSortCriterion] = useState('');
    const [activeGenre, setActiveGenre] = useState('');
    const [selectedMovie, setSelectedMovie] = useState(null);
    const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];


    const handleSearchSubmit = (searchQuery) => {
        setSearchQuery(searchQuery);
      };
    

    useEffect(() => {
        fetchData('http://localhost:4000/movies?limit=100'); 
    }, []);

  useEffect(() => {

    if (searchQuery !== '') {
      fetchData(`http://localhost:4000/movies?search=${searchQuery}&searchBy=title`);
    }

  }, [searchQuery]);


  useEffect(() => {

    if (sortCriterion !== '') {
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
      console.log("databig: ", data);

      setSearchResults(data.data);
      console.log("results are cooked: ", searchResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
   
    if (activeGenre == 'All') {
        fetchData(`http://localhost:4000/movies?search=${searchQuery}&searchBy=title`);    
    } else {
        fetchData(`http://localhost:4000/movies?search=${activeGenre}&searchBy=genres`);
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
                <SearchComponent 
                searchQuery={searchQuery} 
                onSearchSubmit={handleSearchSubmit}  
                />
            )}    
                
                <SortControl currentSortOptionInput="Title" handleSelect={handleSortCriterionChange}></SortControl>
                <GenreSelectComponent genresList={genres} currentGenreInput={activeGenre} onSelect={handleActiveGenreChange}></GenreSelectComponent>
                {searchResults !== null && (
                <>
                 <p>{searchResults.length} movies found </p> 
                 <MoviesList movies = {searchResults} onSelect = {handleMovieClick}></MoviesList>
                </>)}
        
        </div>
      )

};
export default MovieListComponent;
