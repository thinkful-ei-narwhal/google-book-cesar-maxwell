import React, {Component} from 'react';
import Filter from '../Filter/Filter';

export default class Search extends Component{
    constructor(props){
        super(props)
        this.state ={
            userInput: "This is User Input",
            submittedForm: false,
        }
    }
    getSearchTerm = (e) => {
        e.preventDefault();
        let toggleSubmitted = true;
        let newInput = e.target.searchTerm.value;
        this.setState({
            userInput: newInput,
            submittedForm: toggleSubmitted, 
        })
    }

    getBook = (q, printType,filter) => {
        let url = 'https://www.googleapis.com/books/v1/volumes?q=quilting/printType=all/filter=free-ebook';
        // let apiKey = "AIzaSyCKMOl3iAm-09f6nFinUXZpel6JDyfyQnc"
        fetch(url)
        .then(results => results.json()) //turns results into JSON object
        .then(resultJSON => console.log(resultJSON))
    }

    render(){
        this.getBook();

        //this.getSearchTerm();
        return(
            <section className="searchinfo">
                <form type="input" onSubmit={e => {
                    this.getSearchTerm(e);
                    }}>
                    <label htmlFor="searchTerm">Search</label><br />
                    <input type="text" id="searchTerm" name="searchTerm"></input>
                    <button type="submit" value="submit">Search</button>
                </form>
                <Filter/>
            </section>
        )
    }
}