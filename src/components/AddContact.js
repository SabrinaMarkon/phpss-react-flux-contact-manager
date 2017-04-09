import React, { Component } from 'react';
import {Panel, FormGroup, Button} from 'react-bootstrap';
import AppActions from '../actions/AppActions';

class AddContact extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
          newContact: {
              name: '',
              email: '',
              phone: ''
          }
      }
  }
  
  render() {
    return (
      <Panel header="Add Contact">
      </Panel>
    );
  }
}

export default AddContact;