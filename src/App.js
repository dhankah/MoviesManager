import Counter from './CounterComponent.js'
import SearchComponent from './SearchComponent.js'
import GenreSelectComponent from './GenreSelectComponent.js'

function App() {
  const initialValue = 0;
  const values = ['Option 1', 'Option 2', 'Option 3'];
  const current = 'Option 1';
  return (
    <div>
        <Counter initialValue={initialValue} name="Counter" />
        <SearchComponent callBack={(input) => console.log("Search is being executed " + input)} defaultValue="What do you want to watch" />
        <GenreSelectComponent genresList={values} currentGenreInput = {current} callBack={(input) => console.log("Genre selected " + input)}/>
    </div>
  )
}

export default App;
