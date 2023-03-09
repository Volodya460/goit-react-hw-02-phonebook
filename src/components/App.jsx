import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../components/Form/Form';
import Filter from '../components/FilterContacts/Filter';
import CreatContactList from './ContactList/CreatContactList';
import { Section } from './App.styled';

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

  hendleSubmit = (values, { resetForm }) => {
    console.log(values);
    const contact = {
      id: nanoid(),
      ...values,
    };
    const isAdded = this.checkContactIsAdded(contact);

    if (isAdded) {
      resetForm();
      return alert(`${contact.name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return { contacts: [contact, ...prevState.contacts] };
      });
      resetForm();
    }
  };

  checkContactIsAdded = ({ name }) => {
    const { contacts } = this.state;
    const normalizedContactName = name.toLowerCase();

    return contacts.find(
      ({ name }) => name.toLowerCase() === normalizedContactName
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deletContacte = Id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== Id),
    }));
  };

  render() {
    const normolizeFilter = this.state.filter.toLowerCase();
    const filterList = this.state.contacts.filter(fil =>
      fil.name.toLowerCase().includes(normolizeFilter)
    );
    return (
      <Section>
        <ContactForm hendleSubmit={this.hendleSubmit} />

        <h2>Contacts</h2>
        <h2>Find Contacts by name</h2>
        <Filter changeFilter={this.changeFilter} value={this.state.filter} />
        <CreatContactList
          array={filterList}
          deletContacte={this.deletContacte}
        />
      </Section>
    );
  }
}
