import React, { Component } from 'react';

class Results extends Component {
    render() {
        const bookList = this.props.bookList.map((book,index) => <li key={index}>
            <h2>{book.volumeInfo.title}</h2>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt=""/>
            </li>);
        return(
            <section>
                <ul style= {{listStyle:"none"}}>
                    {bookList} 
                </ul>
                <h2>Henry 1</h2>
                <p>Author:  C. Warren Hollister</p>
                <p>Price:  $50.00</p>
                <p>The resulting volume is one that will be welcomed by students and general readers alike</p>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-65/cat4.jpg" alt="A content brown cat lounges with eyes closed."/>
            </section>
        )   
    }
}

export default Results;