import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };
    const contactInList = this.state.contacts.find(
      contact => contact.name === newContact.name
    );
    if (contactInList) {
      alert(`${newContact.name} Already in list!`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(newContact => newContact.id !== id),
    }));
  };

  onInputFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(newContact =>
      newContact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const onInputFilter = this.onInputFilter();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
          background:
            'linear-gradient(180deg, rgb(238, 254, 183) 19.1%, rgb(169, 254, 222) 53.9%, rgb(90, 222, 255) 92%)',
        }}
      >
        <h1>Phonebook ☎</h1>
        <ContactForm handleSubmit={this.addContact} />
        <h2>Contacts 📑</h2>
        <ContactFilter
          filter={this.state.filter}
          handleChange={this.handleChange}
        />
        <ContactList data={onInputFilter} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
