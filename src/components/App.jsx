import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleFilterContact = e => {
    setFilter(e.target.value);
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      return;
    }
    const contactExists = contacts.some(contact => contact.name === name);
    if (contactExists) {
      alert(`${name} is already in contacts.`);
    } else {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      setContacts(prevContacts => [...prevContacts, newContact]);
      setName('');
      setNumber('');
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        number={number}
        onChangeName={handleChangeName}
        onChangeNumber={handleChangeNumber}
        onSubmit={handleSubmit}
      />

      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterContact={handleFilterContact} />
      <ContactList
        filteredContacts={filteredContacts}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
};
