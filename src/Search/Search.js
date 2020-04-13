import React, {Component} from 'react';
import Filter from '../Filter/Filter';

export default class Search extends Component{
    // constructor(props){
    //     super(props)
    // }
    
    getBook = (q, printType,filter) => {
        let url = 'https://www.googleapis.com/books/v1/volumes?q=quilting/printType=all/filter=free-ebook';
        // let apiKey = "AIzaSyCKMOl3iAm-09f6nFinUXZpel6JDyfyQnc"
        fetch(url)
        .then(results => results.json()) //turns results into JSON object
        .then(resultJSON => console.log(resultJSON))
    }

    render(){
        this.getBook();
        return(
            <section className="searchinfo">
                <form type="input">
                    <label htmlFor="searchTerm">Search</label><br />
                    <input type="text" id="searchTerm" name="searchTerm"></input>
                    <button type="submit">Search</button>
                </form>
                <Filter/>
            </section>
        )
    }
}