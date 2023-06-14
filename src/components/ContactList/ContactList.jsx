import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, removeContact } from 'redux/contactsSlice';
import { ContactsItem, ContactsList } from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = (id) => {
    dispatch(removeContact(id));
  };

  return (
    <ContactsList>
      {contacts.map(contact => (
        <ContactsItem key={contact.id}>
          <span>{`${contact.name}: ${contact.number}`}</span>
          <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
        </ContactsItem>
      ))}
    </ContactsList>
  );
}


