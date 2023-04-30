import { useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { deleteContact } from "../../redux/contacts/operations";
import Modal from "../modal/modal";
import phone from "../../images/telephone.png";
import css from "./Contact.module.css";

export const Contact = ({ id, name, number }) => {
  const [showModal, setShowModal] = useState(false);

  function togleModal() {
    return setShowModal(!showModal);
  }

  const dispatch = useDispatch();
  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(id));
      toast.error(`Contact -${name}- is successfully DELETED`);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{name} </p>
      <span>- </span> <img className={css.phone} src={phone} alt="phone" />
      {number}
      <div className={css.container}>
        <button type="button" className={css.buttonUpd} onClick={togleModal}>
          Update Contact
        </button>
        <button type="button" className={css.button} onClick={handleDelete}>
          Delete
        </button>
      </div>
      {showModal && (
        <Modal onClose={togleModal} id={id} number={number} name={name} />
      )}
    </div>
  );
};
