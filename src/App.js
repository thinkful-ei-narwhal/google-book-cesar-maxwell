import React, { Component } from 'react';
import Results from './Results/Results';
import Search from './Search/Search';

class App extends Component {

  state = { 
    q: "",
    printType:"all",
    filter: "ebooks",
    bookList:{}
  };

getBook = (e) => {
    e.preventDefault();
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.q}&printType=${this.state.printType}&filter=${this.state.filter}`;
    // let apiKey = "AIzaSyCKMOl3iAm-09f6nFinUXZpel6JDyfyQnc"
    fetch(url)
    .then(results => results.json()) //turns results into JSON object
    .then(resultJSON => this.getBookList(resultJSON))
}
// encodeURIComponent()
getSearchTerm = (e) => {
    this.setState({
        q: e.target.value,
        submittedForm: true, 
    })
}

getPrintType= (type)=>{
    this.setState({printType: type})

}
getBookType= (type)=>{
    this.setState({filter: type})
}

  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <main>
          <Search 
          getBook= {this.getBook}
          getSearchTerm= {this.getSearchTerm}
          getPrintType= {this.getSearchTerm}
          getBookType= {this.getBookType}
          />
          <Results 
          bookList={this.state.bookList}
          />
        </main>
      </div>
    );
  }
}

export default App;