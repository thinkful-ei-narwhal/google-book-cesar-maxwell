import React, {Component} from 'react';

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
            </div>
        )
    }
}