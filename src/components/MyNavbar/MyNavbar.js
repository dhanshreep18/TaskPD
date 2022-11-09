import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "./mynavbar.css"
import logo from "../../assets/bookStack.png"

const MyNavbar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src={logo}
                    width="50"
                    height="50"
                    />{' '}
                    <b>Book App</b>

                </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )    
}

export default MyNavbar;