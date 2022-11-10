import React, { useState, useEffect } from 'react'
import "./bookcard.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactLoading from 'react-loading'
import { Box, Grid } from '@mui/material';


const BookCard = ({item}) => {
    // const [page, setPage] = useState(1);
    // const [books, setBooks] = useState([]);
    // const [loading, setLoading] = useState(true);
    
    // useEffect(()=>{
    //     const loadBooks = async()=>{
    //         setLoading(true);
    //         const newBooks =  item;
    //         setBooks(prev => [...prev, ...newBooks]);
    //         setLoading(false);
    //     };
    //     loadBooks();
    // }, [page]);
    
    return (

    <div>
    {item.map((book)=>{
        return (
            <div style={{margin:'15px'}}>
            <figure class="snip1527">
                <div class="image"><img src={book.image} alt="pr-sample23" /></div>
                    <figcaption>
                        <div class="date"><span class="day">29</span><span class="month">Oct</span></div>
                        <h3>{book.name}</h3>
                        <h6><b>Author: {book.author}</b></h6>
                        <p>{book.desc}</p>
                    </figcaption>
                    <a href="#"></a>
            </figure>
            </div>
            
        );
    })}
    </div>    
    )    
}

export default BookCard;