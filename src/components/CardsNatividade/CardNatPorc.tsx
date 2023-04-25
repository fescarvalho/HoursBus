import styles from "./CardNat.module.css";

import { FaArrowDown } from "react-icons/fa";
import { CardProps } from "../../interface";
import { useState } from "react";
import { NatividadePorciuncula } from "./../../hours-mock-natividade.json";

const CardNatPorc = ({ titleTo, titleFrom }: CardProps) => {
  const [show, setShow] = useState(false);

  const showClass = () => {
    setShow(!show);
  };

  return (
    <>
      <div className={`${show === true ? styles.cardMainActive : styles.cardMain}`}>
        <div
          className={`${show === true ? styles.cardTitleActive : styles.cardTitle}`}
          onClick={showClass}
        >
          <h2>{titleFrom}</h2>
          <FaArrowDown />
          <h2>{titleTo}</h2>
        </div>
        <div className={`${show == true ? styles.cardContent : styles.cardContentFalse}`}>
          <ul className={styles.list}>
            <h2>Segunda a Sexta</h2>
            {NatividadePorciuncula.horas.map((item) => (
              <li className={`${item.fds ? styles.active : ""}`} key={item.hr}>
                {item.hr}
              </li>
            ))}
          </ul>
          <ul className={styles.list}>
            <h2>Domingos e Feriados</h2>
            {NatividadePorciuncula.DomingoseFeriados.map((item) => (
              <li className={`${item.fds ? styles.active : ""}`} key={item.hr}>
                {item.hr}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CardNatPorc;
