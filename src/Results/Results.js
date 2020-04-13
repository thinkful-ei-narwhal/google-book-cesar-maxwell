import React, { Component } from 'react';
import "./Results.css";


class Results extends Component {
    render() {
        const bookList = this.props.bookList.map((book,index) => <li key={index}>
            <h2>{book.volumeInfo.title}</h2>
            <p>Author:  {book.volumeInfo.authors[0]}</p>
            <p>Price:  ${book.saleInfo.listPrice.amount}</p>
            <p>{book.volumeInfo.description}</p>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt=""/>
            </li>);
        return(
            <section className="list">
                <ul style= {{listStyle:"none"}}>
                    {bookList} 
                </ul>
            </section>
        )   
    }
}

export default Results;