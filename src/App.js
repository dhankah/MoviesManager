import Counter from './CounterComponent.js'
import SearchComponent from './SearchComponent.js'
import GenreSelectComponent from './GenreSelectComponent.js'
import './App.css';

function App() {
  const initialValue = 0;
  const values = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
  const current = values[0];
  return (
    <div class='root'>
        <div>
            <Counter initialValue={initialValue} name="Counter" />
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
