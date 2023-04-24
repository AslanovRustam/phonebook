import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactList } from "../components/ContactList/ContactList";
import { ContactEditor } from "../components/ContactEditor/ContactEditor";
import { Filter } from "../components/Filter/Filter";
import { fetchContacts } from "../redux/contacts/operations";
import { selectLoading } from "../redux/contacts/selectors";
import s from "./s.module.css";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const [filter, setFilter] = useState("");

  const onChangeInput = (evt) => {
    setFilter(evt.currentTarget.value);
  };

  return (
    <section className={s.section}>
      <title>Your Contacts</title>
      <ContactEditor />
      <Filter filter={filter} onChangeInput={onChangeInput} />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList filter={filter} />
    </section>
  );
}
