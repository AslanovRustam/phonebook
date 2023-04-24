// import { useState } from 'react';
import css from "./Filter.module.css";

export const Filter = ({ filter, onChangeInput }) => {
  return (
    <>
      <label>
        <hr />
        Find contacts - &nbsp;
        <input
          className={css.input}
          onChange={onChangeInput}
          value={filter}
          type="text"
          name="filter"
        />
      </label>
      <br />
      <br />
    </>
  );
};
