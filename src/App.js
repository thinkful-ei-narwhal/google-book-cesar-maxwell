import React from 'react';
import Filter from './Filter/Filter';
import Results from './Results/Results';

import Search from './Search/Search';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Google Book Search</h1>
      </header>
      <main>
      <Search/>
      </main>
    </div>
  );
}

export default App;