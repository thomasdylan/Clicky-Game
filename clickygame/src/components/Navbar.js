import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class MyNav extends React.Component {
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
                <Navbar.Text href="#home">Clicky Game</Navbar.Text>
                    <Nav>
                        <Nav.Text>Current Score: {}</Nav.Text>
                        <Nav.Text>High Score: {}</Nav.Text>
                    </Nav>
            </Navbar>
        );
    }
}

export default MyNav;