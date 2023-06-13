import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/operations';
import { ContactsList, ContactsItem, ContactsContainer, PhoneContainer, DeletContactBtn } from './ContactList.styled';

const ContactList = () => {
const contacts = useSelector((state) => state.contacts.contacts);
const dispatch = useDispatch();

const handleDeleteContact = (id) => {
dispatch(removeContact(id));
};

return (
<ContactsList>
  console.log(contacts)
{contacts.map(({ id, name, number }) => (
<ContactsItem key={id}>
<ContactsContainer>{name}</ContactsContainer>
<PhoneContainer>{number}</PhoneContainer>
<DeletContactBtn onClick={() => handleDeleteContact(id)}>Delete</DeletContactBtn>
</ContactsItem>
))}
</ContactsList>
);
};

export default ContactList;
