import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Person extends Component {
  render() {             
    return (
        <span>{this.props.name}</span>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string.isRequired
}

Person.defaultProps = {
  name: 'Mary'
}

export default Person;
