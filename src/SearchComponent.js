import React, {useState} from 'react';

const SearchComponent = ({callBack, defaultValue}) => {
    const [inputValue, setInputValue] = useState(defaultValue);

    const handleSearchOnEnter = (event) => {
        if (event.key === 'Enter') {
            callBack(inputValue);
        }
    };

  const handleSearch = () => {
        callBack(inputValue);
  };


     return (
         <div>
             <input type = "text" value = {inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleSearchOnEnter}/>
             <button onClick={handleSearch}>Search</button>
         </div>
         )
}

export default SearchComponent;
