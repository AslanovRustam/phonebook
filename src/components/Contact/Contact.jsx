import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import phone from "../../images/telephone.png";
import css from "./Contact.module.css";

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{name} </p>
      <span>- </span> <img className={css.phone} src={phone} alt="phone" />
      {number}
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
