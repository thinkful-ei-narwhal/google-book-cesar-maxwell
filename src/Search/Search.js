import React, {Component} from 'react';
import Filter from '../Filter/Filter';

export default class Search extends Component{

    state = { 
        q: "",
        printType:"all",
        filter: "no-filter",
        submittedForm: false
    };
    
    getBook = (q, printType,filter) => {
        let url = 'https://www.googleapis.com/books/v1/volumes?q=quilting/printType=all/filter=free-ebook';
        // let apiKey = "AIzaSyCKMOl3iAm-09f6nFinUXZpel6JDyfyQnc"
        fetch(url)
        .then(results => results.json()) //turns results into JSON object
        .then(resultJSON => console.log(resultJSON))
    }

    getSearchTerm = (e) => {
        e.preventDefault();
        this.setState({
            q: e.target.searchTerm.value,
            submittedForm: true, 
        })
    }

    getPrintType= (type)=>{
        this.setState({printType: type})

    }
    getBookType= (type)=>{
        this.setState({filter: type})
    }

    render(){
        this.getBook();
        return(
            <section className="searchinfo">
                <form type="input" onSubmit={e => this.getSearchTerm(e)}>
                    <label htmlFor="searchTerm">Search</label><br />
                    <input type="text" id="searchTerm" name="searchTerm"></input>
                    <button type="submit" value="submit">Search</button>
                </form>
                <Filter
                getPrintType= {this.getPrintType}
                getBookType= {this.getBookType}
                />
            </section>
        )
    }
}