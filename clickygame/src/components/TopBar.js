import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../App.css';

class TopBar extends React.Component {
    state = {
        currentScore: 0,
        highScore: 0
    };

    handleIncrement = () => {
        this.setState({ currentScore: this.state.currentScore + 1 });
        if(this.state.currentScore > this.state.highScore) {
            this.setState({ highScore: this.state.currentScore});
        };
    };

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link>Click the pictures to gain points.  Don't click the same picture twice</Nav.Link>
                    </Nav>
                    <Nav className="scores">
                        <Nav.Link>Current Score: </Nav.Link>
                        <Nav.Link>High Score: </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default TopBar;