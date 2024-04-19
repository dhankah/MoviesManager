import { createContext, useContext, useState } from 'react';
import Fetch from '../services/Fetch.js'

import { useRouter } from 'next/router';


const SearchContext = createContext(null);

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
    const router = useRouter();
    const { query } = router;

    const [searchQuery, setSearchQuery] = useState(query.searchQuery || '');
    const [sortCriterion, setSortCriterion] = useState(query.sortBy || '');
    const [activeGenre, setActiveGenre] = useState(query.genre || 'All');
    const [searchResults, setSearchResults] = useState(null);


    const handleSearchSubmit = (query) => {
        setSearchQuery(query);
        const genre = activeGenre === 'All' ? '' : activeGenre;
        pushToUrl(query, genre, sortCriterion);
    
        const queryString = `search=${query}&searchBy=title&sortBy=${sortCriterion}&filter=${genre}&sortOrder=asc`;
        fetchData(`movies?${queryString}`);

    };
    

    const handleGenreChange = (activeGenre) => {
        setActiveGenre(activeGenre);
        const genre = activeGenre === 'All' ? '' : activeGenre;
        pushToUrl(searchQuery, genre, sortCriterion);
        fetchData(`movies?search=${query}&searchBy=title&sortBy=${sortCriterion}&filter=${genre}&sortOrder=asc`);
    };


    const handleSortCriterionChange = (sortCriterion) => {
        setSortCriterion(sortCriterion);
        const genre = activeGenre === 'All' ? '' : activeGenre;
        pushToUrl(searchQuery, genre, sortCriterion);

        fetchData(`movies?search=${query}&searchBy=title&sortBy=${sortCriterion}&filter=${genre}&sortOrder=asc`);
    };

    const pushToUrl = (query, genre, sortCriterion) => {
        router.push({
            pathname: '/movies',
            query: { search: query, searchBy: 'title', sortBy: sortCriterion, filter: genre, sortOrder: 'asc' },
        }, undefined, { shallow: true });
    }


    const fetchData = async (url) => {
        const data = await Fetch(url);
        setSearchResults(data.data);
      }

    return (
        <SearchContext.Provider value={{ searchQuery, handleSearchSubmit, searchResults, handleGenreChange, handleSortCriterionChange }}>
        {children}
        </SearchContext.Provider>
    );
};