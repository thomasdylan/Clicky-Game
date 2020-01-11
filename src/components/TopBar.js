import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

const TopBar = (props) => {

    return (
        <Navbar bg="dark" variant="dark">
             <Navbar.Brand>Clicky Game</Navbar.Brand>
              <Navbar.Collapse className="justify-content-end">
                   <Navbar.Text>
                        Current Score: {props.current} | High Score: {props.high}
                   </Navbar.Text>
              </Navbar.Collapse>
        </Navbar>
     );
    
}

export default TopBar;