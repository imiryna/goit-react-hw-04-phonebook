import React from 'react';
import { ContactListCss, Items, ButtonCss } from './contactList.styled';

export const ContactList =({removeById, contacts})=>{
  const handleOnClick = e => {
    removeById(e.target.id);
  };

    return (
      <div>
        <ContactListCss>
          {contacts.map(item => (
            <Items key={item.id}>
              {item.userName}: {item.number}
              <ButtonCss
                id={item.id}
                type="button"
                onClick={handleOnClick}
              >
                Delete
              </ButtonCss>
            </Items>
          ))}
        </ContactListCss>
      </div>
    );
}
