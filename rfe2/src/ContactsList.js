import React, { Component } from 'react';
import Contact from './Contact';

class ContactsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            contacts: props.contacts 
        };
    }

    // get event from onChange
    updateSearch(event) {
        // limit string by 20 chars using (0,20)
        this.setState({ search: event.target.value.substr(0,20) })
    }

    addContact(event) {
        event.preventDefault();
        let name = this.refs.name.value;
        let phone = this.refs.phone.value;
        let id = Math.floor((Math.random() * 100) + 1);

        // concat the input user to contacts
        // concat creates a new array
        // push changes existing array and is bad to use
        console.log(this.refs.name.value);
        this.setState({
            contacts: this.state.contacts.concat({id, name, phone})
        })

        this.refs.name.value = '';
        this.refs.phone.value = '';
    }

    render() {
        let filteredContacts = this.state.contacts.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

        return (
            <div>
                <input type="text" 
                    placeholder="Search"
                    value={this.state.search} 
                    onChange={this.updateSearch.bind(this)} 
                />

                <form onSubmit={this.addContact.bind(this)}>
                    <input placeholder="Name" type="text" ref="name" />
                    <input placeholder="Phone" type="text" ref="phone" />
                    <button type="submit">Add New Contact</button>
                </form>

                <ul>
                    {filteredContacts.map((contact) => {
                            return <Contact contact={contact} item="hello" key={contact.id} />
                    })}
                </ul>
            </div>
        );
    }
}

export default ContactsList;
