
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Container, Title } from './App.styled';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  // const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
<>
  <Container>
    <Title>Phonebook</Title>
    <ContactForm />    
    <Title>Contacts</Title>
    <Filter />
    {isLoading && !error && <b>Request in progress...</b>}
    {/* <p>{contacts.length > 0 && JSON.stringify(contacts, null, 2)}</p> */}
    <ContactList />
  </Container>
</>
  );
};

export default App;

// import { useState } from 'react';
// import ContactForm from '../ContactForm/ContactForm';
// import ContactList from '../ContactList/ContactList';
// import { nanoid } from 'nanoid';
// import Filter from '../Filter/Filter';
// import initialContacts from '../data/contacts.json';
// import { useLocalStorage } from '../hooks/useLocalStorage';
// import { Container, Title } from './App.styled';

// export default function App() {
//   const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
//   const [filterContacts, setFilterContacts] = useState('');

//   const changeFilter = e => {
//     setFilterContacts(e.currentTarget.value);
//   };

//   const formSubmitHandler = ({ name, number }) => {
//     const contact = {
//       id: nanoid(),
//       name: name,
//       number: number,
//     };
//     const contactNames = contacts.map(contact => contact.name);
//     contactNames.includes(name)
//       ? alert(`${name} is already in contacts`)
//       : setContacts(prevState => [contact, ...prevState]);
//   };

//   const getVisibleContacts = () => {
//     const normalizedFilter = filterContacts.toLowerCase().trim();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   const deleteContact = contactId => {
//     setContacts(prevState =>
//       prevState.filter(contact => contact.id !== contactId)
//     );
//   };

//   const visibleContacts = getVisibleContacts();

//   return (
//     <>
//       <Container>
//         <Title>Phonebook</Title>
//         <ContactForm onSubmit={formSubmitHandler} />
//         <Title>Contacts</Title>
//         <Filter value={filterContacts} onChange={changeFilter} />

//         <ContactList
//           contacts={visibleContacts}
//           onDeletContact={deleteContact}
//         />
//       </Container>
//     </>
//   );
// }
