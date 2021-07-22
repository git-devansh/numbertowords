import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Header(props) {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home" > <h1 style={{fontFamily: 'Poppins', alignContent: 'center'}} > {props.title} </h1></Navbar.Brand>
                <Nav className="me-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link> */}
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}