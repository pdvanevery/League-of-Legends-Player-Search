import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState("")
  console.log(searchText)

  return (
    <div className="App">
      <div className="container">
        <h2> Leage of Legends Player Search</h2>
        <input type="text" onChange={e => setSearchText(e.target.value)}></input>
        <button>Search for Player</button>
      </div>
    </div>
  );
}

export default App;
