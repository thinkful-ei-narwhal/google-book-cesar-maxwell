import React, { Component } from 'react';
import Results from './Results/Results';

import Search from './Search/Search';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInput: false,
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main>
          <Search />
          <Results />
        </main>
      </div>
    );
  }
}

export default App;