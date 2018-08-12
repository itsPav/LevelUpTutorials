import React, { Component } from 'react';
import {createContainer } from 'meteor/react-meteor-data';
import Items from '../api/Items';

// default allows you to not use {} in an import statement in other files
class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Pav',
            count: 0
        }
    }

    headingClick() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <header onClick={this.headingClick.bind(this)}>
                <Heading count={this.state.count}/>
            </header>
        )
    }
}

export default createContainer(() => {
    return {
        items: Items.find({}).fetch()
    }
}, App)

class Heading extends Component {
    render() {
        return (
            <h1>{this.props.count}</h1>
        )
    }
}