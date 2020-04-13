import React from 'react';
import Filter from './Filter/Filter';
import Results from './Results/Results';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Google Book Search</h1>
      </header>
      <main>
      <Search/>
      <Filter/>
      <Results/>
      </main>
    </div>
  );
}

export default App;