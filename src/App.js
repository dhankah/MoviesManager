import CounterComponent from './components/CounterComponent.js'
import SearchComponent from './components/SearchComponent.js'
import GenreSelectComponent from './components/GenreSelectComponent.js'
import './App.css';

function App() {
  const initialValue = 0;
  const values = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
  const current = values[0];
  return (
    <div class='root'>
        <div>
            <CounterComponent initialValue={initialValue} />
        </div>
        <div>
            <SearchComponent onSearch={(input) => console.log("Search is being executed " + input)} defaultValue="What do you want to watch?" />
        </div>
        <div>
            <GenreSelectComponent genresList={values} currentGenreInput = {current} onSelect={(input) => console.log("Genre selected " + input)}/>
        </div>
    </div>
  )
}

export default App;
