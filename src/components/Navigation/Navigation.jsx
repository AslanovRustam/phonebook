import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.link)}
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => (isActive ? css.active : css.link)}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
