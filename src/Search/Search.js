import React, {Component} from 'react';
import Filter from '../Filter/Filter';

export default class Search extends Component{

    render(){
        return(
            <section className="searchinfo">
                <form type="input" onSubmit={e => this.props.getBook(e)}>
                    <label htmlFor="searchTerm">Search</label><br />
                    <input type="text" id="searchTerm" name="searchTerm" onChange={e=>this.props.getSearchTerm(e)}></input>
                    <button type="submit" value="submit">Search</button>
                </form>
                <Filter
                getPrintType= {this.props.getPrintType}
                getBookType= {this.props.getBookType}
                />
            </section>
        )
    }
}