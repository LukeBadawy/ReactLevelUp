import React, { Component } from 'react';
import Contact from './contact';
import { Input } from 'reactstrap'

class ContactList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      contacts: props.contacts
    }
    this.updateSearch = this.updateSearch.bind(this);
    this.addContact = this.addContact.bind(this);
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value
      //i could write event.target.value.substring(0,20) and it would limit the input to 20 characters
    });
  }

  addContact(event) {
    event.preventDefault();
    let name = this.refs.name.value;
    let phone = this.refs.phone.value;
    let id = Math.floor((Math.random() * 100) + 1);
    this.setState({
      contacts: this.state.contacts.concat({
        id,
        name,
        phone
      })
    });
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
        {/* <input type="text" defaultValue="Luke Badawy"/> */}
        <Input type="text" className="mt-3 mb-3 pr-2 pl-2" placeholder="search" value={this.state.search} onChange={this.updateSearch}/>
        <form onSubmit={this.addContact}>
          <input type="text" ref="name"/>
          <input type="text" ref="phone"/>
          <button type="submit">Add new Contact</button>
        </form>
        <ul className="list-group">
          {filteredContacts.map((contact) => {
            return <Contact contact={contact} item="hello" key={contact.id} />
          })}
        </ul>
        {/* 
          the defaultValue seen below still allows typing in the input box where as if you explicitly
          set a value there is no onCHange handler therefore you cannot type

        */}
       
      </div>
    );
  }
}

export default ContactList;