import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Person from './Person';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }

  componentDidMount() {

  }

  _addByOne() {
    this.setState({
      value: this.state.value + 1
    });
  }

  render() {        
    var greeting = "World";
    if(this.props.isPerson) {
      greeting = (<Person name={this.props.name}/>)
    }

    return (
      <div>
        <h1>Hello {greeting}</h1>
        {this.state.value}
        <button onClick={this._addByOne.bind(this)}>Click Me</button>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  isPerson: PropTypes.bool
}

App.defaultProps = {
  name: 'Mary'
}

export default App;
