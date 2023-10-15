import React, { useState,useEffect } from 'react';
import { ContactForm } from './contactForm/contactForm';
import { Text } from './contactForm/contactForm.styled';
import { ContactList } from './contactList/contactList';
import { Filter } from './filter/filter';
import Notiflix from 'notiflix';

export const App = () => {

  const contactsDataList = [
    { id: 'id-1', userName: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', userName: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', userName: 'Eden Clements', number: '645-17-79' },
      {id: 'id-4', userName: 'Annie Copeland', number: '227-91-26' },
    ]
 
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? contactsDataList);
  const [filter, setFilter] = useState('');
  
  useEffect(()=>{
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isInContacts = contacts.some(
      ({ userName }) => userName.toLowerCase() === newContact.userName.toLowerCase());

    if (isInContacts) {
      Notiflix.Notify.info(`${newContact.userName} is already in contacts`);
      return;
    }
    setContacts(contacts => [...contacts, newContact]);
  };

  const removeContactById = contactId => {
    setContacts(contacts => contacts.filter(contact => contact.id !== contactId)
    );
  };

  const filteringContacts = filteredList => {
    setFilter([...filteredList])
  };

    return (
      <>
        <Text>Phonebook</Text>
        <ContactForm state={contacts} addContact={addContact} />
        <Text>Contacts</Text>
        <Filter
          contactData={contacts}
          storeFiltered={filteringContacts}
        />
        <ContactList
          contacts={filter ? filter : contacts}
          removeById={removeContactById}
        />
      </>
    );
  
}
