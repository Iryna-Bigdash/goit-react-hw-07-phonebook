import { useDispatch } from "react-redux";
import { addContact } from "redux/operations";
import { nanoid } from 'nanoid';
import { Form, Label, InputForm, BtnForm } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value; // Access the value of name input
    const number = form.elements.number.value; // Access the value of number input
    dispatch(addContact(name, number));
    form.reset();
  };

  const nameinputId = () => nanoid();
  const numberinputId = () => nanoid();

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameinputId()}>
        Name
        <InputForm
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameinputId()}
        />
      </Label>
      <Label htmlFor={numberinputId()}>
        Number
        <InputForm
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberinputId()}
        />
      </Label>
      <BtnForm type="submit">Add contact</BtnForm>
    </Form>
  )
};

export default ContactForm;
