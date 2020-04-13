import React, {Component} from 'react';
import Filter from '../Filter/Filter';

export default class Search extends Component{
    // constructor(props){
    //     super(props)
    // }
    
    getBook = () => {
        let url = 'https://www.googleapis.com/books/v1/volumes?q=quilting';
        let apiKey = "AIzaSyCKMOl3iAm-09f6nFinUXZpel6JDyfyQnc"
        fetch(url)
        .then(results => results.json()) //turns results into JSON object
        .then(resultJSON => console.log(resultJSON))
    }
    render(){
        this.getBook();
        return(
            <div>
                <form type="input">
                    <label>Search</label><br />
                    <input type="text"></input>
                    <button type="submit">Search</button>
                </form>
                <Filter/>
            </div>
        )
    }
}