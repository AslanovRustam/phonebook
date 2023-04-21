import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { selectAllContacts } from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";

export const ContactList = ({ filter }) => {
  const contacts = useSelector(selectAllContacts);

  const contactsWithFilter = () => {
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  return (
    <ul className={css.list}>
      {contactsWithFilter().map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};
