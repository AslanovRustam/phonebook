import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { useSelector } from "react-redux";
import { selectAllContacts } from "../../redux/contacts/selectors";
import { toast } from "react-hot-toast";
import css from "./ContactEditor.module.css";

export const ContactEditor = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (name === "" || number === "") {
      toast.error("name or number cannot be empty. Enter some text!");
      return;
    }
    if (
      contacts.some(
        (value) => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      toast.error(`Name -${name}- is alredy in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name: <input name="name" className={css.input} />
      </label>
      <label className={css.label}>
        Number: <input name="number" type="tel" className={css.input} />
      </label>

      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};
