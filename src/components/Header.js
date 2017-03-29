import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'; // a Navbar component provided by Bootstrap for React.

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                Contact Manager
            </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Header;
