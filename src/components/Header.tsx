import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark(!dark);
    console.log(dark);
  }

  return (
    <div className={styles.header}>
      <button onClick={() => toggleTheme()}>x</button>
      <h1>Horários de ônibus </h1>
    </div>
  );
};

export default Header;
