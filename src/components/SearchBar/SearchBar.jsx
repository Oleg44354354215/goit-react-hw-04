import { useState } from "react";
import s from "./SearchBar.module.css";
import toast from "react-hot-toast";
const SearchBar = ({ getTypeDate }) => {
  const [cur, setCur] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    if (cur.trim() === "") {
      toast.error("Будь ласка, введіть текст для пошуку!");
      return;
    }
    getTypeDate(cur);
  };
  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleForm}>
        <input
          className={s.input}
          value={cur}
          onChange={(e) => setCur(e.target.value)}
          type="text"
          placeholder="Search images and photos"
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
