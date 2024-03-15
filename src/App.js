import CounterComponent from './components/CounterComponent.js'
import SearchComponent from './components/SearchComponent.js'
import GenreSelectComponent from './components/GenreSelectComponent.js'
import SortControl from './components/SortControl.js'
import MoviesList from './components/MoviesList.js';
import Dialog from './components/Dialog.js';
import MovieForm from './components/MovieForm.js';

import './styles/App.css';

function App() {
  const initialValue = 0;
  const values = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
  const current = values[0];
  var movieInfo = {
    title: "Scary Fog",
    url: "www.movie.com",
    genres: "Drama",
    releaseYear: "2007",
    rating: "2.7",
    runtime: "12 hours",
    description: "so scary"
}

  return (
    <div class='root'>
            <CounterComponent initialValue={initialValue} />
            <SearchComponent onSearch={(input) => console.log("Search is being executed: " + input)} defaultValue="What do you want to watch?" />
            <GenreSelectComponent genresList={values} currentGenreInput = {current} onSelect={(input) => console.log("Genre selected: " + input)}/>
            <MoviesList/>
            <SortControl currentSortOptionInput="Title" handleSelect={(input) => console.log("Sorting option: " + input)}/>
            <Dialog onClose={() => console.log("Closing")} title={"Edit"} children={<MovieForm movieInfo={movieInfo}/>}>

            </Dialog>
    </div>
  )
}

export default App;
