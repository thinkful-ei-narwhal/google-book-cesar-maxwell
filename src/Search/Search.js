import React, {Component} from 'react';
import Filter from '../Filter/Filter';

export default class Search extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
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