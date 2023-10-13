import React, { useState} from 'react';
import { nanoid } from 'nanoid';

import {
  ContactFormCss,
  Description,
  InputFormCss,
  ButtonCss,
} from './contactForm.styled';

export const ContactForm =({addContact})=>{
 const [formData, setFormData]= useState({
  userName:'',
  number:'',
 });
  
  const inputNameId = nanoid();
  const inputTelId = nanoid();

  const handleInputContacts = e => {
    const { name, value } = e.target;
    let newFormData = formData;
    newFormData[name] = value;
    setFormData(formData => newFormData);
  };

 const handleAddContacts = ev => {
    ev.preventDefault();
    const newContact = {
      id: nanoid(),
      userName: formData.userName,
      number: formData.number,
    };
    addContact(newContact);
    reset();
  };

  const reset = () => {
    setFormData({
      userName: '',
      number: '',
    });
  };

    return (
      <ContactFormCss onSubmit={handleAddContacts}>
        <Description htmlFor={inputNameId}>
          Name
          <InputFormCss
            onChange={handleInputContacts}
            type="text"
            name="userName"
            //value={formData.userName}
            id={inputNameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Description>
        <Description htmlFor={inputTelId}>
          Number
          <InputFormCss
            onChange={handleInputContacts}
            type="tel"
            name="number"
           // value={formData.number}
            id={inputTelId}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Description>
        <ButtonCss type="submit">Add contacts</ButtonCss>
      </ContactFormCss>
    );
  
}
