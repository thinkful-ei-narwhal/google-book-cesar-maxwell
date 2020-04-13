import React, { Component } from 'react';

class Filter extends Component {
    render() {

        return(
            <section>
                <label for="printType">Print Type:</label>
                <select id="printType" name="printType">
                    <option value="all">all</option>
                    <option value="books">books</option>
                    <option value="magazines">magazines</option>
                </select>
                <label for="BookType">Book Type:</label>
                <select id="BookType" name="BookType">
                    <option value="ebooks">ebooks</option>
                    <option value="free-ebook">free ebooks</option>
                    <option value="paid-ebooks">paid ebooks</option>
                    <option value="partial">partial</option>
                    <option value="full">full</option>
                </select>
            </section>
        )   
    }
}

export default Filter;