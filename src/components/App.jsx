import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notificatio } from './Notificatio/Notificatio';
import { StyledWrapper } from './App.styled';
import { toast } from 'react-toastify';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    toast.success('Component was Mount');
    const contacts = JSON.parse(window.localStorage.getItem('contacts'));
    if (contacts?.length) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        'contacts',
        JSON.stringify(this.state.contacts)
      );
    }
    if (prevState.filter !== this.state.filter) {
      window.localStorage.setItem('filter', JSON.stringify(this.state.filter));
    }
  }

  getFilterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name
        .trim()
        .toLowerCase()
        .includes(this.state.filter.trim().toLowerCase())
    );
  };

  handelOnFilter = e => {
    const { target } = e;
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleAddContact = newContact => {
    const same = this.state.contacts.find(
      contact => contact.name === newContact.name
    );

    same
      ? toast.success(`${newContact.name} is already in contacts.`)
      : this.setState({
          contacts: [newContact, ...this.state.contacts],
        });
  };

  handleDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const contacts = this.getFilterContacts();
    return (
      <StyledWrapper>
        <h1>Phonebook</h1>

        <ContactForm
          onAddContact={this.handleAddContact}
          // contacts={this.state.contacts}
        />

        <h2>Contacts</h2>

        <Filter
          filter={this.state.filter}
          onFilterChange={this.handelOnFilter}
        />
        {this.state.contacts.length ? (
          <ContactList
            contacts={contacts}
            deletedContact={this.handleDeleteContact}
          />
        ) : (
          <Notificatio message={'You have no contacts'} />
        )}
      </StyledWrapper>
    );
  }
}
