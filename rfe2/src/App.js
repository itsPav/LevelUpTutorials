import React, { Component } from 'react';
import ContactsList from './ContactsList';

class App extends Component {
  render() {
    return (
      <div>
        <h1> Contacts List </h1>
        <ContactsList contacts={this.props.contacts}/>
      </div>
    );
  }
}

export default App;
