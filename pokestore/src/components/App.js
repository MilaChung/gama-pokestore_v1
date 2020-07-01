import React from 'react';
import SearchBar from './SearchBar'

function App() {
  return (
    <div className="ui container">
      <SearchBar />

      <div className="ui grid">
        <div className="ui row">
          
          <div className="eleven wide column">
            <h1>Pokemon Detail</h1>
            {/* <PokemonDetail /> */}
          </div>

          <div className="five wide column">
          <h1>Pokemon List</h1>
          {/* <PokemonList /> */}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
