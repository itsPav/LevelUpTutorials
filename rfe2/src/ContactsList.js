import React, { Component } from 'react';
import Contact from './Contact';

class ContactsList extends Component {
    constructor() {
        super();
        this.state = {
            search: 'Level Up'
        };
    }

    // get event from onChange
    updateSearch(event) {
        // limit string by 20 chars using (0,20)
        this.setState({ search: event.target.value.substr(0,20) })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.contacts.map((contact) => {
                            return <Contact contact={contact} key={contact.id} />
                    })}
                </ul>
                <input type="text" 
                    value={this.state.search} 
                    onChange={this.updateSearch.bind(this)} />
            </div>
        );
    }
}

export default ContactsList;
