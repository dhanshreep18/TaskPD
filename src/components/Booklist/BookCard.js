import React, { useState, useEffect } from 'react'
import "./bookcard.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactLoading from 'react-loading'


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
            <Card className="Card" style={{ width: '50rem', borderRadius:'0.5rem', backgroundColor:'#EAEDED'}}>
                <Card.Body>
                    <div className='box'>
                        <div className='box CardDetails' style={{float:'right', margin:'10px'}}>
                            <div className="CardTitle">
                                <h4 style={{ color: "black", fontWeight:"bold"}}> {book.name}</h4>
                                <div className="description">
                                    <p className="mb-2 text-muted">Author: {book.author}</p>
                                </div>
                                <div className="description">
                                    <p className="mb-2 text-muted"> {book.desc}</p>
                                </div> 
                            </div>
                            <div className="box CardYear">
                                <h6 style={{ color: "black" }}>{book.date}</h6>
                            </div>
                        </div>
                        <div className='box CardImage' style={{float:'left', margin:'10px'}}>
                            <img src={book.image} style={{height:'8rem', width:'6rem'}}></img>
                        </div>
                    </div>
                    
                    
                </Card.Body>
            </Card>
            </div>
            
        );
    })}
    </div>    
    )    
}

export default BookCard;