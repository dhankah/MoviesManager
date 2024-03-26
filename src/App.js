import CounterComponent from './components/CounterComponent.js'
import SearchComponent from './components/SearchComponent.js'
import GenreSelectComponent from './components/GenreSelectComponent.js'
import SortControl from './components/SortControl.js'
import MoviesList from './components/MoviesList.js';

import './styles/App.css';

function App() {
  const initialValue = 0;
  const values = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
  const current = values[0];
  return (
    <div class='root'>
            <CounterComponent initialValue={initialValue} />
            <SearchComponent onSearch={(input) => console.log("Search is being executed: " + input)} defaultValue="What do you want to watch?" />
            <GenreSelectComponent genresList={values} currentGenreInput = {current} onSelect={(input) => console.log("Genre selected: " + input)}/>
            <MoviesList/>
            <SortControl currentSortOptionInput="Title" handleSelect={(input) => console.log("Sorting option: " + input)}/>
    </div>
  )
}

export default App;
