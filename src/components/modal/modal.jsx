import s from "./modal.module.css";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectAllContacts } from "../../redux/contacts/selectors";
import { updateContact } from "../../redux/contacts/operations";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, id, name, number }) {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.classList.add(s.overvlow);
    return () => {
      document.body.classList.remove(s.overvlow);
    };
  }, []);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

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
    dispatch(updateContact({ id, name, number }));
    form.reset();
    toast.success(`Contact -${name}- is successfully updated`);
    onClose();
  };
  return createPortal(
    <div className={s.modalBackDrop} onClick={handleBackdropClick}>
      <div className={s.container}>
        <h2 className={s.title}>Update Contact</h2>
        <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label}>
            Name: <input name="name" className={s.input} placeholder={name} />
          </label>
          <label className={s.label}>
            Number:{" "}
            <input
              name="number"
              type="tel"
              className={s.input}
              placeholder={number}
            />
          </label>

          <button type="submit" className={s.btn}>
            Confirm
          </button>
        </form>
      </div>
    </div>,
    modalRoot
  );
}
