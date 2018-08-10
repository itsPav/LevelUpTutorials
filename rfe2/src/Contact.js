import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
        <li>
            {this.props.contact.name} {this.props.contact.phone}
        </li>
    );
  }
}

export default Contact;
