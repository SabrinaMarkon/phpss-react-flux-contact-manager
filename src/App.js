import React, { Component } from 'react';
import Header from './components/Header'; // easy to include the Navbar Bootstrap component!
import Contacts from './components/Contact';
// pretty much every element in bootstrap has a component in the react-bootstrap module!
import {Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <Contacts />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
